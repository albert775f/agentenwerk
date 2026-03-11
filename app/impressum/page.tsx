export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <a href="/" className="text-sm text-blue-400 hover:text-blue-300">&larr; Zur&uuml;ck</a>
        </div>
        <h1 className="text-3xl font-bold text-white">Impressum</h1>
        <div className="space-y-6 text-zinc-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold mb-2">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Albert Artykov<br />Behringstra&szlig;e 21<br />12437 Berlin</p>
          </section>
          <section>
            <h2 className="text-white font-semibold mb-2">Kontakt</h2>
            <p>E-Mail: <a href="mailto:kontakt@agentenwerk.de" className="text-blue-400 hover:text-blue-300">kontakt@agentenwerk.de</a></p>
          </section>
          <section>
            <h2 className="text-white font-semibold mb-2">Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV</h2>
            <p>Albert Artykov<br />Behringstra&szlig;e 21<br />12437 Berlin</p>
          </section>
        </div>
      </div>
    </main>
  )
}
