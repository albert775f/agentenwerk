import { NextRequest, NextResponse } from 'next/server'
import { db, ensureDb } from '@/lib/db'
import { pageviews } from '@/lib/schema'

const trackMap = new Map<string, { count: number; reset: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = trackMap.get(ip)
  if (!entry || entry.reset < now) {
    trackMap.set(ip, { count: 1, reset: now + 60_000 })
    return false
  }
  if (entry.count >= 100) return true
  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) return new NextResponse(null, { status: 204 })

  try {
    const { path, referrer = '' } = await req.json()
    const country = req.headers.get('x-vercel-ip-country') ?? ''

    await ensureDb()
    await db.insert(pageviews).values({
      path: path ?? '/',
      referrer,
      country,
      created_at: new Date().toISOString(),
    })
  } catch {
    // Silently fail — tracking must never break the site
  }

  return new NextResponse(null, { status: 204 })
}
