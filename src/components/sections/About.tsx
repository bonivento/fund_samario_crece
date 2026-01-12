'use client'

import { motion } from 'framer-motion'
import { Container, SectionTitle } from '@/components/ui'

export function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Sobre Nosotros"
          subtitle="Conoce nuestra historia y propósito"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="w-24 h-24 mx-auto text-primary/40 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-400">Imagen de la fundación</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Fundación Samario Crece
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Somos una fundación ubicada en Santa Marta, Colombia, dedicada a
              transformar la vida de jóvenes samarios entre los 12 y 20 años de
              edad que se encuentran en estado de vulnerabilidad.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A través de nuestros programas deportivos, liderados por el Club
              Reino Samario, trabajamos en la restauración de los vínculos
              familiares, rescatando los principios y valores que fortalecen a
              las familias de nuestra comunidad.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestro enfoque integral abarca el desarrollo técnico deportivo,
              el acompañamiento espiritual y el bienestar emocional de los
              jóvenes y sus familias, guiados siempre por nuestros valores de
              amor, respeto y solidaridad.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                'Programas deportivos',
                'Apoyo académico',
                'Asesoramiento psicológico',
                'Fortalecimiento familiar',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
