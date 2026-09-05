import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import JasaClient from "./JasaClient";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional & Web App | CilokTech One-Man Studio",
  description:
    "Jasa pembuatan website profesional untuk UMKM, company profile, landing page konversi tinggi, dan web app kustom. Next.js 15, <1 detik muat, SEO lengkap, tanpa biaya bulanan.",
  alternates: {
    canonical: "https://www.ciloktech.id/jasa-pembuatan-website",
    languages: {
      "id-ID": "https://www.ciloktech.id/jasa-pembuatan-website",
    },
  },
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa pembuatan website umkm",
    "jasa landing page",
    "jasa website company profile",
    "jasa web app custom",
    "one-man studio indonesia",
  ],
  openGraph: {
    title: "Jasa Pembuatan Website Profesional | CilokTech One-Man Studio",
    description:
      "Website Next.js super cepat, SEO-ready, mobile-first, dan source code 100% milik Anda. Dikerjakan langsung oleh senior full-stack developer.",
    url: "https://www.ciloktech.id/jasa-pembuatan-website",
    type: "website",
    images: [
      {
        url: "https://www.ciloktech.id/api/og?title=Jasa%20Pembuatan%20Website%20Profesional&subtitle=ONE-MAN%20STUDIO%20•%20NEXT.JS%2015&tag=ciloktech.id%2Fjasa-pembuatan-website&type=default",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function JasaPembuatanWebsitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.ciloktech.id/jasa-pembuatan-website#service",
        name: "Jasa Pembuatan Website Profesional",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          name: "CilokTech",
          url: "https://www.ciloktech.id",
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Paket Jasa Pembuatan Website",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Landing Page High-Conversion",
              },
              price: "900000",
              priceCurrency: "IDR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Website Company Profile Pro",
              },
              price: "1500000",
              priceCurrency: "IDR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Pembuatan Web App Kustom",
              },
              price: "2500000",
              priceCurrency: "IDR",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ciloktech.id/jasa-pembuatan-website#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Berapa biaya jasa pembuatan website di CilokTech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biaya pembuatan website di CilokTech mulai Rp 900.000 untuk Landing Page, Rp 1.500.000 untuk Company Profile lengkap, dan mulai Rp 2.500.000 untuk Web App / sistem kustom. Semua sistem bayar sekali tanpa biaya langganan bulanan.",
            },
          },
          {
            "@type": "Question",
            name: "Berapa lama proses pembuatan website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Landing page siap dalam 2–3 hari kerja. Company profile selesai dalam 3–7 hari kerja. Anda mendapatkan link staging harian untuk memantau progres secara transparan.",
            },
          },
          {
            "@type": "Question",
            name: "Apakah source code website menjadi milik klien?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ya, 100% source code masuk ke repository GitHub private milik Anda. Anda memegang kendali penuh tanpa sistem sewa terkunci.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <JasaClient />
      <Footer />
      <FloatingCTA />
    </>
  );
}
