'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactoPage() {
  const [showPGP, setShowPGP] = useState(false)
  const [copied, setCopied] = useState(false)

  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: User-ID:    MindsetOutliers <globalpathfindersllc@gmail.com>
Comment: Valid from:    7/7/24 12:33 PM
Comment: Valid until:    7/7/27 7:00 AM
Comment: Type:    4,096-bit RSA
Comment: Usage:    Signing, Encryption, Certifying User-IDs
Comment: Fingerprint:    7C5E8B93C4D25D8587CAE47939138736753C8BFC

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
hZJeD9EG7rf8gFXztXiyXHg/jxTMg5gsMxQd
=17i6
-----END PGP PUBLIC KEY BLOCK-----`

  const fingerprint = '7C5E 8B93 C4D2 5D85 87CA E479 3913 8736 753C 8BFC'

  const copyFingerprint = () => {
    navigator.clipboard.writeText(fingerprint.replace(/\s/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactMethods = [
    {
      name: 'Email',
      value: 'globalpathfinderllc@gmail.com',
      href: 'mailto:globalpathfinderllc@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Para consultas profesionales y colaboraciones',
      color: '#2D9CDB'
    },
    {
      name: 'LinkedIn',
      value: '@founder-journey',
      href: 'https://linkedin.com/in/founder-journey',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: 'Conecta conmigo y sigue mi journey',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      value: '@founderjourney',
      href: 'https://github.com/founderjourney',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      description: 'Revisa mi codigo y proyectos open source',
      color: '#333333'
    },
    {
      name: 'Website',
      value: 'internationalpathfinders.com',
      href: 'https://internationalpathfinders.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      description: 'Mi sitio web principal',
      color: '#27AE60'
    }
  ]

  const faqs = [
    {
      question: 'Ofreces servicios de consultoria SEO?',
      answer: 'Si, trabajo con un numero limitado de clientes cada mes. Contactame por email para discutir tu proyecto.',
      icon: '🎯'
    },
    {
      question: 'Puedo colaborar en tu blog?',
      answer: 'Siempre estoy abierto a guest posts de calidad! Enviame tu propuesta por email.',
      icon: '✍️'
    },
    {
      question: 'Donde estas actualmente?',
      answer: 'Como nomada digital, mi ubicacion cambia frecuentemente. Sigueme en LinkedIn para ver desde donde estoy trabajando.',
      icon: '🌍'
    },
    {
      question: 'Como puedo comunicarme de forma segura?',
      answer: 'Puedes usar mi llave PGP para cifrar emails sensibles. La llave esta disponible abajo.',
      icon: '🔐'
    }
  ]

  const responseStats = [
    { label: 'Tiempo de Respuesta', value: '<24h', icon: '⚡' },
    { label: 'Zona Horaria', value: 'Flexible', icon: '🌐' },
    { label: 'Idiomas', value: 'ES/EN/PT', icon: '💬' },
    { label: 'Disponibilidad', value: 'Abierto', icon: '✅' }
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
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Disponible para proyectos</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Hablemos
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Tienes un proyecto en mente? Quieres colaborar?{' '}
          <span className="text-[#2D9CDB] font-medium">Conectemos!</span>
        </motion.p>
      </motion.header>

      {/* Response Stats */}
      <motion.section
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {responseStats.map((stat, index) => (
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
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2D9CDB] to-[#27AE60] bg-clip-text text-transparent">
                {stat.value}
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Methods Grid */}
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
            Canales de Contacto
          </span>
          <h2 className="text-3xl font-bold text-[#333333] dark:text-white">
            Donde <span className="text-[#2D9CDB]">Encontrarme</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-all duration-300">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg"
                  style={{ backgroundColor: `${method.color}15`, color: method.color }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="font-bold text-[#333333] dark:text-white text-xl mb-2 group-hover:text-[#2D9CDB] transition-colors">
                  {method.name}
                </h3>
                <p className="text-[#2D9CDB] font-medium mb-2">
                  {method.value}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {method.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* PGP Key Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative p-8 md:p-12 bg-[#333333] rounded-3xl overflow-hidden">
          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-[#2D9CDB]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 h-48 bg-[#27AE60]/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-16 h-16 bg-[#27AE60]/20 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <svg className="w-8 h-8 text-[#27AE60]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white">Comunicacion Segura</h2>
                <p className="text-gray-400">Usa mi llave PGP para cifrar emails sensibles</p>
              </div>
            </div>

            {/* Fingerprint */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">Fingerprint:</p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <code className="flex-1 text-[#27AE60] font-mono text-sm bg-[#27AE60]/10 px-4 py-3 rounded-xl">
                  {fingerprint}
                </code>
                <motion.button
                  onClick={copyFingerprint}
                  className="px-6 py-3 bg-[#27AE60]/20 text-[#27AE60] rounded-xl hover:bg-[#27AE60]/30 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? 'Copiado!' : 'Copiar'}
                </motion.button>
              </div>
            </div>

            {/* Toggle PGP Key */}
            <motion.button
              onClick={() => setShowPGP(!showPGP)}
              className="flex items-center gap-2 text-[#2D9CDB] hover:text-[#27AE60] transition-colors font-medium"
              whileHover={{ x: 5 }}
            >
              {showPGP ? 'Ocultar' : 'Ver'} llave PGP completa
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: showPGP ? 180 : 0 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>

            {/* PGP Key Display */}
            <motion.div
              initial={false}
              animate={{ height: showPGP ? 'auto' : 0, opacity: showPGP ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <pre className="mt-6 p-6 bg-black/30 rounded-2xl text-[#27AE60] text-xs font-mono overflow-x-auto max-h-64 overflow-y-auto">
                {pgpKey}
              </pre>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            Dudas Comunes
          </span>
          <h2 className="text-3xl font-bold text-[#333333] dark:text-white">
            Preguntas <span className="text-[#27AE60]">Frecuentes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#2D9CDB]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#2D9CDB]/10 h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D9CDB] to-[#27AE60] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{faq.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#333333] dark:text-white mb-2 group-hover:text-[#2D9CDB] transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
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
            Listo para colaborar?
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Enviame un email y conversemos sobre tu proyecto. Respondo en menos de 24 horas.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="mailto:globalpathfinderllc@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D9CDB] font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar Email
            </motion.a>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#2D9CDB] transition-all duration-300"
              >
                Ver Portfolio
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
