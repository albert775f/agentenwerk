'use client'

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall, Bot, Cog, BarChart3, ShieldCheck } from "lucide-react"
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

const services = [
  {
    icon: <Bot className="h-5 w-5 text-neutral-400" />,
    title: "KI-Strategie",
    description:
      "Wir entwickeln eine maßgeschneiderte KI-Roadmap für Ihr Unternehmen – von der Potenzialanalyse bis zur Implementierung.",
  },
  {
    icon: <Cog className="h-5 w-5 text-neutral-400" />,
    title: "Prozessautomatisierung",
    description:
      "Automatisieren Sie repetitive Aufgaben mit intelligenten KI-Agenten und steigern Sie die Effizienz Ihrer Teams.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-neutral-400" />,
    title: "Datenanalyse & Insights",
    description:
      "Verwandeln Sie Ihre Rohdaten in handlungsrelevante Erkenntnisse mithilfe modernster Machine-Learning-Modelle.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-neutral-400" />,
    title: "Verantwortungsvolle KI",
    description:
      "Wir begleiten Sie bei der sicheren und ethisch verantwortungsvollen Einführung von KI-Systemen in Ihrem Betrieb.",
  },
]

const adjectives = ["intelligent", "effizient", "automatisiert", "skalierbar", "zukunftssicher"]

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
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <li className="min-h-[13rem] list-none">
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

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        {/* Spline robot – absolute right half */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Text content – contained left, pointer-events-none so Spline gets mouse events */}
        <div className="pointer-events-none relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
          <div className="pointer-events-auto w-full md:w-1/2 py-32 flex flex-col gap-6">
            <Badge
              variant="secondary"
              className="w-fit bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              KI-Beratung
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
              Wir begleiten Unternehmen auf dem Weg in die KI-Ära – mit
              praxisnaher Beratung, intelligenten Agenten und messbaren
              Ergebnissen.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/termin">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
                >
                  Beratung anfragen <MoveRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="/termin">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 bg-transparent rounded-lg"
                >
                  Erstgespräch <PhoneCall className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section id="leistungen" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <Badge
              variant="secondary"
              className="mb-4 bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-900 tracking-widest text-xs uppercase"
            >
              Leistungen
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Was wir bieten
            </h2>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Von der strategischen Beratung bis zur technischen Umsetzung –
              wir unterstützen Sie in jeder Phase Ihrer KI-Transformation.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </ul>
        </div>
      </section>

      <Separator className="bg-neutral-900" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section id="kontakt" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              Vereinbaren Sie jetzt ein kostenloses Erstgespräch und entdecken
              Sie, wie KI Ihr Unternehmen transformieren kann.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/termin">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg"
                >
                  Kostenloses Erstgespräch <MoveRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
