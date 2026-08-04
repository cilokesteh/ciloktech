import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Kalkulator from "./Kalkulator";

export const metadata: Metadata = {
  title: "Kalkulator Rugi Website — Berapa Miliar Lo Hilang Karena Website Lemot?",
  description:
    "Hitung berapa omzet yang hilang karena website lemot, gak SEO, dan gak ada CTA. Kalkulator gratis dari CilokTech One-Man Studio — senior full-stack, tanpa kantor, tanpa PM. Input omzet, langsung tau rugi per bulan + solusinya.",
  keywords: [
    "kalkulator rugi website",
    "website lemot rugi berapa",
    "hitung rugi website umkm",
    "kalkulator omzet hilang website",
    "one-man studio website",
  ],
  alternates: { canonical: "https://ciloktech.web.id/kalkulator" },
  openGraph: {
    title: "Kalkulator Rugi Website — Berapa Lo Rugi Tiap Bulan?",
    description: "Website lemot = 40% customer kabur. Hitung rugi real-time — gratis dari CilokTech One-Man Studio.",
    url: "https://ciloktech.web.id/kalkulator",
    images: [
      {
        url: "https://ciloktech.web.id/api/og?title=Kalkulator%20Rugi%20Website%20—%20Lo%20Rugi%20Berapa%20Per%20Bulan%3F&subtitle=KALKULATOR%20GRATIS%20•%20ONE-MAN%20STUDIO&tag=ciloktech.web.id%2Fkalkulator&type=harga",
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
