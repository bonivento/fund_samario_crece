import type { Metadata } from 'next'
import { Contact } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Contacto | Samario Crece',
  description: '¿Tienes preguntas o quieres colaborar con nosotros? Contáctanos y únete a nuestra misión de transformar vidas.',
}

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  )
}
