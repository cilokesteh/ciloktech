import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HargaClient from "./HargaClient";

export const metadata: Metadata = {
  title: "Harga Jasa Website — Penjelasan Lengkap & Transparan | One-Man Studio",
  description:
    "Mengapa One-Man Studio CilokTech membanderol Rp 1,5jt untuk kualitas setara Rp 5-7jt? Breakdown transparan, perbandingan freelance vs agency. Tanpa biaya tersembunyi.",
  alternates: {
    canonical: "https://www.ciloktech.id/harga",
    languages: {
      "id-ID": "https://www.ciloktech.id/harga"
    },
  },
  openGraph: {
    title: "Harga Jasa Website — Breakdown Jujur One-Man Studio",
    description: "Kualitas setara Rp 5-7jt, kami tawarkan Rp 1,5jt. Mengapa bisa? One-man studio senior tanpa kantor & PM.",
    url: "https://www.ciloktech.id/harga",
    images: [
      {
        url: "https://www.ciloktech.id/api/og?title=Harga%20Jasa%20Website%20—%20Kualitas%20Rp%205-7jt%2C%20Kami%20Tawarkan%20Rp%201.5jt&subtitle=HARGA%20JUJUR%20•%20ONE-MAN%20STUDIO&tag=ciloktech.id%2Fharga&type=harga",
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
