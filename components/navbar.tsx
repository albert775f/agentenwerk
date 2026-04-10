'use client'

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Wie wir arbeiten", href: "/#prozess" },
  { label: "Team", href: "/#ueber-uns" },
  { label: "Blog", href: "/blog" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-neutral-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
          agentenwerk
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/termin" className="hidden md:flex">
            <Button
              size="sm"
              className="bg-white text-black hover:bg-neutral-200 font-medium rounded-lg px-4"
            >
              Erstgespräch buchen
            </Button>
          </a>
          <button className="md:hidden text-neutral-400 hover:text-white transition-colors">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
