#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DRAFTS_DIR = path.join(process.cwd(), 'content/drafts');
const POSTS_DIR = path.join(process.cwd(), 'content/posts');

function extractTitle(content) {
  const normalizedContent = content.split('\n').map(line => line.trimStart()).join('\n');
  const match = normalizedContent.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Sin título';
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  return (bytes / 1024).toFixed(1) + ' KB';
}

function formatDate(mtime) {
  const now = new Date();
  const diff = now - mtime;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return 'hoy';
  if (days === 1) return 'ayer';
  if (days < 7) return `hace ${days} días`;
  return mtime.toLocaleDateString('es-ES');
}

function main() {
  console.log('\n📋 Estado del Blog - Founder Journey\n');

  // Check drafts
  console.log('━━━ DRAFTS PENDIENTES ━━━');

  if (!fs.existsSync(DRAFTS_DIR)) {
    console.log('  (directorio no existe)\n');
  } else {
    const drafts = fs.readdirSync(DRAFTS_DIR)
      .filter(f => f.endsWith('.md') && !f.startsWith('.'));

    if (drafts.length === 0) {
      console.log('  No hay drafts pendientes\n');
      console.log('  💡 Crear uno nuevo: npm run new\n');
    } else {
      drafts.forEach((filename, i) => {
        const filepath = path.join(DRAFTS_DIR, filename);
        const stat = fs.statSync(filepath);
        const content = fs.readFileSync(filepath, 'utf8');
        const title = extractTitle(content);
        const lines = content.split('\n').length;

        console.log(`\n  ${i + 1}. ${title}`);
        console.log(`     📄 ${filename}`);
        console.log(`     📏 ${lines} líneas | ${formatFileSize(stat.size)} | Modificado: ${formatDate(stat.mtime)}`);
      });
      console.log(`\n  ✨ ${drafts.length} draft(s) listo(s) para publicar`);
      console.log('  📤 Publicar: npm run publish\n');
    }
  }

  // Count published posts
  console.log('━━━ POSTS PUBLICADOS ━━━');

  if (fs.existsSync(POSTS_DIR)) {
    const posts = fs.readdirSync(POSTS_DIR)
      .filter(f => f.endsWith('.mdx'));

    console.log(`  ${posts.length} artículos publicados\n`);

    // Show latest 3
    if (posts.length > 0) {
      console.log('  Últimos publicados:');
      const sorted = posts
        .map(f => {
          const filepath = path.join(POSTS_DIR, f);
          const stat = fs.statSync(filepath);
          const content = fs.readFileSync(filepath, 'utf8');
          const title = extractTitle(content);
          return { filename: f, title, mtime: stat.mtime };
        })
        .sort((a, b) => b.mtime - a.mtime)
        .slice(0, 3);

      sorted.forEach(post => {
        console.log(`  • ${post.title}`);
      });
      console.log('');
    }
  } else {
    console.log('  (directorio no existe)\n');
  }

  // Quick commands
  console.log('━━━ COMANDOS RÁPIDOS ━━━');
  console.log('  npm run new        → Crear nuevo draft');
  console.log('  npm run drafts     → Ver este resumen');
  console.log('  npm run publish    → Publicar drafts');
  console.log('  npm run dev        → Preview local');
  console.log('');
}

main();
