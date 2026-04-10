import { NextRequest, NextResponse } from 'next/server'
import { db, ensureDb } from '@/lib/db'
import { ideas } from '@/lib/schema'
import { eq, sql } from 'drizzle-orm'

type Params = { params: Promise<{ id: string }> }

export async function PATCH(req: NextRequest, { params }: Params) {
  await ensureDb()
  const { id } = await params
  const { direction } = await req.json()

  if (direction !== 'up' && direction !== 'down') {
    return NextResponse.json({ error: 'direction must be "up" or "down"' }, { status: 400 })
  }

  const delta = direction === 'up' ? 1 : -1

  await db
    .update(ideas)
    .set({ score: sql`${ideas.score} + ${delta}` })
    .where(eq(ideas.id, id))

  const [updated] = await db.select().from(ideas).where(eq(ideas.id, id))
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(updated)
}
