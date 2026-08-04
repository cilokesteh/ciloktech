import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cilok Tech — Jasa Pembuatan Website & Web App Profesional",
    template: "%s | Cilok Tech",
  },
  description:
    "Jasa pembuatan website profesional, landing page, dan web app kustom. Cepat, aman, SEO-friendly, dan berorientasi konversi untuk UMKM hingga Startup. Konsultasi gratis.",
  metadataBase: new URL("https://ciloktech.web.id"),
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "landing page",
    "web app",
    "company profile",
    "jasa website umkm",
    "nextjs developer indonesia",
  ],
  authors: [{ name: "Cilok Tech" }],
  creator: "Cilok Tech",
  publisher: "Cilok Tech",
  openGraph: {
    title: "Cilok Tech — Jasa Pembuatan Website & Web App Profesional",
    description:
      "Solusi web & app profesional untuk UMKM hingga Startup. Cepat, aman, SEO-friendly, fokus konversi.",
    url: "https://ciloktech.web.id",
    siteName: "Cilok Tech",
    type: "website",
    locale: "id_ID",
    images: [
      { url: "/logo.jpg", width: 1200, height: 630, alt: "Cilok Tech" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cilok Tech — Jasa Pembuatan Website & Web App",
    description: "Jasa website profesional cepat, aman, dan fokus konversi.",
    images: ["/logo.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ciloktech.web.id" },
  verification: {
    google: "TRo05EJYLO8cjVxoSrKeyuh-4Z4Ne5d8V-WK92OjS5Q",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
      suppressHydrationWarning
    >
      <head>
        {/* anti-FOUC — set theme before React */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('cilok-theme');var d=s? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cilok Tech",
              description:
                "Jasa Pembuatan Website & Web App Profesional di Indonesia — cepat, aman, SEO-friendly, fokus konversi",
              url: "https://ciloktech.web.id",
              logo: "https://ciloktech.web.id/logo.jpg",
              image: "https://ciloktech.web.id/logo.jpg",
              email: "hi@ciloktech.my.id",
              sameAs: [
                "https://github.com/cilokesteh",
                "https://t.me/ciloktech",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressLocality: "Indonesia",
              },
              priceRange: "Rp 900rb - Rp 10jt+",
              openingHours: "Mo-Sa 09:00-18:00",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
