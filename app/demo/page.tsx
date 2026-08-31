import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Interactive Demo & Sandbox — POS Enterprise & JasaFlow | CilokTech",
  description:
    "Coba langsung simulasi sistem kasir POS Enterprise v11.2 dan engine booking JasaFlow di browser tanpa perlu registrasi.",
  alternates: {
    canonical: "https://www.ciloktech.id/demo",
    languages: {
      "id-ID": "https://www.ciloktech.id/demo",
    },
  },
  openGraph: {
    title: "Interactive Product Sandbox — POS & JasaFlow | CilokTech",
    description:
      "Simulasi langsung kasir POS cetak struk thermal dan booking barbershop secara realtime.",
    url: "https://www.ciloktech.id/demo",
    images: [
      {
        url: "https://www.ciloktech.id/api/og?title=Interactive%20Product%20Sandbox%20—%20POS%20%26%20JasaFlow&subtitle=LIVE%20DEMO%20•%20ONE-MAN%20STUDIO&tag=ciloktech.id%2Fdemo&type=default",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <DemoClient />
      <Footer />
      <FloatingCTA />
    </>
  );
}
