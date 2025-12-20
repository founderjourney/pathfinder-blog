'use client'

import { motion } from 'framer-motion'

export default function AnimatedHero() {
  return (
    <section className="relative text-center mb-20 py-16 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/5 via-transparent to-[#27AE60]/5" />
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#2D9CDB]/20 dark:bg-[#2D9CDB]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#27AE60]/15 dark:bg-[#27AE60]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-48 h-48 bg-[#F2C94C]/10 dark:bg-[#F2C94C]/5 rounded-full blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27AE60] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27AE60]"></span>
          </span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Building in public</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-[#333333] dark:text-white">Founder </span>
          <span className="relative">
            <span className="bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Journey
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Democratizando tecnologia web,{' '}
          <span className="text-[#2D9CDB] font-medium">un emprendedor a la vez</span>.
          <br className="hidden md:block" />
          SEO, desarrollo web y la vida de un nomada digital.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.a
            href="#posts"
            className="group relative px-8 py-4 bg-[#2D9CDB] text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-[#2D9CDB]/25"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explorar articulos</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#27AE60]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="/about"
            className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-[#333333] dark:text-white font-semibold rounded-xl hover:border-[#2D9CDB] hover:text-[#2D9CDB] transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Conoce mi historia
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 bg-[#2D9CDB] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
