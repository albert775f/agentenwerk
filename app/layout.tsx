import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnalyticsTracker } from "@/components/analytics-tracker";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "agentenwerk – KI-Beratung",
  description: "Wir begleiten Unternehmen auf dem Weg in die KI-Ära – mit praxisnaher Beratung, intelligenten Agenten und messbaren Ergebnissen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
