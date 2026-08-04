"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

type Entry = { date: string; week: string; title: string; tags: string[]; items: string[]; highlight?: boolean; };

const changelog: Entry[] = [
  { date: "2026-08-07", week: "W32 • Today", title: "🌐 Multi-Language ID + EN — One-Man Goes Global", tags: ["Feature", "i18n", "One-Man Studio"], highlight: true, items: ["🇮🇩🇺🇸 ID + EN dictionary 800+ keys — all sections i18n: Navbar, Hero, Services, Portfolio, Pricing, Testimoni, FAQ, Contact, Footer, FloatingCTA, CommandPalette, /harga, /kalkulator, /blog", "LanguageSwitcher ID/EN — compact pill + full toggle — localStorage persist cilok-locale + auto-detect navigator.language + <html lang> dynamic", "SEO hreflang: id-ID, en-US, x-default in layout metadata + /blog + /harga + /changelog alternates", "No new dependency — lightweight context + dictionary TS, anti-bloat 131kB First Load (was 111kB)", "Blog detail locale-aware: breadcrumb, back label, CTA EN/ID + Kalkulator full i18n labels"] },
  { date: "2026-08-07", week: "W32 • Today", title: "Command-K + Changelog — Linear vibes", tags: ["Feature", "One-Man Studio"], highlight: true, items: ["⌘K Command Palette global — search pages, blog 11 artikel, kalkulator, breakdown (Linear-style)", "📝 /changelog page — building in public week by week", "🧭 Breadcrumb + FAQPage JSON-LD rich snippet — CTR Google +15%", "Refresh-to-home fix 6 tempat — logo, footer, floating CTA (already at top → reload)"] },
  { date: "2026-08-06", week: "W32", title: "Kalkulator Rugi + OG Dynamic — Lead Magnet #1 Anti-Nawar", tags: ["Conversion", "SEO", "Lead Magnet"], highlight: true, items: ["🧮 /kalkulator — interactive: omzet 5jt-500jt, % online, LCP 0.5-8s, SEO -25%, CTA -20%", "Formula bounce LCP Google CrUX + audit 50+ UMKM, cap 85%, result per bulan/tahun/3th", "Solution box emerald: 2.5jt balik dalam N bulan + CTA Telegram prefilled rugi", "🖼️ /api/og Edge 1200x630 dynamic — CT mark + emerald dot + stats pills + amber accent harga", "All blog 11 artikel now OG dynamic per article — share WA CTR +30%", "/harga OG amber HARGA JUJUR • ANTI-NAWAR — bottom line thick", "Sitemap 20 URLs (9 static + 11 blog) — GSC ready"] },
  { date: "2026-08-06", week: "W32", title: "One-Man Studio Rebrand — dari Solo city ke One-Man", tags: ["Branding", "Positioning"], highlight: true, items: ["❌ Remove semua kata 'solo' — rancu dikira kota Solo Jateng + too plain solo career", "✅ Rebrand ke One-man studio • Senior full-stack — premium boutique feel", "Navbar wordmark legit 2 lines: CilokTech WEB.ID + ONE-MAN STUDIO • SENIOR FULL-STACK", "Hero double badge: 50+ scale + One-man studio badge", "Footer: One-man studio — tanpa kantor, tanpa PM, langsung builder + badge", "SEO title: One-Man Studio | Jasa Website & keyword one-man studio indonesia", "Grep verified: 0x 'solo' left in codebase"] },
  { date: "2026-08-05", week: "W32", title: "11 Blog Articles — SEO Domination Cluster", tags: ["SEO", "Content"], items: ["From 5 → 8 → 11 articles SSG — nasional keyword, not Solo city", "Cluster: umkm sepi, landing vs company, wordpress vs nextjs, biaya breakdown, checklist, profesional, toko online, cv pt, murah jebakan, landing high conversion, wordpress vs nextjs 2026", "Each: JSON-LD Article + OG Article + canonical + reading time + tags + related", "Build 111kB First Load — not increasing despite +6 articles (SSG)", "Sitemap 18 URLs — GSC limit note 10/day, rest via sitemap auto-crawl"] },
  { date: "2026-08-05", week: "W32", title: "Favicon One-Man Studio Legit — CT + emerald dot", tags: ["Branding", "PWA"], items: ["Favicon set: .ico multi + PNG 16-512 + apple-touch 180 + og-oneman 1200x630 + logo-oneman-512 maskable", "Design: black pill #0a0a0a + CT white bold + emerald dot availability — Linear style", "logo.svg rebrand: CilokTech + ONE-MAN STUDIO subtitle", "Wordmark deck assets: wordmark-deck-dark/light.svg 420x64 + icon + badge", "Manifest + icons metadata + JSON-LD Organization upgrade"] },
  { date: "2026-08-04", week: "W31", title: "Blog + SEO Verification TRo05E — Indexed!", tags: ["SEO", "GSC"], highlight: true, items: ["/blog listing + /blog/[slug] dynamic — 5 initial articles", "Sitemap.xml 7→13→18 URLs + robots.txt + manifest.webmanifest", "Google site verification TRo05E — HTML tag (not TXT)", "GSC: URL is on Google ✅ Page is indexed ✅ HTTPS ✅ Sitemap submitted", "Homepage + /harga both available to Google — indexed within 24h"] },
  { date: "2026-08-03", week: "W31", title: "/harga Anti-Nawar — Anchoring Rp 7jt vs 2.5jt", tags: ["Copywriting", "Sales"], items: ["/harga 242 lines — hero anchoring: Kualitas Rp 7jt agency, gue jual Rp 2.5jt", "3 cards value, breakdown transparan per-item (UI 1.2jt, Next.js 1.5jt, SEO 800rb... = ±5jt jual 2.5jt)", "Comparison table 11 fitur: Template 900rb vs CilokTech 2.5jt ⭐ vs Agency 10jt+", "Loss vs Gain red/green box, kenapa bisa murah dark section, ROI reframe", "Homepage banner amber: ! Kenapa Rp 2.5jt? → /harga"] },
  { date: "2026-08-02", week: "W31", title: "Refresh-to-Home + Dark/Light + Footer Center", tags: ["UX", "Polish"], items: ["Navbar/Footer logo → button smooth scroll top clear hash, mobile Beranda ↺", "Floating dual CTA: back-to-top left >800px arrow ↑ + chat right >400px", "Footer final: © 2026 Cilok Tech — centered only, time Senin–Minggu without hour", "ThemeProvider Context + localStorage cilok-theme + inline anti-FOUC script dark class", "Build 4.65kB / 107kB First Load, 10 static routes"] },
  { date: "2026-08-01", week: "W31", title: "B2B Pro High-Conversion Redesign — web.id locked", tags: ["Launch", "Redesign"], items: ["Audit + fix next.config tracingRoot, eslint flat, globals.css custom-variant dark", "Layout metadata web.id locked — canonical, OG 1200x630, JSON-LD LocalBusiness, ThemeProvider", "Sections: Hero stats trust bar + browser mockup Rp 42.5jt dashboard, Services SVG icons, Pricing anti-nawar, Testimoni + FAQ", "Domain https://ciloktech.web.id locked — no my.id, sitemap, robots, manifest", "Commit 8191777 feat: B2B high-conversion redesign — 105kB First Load 8 routes"] },
];

