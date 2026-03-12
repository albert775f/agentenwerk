'use client'

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TerminPage() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: "15min" })
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Erstgespräch buchen
          </h1>
          <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
            Wählen Sie einen Termin für ein kostenloses 15-minütiges Erstgespräch.
          </p>
        </div>

        <Cal
          namespace="15min"
          calLink="albertartykov/15min"
          style={{ width: "100%", height: "700px", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </main>

      <Footer />
    </div>
  )
}
