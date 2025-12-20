import { getAllPosts, getCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import AnimatedHero from '@/components/AnimatedHero'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  const posts = getAllPosts()
  const categories = getCategories()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 dark:text-white">
      <AnimatedHero />

      {categories.length > 0 && (
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <span
                key={category}
                className="px-5 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-[#333333] dark:text-gray-200 hover:border-[#2D9CDB] hover:text-[#2D9CDB] hover:shadow-lg hover:shadow-[#2D9CDB]/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {category}
              </span>
            ))}
          </div>
        </AnimatedSection>
      )}

      <section id="posts" className="scroll-mt-20">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="text-center py-20">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB]/20 to-[#27AE60]/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="text-8xl mb-6 animate-float">&#x270D;&#xFE0F;</div>
                  <h2 className="text-3xl font-bold text-[#333333] dark:text-white mb-4">
                    Proximamente
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-md mx-auto">
                    Estoy preparando contenido increible sobre SEO, emprendimiento y vida nomada.
                  </p>
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-[#27AE60]/10 rounded-full">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27AE60] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27AE60]"></span>
                    </span>
                    <span className="text-[#27AE60] font-semibold">Building in public...</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
      </section>

      <AnimatedSection delay={0.4}>
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB] via-[#2D9CDB]/90 to-[#27AE60]" />
            <div className="relative px-8 py-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quieres saber mas sobre mi journey?
              </h2>
              <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
                Descubre como construyo productos mientras viajo por el mundo.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D9CDB] font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                Conoce mi historia
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
