import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortofolioSection from "@/components/PortofolioSection";
import PricingSection from "@/components/PricingSection";
import TestimoniSection from "@/components/TestimoniSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <HeroSection />
        <ServicesSection />
        <PortofolioSection />
        <PricingSection />

        {/* Harga explainer CTA — anti nawar sadis */}
        <section className="px-6 py-10 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-[20px] border border-amber-200 dark:border-amber-900/30 bg-amber-50/60 dark:bg-amber-950/10 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-[18px] shrink-0">!</div>
                <div>
                  <div className="font-extrabold text-[16px] text-gray-900 dark:text-white">Kenapa Rp 2.5jt? Bukannya kemahalan?</div>
                  <div className="text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1 max-w-[520px]">
                    Kualitas ini kalo di agency Rp 7jt+. Gue breakdown transparan: desain custom, Next.js 107kB, SEO lengkap, dark mode pro, source code milik lo. Klik buat lihat perbandingan biar lo sreg — bukan sales trick.
                  </div>
                </div>
              </div>
              <Link
                href="/harga"
                className="shrink-0 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-[13px] font-bold hover:bg-black dark:hover:bg-amber-300 transition flex items-center gap-2"
              >
                Lihat breakdown harga →
              </Link>
            </div>
          </div>
        </section>

        <TestimoniSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
