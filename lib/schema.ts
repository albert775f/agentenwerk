import { sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  content: text('content').notNull().default(''),
  excerpt: text('excerpt').default(''),
  cover_image: text('cover_image').default(''),
  tags: text('tags').default('[]'),
  seo_title: text('seo_title').default(''),
  seo_description: text('seo_description').default(''),
  status: text('status').notNull().default('draft'),
  published_at: text('published_at'),
  created_at: text('created_at').notNull().default(sql`(datetime('now'))`),
  updated_at: text('updated_at').notNull().default(sql`(datetime('now'))`),
})

export const pageviews = sqliteTable('pageviews', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  path: text('path').notNull(),
  referrer: text('referrer').default(''),
  country: text('country').default(''),
  created_at: text('created_at').notNull().default(sql`(datetime('now'))`),
})

export const ideas = sqliteTable('ideas', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').default(''),
  score: integer('score').notNull().default(0),
  created_at: text('created_at').notNull().default(sql`(datetime('now'))`),
})
