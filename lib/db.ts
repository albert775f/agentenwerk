import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'

export const client = createClient({
  url: process.env.TURSO_DATABASE_URL ?? 'file:./dev.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const db = drizzle(client, { schema })

let initialized = false

const SEED_IDEAS = [
  {
    title: 'Lead Management',
    description:
      'Contact form submissions → DB, status pipeline (New → Contacted → Meeting → Client → Lost), notes per lead',
  },
  {
    title: 'Case Studies',
    description:
      'Dedicated entity for client projects with results, testimonials, logos, visibility toggle',
  },
  {
    title: 'Content Snippets',
    description:
      'Key-value store for dynamic site elements: testimonials, FAQ entries, pricing packages',
  },
  {
    title: 'Email Notifications',
    description: 'Auto-notify on new lead via Resend/Nodemailer',
  },
  {
    title: 'Cal.com Integration',
    description: 'Surface upcoming bookings in admin dashboard',
  },
]

export async function ensureDb() {
  if (initialized) return
  initialized = true

  await client.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL DEFAULT '',
      excerpt TEXT DEFAULT '',
      cover_image TEXT DEFAULT '',
      tags TEXT DEFAULT '[]',
      seo_title TEXT DEFAULT '',
      seo_description TEXT DEFAULT '',
      status TEXT NOT NULL DEFAULT 'draft',
      published_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  await client.execute(`
    CREATE TABLE IF NOT EXISTS pageviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      referrer TEXT DEFAULT '',
      country TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  await client.execute(`
    CREATE TABLE IF NOT EXISTS ideas (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT DEFAULT '',
      score INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  // Seed ideas on first run
  const { rows } = await client.execute('SELECT COUNT(*) as count FROM ideas')
  if (Number(rows[0][0]) === 0) {
    for (const idea of SEED_IDEAS) {
      await client.execute({
        sql: 'INSERT INTO ideas (id, title, description) VALUES (?, ?, ?)',
        args: [crypto.randomUUID(), idea.title, idea.description],
      })
    }
  }
}
