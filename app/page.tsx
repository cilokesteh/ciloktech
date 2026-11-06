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
      <Navbar />
      <main id="main-content" className="pt-[72px] bg-[var(--background)] transition-colors duration-200">
        <HeroSection />
        {/* RUNNING TICKER WITH BLINKING LIME BEACON */}
        <div
          tabIndex={0}
          role="region"
          aria-label={t.homeExtra.tickerLabel}
          className="border-y-2 border-[var(--pop-ink)] py-3.5 overflow-hidden whitespace-nowrap bg-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        >
          <div className="animate-ticker flex items-center text-[var(--pop-ink)] font-mono text-[12px] font-bold uppercase tracking-[0.15em]">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-8 shrink-0 pr-8" aria-hidden={set === 1 ? true : undefined}>
                {t.homeExtra.tickerItems.map((item) => (
                  <span key={item} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--pop-ink)] inline-block" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <StatsSection />
        <ServicesSection />
        {/* Portofolio Section */}
        <PortofolioSection />

        {/* INTERACTIVE DEMO SANDBOX BANNER */}
        <section className="px-5 md:px-7 py-10 bg-[var(--background)] border-b swiss-line">
          <div className="max-w-[1320px] mx-auto p-7 md:p-9 pop-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="pop-sticker mb-3">
                <span className="font-mono text-[10px] font-extrabold tracking-widest uppercase">
                  {t.homeExtra.sandboxLabel}
                </span>
              </div>
              <h3 className="text-[22px] md:text-[28px] font-extrabold text-gray-950 dark:text-white tracking-tight">
                {t.homeExtra.sandboxTitle}
              </h3>
              <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed">
                {t.homeExtra.sandboxDescA}<Link href="/jasa-pembuatan-website" className="text-[var(--accent-text)] underline hover:opacity-80">{t.homeExtra.sandboxLink}</Link>{t.homeExtra.sandboxDescB}
              </p>
            </div>
            <Link
              href="/demo"
              className="pop-btn pop-btn-primary shrink-0"
            >
              <span>{t.homeExtra.sandboxCta}</span>
              <span>↗</span>
            </Link>
          </div>
        </section>

        <PricingSection />

        {/* Harga explainer CTA */}
        <section className="px-5 md:px-7 py-10 bg-[var(--background)] border-b swiss-line">
          <div className="max-w-[1320px] mx-auto">
            <div className="pop-card p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] border-2 border-[var(--pop-ink)] shadow-[2px_2px_0_var(--pop-ink)] font-mono font-bold flex items-center justify-center text-[15px] shrink-0">!</div>
                <div>
                  <div className="font-extrabold text-[17px] text-gray-950 dark:text-white">{t.homeExtra.priceExplainTitle}</div>
                  <div className="font-mono text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mt-1 max-w-[620px]">{t.homeExtra.priceExplainDesc}</div>
                </div>
              </div>
              <Link href="/harga" className="pop-btn shrink-0">
                <span>{t.homeExtra.priceExplainCta}</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW SEO */}
        <section className="px-5 md:px-7 py-14 md:py-20 bg-[var(--background)] border-b swiss-line">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b swiss-line">
              <div>
                <div className="pop-sticker mb-3">
                  <span className="font-mono text-[10.5px] font-extrabold tracking-widest uppercase">
                    {t.homeExtra.blogSticker}
                  </span>
                </div>
                <h2 className="text-[34px] md:text-[46px] font-extrabold tracking-[-0.04em] leading-[1.05] text-gray-950 dark:text-white">{t.homeExtra.blogHeadline1}</h2>
              </div>
              <Link href="/blog" className="pop-btn">
                <span>{t.homeExtra.blogViewAll}</span>
                <span>↗</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="pop-card p-7 group flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 flex-wrap mb-4 font-mono text-[10.5px]">
                      {post.tags.slice(0, 2).map((tg) => (<span key={tg} className="px-2 py-0.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300">{tg}</span>))}
                      <span className="text-gray-500">{post.readingTime}</span>
                    </div>
                    <div className="font-extrabold text-[18px] leading-snug text-gray-950 dark:text-white group-hover:text-[var(--accent-text)] transition line-clamp-2">{post.title}</div>
                    <div className="font-mono text-[12.5px] text-gray-600 dark:text-gray-400 mt-3 line-clamp-2 leading-relaxed">{post.description}</div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-gray-200/60 dark:border-white/10 font-mono text-[10.5px] text-[var(--accent-text)] font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>{t.homeExtra.blogReadMore}</span>
                    <span>↗</span>
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
