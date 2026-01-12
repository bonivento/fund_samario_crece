import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, SectionTitle, Card } from '@/components/ui'
import { NEWS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Noticias | Samario Crece',
  description: 'Mantente al día con las últimas noticias y actividades de la Fundación Samario Crece y el Club Reino Samario.',
}

export default function NoticiasPage() {
  return (
    <main className="pt-20">
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Noticias"
            subtitle="Mantente informado sobre nuestras actividades y logros"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((news) => (
              <Link key={news.slug} href={`/noticias/${news.slug}`}>
                <Card
                  variant="elevated"
                  className="h-full hover:scale-105 transition-transform duration-300 overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(news.date).toLocaleDateString('es-CO', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más
                    <svg
                      className="w-4 h-4"
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
            ))}
          </div>

          {/* CTA for future CMS */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Esta sección está preparada para integración con CMS en el futuro
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}
