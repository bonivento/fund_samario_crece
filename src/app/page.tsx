import Link from 'next/link'
import { Hero, Partners } from '@/components/sections'
import { Container, SectionTitle, Card } from '@/components/ui'

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* Secciones clave - Resumen */}
        <section className="section-padding bg-white">
          <Container>
            <SectionTitle
              title="Conoce Samario Crece"
              subtitle="Transformando vidas a través del deporte y los valores"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {/* Nosotros */}
              <Link href="/nosotros">
                <Card
                  variant="elevated"
                  className="h-full hover:scale-105 transition-transform duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    Nosotros
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Conoce nuestra historia, misión, visión y los valores que
                    guían nuestro trabajo con los jóvenes samarios.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center gap-2">
                    Conoce más
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Card>
              </Link>

              {/* Programas */}
              <Link href="/programas">
                <Card
                  variant="elevated"
                  className="h-full hover:scale-105 transition-transform duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    Programas
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Descubre nuestros programas deportivos, de apoyo académico
                    y asesoramiento psicológico y espiritual.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center gap-2">
                    Ver programas
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Card>
              </Link>

              {/* Noticias */}
              <Link href="/noticias">
                <Card
                  variant="elevated"
                  className="h-full hover:scale-105 transition-transform duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    Noticias
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Mantente al día con nuestras últimas actividades, logros y
                    eventos del Club Reino Samario.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center gap-2">
                    Leer noticias
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Card>
              </Link>
            </div>
          </Container>
        </section>

        {/* Partners */}
        <Partners />

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <Container size="md" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Quieres ser parte del cambio?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a nuestra misión de transformar vidas a través del deporte
              y los valores familiares.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Contáctanos
            </Link>
          </Container>
        </section>
      </main>
    </>
  )
}
