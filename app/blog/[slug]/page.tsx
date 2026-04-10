import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { db, ensureDb } from '@/lib/db'
import { posts } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import type { Metadata } from 'next'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await ensureDb()
  const { slug } = await params
  const [post] = await db.select().from(posts).where(eq(posts.slug, slug))
  if (!post) return {}

  return {
    title: post.seo_title || `${post.title} – agentenwerk`,
    description: post.seo_description || post.excerpt || undefined,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt || undefined,
      images: post.cover_image ? [post.cover_image] : [],
    },
  }
}

function formatDate(d: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('de-DE', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
}

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `ca. ${minutes} Min. Lesedauer`
}

export default async function BlogPostPage({ params }: Props) {
  await ensureDb()
  const { slug } = await params
  const [post] = await db.select().from(posts).where(eq(posts.slug, slug))

  if (!post || post.status !== 'published') notFound()

  const tags: string[] = JSON.parse(post.tags ?? '[]')
  const contentHtml = await marked(post.content)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Cover image */}
      {post.cover_image && (
        <div className="pt-16 w-full max-w-3xl mx-auto px-6 mt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-56 md:h-72 object-cover rounded-xl"
          />
        </div>
      )}

      {/* Hero */}
      <div className={`max-w-3xl mx-auto px-6 ${post.cover_image ? 'pt-8' : 'pt-36'} pb-4`}>
        <div className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-neutral-500 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1.5 mb-6">
          <span className="w-1 h-1 bg-neutral-500 rounded-full" />
          Blog
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-5">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-neutral-600">{readingTime(post.content)}</span>
          {post.published_at && (
            <span className="text-xs text-neutral-600">{formatDate(post.published_at)}</span>
          )}
        </div>

        <div className="w-full h-px bg-neutral-900" />
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="w-full h-px bg-neutral-900 my-10" />

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6">
          <p className="text-sm text-neutral-300 max-w-sm leading-relaxed">
            Kostenloses Erstgespräch – kein Druck, kein Pitch. Einfach schauen, was möglich ist.
          </p>
          <a
            href="/termin"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Jetzt Termin buchen →
          </a>
        </div>

        <p className="text-xs text-neutral-600 text-center mt-8">
          Agentenwerk – KI-Beratung für den Mittelstand · Braunschweig
        </p>
      </article>

      <Footer />
    </div>
  )
}
