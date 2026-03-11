import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl space-y-10">
          <h1 className="text-4xl font-bold tracking-tight text-white">Impressum</h1>

          <div className="space-y-8 text-sm text-neutral-400 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">Angaben gemäß § 5 TMG</h2>
              <p>Albert Artykov<br />Behringstraße 21<br />12437 Berlin</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@agentenwerk.de"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  kontakt@agentenwerk.de
                </a>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>Albert Artykov<br />Behringstraße 21<br />12437 Berlin</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
