import { NextRequest, NextResponse } from 'next/server'
import { db, ensureDb } from '@/lib/db'
import { posts } from '@/lib/schema'
import { desc } from 'drizzle-orm'

export async function GET() {
  await ensureDb()
  const all = await db.select().from(posts).orderBy(desc(posts.created_at))
  return NextResponse.json(
    all.map((p) => ({ ...p, tags: JSON.parse(p.tags ?? '[]') }))
  )
}

export async function POST(req: NextRequest) {
  await ensureDb()
  const body = await req.json()

  const {
    title,
    content = '',
    excerpt = '',
    cover_image = '',
    tags = [],
    seo_title = '',
    seo_description = '',
    status = 'draft',
    slug: customSlug,
  } = body

  if (!title) return NextResponse.json({ error: 'Title required' }, { status: 400 })

  const slug =
    customSlug ||
    title
      .toLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

  const now = new Date().toISOString()

  const post = {
    id: crypto.randomUUID(),
    slug,
    title,
    content,
    excerpt,
    cover_image,
    tags: JSON.stringify(tags),
    seo_title,
    seo_description,
    status,
    published_at: status === 'published' ? now : null,
    created_at: now,
    updated_at: now,
  }

  await db.insert(posts).values(post)
  return NextResponse.json({ ...post, tags }, { status: 201 })
}
