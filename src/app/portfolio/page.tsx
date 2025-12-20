'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PortfolioPage() {
  const personalProjects = [
    {
      name: 'Digitaliza',
      emoji: '🍽️',
      status: 'En Validacion',
      statusColor: '#F2C94C',
      description: 'Plataforma Link-in-Bio con Menu Digital - SaaS para negocios locales',
      features: [
        'Paginas tipo link-in-bio personalizables',
        'Menu digital con carrito y pedidos',
        'Sistema de citas y reservas integrado',
        'Aurora Templates con 4 estilos animados',
        'QR codes para acceso rapido'
      ],
      stack: [
        { name: 'Next.js 14', category: 'Framework' },
        { name: 'React 18', category: 'Frontend' },
        { name: 'TypeScript 5', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Framer Motion', category: 'Styling' },
        { name: 'PostgreSQL (Neon)', category: 'Database' },
        { name: 'Prisma ORM', category: 'Database' },
        { name: 'Stripe', category: 'Payments' },
        { name: 'Vercel Blob', category: 'Storage' },
        { name: 'Zod', category: 'Validation' }
      ],
      url: 'https://digitalizaweb.vercel.app',
      github: null,
      color: '#2D9CDB'
    },
    {
      name: 'HostelOS',
      emoji: '🏨',
      status: 'Produccion',
      statusColor: '#27AE60',
      description: 'Sistema de Gestion Hotelera - PMS completo para hostales (v2.0.0)',
      features: [
        'Gestion de camas y habitaciones',
        'Reservaciones con sync iCal (Booking, Airbnb)',
        'Caja registradora y reportes financieros',
        'Gestion de staff y tareas',
        'Sistema de tours y comisiones',
        'Notificaciones (Email, SMS, WhatsApp)',
        '100+ endpoints API, 17+ modulos'
      ],
      stack: [
        { name: 'Node.js + Express', category: 'Backend' },
        { name: 'React 18', category: 'Frontend' },
        { name: 'PostgreSQL + Neon', category: 'Database' },
        { name: 'JWT + bcrypt', category: 'Auth' },
        { name: 'Stripe', category: 'Payments' },
        { name: 'SendGrid + Nodemailer', category: 'Email' },
        { name: 'Twilio', category: 'SMS' },
        { name: 'WhatsApp API', category: 'Messaging' },
        { name: 'AWS S3', category: 'Storage' },
        { name: 'Sentry + Winston', category: 'Monitoring' }
      ],
      url: 'https://hostal-pms.vercel.app',
      github: null,
      color: '#27AE60'
    },
    {
      name: 'Sophie Referrals',
      emoji: '🎯',
      status: 'Stand-by',
      statusColor: '#9B9B9B',
      description: 'Landing Page para Sistema de Comisiones - Para agencias de viajes',
      features: [
        'Redes de partners de alojamiento',
        'Tracking de ventas con QR unicos',
        'Gestion transparente de comisiones'
      ],
      stack: [
        { name: 'React 18', category: 'Frontend' },
        { name: 'TypeScript', category: 'Frontend' },
        { name: 'Vite', category: 'Build' },
        { name: 'Tailwind CSS', category: 'Styling' }
      ],
      url: null,
      github: null,
      color: '#9B9B9B'
    }
  ]

  const clientProjects = [
    {
      name: 'GrantInsight',
      emoji: '💰',
      status: 'Desarrollo',
      statusColor: '#2D9CDB',
      description: 'Dashboard de Oportunidades de Financiacion - Plataforma para descubrir grants y financiamiento',
      features: [
        'Dashboard centralizado de oportunidades',
        'Base de datos de grants searchable',
        'Filtrado y categorizacion de oportunidades',
        'Organizacion y tracking de leads de financiamiento',
        'Agregacion de informacion multi-fuente'
      ],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Vite', category: 'Build' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Vercel', category: 'Deploy' }
      ],
      url: 'https://grant-insight.vercel.app',
      github: null,
      color: '#2D9CDB'
    },
    {
      name: 'Colombia Magica',
      emoji: '🌎',
      status: 'Produccion',
      statusColor: '#27AE60',
      description: 'Showcase de turismo colombiano para turistas polacos - Con mision social de apoyar ninos vulnerables',
      features: [
        'Soporte multilenguaje (Polaco, Espanol, Ingles)',
        'Showcase de 5 destinos principales de Colombia',
        'Integracion directa con WhatsApp',
        'Diseno mobile-first responsive',
        'Navegacion sticky con banderas compactas',
        'Mision humanitaria: apoyo a ninos en comunidades de montana'
      ],
      stack: [
        { name: 'React 18', category: 'Frontend' },
        { name: 'Vite', category: 'Build' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Framer Motion', category: 'Animation' },
        { name: 'GitHub Pages', category: 'Hosting' }
      ],
      url: 'https://kolumbijskiprzewodnik.vercel.app',
      github: 'https://github.com/founderjourney/kolumbijskiprzewodnik',
      color: '#27AE60'
    },
    {
      name: 'NeoCodex / MatrixCode',
      emoji: '🔢',
      status: 'Desarrollo',
      statusColor: '#F2C94C',
      description: 'Plataforma de Numerologia - Herramienta de analisis numerologico avanzado',
      features: [
        'Interfaz moderna y minimalista',
        'Analisis numerologico personalizado',
        'Landing page de alta conversion'
      ],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Vite', category: 'Build' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'PostCSS', category: 'CSS' },
        { name: 'ESLint', category: 'Quality' }
      ],
      url: 'https://neocodex-landing.vercel.app',
      github: 'https://github.com/founderjourney/neocodex.v3',
      color: '#F2C94C'
    },
    {
      name: 'MotoSkills35',
      emoji: '🏍️',
      status: 'Produccion',
      statusColor: '#27AE60',
      description: 'Plataforma de Curso Digital de Mecanica de Motos - E-learning para principiantes',
      features: [
        'Curso de 60 dias de mecanica basica',
        'Mantenimiento esencial de motocicletas',
        'Diagnostico de problemas y reparaciones',
        'Integracion Google Analytics y Facebook Pixel',
        'Sistema de pagos en COP'
      ],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Vercel', category: 'Deploy' },
        { name: 'Analytics', category: 'Tracking' }
      ],
      url: 'https://motoskills35.vercel.app',
      github: null,
      color: '#27AE60'
    },
    {
      name: 'SEO para Joyerias',
      emoji: '💎',
      status: 'Produccion',
      statusColor: '#27AE60',
      description: 'Landing Page de Servicios SEO - Marketing digital especializado para joyerias',
      features: [
        'Propuesta de valor con caso de estudio real',
        'Testimonios con resultados medibles',
        'Sistema de lead generation con analisis gratis',
        'Garantia de 60 dias sin riesgo',
        'Oferta limitada con countdown timer',
        'SEO tecnico y contenido especializado'
      ],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Vercel', category: 'Deploy' }
      ],
      url: 'https://seo-landing-saas-v01.vercel.app',
      github: null,
      color: '#2D9CDB'
    },
    {
      name: 'Founder Pro',
      emoji: '🚀',
      status: 'Produccion',
      statusColor: '#27AE60',
      description: 'Startup Success Platform - Plataforma de soporte y recursos para founders',
      features: [
        'Recursos para emprendedores',
        'Herramientas de desarrollo de negocios',
        'Plataforma interactiva moderna',
        'Soporte para startups en crecimiento'
      ],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'JavaScript', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Vercel', category: 'Deploy' }
      ],
      url: 'https://founder-pro-v-2-0.vercel.app',
      github: null,
      color: '#F2C94C'
    }
  ]

  const techCategories = [
    {
      name: 'Frontend & Frameworks',
      techs: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      name: 'Backend & APIs',
      techs: ['Node.js', 'Express.js', 'Python', 'Prisma ORM']
    },
    {
      name: 'Databases',
      techs: ['PostgreSQL', 'Neon', 'MariaDB', 'Redis', 'SQLite']
    },
    {
      name: 'Cloud & DevOps',
      techs: ['Vercel', 'Docker', 'Traefik', 'AWS S3', 'Contabo VPS']
    },
    {
      name: 'Automation & No-Code',
      techs: ['n8n', 'Make (Integromat)', 'Evolution API', 'Airtable', 'Notion']
    }
  ]

  const impactStats = [
    { label: 'Personas Capacitadas', value: '150+', icon: '🎓' },
    { label: 'Workshops Dados', value: '10+', icon: '🌍' },
    { label: 'Sitios Creados', value: '30+', icon: '💻' },
    { label: 'Proyectos Pro-Bono', value: '5+', icon: '🤝' }
  ]

  const services = [
    {
      title: 'Desarrollo de Software',
      description: 'Aplicaciones web full-stack, APIs, SaaS',
      icon: '💻'
    },
    {
      title: 'Consultoria Web',
      description: 'Landing pages, automatizaciones, IA integration',
      icon: '🌐'
    },
    {
      title: 'Scripts & Automatizacion',
      description: 'Python scripts, web scraping, task automation',
      icon: '🤖'
    },
    {
      title: 'Workshops',
      description: 'Para tu comunidad o empresa',
      icon: '🎓'
    },
    {
      title: 'Mentoria',
      description: 'Founders bootstrapped',
      icon: '🚀'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.header
        className="text-center mb-20 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background blobs */}
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-[#2D9CDB]/10 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-10 right-1/4 w-64 h-64 bg-[#27AE60]/10 rounded-full blur-3xl -z-10"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-[#333333] dark:text-white">Mi </span>
          <span className="bg-gradient-to-r from-[#2D9CDB] to-[#27AE60] bg-clip-text text-transparent">
            Portfolio
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Democratizando tecnologia web, un emprendedor a la vez
        </motion.p>

        {/* Mission Statement */}
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB]/20 to-[#27AE60]/20 rounded-2xl blur-xl" />
          <div className="relative px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700">
            <p className="text-lg font-medium text-[#333333] dark:text-white italic">
              &quot;La tecnologia debe empoderar, no excluir&quot;
            </p>
          </div>
        </motion.div>
      </motion.header>

      {/* Impact Stats */}
      <motion.section
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {impactStats.map((stat, index) => (
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

      {/* Personal Projects Section */}
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
            Mis Startups
          </span>
          <h2 className="text-3xl font-bold text-[#333333] dark:text-white">
            Proyectos <span className="text-[#2D9CDB]">Personales</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-lg mx-auto">
            Productos que estoy construyendo para democratizar la tecnologia web
          </p>
        </motion.div>

        <div className="space-y-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] via-[#27AE60] to-[#2D9CDB] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <motion.span
                        className="text-5xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {project.emoji}
                      </motion.span>
                      <div>
                        <h3 className="text-2xl font-bold text-[#333333] dark:text-white">
                          {project.name}
                        </h3>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1"
                          style={{
                            backgroundColor: `${project.statusColor}20`,
                            color: project.statusColor
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#2D9CDB] text-white rounded-lg font-medium hover:bg-[#2D9CDB]/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver Proyecto
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#333333] dark:text-white mb-3">Caracteristicas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#27AE60] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-[#333333] dark:text-white mb-3">Stack Tecnologico:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <motion.span
                          key={tech.name}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05, backgroundColor: '#2D9CDB', color: '#ffffff' }}
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Client Projects Section */}
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
            Trabajo para Clientes
          </span>
          <h2 className="text-3xl font-bold text-[#333333] dark:text-white">
            Proyectos de <span className="text-[#27AE60]">Clientes</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-lg mx-auto">
            Soluciones personalizadas creadas para emprendedores y negocios
          </p>
        </motion.div>

        <div className="space-y-8">
          {clientProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#27AE60] via-[#2D9CDB] to-[#27AE60] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <motion.span
                        className="text-5xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {project.emoji}
                      </motion.span>
                      <div>
                        <h3 className="text-2xl font-bold text-[#333333] dark:text-white">
                          {project.name}
                        </h3>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1"
                          style={{
                            backgroundColor: `${project.statusColor}20`,
                            color: project.statusColor
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </motion.a>
                      )}
                      {project.url && (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#27AE60] text-white rounded-lg font-medium hover:bg-[#27AE60]/90 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Ver Proyecto
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#333333] dark:text-white mb-3">Caracteristicas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#27AE60] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#333333] dark:text-white mb-3">Stack Tecnologico:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <motion.span
                          key={tech.name}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05, backgroundColor: '#27AE60', color: '#ffffff' }}
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack Overview */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-[#333333] dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech <span className="text-[#27AE60]">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-bold text-[#333333] dark:text-white mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#2D9CDB]/10 text-[#2D9CDB] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-[#333333] dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Que <span className="text-[#2D9CDB]">Hago</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#27AE60] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-all">
                <motion.span
                  className="text-4xl mb-4 block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {service.icon}
                </motion.span>
                <h3 className="font-bold text-[#333333] dark:text-white mb-2 group-hover:text-[#2D9CDB] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Building in Public Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative p-8 bg-[#333333] rounded-3xl overflow-hidden">
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
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📊</span>
              <h2 className="text-2xl font-bold text-white">Building in Public</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '✅', text: 'Decisiones de producto transparentes' },
                { icon: '📈', text: 'Metricas reales (wins y failures)' },
                { icon: '🧪', text: 'Beta testing con comunidad' },
                { icon: '💡', text: 'Lessons learned compartidas' }
              ].map((item) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
                  whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
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

        <div className="relative px-8 py-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Colaboremos?
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8 text-lg max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Si crees en democratizar la tecnologia, hablemos sobre como podemos trabajar juntos
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D9CDB] font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Contactame
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            <motion.a
              href="https://github.com/founderjourney"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#2D9CDB] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
