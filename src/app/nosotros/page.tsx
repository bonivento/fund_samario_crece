import type { Metadata } from 'next'
import { About, Mission, Values } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Nosotros | Samario Crece',
  description: 'Conoce nuestra historia, misión, visión y valores. Fundación dedicada a transformar vidas a través del deporte en Santa Marta.',
}

export default function NosotrosPage() {
  return (
    <main className="pt-20">
      <About />
      <Mission />
      <Values />
    </main>
  )
}
