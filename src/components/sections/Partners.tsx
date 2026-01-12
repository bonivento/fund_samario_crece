'use client'

import { motion } from 'framer-motion'
import { Container, SectionTitle } from '@/components/ui'
import { PARTNERS } from '@/lib/constants'

export function Partners() {
  return (
    <section className="section-padding bg-accent">
      <Container>
        <SectionTitle
          title="Nuestros Aliados"
          subtitle="Organizaciones que nos apoyan en nuestra misión"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
                {/* Logo placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-16 h-16 text-primary/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary text-sm mb-2">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-500">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            ¿Quieres ser parte de nuestra red de aliados?
          </p>
          <a
            href="/contacto"
            className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
          >
            Contáctanos
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
