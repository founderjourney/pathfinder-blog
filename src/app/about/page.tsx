'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Colaboracion sobre competencia',
      description: 'El exito de otros no disminuye el mio. Juntos llegamos mas lejos.',
      color: '#2D9CDB'
    },
    {
      icon: '🔓',
      title: 'Tecnologia como derecho',
      description: 'Acceso a herramientas profesionales no deberia depender del presupuesto.',
      color: '#27AE60'
    },
    {
      icon: '🔍',
      title: 'Transparencia radical',
      description: 'Comparto el proceso completo, no solo los resultados pulidos.',
      color: '#F2C94C'
    },
    {
      icon: '📈',
      title: 'Impacto sobre vanidad',
      description: 'Metricas que importan: vidas mejoradas, no solo numeros bonitos.',
      color: '#2D9CDB'
    }
  ]

  const stats = [
    { label: 'Anos de Experiencia', value: '8+', icon: '💼' },
    { label: 'Paises Visitados', value: '25+', icon: '🌍' },
    { label: 'Proyectos Entregados', value: '50+', icon: '🚀' },
    { label: 'Clientes Satisfechos', value: '30+', icon: '⭐' }
  ]

  const timeline = [
    {
      year: '2016',
      title: 'Inicio en Desarrollo Web',
      description: 'Primeros pasos construyendo sitios web y aprendiendo programacion.',
      icon: '💻'
    },
    {
      year: '2019',
      title: 'Especializacion en SEO',
      description: 'Descubri mi pasion por el posicionamiento organico y growth.',
      icon: '📈'
    },
    {
      year: '2021',
      title: 'Vida Nomada',
      description: 'Empece a trabajar remotamente mientras viajaba por el mundo.',
      icon: '✈️'
    },
    {
      year: '2023',
      title: 'Pathfinders Labs',
      description: 'Funde mi consultora enfocada en democratizar tecnologia web.',
      icon: '🎯'
    },
    {
      year: '2024',
      title: 'Building in Public',
      description: 'Lanzo Founder Journey para documentar todo publicamente.',
      icon: '🔨'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:text-white">
      {/* Hero Section */}
      <motion.header
        className="text-center mb-20 relative py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background blobs - matching home page sizes */}
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-[#2D9CDB]/10 dark:bg-[#2D9CDB]/5 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-10 right-1/4 w-96 h-96 bg-[#27AE60]/10 dark:bg-[#27AE60]/5 rounded-full blur-3xl -z-10"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-48 h-48 bg-[#F2C94C]/10 dark:bg-[#F2C94C]/5 rounded-full blur-2xl -z-10"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

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
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Digital Nomad</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-[#333333] dark:text-white">Sobre </span>
          <span className="bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Mi
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          La historia detras de Founder Journey y mi mision de{' '}
          <span className="text-[#2D9CDB] font-medium">democratizar la tecnologia web</span>
        </motion.p>
      </motion.header>

      {/* Stats Section */}
      <motion.section
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#27AE60] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-[#2D9CDB] to-[#27AE60] bg-clip-text text-transparent">
                {stat.value}
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Profile Card with Glassmorphism */}
      <motion.section
        className="relative mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] rounded-3xl blur-sm opacity-50" />
        <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl border border-white/50 dark:border-gray-700/50">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB] to-[#27AE60] rounded-full blur-lg opacity-50" />
            <div className="relative w-40 h-40 bg-gradient-to-br from-[#2D9CDB] to-[#27AE60] rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              M
            </div>
          </motion.div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mb-4">
              Mauro | <span className="text-[#2D9CDB]">Pathfinders Labs</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              SEO expert & digital nomad democratizando tecnologia web.
              Ayudo a emprendedores a crear presencia digital profesional
              sin barreras economicas ni tecnicas. Construyo productos mientras
              viajo por el mundo, documentando todo publicamente.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-2 bg-[#2D9CDB]/10 text-[#2D9CDB] rounded-full text-sm font-medium">
                SEO Expert
              </span>
              <span className="px-4 py-2 bg-[#27AE60]/10 text-[#27AE60] rounded-full text-sm font-medium">
                Digital Nomad
              </span>
              <span className="px-4 py-2 bg-[#F2C94C]/10 text-[#F2C94C] rounded-full text-sm font-medium">
                Builder
              </span>
              <span className="px-4 py-2 bg-[#333333]/10 dark:bg-white/10 text-[#333333] dark:text-white rounded-full text-sm font-medium">
                Mentor
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D9CDB]/10 text-[#2D9CDB] rounded-full text-sm font-medium mb-4">
            Mi Proposito
          </span>
          <h2 className="text-3xl font-bold text-[#333333] dark:text-white">
            Lo Que Me <span className="text-[#2D9CDB]">Impulsa</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Mi Mision',
              content: 'Democratizar la tecnologia web, un emprendedor a la vez. Creo firmemente que la tecnologia debe empoderar, no excluir.',
              icon: '🚀',
              color: '#2D9CDB'
            },
            {
              title: 'Building in Public',
              content: 'Documento todo publicamente: los exitos, los fracasos, las lecciones. La transparencia genera confianza.',
              icon: '🔨',
              color: '#27AE60'
            },
            {
              title: 'Vida Nomada',
              content: 'Trabajo desde cualquier lugar del mundo, construyendo negocios globales desde cafes locales.',
              icon: '🌍',
              color: '#F2C94C'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#27AE60] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-all h-full">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: `${item.color}15` }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <span className="text-4xl">{item.icon}</span>
                </motion.div>
                <h3 className="font-bold text-[#333333] dark:text-white text-xl mb-3 group-hover:text-[#2D9CDB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#27AE60]/10 text-[#27AE60] rounded-full text-sm font-medium mb-4">
            Mi Trayectoria
          </span>
          <h2 className="text-3xl font-bold text-[#333333] dark:text-white">
            El <span className="text-[#27AE60]">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2D9CDB] via-[#27AE60] to-[#F2C94C]" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#2D9CDB] rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#2D9CDB]/30 transition-all hover:shadow-xl hover:shadow-[#2D9CDB]/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="px-3 py-1 bg-[#2D9CDB]/10 text-[#2D9CDB] rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#333333] dark:text-white text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Grid */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#F2C94C]/10 text-[#F2C94C] rounded-full text-sm font-medium mb-4">
            Principios
          </span>
          <h2 className="text-3xl font-bold text-[#333333] dark:text-white">
            Mis <span className="text-[#F2C94C]">Valores</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-all duration-300">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ backgroundColor: `${value.color}15` }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <span className="text-3xl">{value.icon}</span>
                </motion.div>
                <h3 className="font-bold text-[#333333] dark:text-white text-lg mb-2 group-hover:text-[#2D9CDB] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB] via-[#2D9CDB]/90 to-[#27AE60]" />

        {/* Animated particles */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative px-8 py-16 md:py-20 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Conectemos?
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Me encanta conocer a otros emprendedores y compartir ideas sobre tecnologia, viajes y building in public.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://linkedin.com/in/founder-journey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D9CDB] font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </motion.a>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#2D9CDB] transition-all duration-300"
              >
                Contacto
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
