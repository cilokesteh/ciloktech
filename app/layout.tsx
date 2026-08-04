import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cilok Tech — Jasa Pembuatan Website & Web App Profesional",
  description:
    "Jasa pembuatan website profesional, landing page, dan web app kustom. Cepat, aman, dan berorientasi konversi untuk bisnis Anda.",
  metadataBase: new URL("https://ciloktech.web.id"),
  openGraph: {
    title: "Cilok Tech — Jasa Pembuatan Website & Web App Profesional",
    description: "Solusi web & app profesional untuk UMKM hingga Startup.",
    url: "https://ciloktech.web.id",
    siteName: "Cilok Tech",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cilok Tech",
    description: "Jasa Pembuatan Website & Web App Profesional",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cilok Tech",
              description:
                "Jasa Pembuatan Website & Web App Profesional di Indonesia",
              url: "https://ciloktech.web.id",
              address: { "@type": "PostalAddress", addressCountry: "ID" },
              priceRange: "Rp 900rb - Rp 10jt+",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
