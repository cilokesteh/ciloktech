"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import PortofolioSection from "@/components/PortofolioSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import SpotlightVars from "@/components/SpotlightVars";
import Link from "next/link";
import { posts } from "./blog/data";
import { useI18n } from "@/lib/i18n/context";

export default function Home() {
  const { t } = useI18n();
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <SpotlightVars />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main-content" className="pt-[72px] bg-[var(--background)] transition-colors duration-200">
        <HeroSection />
        <div
          tabIndex={0}
          role="region"
          aria-label="Cara kerja CilokTech"
          className="border-b swiss-line py-3 px-5 md:px-7 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500 overflow-x-auto whitespace-nowrap bg-[var(--card)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        >
          <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-6">
            <span>Desain sesuai kebutuhan</span>
            <span>Tampilan rapi di HP dan desktop</span>
            <span>Langsung dengan pembuatnya</span>
            <span>Dibantu setelah website terbit</span>
          </div>
        </div>
        <StatsSection />
        <ServicesSection />
        {/* Portofolio Section */}
        <PortofolioSection />

        {/* INTERACTIVE DEMO SANDBOX BANNER */}
        <section className="px-5 md:px-7 py-10 bg-[var(--background)] border-b swiss-line">
          <div className="max-w-[1320px] mx-auto p-7 md:p-9 border swiss-line bg-[var(--card)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase border swiss-line px-2.5 py-1 text-[var(--accent-text)] mb-3 bg-[var(--subtle)]">
                COBA DEMO LANGSUNG
              </div>
              <h3 className="text-[22px] md:text-[28px] font-extrabold text-gray-900 dark:text-white tracking-tight">
                Coba sistem kasir dan booking sebelum memesan.
              </h3>
              <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed">
                Jalankan transaksi kasir, coba diskon, cetak struk, dan buat antrean langsung dari browser. Tidak perlu instal aplikasi.
              </p>
            </div>
            <Link
              href="/demo"
              className="shrink-0 bg-[var(--accent)] text-[#0e0f0d] font-mono text-[11px] font-bold uppercase tracking-[0.08em] px-6 py-3.5 border border-[var(--accent)] hover:opacity-90 transition flex items-center gap-2"
            >
              <span>Coba sekarang</span>
              <span>↗</span>
            </Link>
          </div>
        </section>

        <PricingSection />

        {/* Harga explainer CTA */}
        <section className="px-5 md:px-7 py-10 bg-[var(--background)] border-b swiss-line">
          <div className="max-w-[1320px] mx-auto">
            <div className="border swiss-line bg-[var(--card)] p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 border swiss-line bg-[var(--accent)] text-[#0e0f0d] font-mono font-bold flex items-center justify-center text-[15px] shrink-0">!</div>
                <div>
                  <div className="font-extrabold text-[17px] text-gray-900 dark:text-white">{t.homeExtra.priceExplainTitle}</div>
                  <div className="font-mono text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mt-1 max-w-[620px]">{t.homeExtra.priceExplainDesc}</div>
                </div>
              </div>
              <Link href="/harga" className="shrink-0 px-6 py-3.5 border swiss-line bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[#0e0f0d] font-mono text-[11px] font-bold uppercase tracking-[0.08em] transition flex items-center gap-2">
                {t.homeExtra.priceExplainCta} ↗
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW SEO */}
        <section className="px-5 md:px-7 py-14 md:py-20 bg-[var(--background)] border-b swiss-line">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b swiss-line">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--accent-text)] border swiss-line px-3 py-1 mb-3 bg-[var(--card)]">{t.homeExtra.blogLabel}</div>
                <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-[-0.04em] leading-[0.92] text-gray-900 dark:text-white">{t.homeExtra.blogHeadline1}</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-gray-900 dark:text-white border swiss-line px-5 py-2.5 bg-[var(--card)] hover:bg-[var(--accent)] hover:text-[#0e0f0d] transition w-fit">
                {t.homeExtra.blogViewAll} ↗
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group border swiss-line bg-[var(--card)] p-6 hover:border-[var(--accent)] hover:translate-y-[-2px] transition flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 flex-wrap mb-4 font-mono text-[10px]">
                      {post.tags.slice(0, 2).map((tg) => (<span key={tg} className="px-2 py-0.5 border swiss-line text-gray-600 dark:text-gray-300">{tg}</span>))}
                      <span className="text-gray-500">{post.readingTime}</span>
                    </div>
                    <div className="font-extrabold text-[17px] leading-snug text-gray-900 dark:text-white group-hover:text-[var(--accent-text)] transition line-clamp-2">{post.title}</div>
                    <div className="font-mono text-[12.5px] text-gray-600 dark:text-gray-400 mt-3 line-clamp-2 leading-relaxed">{post.description}</div>
                  </div>
                  <div className="pt-4 mt-6 border-t swiss-line font-mono text-[10px] text-[var(--accent-text)] uppercase tracking-widest">
                    Baca Catatan ↗
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
