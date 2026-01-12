import type { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samario Crece | Fundación para jóvenes en Santa Marta',
  description: 'Fundación dedicada a la restauración de vínculos familiares de jóvenes samarios en estado de vulnerabilidad a través de programas deportivos.',
  keywords: ['fundación', 'Santa Marta', 'jóvenes', 'deporte', 'familia', 'Colombia', 'vulnerabilidad'],
  authors: [{ name: 'Samario Crece' }],
  openGraph: {
    title: 'Samario Crece | Transformando vidas a través del deporte',
    description: 'Fundación dedicada a la restauración de vínculos familiares de jóvenes samarios en estado de vulnerabilidad.',
    url: 'https://samariocrece.org',
    siteName: 'Samario Crece',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samario Crece',
    description: 'Transformando vidas a través del deporte en Santa Marta',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
