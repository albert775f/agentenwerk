import { NextRequest, NextResponse } from 'next/server'
import { db, ensureDb } from '@/lib/db'
import { posts } from '@/lib/schema'
import { eq } from 'drizzle-orm'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  await ensureDb()
  const { id } = await params
  const [post] = await db.select().from(posts).where(eq(posts.id, id))
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ...post, tags: JSON.parse(post.tags ?? '[]') })
}

export async function PUT(req: NextRequest, { params }: Params) {
  await ensureDb()
  const { id } = await params
  const [existing] = await db.select().from(posts).where(eq(posts.id, id))
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const body = await req.json()
  const now = new Date().toISOString()

  const wasUnpublished = existing.status !== 'published'
  const nowPublished = body.status === 'published'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _id, created_at: _ca, ...rest } = body

  const update = {
    ...rest,
    tags: Array.isArray(body.tags) ? JSON.stringify(body.tags) : (body.tags ?? '[]'),
    published_at: nowPublished && wasUnpublished ? now : existing.published_at,
    updated_at: now,
  }

  await db.update(posts).set(update).where(eq(posts.id, id))
  const [updated] = await db.select().from(posts).where(eq(posts.id, id))
  return NextResponse.json({ ...updated, tags: JSON.parse(updated.tags ?? '[]') })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  await ensureDb()
  const { id } = await params
  await db.delete(posts).where(eq(posts.id, id))
  return NextResponse.json({ ok: true })
}
