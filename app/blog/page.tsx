import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { db, ensureDb } from '@/lib/db'
import { posts } from '@/lib/schema'
import { eq, desc } from 'drizzle-orm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – agentenwerk',
  description: 'Praxisnahe Einblicke zu KI-Agenten, Automatisierung und digitaler Transformation für den Mittelstand.',
}

export const revalidate = 60

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

export default async function BlogPage() {
  await ensureDb()
  const allPosts = await db
    .select()
    .from(posts)
    .where(eq(posts.status, 'published'))
    .orderBy(desc(posts.published_at))

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-36 pb-20 max-w-3xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-neutral-500 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1.5 mb-6">
          <span className="w-1 h-1 bg-neutral-500 rounded-full" />
          Blog
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-4">
          Einblicke & Praxis
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed mb-12 max-w-xl">
          Praxisnahe Artikel zu KI-Agenten, Automatisierung und digitaler Transformation – ohne Buzzword-Bingo.
        </p>

        {allPosts.length === 0 ? (
          <div className="border border-neutral-900 rounded-xl p-12 text-center">
            <p className="text-sm text-neutral-600">Noch keine Artikel veröffentlicht.</p>
          </div>
        ) : (
          <div className="space-y-px">
            {allPosts.map((post, i) => {
              const tags: string[] = JSON.parse(post.tags ?? '[]')
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block border border-neutral-900 hover:border-neutral-800 bg-neutral-950/0 hover:bg-neutral-950 rounded-xl p-6 transition-all"
                  style={{ borderRadius: i === 0 ? '12px 12px 4px 4px' : i === allPosts.length - 1 ? '4px 4px 12px 12px' : '4px' }}
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-base font-semibold text-neutral-200 group-hover:text-white transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600">
                    {post.published_at && <span>{formatDate(post.published_at)}</span>}
                    <span>{readingTime(post.content)}</span>
                    <span className="ml-auto text-neutral-500 group-hover:text-white transition-colors">
                      Lesen →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
