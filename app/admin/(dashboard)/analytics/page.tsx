'use client'

import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

type Range = 7 | 30 | 90

interface Analytics {
  daily: { date: string; count: number }[]
  topPages: { path: string; count: number }[]
  topReferrers: { referrer: string; count: number }[]
  total: number
}

export default function AnalyticsPage() {
  const [range, setRange] = useState<Range>(30)
  const [data, setData] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/admin/analytics?days=${range}`)
      .then((r) => r.json())
      .then((d) => {
        setData(d)
        setLoading(false)
      })
  }, [range])

  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold text-white mb-1">Analytics</h1>
            <p className="text-sm text-neutral-500">
              {loading ? '…' : data?.total.toLocaleString('de-DE')} Pageviews
            </p>
          </div>
          <div className="flex gap-1.5 bg-neutral-950 border border-neutral-800 rounded-lg p-1">
            {([7, 30, 90] as Range[]).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  range === r
                    ? 'bg-neutral-700 text-white'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {r}d
              </button>
            ))}
          </div>
        </div>

        {/* Line chart */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 mb-6">
          <p className="text-xs text-neutral-500 mb-4 uppercase tracking-widest">Pageviews über Zeit</p>
          {loading ? (
            <div className="h-52 flex items-center justify-center text-sm text-neutral-700">Laden…</div>
          ) : (data?.daily.length ?? 0) === 0 ? (
            <div className="h-52 flex items-center justify-center text-sm text-neutral-700">
              Noch keine Daten für diesen Zeitraum.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data?.daily ?? []} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                <XAxis
                  dataKey="date"
                  tick={{ fill: '#525252', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: string) =>
                    new Date(v).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })
                  }
                />
                <YAxis
                  tick={{ fill: '#525252', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />
                <Tooltip
                  contentStyle={{
                    background: '#171717',
                    border: '1px solid #262626',
                    borderRadius: '8px',
                    color: '#fafafa',
                    fontSize: '12px',
                  }}
                  labelFormatter={(v) =>
                    new Date(String(v)).toLocaleDateString('de-DE', {
                      weekday: 'short', day: '2-digit', month: 'short',
                    })
                  }
                  formatter={(v) => [Number(v).toLocaleString('de-DE'), 'Pageviews']}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  dot={false}
                  activeDot={{ r: 4, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top pages */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
            <p className="text-xs text-neutral-500 mb-4 uppercase tracking-widest">Top Seiten</p>
            {loading ? (
              <div className="text-sm text-neutral-700">Laden…</div>
            ) : (data?.topPages.length ?? 0) === 0 ? (
              <div className="text-sm text-neutral-700">Keine Daten</div>
            ) : (
              <ol className="space-y-2">
                {data?.topPages.map(({ path, count }, i) => (
                  <li key={path} className="flex items-center gap-3 text-sm">
                    <span className="w-5 text-xs text-neutral-700 shrink-0">{i + 1}</span>
                    <span className="flex-1 text-neutral-300 truncate font-mono text-xs">{path}</span>
                    <span className="text-neutral-500 text-xs shrink-0">{Number(count).toLocaleString('de-DE')}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Top referrers */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
            <p className="text-xs text-neutral-500 mb-4 uppercase tracking-widest">Top Referrer</p>
            {loading ? (
              <div className="text-sm text-neutral-700">Laden…</div>
            ) : (data?.topReferrers.filter((r) => r.referrer).length ?? 0) === 0 ? (
              <div className="text-sm text-neutral-700">Keine Daten</div>
            ) : (
              <ol className="space-y-2">
                {data?.topReferrers
                  .filter((r) => r.referrer)
                  .map(({ referrer, count }, i) => {
                    let domain = referrer
                    try { domain = new URL(referrer).hostname } catch {}
                    return (
                      <li key={referrer} className="flex items-center gap-3 text-sm">
                        <span className="w-5 text-xs text-neutral-700 shrink-0">{i + 1}</span>
                        <span className="flex-1 text-neutral-300 truncate text-xs">{domain}</span>
                        <span className="text-neutral-500 text-xs shrink-0">{Number(count).toLocaleString('de-DE')}</span>
                      </li>
                    )
                  })}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
