'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  MoveRight,
  Bot,
  Phone,
  Database,
  LayoutDashboard,
  GraduationCap,
  User,
} from "lucide-react"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// ─── Data ────────────────────────────────────────────────────────────────────

const adjectives = ["intelligent", "effizient", "automatisiert", "skalierbar", "zukunftssicher"]

const services = [
  {
    icon: <LayoutDashboard className="h-5 w-5 text-neutral-400" />,
    title: "Web Apps statt Excel",
    description:
      "Operative Inhouse-Tools die echte Workflows ersetzen – gebaut in Tagen, nicht Monaten.",
    href: "/leistungen/web-apps",
  },
  {
    icon: <Bot className="h-5 w-5 text-neutral-400" />,
    title: "KI-Agenten & Automatisierungen",
    description:
      "Wiederkehrende Prozesse automatisieren mit intelligenten Agenten direkt in Ihren Systemen.",
    href: "/leistungen/ki-agenten",
  },
  {
    icon: <Phone className="h-5 w-5 text-neutral-400" />,
    title: "Voice Agents",
    description:
      "KI-gestützte Telefonie für Outbound, Lead-Reaktivierung und Kundenkommunikation.",
    href: "/leistungen/voice-agents",
  },
  {
    icon: <Database className="h-5 w-5 text-neutral-400" />,
    title: "Corporate LLM",
    description:
      "Ein privater, DSGVO-konformer KI-Assistent auf Ihren eigenen Unternehmensdaten.",
    href: "/leistungen/corporate-llm",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-neutral-400" />,
    title: "Technical Enablement",
    description:
      "Wir bringen Ihrem Entwicklerteam bei, wie man Software in der KI-Ära baut – direkt im Team.",
    href: "/leistungen/technical-enablement",
  },
]

const fuerWenCards = [
  "Ihre Teams noch mit Excel-Tabellen und manuellen Prozessen arbeiten",
  "Sie KI einsetzen wollen, aber keine Lust auf jahrelange Digitalisierungsprojekte haben",
  "Ihre Entwickler wissen wollen, wie man Software in der KI-Ära baut",
  "Sie einen konkreten Engpass haben – und jemanden, der ihn behebt",
]

const prozessSteps = [
  {
    number: "01",
    title: "Erstgespräch (30 Min)",
    description:
      "Wir reden über Ihren konkreten Engpass. Kein Pitch, keine Präsentation – nur Ihr Problem.",
  },
  {
    number: "02",
    title: "Analyse & Pilot",
    description:
      "Wir schauen mir Ihre Prozesse und Systeme an und liefere einen ersten funktionierenden Prototyp.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Was funktioniert, bauen wir aus. Direkt in Ihren Systemen, mit Ihrem Team.",
  },
]

const useCases = [
  {
    problem:
      "Das Vertriebsteam baut jedes Angebot manuell in Word zusammen – dauert 45 Minuten pro Stück.",
    loesung:
      "Eine Web App verbindet CRM, Produktdatenbank und Vorlagen. Angebot fertig in 3 Minuten.",
  },
  {
    problem:
      "Eingehende Anfragen werden manuell gesichtet, weitergeleitet und beantwortet – oft zu langsam.",
    loesung:
      "Ein KI-Agent klassifiziert, priorisiert und beantwortet Standardanfragen automatisch.",
  },
  {
    problem:
      "Hunderte alte Leads im CRM – niemand hat Zeit für manuelles Follow-up.",
    loesung:
      "Ein Voice Agent ruft automatisiert an, qualifiziert und bucht Termine direkt in den Kalender.",
  },
  {
    problem:
      "Firmen-Know-how steckt in PDFs, E-Mails und in Köpfen – neues Personal braucht Monate.",
    loesung:
      "Ein interner KI-Assistent auf den eigenen Dokumenten beantwortet Fragen sofort, DSGVO-konform.",
  },
  {
    problem:
      "Das Dev-Team baut weiter wie 2020 – KI-Tools werden kaum genutzt, Produktivität stagniert.",
    loesung:
      "3 Tage hands-on im Team: moderne KI-Workflows, Agent-Architekturen, Tool-Integration.",
  },
]

// ─── Components ──────────────────────────────────────────────────────────────

function AnimatedWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % adjectives.length)
    }, 2200)
    return () => clearTimeout(id)
  }, [index])

  return (
    <span className="relative flex overflow-hidden h-[1.15em]">
      &nbsp;
      {adjectives.map((word, i) => (
        <motion.span
          key={word}
          className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 font-bold"
          initial={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          animate={
            index === i
              ? { y: 0, opacity: 1 }
              : { y: index > i ? -80 : 80, opacity: 0 }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  className?: string
}) {
  return (
    <li className={`min-h-[13rem] list-none ${className ?? ""}`}>
      <div className="relative h-full rounded-2xl border border-neutral-800 p-[3px]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <Card className="relative h-full rounded-[13px] bg-neutral-900/80 border-0 shadow-none">
          <CardContent className="flex h-full flex-col gap-4 p-6">
            <div className="w-fit rounded-lg border border-neutral-700 bg-neutral-800/80 p-2">
              {icon}
            </div>
            <div className="space-y-2 mt-auto">
              <h3 className="text-base font-semibold text-neutral-100 tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {description}
              </p>
            </div>
            <a
              href={href}
              className="text-xs text-neutral-400 hover:text-white transition-colors mt-1 w-fit"
            >
              Mehr erfahren →
            </a>
          </CardContent>
        </Card>
      </div>
    </li>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        {/* Spline robot – absolute right half */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Text content */}
        <div className="pointer-events-none relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
          <div className="pointer-events-auto w-full md:w-1/2 py-32 flex flex-col gap-6">
            <Badge
              variant="secondary"
              className="w-fit bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              KI-Beratung für KMUs
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                Ihr Unternehmen
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                wird
              </span>
              <AnimatedWord />
            </h1>

            <p className="text-neutral-400 text-base leading-relaxed max-w-md">
              Wir bauen KI-Agenten, interne Tools und Automatisierungen direkt in Ihre Prozesse ein – hands-on, ohne monatelange Konzeptphasen.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/termin">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
                >
                  Erstgespräch buchen <MoveRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="/#leistungen">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 bg-transparent hover:bg-neutral-800 rounded-lg"
                >
                  Leistungen ansehen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Für wen ──────────────────────────────────────────── */}
      <section id="fuer-wen" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-neutral-400 text-lg leading-relaxed">
              agentenwerk passt, wenn...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fuerWenCards.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6"
              >
                <p className="text-neutral-300 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Leistungen ───────────────────────────────────────── */}
      <section id="leistungen" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <Badge
              variant="secondary"
              className="mb-4 bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              Leistungen
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Was wir bauen
            </h2>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Fünf Bereiche, ein Ziel: KI die wirklich eingesetzt wird.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                {...s}
                className={
                  i === 4 ? "sm:col-span-2 sm:max-w-[calc(50%-8px)] sm:mx-auto sm:w-full lg:col-span-1 lg:max-w-none lg:mx-0" : ""
                }
              />
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 4: Wie wir arbeiten ──────────────────────────────────── */}
      <section id="prozess" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <Badge
              variant="secondary"
              className="mb-4 bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              Prozess
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Wie wir arbeiten
            </h2>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Kein Pitch, keine Strategiepapiere. Direkt ans Problem.
            </p>
          </div>

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
                <span className="text-4xl font-bold font-mono text-neutral-700">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Use Cases ────────────────────────────────────────── */}
      <section id="use-cases" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <Badge
              variant="secondary"
              className="mb-4 bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              Use Cases
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Typische Engpässe
            </h2>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Erkennen Sie sich wieder?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className={`bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4${i === 4 ? " md:col-span-2 md:max-w-[calc(50%-8px)] md:mx-auto md:w-full" : ""}`}
              >
                <div>
                  <p className="text-neutral-600 text-xs uppercase tracking-widest mb-2">
                    Problem:
                  </p>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {uc.problem}
                  </p>
                </div>
                <div className="border-t border-neutral-800" />
                <div>
                  <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">
                    Lösung:
                  </p>
                  <p className="text-white text-sm font-medium leading-relaxed">
                    {uc.loesung}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/termin"
              className="text-neutral-400 hover:text-white underline text-sm transition-colors"
            >
              Ähnliches Problem? Lassen Sie uns reden.
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 6: Über mich ────────────────────────────────────────── */}
            {/* Team Section */}
            <section id="ueber-uns" className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <Badge
              variant="secondary"
              className="mb-4 bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Die Menschen hinter agentenwerk
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Albert Artykov */}
            <div className="border-t border-neutral-800 pt-6">
              <p className="text-xs text-neutral-600 uppercase tracking-widest mb-3">Gründer</p>
              <h3 className="text-white font-semibold text-lg">Albert Artykov</h3>
              <p className="text-neutral-500 text-sm mt-1">KI-Entwicklung & Strategie</p>
              <a
                href="https://www.linkedin.com/in/albertartykov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-white transition-colors mt-4 text-xs uppercase tracking-widest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>

            {/* David Raschke */}
            <div className="border-t border-neutral-800 pt-6">
              <p className="text-xs text-neutral-600 uppercase tracking-widest mb-3">Team</p>
              <h3 className="text-white font-semibold text-lg">David Raschke</h3>
              <p className="text-neutral-500 text-sm mt-1">Vertriebsleiter</p>
            </div>

            {/* Yi-Fu Liu */}
            <div className="border-t border-neutral-800 pt-6">
              <p className="text-xs text-neutral-600 uppercase tracking-widest mb-3">Team</p>
              <h3 className="text-white font-semibold text-lg">Yi-Fu Liu</h3>
              <p className="text-neutral-500 text-sm mt-1">Beratung & Softwareentwicklung</p>
              <a
                href="https://www.linkedin.com/in/yi-fu-liu-9138803b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-white transition-colors mt-4 text-xs uppercase tracking-widest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl">
              Einen konkreten Engpass? Lassen Sie uns 30 Minuten reden.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Kostenlos, unverbindlich – wir melden uns in der Regel am gleichen Tag.
            </p>
            <a href="/termin">
              <Button
                size="lg"
                className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
              >
                Erstgespräch buchen <MoveRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Separator className="bg-neutral-900" />

      <Footer />
    </div>
  )
}
