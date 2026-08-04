import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ChangelogClient from "./ChangelogClient";

export const metadata: Metadata = {
  title: "Changelog — Building in Public | Cilok Tech One-Man Studio",
  description:
    "Perjalanan CilokTech One-Man Studio week by week — dari template 500rb mindset ke Next.js 111kB, 11 blog, kalkulator rugi, OG dynamic, Command-K. Buka, jujur, no bullshit.",
  alternates: {
    canonical: "https://ciloktech.web.id/changelog",
    languages: {
      "id-ID": "https://ciloktech.web.id/changelog",
      "en-US": "https://ciloktech.web.id/changelog?lang=en",
    },
  },
  openGraph: {
    title: "Changelog — Building in Public • One-Man Studio",
    description: "One-man studio journey week by week — dari 8kB template mindset ke 111kB pro studio, 11 blog, kalkulator, OG dynamic.",
    url: "https://ciloktech.web.id/changelog",
    images: [{ url: "https://ciloktech.web.id/api/og?title=Changelog%20—%20Building%20in%20Public%20Week%20by%20Week&subtitle=WEEKLY%20LOG%20•%20ONE-MAN%20STUDIO&tag=ciloktech.web.id%2Fchangelog&type=default", width: 1200, height: 630 }],
  },
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <ChangelogClient />
      <Footer />
      <FloatingCTA />
    </>
  );
}
