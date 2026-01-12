import type { Metadata } from 'next'
import { Programs } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Programas | Samario Crece',
  description: 'Conoce nuestros programas deportivos, de apoyo académico y asesoramiento psicológico y espiritual para jóvenes en Santa Marta.',
}

export default function ProgramasPage() {
  return (
    <main className="pt-20">
      <Programs />
    </main>
  )
}
