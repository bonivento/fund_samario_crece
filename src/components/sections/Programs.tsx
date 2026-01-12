'use client'

import { motion } from 'framer-motion'
import { Container, SectionTitle, Card, CardTitle, CardDescription } from '@/components/ui'
import { PROGRAMS } from '@/lib/constants'

const iconMap: Record<string, JSX.Element> = {
  trophy: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  book: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  hands: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
}

export function Programs() {
  return (
    <section id="programas" className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Nuestros Programas"
          subtitle="Conoce las diferentes áreas en las que trabajamos para transformar vidas"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                variant="elevated"
                className="h-full text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {iconMap[program.icon]}
                </div>
                <CardTitle className="mb-4 text-center">{program.title}</CardTitle>
                <CardDescription className="text-center">
                  {program.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Club Reino Samario highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Club Reino Samario</h3>
          <p className="max-w-2xl mx-auto text-white/90 mb-6">
            Nuestro club deportivo enfocado en la formación atlética integral de
            jóvenes samarios entre los 12 y 20 años, con énfasis en el deporte
            del fútbol y el desarrollo de valores como el trabajo en equipo, el
            compromiso, el respeto y la excelencia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Trabajo en equipo', 'Compromiso', 'Respeto', 'Excelencia'].map(
              (value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm"
                >
                  {value}
                </span>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
