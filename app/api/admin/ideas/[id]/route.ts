import { NextRequest, NextResponse } from 'next/server'
import { db, ensureDb } from '@/lib/db'
import { ideas } from '@/lib/schema'
import { eq } from 'drizzle-orm'

type Params = { params: Promise<{ id: string }> }

export async function DELETE(_req: NextRequest, { params }: Params) {
  await ensureDb()
  const { id } = await params
  await db.delete(ideas).where(eq(ideas.id, id))
  return NextResponse.json({ ok: true })
}
