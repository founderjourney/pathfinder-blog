import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Markdown from 'react-markdown'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center text-[#2D9CDB] hover:underline mb-8"
      >
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver al blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <span className="inline-block px-3 py-1 text-xs font-medium text-[#2D9CDB] bg-[#2D9CDB]/10 rounded-full mb-4">
          {post.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-[#333333]">{post.author}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{formattedDate}</span>
            <span className="text-[#27AE60]">{post.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-8 rounded-xl overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose">
        <Markdown>{post.content}</Markdown>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gradient-to-r from-[#2D9CDB]/10 to-[#27AE60]/10 rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#2D9CDB] rounded-full flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <div>
              <p className="font-semibold text-[#333333]">{post.author}</p>
              <p className="text-sm text-gray-600">
                SEO expert & digital nomad democratizando tecnología web.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </article>
  )
}
