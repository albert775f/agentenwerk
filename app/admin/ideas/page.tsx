'use client'

import { useEffect, useState } from 'react'
import { ChevronUp, ChevronDown, Trash2 } from 'lucide-react'

interface Idea {
  id: string
  title: string
  description: string
  score: number
}

export default function IdeasPage() {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [loading, setLoading] = useState(true)
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [adding, setAdding] = useState(false)

  async function load() {
    const res = await fetch('/api/admin/ideas')
    setIdeas(await res.json())
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function vote(id: string, direction: 'up' | 'down') {
    const res = await fetch(`/api/admin/ideas/${id}/vote`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ direction }),
    })
    const updated: Idea = await res.json()
    setIdeas((prev) =>
      [...prev.map((i) => (i.id === id ? updated : i))].sort((a, b) => b.score - a.score)
    )
  }

  async function deleteIdea(id: string, title: string) {
    if (!confirm(`"${title}" wirklich löschen?`)) return
    await fetch(`/api/admin/ideas/${id}`, { method: 'DELETE' })
    setIdeas((prev) => prev.filter((i) => i.id !== id))
  }

  async function addIdea() {
    if (!newTitle.trim()) return
    setAdding(true)
    const res = await fetch('/api/admin/ideas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle.trim(), description: newDesc.trim() }),
    })
    const idea: Idea = await res.json()
    setIdeas((prev) => [idea, ...prev].sort((a, b) => b.score - a.score))
    setNewTitle('')
    setNewDesc('')
    setAdding(false)
  }

  return (
    <div className="p-8">
      <div className="max-w-3xl">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-white mb-1">Ideen-Backlog</h1>
          <p className="text-sm text-neutral-500">Feature-Ideen sortiert nach Priorität (Score).</p>
        </div>

        {/* Add form */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 mb-6 space-y-3">
          <p className="text-xs text-neutral-500 uppercase tracking-widest">Neue Idee</p>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') addIdea() }}
            placeholder="Ideen-Titel"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          />
          <textarea
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Beschreibung (optional)"
            rows={2}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
          />
          <button
            onClick={addIdea}
            disabled={adding || !newTitle.trim()}
            className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50"
          >
            {adding ? 'Hinzufügen…' : 'Hinzufügen'}
          </button>
        </div>

        {/* Ideas list */}
        {loading ? (
          <div className="text-sm text-neutral-600">Laden…</div>
        ) : ideas.length === 0 ? (
          <div className="text-sm text-neutral-600">Noch keine Ideen vorhanden.</div>
        ) : (
          <div className="space-y-3">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="flex gap-4 bg-neutral-950 border border-neutral-800 rounded-xl p-4 hover:border-neutral-700 transition-colors"
              >
                {/* Score controls */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <button
                    onClick={() => vote(idea.id, 'up')}
                    className="p-1 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <span className={`text-sm font-semibold tabular-nums ${
                    idea.score > 0 ? 'text-emerald-400' : idea.score < 0 ? 'text-red-400' : 'text-neutral-500'
                  }`}>
                    {idea.score}
                  </span>
                  <button
                    onClick={() => vote(idea.id, 'down')}
                    className="p-1 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white mb-0.5">{idea.title}</p>
                  {idea.description && (
                    <p className="text-xs text-neutral-500 leading-relaxed">{idea.description}</p>
                  )}
                </div>

                {/* Delete */}
                <button
                  onClick={() => deleteIdea(idea.id, idea.title)}
                  className="shrink-0 p-1.5 text-neutral-600 hover:text-red-400 hover:bg-neutral-800 rounded-md transition-colors self-start"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