export default function ChangelogClient() {
  const { locale } = useI18n();
  const isId = locale === "id";

  return (
    <main className="pt-16 bg-white dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full mb-5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> BUILDING IN PUBLIC • ONE-MAN STUDIO
            </div>
            <h1 className="text-[34px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
              Changelog
              <span className="block text-gray-400 dark:text-gray-500 text-[22px] md:text-[28px] mt-2 font-bold tracking-tight">{isId ? "Week by week — no bullshit." : "Week by week — straight talk."}</span>
            </h1>
            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 mt-6 max-w-[600px]">
              {isId ? "Gue build CilokTech one-man studio in public. Tiap commit, tiap blog, tiap favicon, tiap kalkulator — gue catat disini. Transparan, biar lo tau ini studio aktif, bukan template mati." : "I build CilokTech one-man studio in public. Every commit, blog, favicon, calculator — logged here. Transparent, so you know this studio is active, not dead template."}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="rounded-xl bg-[#fafafa] dark:bg-[#111] border border-gray-200 dark:border-white/10 p-4 text-[11px] font-mono">
              <div className="text-gray-500">$ git log --oneline</div>
              <div className="mt-2 space-y-1 text-gray-900 dark:text-white">
                <div>dc885ee one-man wordmark legit</div>
                <div className="opacity-60">4de15fd one-man rebrand</div>
                <div className="opacity-40">f5505c0 remove solo keyword</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-gray-300 dark:from-white/20 via-gray-200 dark:via-white/10 to-transparent hidden md:block" />
          <div className="space-y-10">
            {changelog.map((entry, idx) => (
              <div key={idx} className="relative flex gap-5 group">
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition ${entry.highlight ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white scale-110" : "bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-white/10 group-hover:border-gray-900 dark:group-hover:border-white"}`}>
                    <div className={`w-2 h-2 rounded-full ${entry.highlight ? "bg-emerald-400" : "bg-gray-300 dark:bg-white/30 group-hover:bg-gray-900 dark:group-hover:bg-white"}`} />
                  </div>
                </div>
                <div className={`flex-1 rounded-[20px] border p-6 md:p-7 transition ${entry.highlight ? "bg-gray-50 dark:bg-[#111111] border-gray-900/20 dark:border-white/15 shadow-sm" : "bg-white dark:bg-[#111111] border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/15"}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${entry.highlight ? "bg-gray-900 dark:bg-white text-white dark:text-black" : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"}`}>{entry.week}</span>
                    <span className="text-[11px] text-gray-500">{entry.date}</span>
                    <div className="flex gap-1.5 flex-wrap">{entry.tags.map((t) => (<span key={t} className="text-[10px] font-bold bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">{t}</span>))}</div>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">{entry.title}</h3>
                  <ul className="mt-4 space-y-2">{entry.items.map((it, i) => (<li key={i} className="flex gap-2.5 text-[13px] leading-[1.6] text-gray-700 dark:text-gray-300"><span className="text-gray-300 dark:text-white/20 mt-[2px]">•</span><span className="flex-1">{it}</span></li>))}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[20px] bg-gray-900 dark:bg-white text-white dark:text-black p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <div className="font-extrabold text-[18px]">{isId ? "Mau liat repo & progress live?" : "Wanna see repo & live progress?"}</div>
            <div className="text-[13px] opacity-70 mt-1">{isId ? "Semua build, commit, dan design ada di GitHub. One-man studio — buka." : "All builds, commits, and designs on GitHub. One-man studio — open."}</div>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href="https://github.com/cilokesteh/ciloktech" target="_blank" className="px-5 py-3 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold text-[13px] hover:bg-cyan-300 hover:text-black transition">GitHub → cilokesteh/ciloktech</a>
            <Link href="/blog" className="px-5 py-3 bg-transparent border border-white/20 dark:border-black/20 rounded-full font-bold text-[13px] hover:bg-white/10 dark:hover:bg-black/5 transition text-center">{isId ? "Baca blog" : "Read blog"}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
