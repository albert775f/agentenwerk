'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Pencil, Trash2 } from 'lucide-react'

interface Post {
  id: string
  title: string
  slug: string
  status: string
  published_at: string | null
  created_at: string
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    const res = await fetch('/api/admin/posts')
    setPosts(await res.json())
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function deletePost(id: string, title: string) {
    if (!confirm(`"${title}" wirklich löschen?`)) return
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })
    setPosts((prev) => prev.filter((p) => p.id !== id))
  }

  function formatDate(d: string | null) {
    if (!d) return '—'
    return new Date(d).toLocaleDateString('de-DE', {
      day: '2-digit', month: 'short', year: 'numeric',
    })
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold text-white mb-1">Blog Posts</h1>
            <p className="text-sm text-neutral-500">{posts.length} {posts.length === 1 ? 'Post' : 'Posts'} gesamt</p>
          </div>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Neuer Post
          </Link>
        </div>

        {loading ? (
          <div className="text-sm text-neutral-600">Laden…</div>
        ) : posts.length === 0 ? (
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-12 text-center">
            <p className="text-sm text-neutral-500 mb-4">Noch keine Posts vorhanden.</p>
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Ersten Post erstellen
            </Link>
          </div>
        ) : (
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left px-5 py-3 text-xs text-neutral-500 font-medium uppercase tracking-widest">Titel</th>
                  <th className="text-left px-5 py-3 text-xs text-neutral-500 font-medium uppercase tracking-widest hidden sm:table-cell">Status</th>
                  <th className="text-left px-5 py-3 text-xs text-neutral-500 font-medium uppercase tracking-widest hidden md:table-cell">Datum</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-medium text-white leading-snug">{post.title}</div>
                      <div className="text-xs text-neutral-600 mt-0.5">/blog/{post.slug}</div>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border ${
                        post.status === 'published'
                          ? 'bg-emerald-950 border-emerald-800 text-emerald-400'
                          : 'bg-neutral-900 border-neutral-700 text-neutral-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${post.status === 'published' ? 'bg-emerald-400' : 'bg-neutral-500'}`} />
                        {post.status === 'published' ? 'Veröffentlicht' : 'Entwurf'}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-neutral-500 hidden md:table-cell">
                      {post.status === 'published' ? formatDate(post.published_at) : formatDate(post.created_at)}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 justify-end">
                        <Link
                          href={`/admin/posts/${post.id}`}
                          className="p-1.5 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </Link>
                        <button
                          onClick={() => deletePost(post.id, post.title)}
                          className="p-1.5 text-neutral-500 hover:text-red-400 hover:bg-neutral-800 rounded-md transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
