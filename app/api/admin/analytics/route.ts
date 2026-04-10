import { NextRequest, NextResponse } from 'next/server'
import { db, ensureDb } from '@/lib/db'
import { pageviews } from '@/lib/schema'
import { gte, sql } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  await ensureDb()

  const { searchParams } = new URL(req.url)
  const days = Math.min(Math.max(parseInt(searchParams.get('days') ?? '30'), 1), 90)
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()

  const [daily, topPages, topReferrers, totalRows] = await Promise.all([
    db
      .select({
        date: sql<string>`date(${pageviews.created_at})`,
        count: sql<number>`count(*)`,
      })
      .from(pageviews)
      .where(gte(pageviews.created_at, since))
      .groupBy(sql`date(${pageviews.created_at})`)
      .orderBy(sql`date(${pageviews.created_at})`),

    db
      .select({
        path: pageviews.path,
        count: sql<number>`count(*)`,
      })
      .from(pageviews)
      .where(gte(pageviews.created_at, since))
      .groupBy(pageviews.path)
      .orderBy(sql`count(*) desc`)
      .limit(10),

    db
      .select({
        referrer: pageviews.referrer,
        count: sql<number>`count(*)`,
      })
      .from(pageviews)
      .where(gte(pageviews.created_at, since))
      .groupBy(pageviews.referrer)
      .orderBy(sql`count(*) desc`)
      .limit(10),

    db
      .select({ count: sql<number>`count(*)` })
      .from(pageviews)
      .where(gte(pageviews.created_at, since)),
  ])

  return NextResponse.json({
    daily,
    topPages,
    topReferrers,
    total: Number(totalRows[0]?.count ?? 0),
  })
}
