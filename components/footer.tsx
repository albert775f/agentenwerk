const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "/#kontakt" },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-neutral-600 tracking-widest uppercase">
          © 2026 agentenwerk
        </span>
        <nav className="flex gap-6">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
