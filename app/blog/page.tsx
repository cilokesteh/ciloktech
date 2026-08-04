import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Tips Website UMKM, SEO & Conversion",
  description:
    "Artikel to-the-point tentang website UMKM, landing page, company profile, Next.js vs WordPress, dan cara bikin website yang ngasilin customer. Bukan teori, langsung praktik.",
  alternates: {
    canonical: "https://ciloktech.web.id/blog",
    languages: {
      "id-ID": "https://ciloktech.web.id/blog",
      "en-US": "https://ciloktech.web.id/blog?lang=en",
    },
  },
  openGraph: {
    title: "Blog CilokTech — Tips Website UMKM & Conversion",
    description: "Tips praktis website yang ngasilin cuan, bukan cuma bagus.",
    url: "https://ciloktech.web.id/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogClient />
      <Footer />
      <FloatingCTA />
    </>
  );
}
