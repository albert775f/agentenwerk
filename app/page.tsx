'use client'

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall, Bot, Cog, BarChart3, ShieldCheck } from "lucide-react"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Button } from "@/components/ui/button"

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

function AnimatedHeroText() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ["intelligent", "effizient", "automatisiert", "skalierbar", "zukunftssicher"],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        KI-Beratung
      </span>
      <br />
      <span className="relative flex w-full overflow-hidden md:pb-2 md:pt-1 h-[1.2em]">
        &nbsp;
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 font-bold"
            initial={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              titleNumber === index
                ? { y: 0, opacity: 1 }
                : { y: titleNumber > index ? -150 : 150, opacity: 0 }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>
    </h1>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        <Card className="w-full flex-1 bg-black/[0.96] relative overflow-hidden border-0 rounded-none min-h-screen">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col md:flex-row h-screen">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.3em] text-neutral-400 uppercase">
                  agentenwerk
                </span>
              </div>

              <AnimatedHeroText />

              <p className="mt-6 text-neutral-400 max-w-lg text-lg leading-relaxed">
                Wir begleiten Unternehmen auf dem Weg in die KI-Ära – mit
                praxisnaher Beratung, intelligenten Agenten und messbaren
                Ergebnissen.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gap-3 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg px-8"
                >
                  Beratung anfragen <MoveRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-3 border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white rounded-lg px-8 bg-transparent"
                >
                  Mehr erfahren <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right content – 3D Robot */}
            <div className="flex-1 relative min-h-[400px] md:min-h-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 md:px-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] text-neutral-500 uppercase">
              Unsere Leistungen
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Was wir bieten
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Von der strategischen Beratung bis zur technischen Umsetzung –
              wir unterstützen Sie in jeder Phase Ihrer KI-Transformation.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <li key={service.title} className="min-h-[14rem] list-none">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-neutral-800 bg-neutral-900/80 p-6 shadow-sm md:p-8">
                    <div className="w-fit rounded-lg border border-neutral-700 bg-neutral-800 p-2">
                      {service.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-neutral-100">
                        {service.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="mt-6 text-neutral-400 text-lg">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch und entdecken
            Sie, wie KI Ihr Unternehmen transformieren kann.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="px-10 bg-white text-black font-bold text-lg rounded-lg hover:bg-neutral-200"
            >
              Kostenloses Erstgespräch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8 px-8 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-neutral-500 text-sm">
            © 2026 agentenwerk · KI-Beratung
          </span>
          <div className="flex gap-6 text-neutral-500 text-sm">
            <a href="#" className="hover:text-neutral-300 transition-colors">Impressum</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
