import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Tips Praktis Website UMKM, SEO & Konversi",
  description:
    "Artikel praktis tentang website UMKM, landing page, company profile, perbandingan Next.js vs WordPress, dan cara membuat website yang menghasilkan pelanggan. Berdasarkan pengalaman lapangan, langsung dapat dipraktikkan.",
  alternates: {
    canonical: "https://ciloktech.web.id/blog",
    languages: {
      "id-ID": "https://ciloktech.web.id/blog",
      "en-US": "https://ciloktech.web.id/blog?lang=en",
    },
  },
  openGraph: {
    title: "Blog CilokTech — Tips Praktis Website & Konversi",
    description: "Artikel praktis tentang website yang menghasilkan konversi, bukan sekadar tampilan menarik.",
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
