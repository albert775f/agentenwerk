import { NextRequest, NextResponse } from 'next/server'
import { db, ensureDb } from '@/lib/db'
import { ideas } from '@/lib/schema'
import { desc } from 'drizzle-orm'

export async function GET() {
  await ensureDb()
  const all = await db.select().from(ideas).orderBy(desc(ideas.score))
  return NextResponse.json(all)
}

export async function POST(req: NextRequest) {
  await ensureDb()
  const body = await req.json()
  const { title, description = '' } = body

  if (!title) return NextResponse.json({ error: 'Title required' }, { status: 400 })

  const idea = {
    id: crypto.randomUUID(),
    title,
    description,
    score: 0,
    created_at: new Date().toISOString(),
  }

  await db.insert(ideas).values(idea)
  return NextResponse.json(idea, { status: 201 })
}
