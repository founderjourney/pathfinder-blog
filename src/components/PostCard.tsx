'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { PostMeta } from '@/lib/posts'

interface PostCardProps {
  post: PostMeta
  index?: number
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#2D9CDB]/10 transition-all duration-500"
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
      <div className="absolute inset-[1px] rounded-2xl bg-white/90 backdrop-blur-sm -z-10" />

      {/* Image with overlay */}
      {post.featuredImage ? (
        <div className="relative aspect-video bg-gradient-to-br from-[#2D9CDB]/20 to-[#27AE60]/20 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ) : (
        <div className="relative aspect-video bg-gradient-to-br from-[#2D9CDB]/10 via-[#F8F9FA] to-[#27AE60]/10 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-6xl opacity-20"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✍️
            </motion.div>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Category Badge with glow */}
        <motion.span
          className="inline-block px-4 py-1.5 text-xs font-semibold text-[#2D9CDB] bg-[#2D9CDB]/10 rounded-full mb-4 border border-[#2D9CDB]/20"
          whileHover={{ scale: 1.05 }}
        >
          {post.category}
        </motion.span>

        {/* Title with gradient on hover */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-[#333333] group-hover:bg-gradient-to-r group-hover:from-[#2D9CDB] group-hover:to-[#27AE60] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-3">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta with icons */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#27AE60] flex items-center justify-center text-white text-[10px] font-bold">
              M
            </div>
            <span className="font-medium">{post.author.split('|')[0].trim()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formattedDate}
            </span>
            <span className="flex items-center gap-1 text-[#27AE60] font-medium">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readingTime}
            </span>
          </div>
        </div>

        {/* Read more arrow that appears on hover */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <div className="w-10 h-10 rounded-full bg-[#2D9CDB] flex items-center justify-center text-white shadow-lg shadow-[#2D9CDB]/30">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}
