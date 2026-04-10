'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, BarChart2, Lightbulb, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/admin', label: 'Übersicht', icon: LayoutDashboard, exact: true },
  { href: '/admin/posts', label: 'Blog Posts', icon: FileText },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/admin/ideas', label: 'Ideen', icon: Lightbulb },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 bg-neutral-950 border-r border-neutral-900 flex flex-col">
        <div className="h-16 flex items-center px-5 border-b border-neutral-900">
          <Link href="/" className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
            agentenwerk
          </Link>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-0.5">
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors',
                  active
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900'
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t border-neutral-900">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900 transition-colors"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Abmelden
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
