import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "MorganAuto - Concessionnaire Automobile Dijon",
    template: "%s | MorganAuto"
  },
  description: "MorganAuto, votre concessionnaire automobile de confiance à Dijon. Spécialiste des véhicules d'occasion haut de gamme avec financement, garantie et service complet.",
  keywords: [
    "concessionnaire automobile Dijon",
    "voiture occasion Dijon",
    "véhicule haut de gamme",
    "financement auto",
    "reprise véhicule",
    "MorganAuto"
  ],
  authors: [{ name: "MorganAuto" }],
  creator: "MorganAuto",
  publisher: "MorganAuto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://morganauto.fr"),
  alternates: {
    canonical: "https://morganauto.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://morganauto.fr",
    title: "MorganAuto - Concessionnaire Automobile Dijon",
    description: "Votre concessionnaire automobile de confiance à Dijon. Spécialiste des véhicules d'occasion haut de gamme.",
    siteName: "MorganAuto",
    images: [
      {
        url: "https://morganauto.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MorganAuto - Concessionnaire Automobile Dijon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MorganAuto - Concessionnaire Automobile Dijon",
    description: "Votre concessionnaire automobile de confiance à Dijon.",
    images: ["https://morganauto.fr/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}