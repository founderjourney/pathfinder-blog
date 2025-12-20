import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  featuredImage?: string
  readingTime: string
  content: string
}

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  featuredImage?: string
  readingTime: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title || 'Sin título',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Mauro | Pathfinders Labs',
        category: data.category || 'General',
        featuredImage: data.featuredImage,
        readingTime: stats.text,
      }
    })

  return allPosts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || 'Sin título',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Mauro | Pathfinders Labs',
      category: data.category || 'General',
      featuredImage: data.featuredImage,
      readingTime: stats.text,
      content,
    }
  } catch {
    return null
  }
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs.readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}

export function getCategories(): string[] {
  const posts = getAllPosts()
  const categorySet = new Set(posts.map((post) => post.category))
  const categories = Array.from(categorySet)
  return categories.sort()
}
