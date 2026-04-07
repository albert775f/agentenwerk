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
  "Wissen steckt in PDFs, E-Mails, Handbüchern und in Köpfen",
  "Neue Mitarbeiter brauchen Monate bis sie produktiv werden",
  "Gleiche Fragen werden immer wieder an dieselben Personen gestellt",
  "Entwickler verbringen Zeit mit Boilerplate, Code-Reviews und Dokumentation statt mit dem eigentlichen Problem",
  "ChatGPT ist praktisch – aber keine Firmendaten wollen in OpenAI-Server",
]

const wasIchBaue = [
  "Privater KI-Assistent der auf Ihren eigenen Dokumenten basiert (RAG-System)",
  "KI-Coding-Assistent der Ihre Codebase kennt – für Reviews, Dokumentation und Boilerplate. Kein Code verlässt Ihre Infrastruktur.",
  "Läuft auf Ihrer Infrastruktur oder DSGVO-konformem deutschem Hosting",
  "Zugriff per Chat-Interface oder direkt in bestehende Tools integriert",
  "Dokumententypen: PDFs, Word, Confluence, Notion, E-Mails, Datenbanken, Code-Repositories",
]

const prozessSteps = [
  {
    number: "01",
    title: "Wissensbasis definieren",
    description: "Welche Dokumente? Wer soll Zugriff haben?",
  },
  {
    number: "02",
    title: "System aufsetzen & befüllen",
    description: "Dokumente einlesen, Retrieval testen, Interface bauen.",
  },
  {
    number: "03",
    title: "Einführen & warten",
    description: "Team onboarden, Wissensbasis aktuell halten.",
  },
]

const fitCheckPasst = [
  "Wissen im Unternehmen vorhanden aber schwer zugänglich ist",
  "Datenschutz ein explizites Kriterium ist (kein ChatGPT für interne Daten)",
  "Das Team bereit ist Dokumente zu pflegen",
]

const fitCheckNicht = [
  "Keine strukturierten Dokumente existieren (dann kommt das System vor dem LLM)",
]

const faqs = [
  {
    q: "Verlassen unsere Daten das Unternehmen?",
    a: "Nein – das System läuft auf Ihrer Infrastruktur oder einem deutschen Server. Keine Daten gehen an OpenAI oder andere externe Anbieter.",
  },
  {
    q: "Wie aktuell sind die Antworten?",
    a: "So aktuell wie die Dokumente. Wir bauen einen Update-Prozess damit die Wissensbasis aktuell bleibt.",
  },
  {
    q: "Können Mitarbeiter dem System auch neue Infos beibringen?",
    a: "Ja – je nach Setup können Dokumente direkt hochgeladen oder synchronisiert werden.",
  },
  {
    q: "Gilt das auch für den Coding-Assistenten?",
    a: "Ja. Anders als GitHub Copilot oder ChatGPT verlässt Ihr Quellcode das Unternehmen nicht. Das Modell läuft lokal oder auf einem deutschen Server – DSGVO-konform und ohne Lizenzrisiken durch trainierte externe Modelle.",
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CorporateLLMPage() {
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
              Ihr Unternehmens-Wissen. KI-zugänglich.
            </h1>

            <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
              Ein privater KI-Assistent auf Ihren eigenen Dokumenten und Ihrer Codebase – DSGVO-konform, auf Ihrer Infrastruktur.
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

      {/* ── Section 3: Was Sie bekommen ─────────────────────────────────── */}
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
              Was Sie bekommen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {wasIchBaue.map((item, i) => (
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 text-neutral-600 text-sm max-w-2xl"
          >
            Typisch: Ollama oder OpenAI (EU endpoints), Qdrant oder pgvector, optional Authentifizierung via bestehende SSO-Lösung. Für Coding: direkte Integration in VS Code, JetBrains oder per API.
          </motion.p>
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
              <p className="text-neutral-600 uppercase text-xs tracking-widest mb-3">Beispiel 1 – Wissen</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Ein KMU mit 40 Mitarbeitern hat 6 Jahre Prozessdokumentation in Confluence – niemand findet was, neues Personal fragt ständig nach.
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
                Interner KI-Assistent der alle Dokumente kennt und in natürlicher Sprache antwortet. Neue Mitarbeiter werden in Stunden statt Wochen produktiv.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6"
            >
              <p className="text-neutral-600 uppercase text-xs tracking-widest mb-3">Beispiel 2 – Coding</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Ein Entwicklerteam verbringt täglich Stunden mit Code-Reviews, Testschreiben und internen API-Dokumentationen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6"
            >
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-3">Lösung</p>
              <p className="text-white text-sm leading-relaxed">
                Privater Coding-Assistent der die eigene Codebase kennt – generiert Dokumentation, unterstützt Reviews und schlägt Implementierungen im eigenen Stil vor.
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
              Wir schauen mir Ihre konkrete Situation an und sage Ihnen ehrlich ob und wie ein interner KI-Assistent Sinn macht.
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
