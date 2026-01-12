import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui'
import { NEWS } from '@/lib/constants'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return NEWS.map((news) => ({
    slug: news.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const news = NEWS.find((n) => n.slug === slug)

  if (!news) {
    return {
      title: 'Noticia no encontrada | Samario Crece',
    }
  }

  return {
    title: `${news.title} | Samario Crece`,
    description: news.excerpt,
  }
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params
  const news = NEWS.find((n) => n.slug === slug)

  if (!news) {
    notFound()
  }

  // Get related news (other news in same category)
  const relatedNews = NEWS.filter(
    (n) => n.category === news.category && n.slug !== news.slug
  ).slice(0, 2)

  return (
    <main className="pt-20">
      <article className="section-padding bg-white">
        <Container size="md">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/noticias"
              className="hover:text-primary transition-colors"
            >
              Noticias
            </Link>
            <span>/</span>
            <span className="text-secondary">{news.title}</span>
          </nav>

          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
              {news.category}
            </span>
            <span className="text-gray-600">
              {new Date(news.date).toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8">
            {news.title}
          </h1>

          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-12">
            <svg
              className="w-24 h-24 text-primary/40"
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

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {news.excerpt}
            </p>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>{news.content}</p>
              <p>
                Este contenido es un ejemplo de cómo se mostrará una noticia.
                En el futuro, cuando se integre un CMS, aquí se mostrará el
                contenido completo con formato rich text, imágenes adicionales,
                videos embebidos, y más elementos multimedia.
              </p>
            </div>
          </div>

          {/* Share buttons placeholder */}
          <div className="border-t border-b border-gray-200 py-6 mb-12">
            <p className="text-sm text-gray-600 mb-3">Compartir:</p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map((social) => (
                <button
                  key={social}
                  className="px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg text-sm font-medium transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Related news */}
          {relatedNews.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Noticias relacionadas
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedNews.map((relatedItem) => (
                  <Link
                    key={relatedItem.slug}
                    href={`/noticias/${relatedItem.slug}`}
                    className="group"
                  >
                    <div className="border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {relatedItem.category}
                      </span>
                      <h3 className="text-lg font-bold text-secondary mt-4 mb-2 group-hover:text-primary transition-colors">
                        {relatedItem.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedItem.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to news */}
          <div className="mt-12">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver a noticias
            </Link>
          </div>
        </Container>
      </article>
    </main>
  )
}
