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
      <Navbar />
      <main id="main-content" className="pt-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortofolioSection />
        <PricingSection />

        {/* Harga explainer CTA */}
        <section className="px-6 py-8 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-[20px] border border-amber-200 dark:border-amber-900/30 bg-amber-50/60 dark:bg-amber-950/10 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-[18px] shrink-0">!</div>
                <div>
                  <div className="font-extrabold text-[16px] text-gray-900 dark:text-white">{t.homeExtra.priceExplainTitle}</div>
                  <div className="text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1 max-w-[520px]">{t.homeExtra.priceExplainDesc}</div>
                </div>
              </div>
              <Link href="/harga" className="shrink-0 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-[13px] font-bold hover:bg-black dark:hover:bg-amber-300 transition flex items-center gap-2">
                {t.homeExtra.priceExplainCta}
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW SEO */}
        <section className="px-6 py-14 md:py-16 bg-[#fafafa] dark:bg-[#111111] border-y border-gray-100 dark:border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-4">{t.homeExtra.blogLabel}</div>
                <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight leading-[0.9] text-gray-900 dark:text-white">{t.homeExtra.blogHeadline1}</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center text-[13.5px] font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 px-5 py-2.5 rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition w-fit">
                {t.homeExtra.blogViewAll}
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-[18px] bg-white dark:bg-[#171717] border border-gray-200 dark:border-white/10 p-5 hover:border-gray-900 dark:hover:border-white transition flex flex-col">
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {post.tags.slice(0, 2).map((tg) => (<span key={tg} className="text-[10px] font-bold bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-300">{tg}</span>))}
                    <span className="text-[10px] text-gray-500">{post.readingTime}</span>
                  </div>
                  <div className="font-bold text-[15px] leading-snug text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition line-clamp-2">{post.title}</div>
                  <div className="text-[12.5px] text-gray-600 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">{post.description}</div>
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
