import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl space-y-10">
          <h1 className="text-4xl font-bold tracking-tight text-white">Datenschutzerklärung</h1>

          <div className="space-y-8 text-sm text-neutral-400 leading-relaxed">

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">1. Verantwortlicher</h2>
              <p>
                Albert Artykov<br />
                agentenwerk<br />
                Behringstraße 21<br />
                12437 Berlin
              </p>
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
              <h2 className="text-white font-semibold text-base">2. Erhebung und Verarbeitung von Daten</h2>
              <p>
                Diese Website erhebt keine personenbezogenen Daten über Tracking-Dienste, Analyse-Tools oder Werbetechnologien. Es werden keine Cookies gesetzt, die über technisch notwendige Session-Cookies hinausgehen.
              </p>
              <p>
                Beim Besuch dieser Website werden durch den Webserver automatisch technische Zugriffsdaten (sogenannte Server-Logs) erfasst. Dazu gehören IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene URL, übertragene Datenmenge sowie der verwendete Browser und das Betriebssystem. Diese Daten dienen ausschließlich dem sicheren Betrieb der Website und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">3. Kontakt per E-Mail</h2>
              <p>
                Sie können uns per E-Mail unter{" "}
                <a
                  href="mailto:kontakt@agentenwerk.de"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  kontakt@agentenwerk.de
                </a>{" "}
                erreichen. Wenn Sie uns eine E-Mail senden, werden die von Ihnen mitgeteilten Daten (E-Mail-Adresse, Name und Inhalt Ihrer Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert und verarbeitet. Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">4. Terminbuchung via Cal.com</h2>
              <p>
                Für die Buchung von Erstgesprächen nutzen wir den Dienst Cal.com (Cal.com, Inc., 2261 Market Street #5211, San Francisco, CA 94114, USA). Wenn Sie einen Termin buchen, werden die dabei von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, ggf. Nachricht und Zeitzone) an Cal.com übermittelt und dort verarbeitet.
              </p>
              <p>
                Cal.com verarbeitet Daten gemäß seiner eigenen Datenschutzrichtlinie. Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Rechtsgrundlage für die Verarbeitung auf unserer Seite ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Weitere Informationen finden Sie in der Datenschutzerklärung von Cal.com unter cal.com/privacy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">5. Hosting</h2>
              <p>
                Diese Website wird über Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Vercel verarbeitet beim Aufruf der Website technische Zugriffsdaten (u. a. IP-Adresse) auf seinen Servern. Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln. Vercel ist als Auftragsverarbeiter gemäß Art. 28 DSGVO gebunden. Weitere Informationen finden Sie unter vercel.com/legal/privacy-policy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">6. Externe Inhalte (Spline)</h2>
              <p>
                Auf dieser Website werden interaktive 3D-Inhalte über den Dienst Spline (Spline Design Inc., USA) eingebunden. Beim Laden dieser Inhalte stellt Ihr Browser eine direkte Verbindung zu Servern von Spline her. Dabei können technische Daten wie Ihre IP-Adresse übermittelt werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der funktionalen Darstellung der Website).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">7. Cookies und Tracking</h2>
              <p>
                Diese Website verwendet keine Cookies für Analyse- oder Werbezwecke. Es werden keine Dienste wie Google Analytics, Meta Pixel oder ähnliche Tracking-Tools eingesetzt. Technisch notwendige Cookies (z. B. für die Terminbuchungsfunktion via Cal.com) werden nur gesetzt, soweit sie für den Betrieb der jeweiligen Funktion erforderlich sind.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">8. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO), Berichtigung unrichtiger Daten (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO).
              </p>
              <p>
                Sie haben außerdem das Recht, eine erteilte Einwilligung jederzeit zu widerrufen sowie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde für Berlin ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
              </p>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an{" "}
                <a
                  href="mailto:kontakt@agentenwerk.de"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  kontakt@agentenwerk.de
                </a>
                .
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-white font-semibold text-base">9. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung kann bei Änderungen der rechtlichen Rahmenbedingungen oder der angebotenen Dienste aktualisiert werden. Die jeweils aktuelle Version ist unter dieser URL abrufbar. Stand: März 2026.
              </p>
            </section>

          </div>

          <div className="pt-4">
            <a
              href="/"
              className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
