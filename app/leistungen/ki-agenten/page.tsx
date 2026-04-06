'use client'

import { motion, type Variants } from "framer-motion"
import { ChevronRight, Check, X, MoveRight, ArrowLeft } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const problemBullets = [
  "Gleiche Aufgaben werden täglich manuell wiederholt",
  "Daten werden zwischen Tools manuell kopiert",
  "Mitarbeiter verbringen Zeit mit Klassifizieren, Weiterleiten, Zusammenfassen",
  "Automatisierungstools wurden schon versucht – aber nichts passt wirklich",
]

const deliverables = [
  "KI-Agenten die Prozesse eigenständig ausführen (E-Mails, Dokumente, Daten)",
  "Automatisierungen zwischen bestehenden Tools (CRM, Slack, Sheets, ERP, APIs)",
  "Workflows mit LLM-Intelligenz für unstrukturierte Inputs (Texte, PDFs, E-Mails)",
  "Monitoring und Fehlerbehandlung – damit es zuverlässig läuft",
]

const steps = [
  {
    number: "01",
    title: "Prozess identifizieren",
    description: "Welche Aufgabe kostet täglich die meiste Zeit?",
  },
  {
    number: "02",
    title: "Agent bauen & testen",
    description: "Erst im Sandbox, dann live in Ihren Systemen.",
  },
  {
    number: "03",
    title: "Übergeben & beobachten",
    description: "Einweisung, erste Wochen gemeinsam beobachten.",
  },
]

const useCases = [
  {
    problem:
      "Eingehende Bewerbungen werden manuell gesichtet, kategorisiert und weitergeleitet.",
    solution:
      "Agent liest Bewerbungen, gleicht mit Anforderungsprofil ab und erstellt strukturierte Zusammenfassung für HR.",
  },
  {
    problem: "Rechnungsdaten aus PDFs werden manuell ins ERP eingetragen.",
    solution:
      "Agent extrahiert Daten automatisch, validiert und übergibt ans System. Ausnahmen werden markiert und eskaliert.",
  },
]

const fitYes = [
  "Eine Aufgabe täglich oder wöchentlich nach gleichem Muster ausgeführt wird",
  "Der Prozess heute Zeit kostet, aber kein echtes Urteilsvermögen braucht",
  "API-Zugriff auf die relevanten Systeme möglich ist",
]

const fitNo = [
  "Der Prozess sehr unstrukturiert und kontextabhängig ist",
  "Keine Systemzugriffe gegeben werden können",
]

const faqs = [
  {
    q: "Ist das dasselbe wie n8n oder Zapier?",
    a: "Wir nutzen diese Tools wo sie passen – aber wir bauen die Logik und den Kontext drum herum. Ein Agent der wirklich funktioniert ist mehr als ein Workflow-Baukasten.",
  },
  {
    q: "Was passiert wenn der Agent Fehler macht?",
    a: "Fehlerbehandlung ist Teil des Builds. Kritische Schritte bekommen immer einen menschlichen Checkpoint.",
  },
  {
    q: "Bleibt der Agent bei mir oder sind das Ihre Systeme?",
    a: "Der Agent läuft in Ihrer Infrastruktur oder in einer für Sie verwalteten Umgebung. Kein Lock-in.",
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function KiAgentenPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-black py-32 min-h-[60vh] flex items-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-2xl flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <a
                href="/#leistungen"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-400 transition-colors mb-4"
              >
                <ArrowLeft className="h-3 w-3" />
                Alle Leistungen
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Badge
                variant="secondary"
                className="w-fit bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
              >
                Leistungen
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Prozesse automatisieren. Nicht delegieren.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-neutral-400 text-base leading-relaxed max-w-xl"
            >
              Wir bauen KI-Agenten die wiederkehrende Aufgaben in Ihren Systemen übernehmen – keine
              SaaS-Abos, keine Black Boxes.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a href="/termin">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
                >
                  Erstgespräch buchen <MoveRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Problem ──────────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-10"
            >
              Kennen Sie das?
            </motion.h2>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {problemBullets.map((bullet) => (
                <motion.li key={bullet} variants={fadeUp} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                  <span className="text-neutral-400 leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Was wir bauen ─────────────────────────────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-10"
            >
              Was wir bauen
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {deliverables.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-5"
                >
                  <ChevronRight className="h-4 w-4 text-neutral-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-300 leading-relaxed text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Wie es läuft ─────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-14"
            >
              Wie es läuft
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {steps.map((step) => (
                <motion.div key={step.number} variants={fadeUp} className="flex flex-col gap-3">
                  <span className="text-neutral-700 font-mono text-5xl font-bold leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Use Cases ────────────────────────────────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-10"
            >
              Beispiele aus der Praxis
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {useCases.map((uc, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-3">
                    <span className="text-neutral-600 uppercase text-xs tracking-widest font-medium">
                      Problem
                    </span>
                    <p className="text-neutral-400 leading-relaxed text-sm">{uc.problem}</p>
                  </div>
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-3">
                    <span className="text-neutral-500 uppercase text-xs tracking-widest font-medium">
                      Lösung
                    </span>
                    <p className="text-white leading-relaxed text-sm">{uc.solution}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Fit-Check ────────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-10"
            >
              Passt das zu Ihnen?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div variants={fadeUp}>
                <h3 className="text-white font-semibold mb-4">Passt, wenn...</h3>
                <ul className="space-y-3">
                  {fitYes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-green-500/60 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-white font-semibold mb-4">Eher nicht, wenn...</h3>
                <ul className="space-y-3">
                  {fitNo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500/60 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-10"
            >
              Häufige Fragen
            </motion.h2>

            <motion.div variants={staggerContainer}>
              {faqs.map((faq) => (
                <motion.div key={faq.q} variants={fadeUp}>
                  <p className="text-white font-semibold mb-2">{faq.q}</p>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center flex flex-col items-center gap-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-white"
            >
              Klingt relevant?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-400 leading-relaxed max-w-md">
              Lassen Sie uns in 30 Minuten reden – kostenlos und unverbindlich.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="/termin">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
                >
                  Erstgespräch buchen <MoveRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
