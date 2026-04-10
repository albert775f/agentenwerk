'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FileText, BarChart2, Lightbulb, Plus } from 'lucide-react'

interface Stats {
  publishedPosts: number
  draftPosts: number
  totalViews: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    async function load() {
      const [postsRes, analyticsRes] = await Promise.all([
        fetch('/api/admin/posts'),
        fetch('/api/admin/analytics?days=30'),
      ])
      const posts = await postsRes.json()
      const analytics = await analyticsRes.json()
      setStats({
        publishedPosts: posts.filter((p: { status: string }) => p.status === 'published').length,
        draftPosts: posts.filter((p: { status: string }) => p.status === 'draft').length,
        totalViews: analytics.total ?? 0,
      })
    }
    load()
  }, [])

  const cards = [
    {
      label: 'Veröffentlichte Posts',
      value: stats?.publishedPosts ?? '—',
      icon: FileText,
      href: '/admin/posts',
    },
    {
      label: 'Entwürfe',
      value: stats?.draftPosts ?? '—',
      icon: FileText,
      href: '/admin/posts',
    },
    {
      label: 'Pageviews (30 Tage)',
      value: stats?.totalViews ?? '—',
      icon: BarChart2,
      href: '/admin/analytics',
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <h1 className="text-xl font-semibold text-white mb-1">Übersicht</h1>
        <p className="text-sm text-neutral-500 mb-8">Willkommen im agentenwerk Admin-Panel.</p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {cards.map(({ label, value, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className="h-4 w-4 text-neutral-500 group-hover:text-neutral-400 transition-colors" />
              </div>
              <div className="text-2xl font-semibold text-white mb-0.5">{value}</div>
              <div className="text-xs text-neutral-500">{label}</div>
            </Link>
          ))}
        </div>

        {/* Quick actions */}
        <h2 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-widest">
          Schnellzugriff
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Neuer Blogpost
          </Link>
          <Link
            href="/admin/analytics"
            className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <BarChart2 className="h-4 w-4" />
            Analytics ansehen
          </Link>
          <Link
            href="/admin/ideas"
            className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <Lightbulb className="h-4 w-4" />
            Ideen-Backlog
          </Link>
        </div>
      </div>
    </div>
  )
}
