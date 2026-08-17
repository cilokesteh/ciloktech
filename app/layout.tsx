import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n/context";
import CommandPalette from "@/components/CommandPalette";
import GA4 from "@/components/GA4";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Cilok Tech — One-Man Studio | Jasa Website & Web App Profesional",
    template: "%s | Cilok Tech",
  },
  description:
    "One-man studio — jasa pembuatan website profesional, landing page, dan web app kustom. Senior full-stack, tanpa kantor, tanpa PM, langsung builder. Cepat, aman, SEO-ready, fokus konversi untuk UMKM hingga Startup. Konsultasi gratis.",
  metadataBase: new URL("https://www.ciloktech.id"),
  keywords: [
    "one-man studio",
    "jasa pembuatan website",
    "jasa website profesional",
    "landing page",
    "web app",
    "company profile",
    "jasa website umkm",
    "nextjs developer indonesia",
    "one-man studio indonesia",
  ],
  authors: [{ name: "Cilok Tech — One-Man Studio" }],
  creator: "Cilok Tech",
  publisher: "Cilok Tech",
  openGraph: {
    title: "Cilok Tech — One-Man Studio | Jasa Website & Web App Profesional",
    description:
      "One-man studio senior full-stack. Tanpa kantor, tanpa PM — langsung builder. Solusi web & app pro untuk UMKM hingga Startup.",
    url: "https://www.ciloktech.id",
    siteName: "Cilok Tech — One-Man Studio",
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      { url: "/logo.jpg", width: 1200, height: 630, alt: "Cilok Tech — One-Man Studio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cilok Tech — One-Man Studio | Jasa Website & Web App",
    description: "One-man studio senior full-stack. Tanpa kantor & PM, langsung builder. Cepat, aman, fokus konversi.",
    images: ["/logo.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.ciloktech.id",
    languages: {
      "id-ID": "https://www.ciloktech.id",
      "x-default": "https://www.ciloktech.id",
    },
  },
  verification: {
    google: "TRo05EJYLO8cjVxoSrKeyuh-4Z4Ne5d8V-WK92OjS5Q",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-oneman.svg", type: "image/svg+xml" },
    ],
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
        {/* anti-FOUC — theme + lang */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('cilok-theme');var d=s? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('cilok-locale');if(l)document.documentElement.lang=l;}catch(e){}})()`,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cilok Tech — One-Man Studio",
              alternateName: "CilokTech",
              description:
                "One-man studio — jasa pembuatan website & web app profesional Indonesia. Senior full-stack, tanpa kantor, tanpa PM, langsung builder. Cepat, aman, SEO-ready, fokus konversi",
              url: "https://www.ciloktech.id",
              logo: "https://www.ciloktech.id/logo-oneman-512.png",
              image: "https://www.ciloktech.id/og-oneman.png",
              email: "hi@ciloktech.my.id",
              sameAs: [
                "https://github.com/cilokesteh",
                "https://t.me/ciloktechcsbot",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressLocality: "Indonesia",
              },
              priceRange: "Rp 900rb - Rp 2,5jt+",
              openingHours: "Mo-Su",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cilok Tech — One-Man Studio",
              alternateName: "CilokTech",
              url: "https://www.ciloktech.id",
              description:
                "One-man studio — jasa pembuatan website & web app profesional Indonesia. Senior full-stack, tanpa kantor, tanpa PM, langsung builder.",
              inLanguage: ["id-ID", "en-US"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <GA4 />
        <I18nProvider>
          <ThemeProvider>
            {children}
            <CommandPalette />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
