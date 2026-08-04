import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HargaClient from "./HargaClient";

export const metadata: Metadata = {
  title: "Harga Jasa Website — Penjelasan Lengkap & Transparan | One-Man Studio",
  description:
    "Kenapa One-Man Studio CilokTech bandrol Rp 2.5jt untuk kualitas Rp 7jt? Breakdown transparan, comparison freelance vs agency, + kalkulator rugi website lemot. Tanpa hidden fee.",
  alternates: {
    canonical: "https://ciloktech.web.id/harga",
    languages: {
      "id-ID": "https://ciloktech.web.id/harga",
      "en-US": "https://ciloktech.web.id/harga?lang=en",
    },
  },
  openGraph: {
    title: "Harga Jasa Website — Breakdown Jujur One-Man Studio",
    description: "Kualitas Rp 7jt, gue jual Rp 2.5jt. Kenapa bisa? One-man studio senior tanpa kantor & PM. Plus kalkulator rugi website.",
    url: "https://ciloktech.web.id/harga",
    images: [
      {
        url: "https://ciloktech.web.id/api/og?title=Harga%20Jasa%20Website%20—%20Kualitas%20Rp%207jt%2C%20Gue%20Jual%20Rp%202.5jt&subtitle=HARGA%20JUJUR%20•%20ONE-MAN%20STUDIO&tag=ciloktech.web.id%2Fharga&type=harga",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <HargaClient />
      <Footer />
      <FloatingCTA />
    </>
  );
}
