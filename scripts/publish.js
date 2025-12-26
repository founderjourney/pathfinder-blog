#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DRAFTS_DIR = path.join(process.cwd(), 'content/drafts');
const PUBLISHED_DIR = path.join(process.cwd(), 'content/drafts/published');
const POSTS_DIR = path.join(process.cwd(), 'content/posts');

// Category detection keywords
const categoryKeywords = {
  "Architecture": ["multi-tenant", "saas", "postgresql", "rls", "database", "arquitectura", "system design", "escalabilidad", "microservices"],
  "Building in Public": ["journey", "building", "startup", "founder", "learning", "proceso", "experiencia", "lecciones"],
  "Technical": ["code", "tutorial", "how-to", "implementacion", "setup", "guia", "paso a paso"],
  "Case Study": ["caso de estudio", "case study", "proyecto", "cliente", "resultados"]
};

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80);
}

function detectCategory(content) {
  const lowerContent = content.toLowerCase();
  let bestMatch = { category: "Building in Public", score: 0 };

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    let score = 0;
    for (const keyword of keywords) {
      if (lowerContent.includes(keyword.toLowerCase())) {
        score++;
      }
    }
    if (score > bestMatch.score) {
      bestMatch = { category, score };
    }
  }

  return bestMatch.category;
}

function extractTitle(content) {
  // Normalize content - remove leading spaces from each line
  const normalizedContent = content.split('\n').map(line => line.trimStart()).join('\n');
  const match = normalizedContent.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Sin titulo';
}

function extractExcerpt(content) {
  // Remove the title line
  const withoutTitle = content.replace(/^#\s+.+$/m, '').trim();

  // Find first paragraph (non-empty line that's not a heading)
  const lines = withoutTitle.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('---') && !trimmed.startsWith('**Por')) {
      // Clean up markdown formatting for excerpt
      return trimmed
        .replace(/\*\*/g, '')
        .replace(/\*/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .substring(0, 200);
    }
  }
  return '';
}

function removeLinkedInSection(content) {
  // Patterns that indicate start of LinkedIn section
  const patterns = [
    /\n---\s*\n+##\s*POST\s*LINKEDIN[\s\S]*/i,
    /\n##\s*POST\s*LINKEDIN[\s\S]*/i,
    /\n##\s*Post\s*LinkedIn[\s\S]*/i,
    /\n---\s*\n+```markdown\s*\n[\s\S]*#\w+\s+#\w+[\s\S]*/i,
    /\n---\s*\n+Notas de Publicacion[\s\S]*/i,
  ];

  let cleaned = content;
  for (const pattern of patterns) {
    cleaned = cleaned.replace(pattern, '');
  }

  return cleaned.trim();
}

function generateFrontmatter(title, excerpt, category) {
  const today = new Date().toISOString().split('T')[0];
  return `---
title: "${title.replace(/"/g, '\\"')}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
date: "${today}"
author: "Mauro | Pathfinders Labs"
category: "${category}"
featuredImage: ""
---`;
}

function processContent(rawContent) {
  // Remove any existing frontmatter
  let content = rawContent.replace(/^---[\s\S]*?---\s*\n/, '');

  // Remove the "ARTICULO BLOG (Markdown)" header if present
  content = content.replace(/^\s*ARTICULO BLOG \(Markdown\)\s*\n*/i, '');
  content = content.replace(/^\s*ARTÍCULO BLOG \(Markdown\)\s*\n*/i, '');

  // Remove LinkedIn section
  content = removeLinkedInSection(content);

  // Normalize indentation - remove leading spaces from each line (except code blocks)
  const lines = content.split('\n');
  let inCodeBlock = false;
  const normalizedLines = lines.map(line => {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
    }
    // Don't trim lines inside code blocks
    if (inCodeBlock) {
      return line;
    }
    return line.trimStart();
  });

  return normalizedLines.join('\n').trim();
}

function publishDraft(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);

  const rawContent = fs.readFileSync(filePath, 'utf8');
  const content = processContent(rawContent);

  const title = extractTitle(content);
  const excerpt = extractExcerpt(content);
  const category = detectCategory(content);
  const slug = slugify(title);

  console.log(`  Title: ${title}`);
  console.log(`  Category: ${category}`);
  console.log(`  Slug: ${slug}`);

  const frontmatter = generateFrontmatter(title, excerpt, category);
  const finalContent = `${frontmatter}\n\n${content}`;

  // Write to posts directory
  const outputPath = path.join(POSTS_DIR, `${slug}.mdx`);
  fs.writeFileSync(outputPath, finalContent);
  console.log(`  Created: ${outputPath}`);

  // Move draft to published folder
  const publishedPath = path.join(PUBLISHED_DIR, `${Date.now()}-${path.basename(filePath)}`);
  fs.renameSync(filePath, publishedPath);
  console.log(`  Archived: ${publishedPath}`);

  return { title, slug, outputPath };
}

function gitCommitAndPush(publishedPosts) {
  if (publishedPosts.length === 0) return;

  console.log('\n--- Git Operations ---');

  try {
    // Add new posts
    execSync('git add content/posts/', { stdio: 'inherit' });
    execSync('git add content/drafts/', { stdio: 'inherit' });

    // Create commit message
    const titles = publishedPosts.map(p => p.title).join(', ');
    const message = publishedPosts.length === 1
      ? `post: ${publishedPosts[0].title}`
      : `posts: ${publishedPosts.length} new articles`;

    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    console.log('Committed changes');

    // Push to remote
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('Pushed to GitHub');
    console.log('\nGitHub Action will deploy to VPS automatically.');

  } catch (error) {
    console.error('Git operation failed:', error.message);
    console.log('You may need to commit and push manually.');
  }
}

function main() {
  console.log('=== Founder Journey Blog Publisher ===\n');

  // Check if drafts directory exists
  if (!fs.existsSync(DRAFTS_DIR)) {
    console.log('Creating drafts directory...');
    fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  }

  // Find all draft files
  const files = fs.readdirSync(DRAFTS_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'))
    .map(f => path.join(DRAFTS_DIR, f));

  if (files.length === 0) {
    console.log('No drafts found in content/drafts/');
    console.log('\nTo publish an article:');
    console.log('1. Save your markdown file to content/drafts/');
    console.log('2. Run: npm run publish');
    return;
  }

  console.log(`Found ${files.length} draft(s) to publish\n`);

  const publishedPosts = [];

  for (const file of files) {
    try {
      const result = publishDraft(file);
      publishedPosts.push(result);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  if (publishedPosts.length > 0) {
    console.log(`\n=== Published ${publishedPosts.length} post(s) ===`);
    gitCommitAndPush(publishedPosts);
  }
}

main();
