import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Kalkulator from "./Kalkulator";

export const metadata: Metadata = {
  title: "Kalkulator Kerugian Website — Berapa Banyak Pendapatan yang Hilang Akibat Website Lambat?",
  description:
    "Hitung berapa pendapatan yang hilang akibat website lambat, tanpa SEO, dan tanpa call-to-action. Kalkulator gratis dari CilokTech One-Man Studio — senior full-stack, tanpa kantor, tanpa PM. Input omzet, langsung tahu kerugian per bulan beserta solusinya.",
  keywords: [
    "kalkulator rugi website",
    "website lambat rugi berapa",
    "hitung kerugian website umkm",
    "kalkulator pendapatan hilang website",
    "one-man studio website",
  ],
  alternates: { canonical: "https://ciloktech.web.id/kalkulator" },
  openGraph: {
    title: "Kalkulator Kerugian Website — Berapa Kerugian Anda Setiap Bulan?",
    description: "Website lambat = 40% pelanggan pergi. Hitung kerugian real-time secara gratis dari CilokTech One-Man Studio.",
    url: "https://ciloktech.web.id/kalkulator",
    images: [
      {
        url: "https://ciloktech.web.id/api/og?title=Kalkulator%20Kerugian%20Website%20—%20Rugi%20Berapa%20Per%20Bulan%3F&subtitle=KALKULATOR%20GRATIS%20•%20ONE-MAN%20STUDIO&tag=ciloktech.web.id%2Fkalkulator&type=harga",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function KalkulatorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-[#0a0a0a]">
        <Kalkulator />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
