'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

const services = [
  {
    icon: "🤖",
    title: "KI-Strategie",
    description:
      "Wir entwickeln eine maßgeschneiderte KI-Roadmap für Ihr Unternehmen – von der Potenzialanalyse bis zur Implementierung.",
  },
  {
    icon: "⚙️",
    title: "Prozessautomatisierung",
    description:
      "Automatisieren Sie repetitive Aufgaben mit intelligenten KI-Agenten und steigern Sie die Effizienz Ihrer Teams.",
  },
  {
    icon: "🔍",
    title: "Datenanalyse & Insights",
    description:
      "Verwandeln Sie Ihre Rohdaten in handlungsrelevante Erkenntnisse mithilfe modernster Machine-Learning-Modelle.",
  },
  {
    icon: "🛡️",
    title: "Verantwortungsvolle KI",
    description:
      "Wir begleiten Sie bei der sicheren und ethisch verantwortungsvollen Einführung von KI-Systemen in Ihrem Betrieb.",
  },
]

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
              {/* Brand */}
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.3em] text-neutral-400 uppercase">
                  agentenwerk
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  KI-Beratung
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600">
                  für die Zukunft
                </span>
              </h1>

              <p className="mt-6 text-neutral-400 max-w-lg text-lg leading-relaxed">
                Wir begleiten Unternehmen auf dem Weg in die KI-Ära – mit
                praxisnaher Beratung, intelligenten Agenten und messbaren
                Ergebnissen.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
                  Beratung anfragen
                </button>
                <button className="px-8 py-3 border border-neutral-700 text-neutral-300 font-semibold rounded-lg hover:border-neutral-500 hover:text-white transition-colors">
                  Mehr erfahren
                </button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-neutral-900/50 border-neutral-800 p-8 hover:border-neutral-600 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
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
            <button className="px-10 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-neutral-200 transition-colors">
              Kostenloses Erstgespräch
            </button>
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
