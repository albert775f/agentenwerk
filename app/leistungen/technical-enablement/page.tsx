'use client'

import { motion } from "framer-motion"
import { MoveRight, ChevronRight, Check, X } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// ─── Data ────────────────────────────────────────────────────────────────────

const problemBullets = [
  "Das Dev-Team hat gehört von KI-Tools – aber nutzt sie kaum produktiv",
  "Neue Konzepte wie Sub-Agents, Agent-Teams, RAG, Tool-Use, MCP oder Claude Code sind unklar",
  "Productivity-Potenzial wird nicht ausgeschöpft, weil niemand den Einstieg zeigt",
  "Externe Kurse sind zu theoretisch und zu weit weg vom echten Arbeitsalltag",
]

const wasWirMachen = [
  "Hands-on Sessions direkt im Team (remote oder on-site)",
  "Konkrete Workflows die sofort in bestehende Projekte übertragen werden können",
  "Themen: KI-gestützte Entwicklung, Sub-Agents & Agent-Teams, LLM-Integration, Prompt Engineering, Tool-Use, MCP, Claude Code, lokale Modelle",
  "Kein PowerPoint – wir bauen direkt zusammen",
]

const formate = [
  {
    title: "Intensiv-Tag",
    description: "1 Tag, 1 Thema, ganzes Team",
  },
  {
    title: "Workshop-Serie",
    description: "3–5 Sessions à 2–3h über 2–3 Wochen",
  },
  {
    title: "Embedded Coaching",
    description: "Regelmäßige Sessions über 1–3 Monate",
  },
]

const prozessSteps = [
  {
    number: "01",
    title: "Ziel & Format klären",
    description: "Was soll das Team können? Welches Format passt?",
  },
  {
    number: "02",
    title: "Sessions vorbereiten",
    description: "Angepasst an Ihren Stack und Ihre konkreten Projekte.",
  },
  {
    number: "03",
    title: "Hands-on umsetzen",
    description: "Wir bauen direkt im Team – neues Wissen sofort angewendet.",
  },
]

const fitCheckPasst = [
  "Das Team technisch ist (mind. Junior-Developer-Level)",
  "Konkrete Projekte existieren auf die neues Wissen direkt angewendet wird",
  "Jemand im Team oder Management das Thema wirklich vorantreiben will",
]

const fitCheckNicht = [
  "Nur ein 'KI-Awareness'-Training für nicht-technische Teams gefragt ist",
]

const faqs = [
  {
    q: "Für welches Tech-Level ist das geeignet?",
    a: "Ab solidem Junior-Level. Vorkenntnisse zu KI sind nicht nötig – aber Programmiererfahrung schon.",
  },
  {
    q: "Remote oder on-site?",
    a: "Beides möglich. On-site (Berlin, Braunschweig und Umgebung) bevorzugt für intensive Formate.",
  },
  {
    q: "Gibt es Unterlagen nach den Sessions?",
    a: "Ja – Code-Beispiele, Ressourcen und ein Follow-up-Dokument nach jeder Session.",
  },
  {
    q: "Kann das auf unseren spezifischen Stack angepasst werden?",
    a: "Ja, das ist der Punkt. Kein generischer Kurs – alles an Ihrem konkreten Stack.",
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TechnicalEnablementPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative py-32 min-h-[60vh] flex items-center bg-black overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <a
              href="/#leistungen"
              className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors w-fit"
            >
              ← Alle Leistungen
            </a>

            <Badge
              variant="secondary"
              className="w-fit bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              Leistungen
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Software entwickeln in der KI-Ära.
            </h1>

            <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
              Wir arbeiten direkt mit Ihrem Entwicklerteam – hands-on, nicht als externe Berater. Moderne KI-Workflows, Agent-Architekturen, praktisch anwendbar.
            </p>

            <div className="pt-2">
              <a href="/termin">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
                >
                  Erstgespräch buchen <MoveRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Problem ──────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Kennen Sie das?
            </h2>
          </motion.div>

          <ul className="flex flex-col gap-4 max-w-2xl">
            {problemBullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                <span className="text-neutral-400 leading-relaxed">{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 3: Was wir zusammen machen ──────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Was wir zusammen machen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-12">
            {wasWirMachen.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 flex gap-3"
              >
                <ChevronRight className="h-4 w-4 text-neutral-600 mt-0.5 flex-shrink-0" />
                <p className="text-neutral-300 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-neutral-500 text-sm uppercase tracking-widest mb-6">Format</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
              {formate.map((format, i) => (
                <div
                  key={i}
                  className="border border-neutral-800 rounded-xl p-4 bg-neutral-900/40"
                >
                  <p className="text-white font-semibold mb-1">{format.title}</p>
                  <p className="text-neutral-400 text-sm">{format.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Wie es läuft ──────────────────────────────────────── */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Wie es läuft
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prozessSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <span className="text-neutral-700 font-mono text-5xl font-bold">
                  {step.number}
                </span>
                <h3 className="text-white font-semibold text-lg tracking-tight">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Use Case ──────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ein konkretes Beispiel
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6"
            >
              <p className="text-neutral-600 uppercase text-xs tracking-widest mb-3">Problem</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Ein Startup-Entwicklerteam (5 Personen) will KI in ihre Produkte einbauen – aber niemand weiß wo anfangen. Externe Kurse waren zu abstrakt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6"
            >
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-3">Lösung</p>
              <p className="text-white text-sm leading-relaxed">
                3 hands-on Sessions: Tag 1 – LLM-Integration in bestehenden Stack. Tag 2 – Agent bauen mit Tool-Use. Tag 3 – RAG auf eigenen Daten. Nach einer Woche: zwei neue Features im Sprint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Fit-Check ─────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Fit-Check
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-white font-semibold mb-6">Passt, wenn...</h3>
              <ul className="flex flex-col gap-4">
                {fitCheckPasst.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="h-4 w-4 text-green-500/60 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-white font-semibold mb-6">Eher nicht, wenn...</h3>
              <ul className="flex flex-col gap-4">
                {fitCheckNicht.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <X className="h-4 w-4 text-red-500/60 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 7: FAQ ───────────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Häufige Fragen
            </h2>
          </motion.div>

          <div className="max-w-2xl">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="mb-6"
              >
                <p className="text-white font-semibold mb-2">{faq.q}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center gap-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl">
              Klingt relevant?
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Wir schauen mir Ihr Team und Ihre Projekte an und sage Ihnen ehrlich welches Format Sinn macht – und was danach möglich ist.
            </p>
            <a href="/termin">
              <Button
                size="lg"
                className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
              >
                Erstgespräch buchen <MoveRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
