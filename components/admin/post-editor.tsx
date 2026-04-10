'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { X, Upload, Eye, Code } from 'lucide-react'

interface PostData {
  id?: string
  title: string
  slug: string
  content: string
  excerpt: string
  cover_image: string
  tags: string[]
  seo_title: string
  seo_description: string
  status: 'draft' | 'published'
}

const EMPTY: PostData = {
  title: '',
  slug: '',
  content: '',
  excerpt: '',
  cover_image: '',
  tags: [],
  seo_title: '',
  seo_description: '',
  status: 'draft',
}

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function PostEditor({ postId }: { postId?: string }) {
  const router = useRouter()
  const [data, setData] = useState<PostData>(EMPTY)
  const [tagInput, setTagInput] = useState('')
  const [preview, setPreview] = useState(false)
  const [previewHtml, setPreviewHtml] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)
  const [loading, setLoading] = useState(!!postId)

  useEffect(() => {
    if (!postId) return
    fetch(`/api/admin/posts/${postId}`)
      .then((r) => r.json())
      .then((post) => {
        setData(post)
        setSlugManuallyEdited(true)
        setLoading(false)
      })
  }, [postId])

  // Auto-generate slug from title (only if not manually edited)
  useEffect(() => {
    if (!slugManuallyEdited && data.title) {
      setData((prev) => ({ ...prev, slug: toSlug(prev.title) }))
    }
  }, [data.title, slugManuallyEdited])

  // Live markdown preview
  const updatePreview = useCallback(async (content: string) => {
    if (!preview) return
    const { marked } = await import('marked')
    setPreviewHtml(await Promise.resolve(marked(content)))
  }, [preview])

  useEffect(() => {
    updatePreview(data.content)
  }, [data.content, updatePreview])

  useEffect(() => {
    if (preview) updatePreview(data.content)
  }, [preview, data.content, updatePreview])

  function set<K extends keyof PostData>(key: K, value: PostData[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  function addTag() {
    const t = tagInput.trim()
    if (t && !data.tags.includes(t)) {
      set('tags', [...data.tags, t])
    }
    setTagInput('')
  }

  function removeTag(tag: string) {
    set('tags', data.tags.filter((t) => t !== tag))
  }

  async function uploadImage(file: File) {
    setUploading(true)
    const form = new FormData()
    form.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: form })
    const json = await res.json()
    setUploading(false)
    return json.url as string
  }

  async function handleSave(status?: 'draft' | 'published') {
    setSaving(true)
    setError('')

    const payload = { ...data, status: status ?? data.status }

    const res = await fetch(postId ? `/api/admin/posts/${postId}` : '/api/admin/posts', {
      method: postId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const json = await res.json()
      setError(json.error ?? 'Fehler beim Speichern')
      setSaving(false)
      return
    }

    const saved = await res.json()
    router.push(`/admin/posts/${saved.id}`)
    router.refresh()
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="p-8 text-sm text-neutral-600">Laden…</div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold text-white mb-1">
              {postId ? 'Post bearbeiten' : 'Neuer Post'}
            </h1>
            {postId && (
              <a
                href={`/blog/${data.slug}`}
                target="_blank"
                className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
              >
                /blog/{data.slug} ↗
              </a>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="px-4 py-2 text-sm border border-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-900 transition-colors disabled:opacity-50"
            >
              {saving ? 'Speichern…' : 'Als Entwurf speichern'}
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={saving}
              className="px-4 py-2 text-sm bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50"
            >
              {data.status === 'published' ? 'Aktualisieren' : 'Veröffentlichen'}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 text-sm text-red-500 bg-red-950/30 border border-red-900 rounded-lg px-4 py-2">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">
            {/* Title */}
            <div>
              <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-widest">Titel *</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => set('title', e.target.value)}
                placeholder="Post-Titel"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-widest">Slug</label>
              <input
                type="text"
                value={data.slug}
                onChange={(e) => {
                  setSlugManuallyEdited(true)
                  set('slug', e.target.value)
                }}
                placeholder="mein-blog-post"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors font-mono"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-widest">Zusammenfassung</label>
              <textarea
                value={data.excerpt}
                onChange={(e) => set('excerpt', e.target.value)}
                placeholder="Kurze Beschreibung für die Liste und SEO…"
                rows={2}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-neutral-500 uppercase tracking-widest">Inhalt (Markdown)</label>
                <button
                  type="button"
                  onClick={() => setPreview((v) => !v)}
                  className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {preview ? <Code className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  {preview ? 'Bearbeiten' : 'Vorschau'}
                </button>
              </div>

              {preview ? (
                <div
                  className="min-h-[400px] bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: previewHtml }}
                />
              ) : (
                <textarea
                  value={data.content}
                  onChange={(e) => set('content', e.target.value)}
                  placeholder="# Überschrift&#10;&#10;Text hier…"
                  rows={20}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-y font-mono leading-relaxed"
                />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Status */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <label className="block text-xs text-neutral-500 mb-3 uppercase tracking-widest">Status</label>
              <div className="flex gap-2">
                {(['draft', 'published'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => set('status', s)}
                    className={`flex-1 py-2 text-xs rounded-lg border transition-colors ${
                      data.status === s
                        ? 'bg-neutral-800 border-neutral-600 text-white'
                        : 'border-neutral-800 text-neutral-500 hover:border-neutral-700 hover:text-neutral-300'
                    }`}
                  >
                    {s === 'draft' ? 'Entwurf' : 'Veröffentlicht'}
                  </button>
                ))}
              </div>
            </div>

            {/* Cover image */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <label className="block text-xs text-neutral-500 mb-3 uppercase tracking-widest">Titelbild</label>

              {data.cover_image && (
                <div className="relative mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.cover_image}
                    alt="Cover"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => set('cover_image', '')}
                    className="absolute top-1.5 right-1.5 p-1 bg-black/70 rounded-md text-neutral-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-500 hover:text-neutral-300 transition-colors border border-dashed border-neutral-800 rounded-lg px-3 py-2.5 hover:border-neutral-700">
                <Upload className="h-3.5 w-3.5" />
                {uploading ? 'Hochladen…' : 'Bild hochladen'}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={uploading}
                  onChange={async (e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      const url = await uploadImage(file)
                      set('cover_image', url)
                    }
                  }}
                />
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  value={data.cover_image}
                  onChange={(e) => set('cover_image', e.target.value)}
                  placeholder="Oder URL eingeben…"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <label className="block text-xs text-neutral-500 mb-3 uppercase tracking-widest">Tags</label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs px-2 py-0.5 rounded-full"
                  >
                    {tag}
                    <button onClick={() => removeTag(tag)} className="text-neutral-500 hover:text-white">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag() } }}
                  placeholder="Tag hinzufügen…"
                  className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <button
                  onClick={addTag}
                  className="px-3 py-1.5 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* SEO */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3">
              <label className="block text-xs text-neutral-500 uppercase tracking-widest">SEO</label>
              <div>
                <label className="block text-xs text-neutral-600 mb-1">Meta-Titel</label>
                <input
                  type="text"
                  value={data.seo_title}
                  onChange={(e) => set('seo_title', e.target.value)}
                  placeholder="Fällt auf Titel zurück"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-600 mb-1">Meta-Beschreibung</label>
                <textarea
                  value={data.seo_description}
                  onChange={(e) => set('seo_description', e.target.value)}
                  placeholder="Fällt auf Zusammenfassung zurück"
                  rows={2}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
