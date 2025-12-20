import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Founder Journey | Blog de Emprendimiento y Tecnologia',
    template: '%s | Founder Journey',
  },
  description:
    'Blog sobre emprendimiento, SEO, tecnologia web y la vida de un nomada digital. Democratizando tecnologia, un emprendedor a la vez.',
  keywords: ['emprendimiento', 'SEO', 'nomada digital', 'tecnologia web', 'building in public'],
  authors: [{ name: 'Mauro | Pathfinders Labs' }],
  openGraph: {
    title: 'Founder Journey',
    description: 'Democratizando tecnologia web, un emprendedor a la vez.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founder Journey',
    description: 'Democratizando tecnologia web, un emprendedor a la vez.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-poppins bg-[#F8F9FA] dark:bg-[#1A1A1A] text-[#333333] dark:text-white min-h-screen flex flex-col antialiased transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
