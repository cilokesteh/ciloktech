"use client";
import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n/context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Kalkulator() {
  const [omzet, setOmzet] = useState(50000000);
  const [pctOnline, setPctOnline] = useState(40);
  const [lcp, setLcp] = useState(4.5);
  const [noSEO, setNoSEO] = useState(true);
  const [noCTA, setNoCTA] = useState(true);
  const { locale } = useI18n();
  const isId = locale === "id";

  const result = useMemo(() => {
    let bouncePct = 0;
    if (lcp <= 1) bouncePct = 0;
    else if (lcp <= 2) bouncePct = 0.2;
    else if (lcp <= 3) bouncePct = 0.35;
    else if (lcp <= 4) bouncePct = 0.45;
    else bouncePct = 0.5 + Math.min(0.15, (lcp - 4.5) * 0.05);
    const seoLoss = noSEO ? 0.25 : 0;
    const ctaLoss = noCTA ? 0.20 : 0;
    const onlineRevenue = omzet * (pctOnline / 100);
    const totalLossPct = Math.min(0.85, bouncePct + seoLoss + ctaLoss);
    const rugiBulan = Math.round(onlineRevenue * totalLossPct);
    const rugiTahun = rugiBulan * 12;
    const rugi3th = rugiTahun * 3;
    return { bouncePct, seoLoss, ctaLoss, totalLossPct, rugiBulan, rugiTahun, rugi3th, onlineRevenue };
  }, [omzet, pctOnline, lcp, noSEO, noCTA]);

  const fmt = (n: number) => new Intl.NumberFormat(isId ? "id-ID" : "en-US", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
  const fmtShort = (n: number) => {
    if (n >= 1_000_000_000) {
      const v = n / 1_000_000_000;
      return `Rp ${v >= 10 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "")}M`;
    }
    if (n >= 1_000_000) {
      const v = n / 1_000_000;
      return `Rp ${v >= 10 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "")}jt`;
    }
    return fmt(n);
  };
  // Super short for tiny mobile grid cells — always 1 line
  const fmtTiny = (n: number) => {
    if (n >= 1_000_000_000) return `Rp${(n / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    if (n >= 1_000_000) return `Rp${(n / 1_000_000).toFixed(0)}jt`;
    if (n >= 1000) return `Rp${Math.round(n / 1000)}k`;
    return fmt(n);
  };
  const pct = (v: number) => `${Math.round(v * 100)}%`;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div className="max-w-3xl">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-3 py-1 rounded-full">KALKULATOR GRATIS • ONE-MAN STUDIO</div>
          <LanguageSwitcher compact className="shrink-0" />
        </div>
        <h1 className="text-[32px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
          {isId ? "Website lambat itu" : "Slow site ="}
          <br />
          <span className="text-red-600 dark:text-red-400">{isId ? `rugi Rp ${Math.round(result.rugiBulan / 1000000)}jt` : `losing ${fmt(result.rugiBulan)}` } {isId ? "per bulan." : "/ month."}</span>
        </h1>
        <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400 mt-6 max-w-[600px]">
          {isId ? "Hitung berapa pendapatan yang hilang akibat website lambat, tanpa SEO, dan tanpa call-to-action. Data berdasarkan audit 50+ UMKM — bukan sekadar teori. Gratis, tanpa perlu email." : "Calculate how much revenue you lose because of slow site, no SEO, no CTA. Data from 50+ SME audits — not theory. Free, no email required."}
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        <div className="rounded-[22px] border border-gray-200 dark:border-white/10 bg-[#fafafa] dark:bg-[#111111] p-6 md:p-7 space-y-8">
          <div>
            <div className="flex justify-between mb-2 gap-3">
              <label className="text-[13px] font-bold text-gray-900 dark:text-white">{isId ? "Omzet per bulan" : "Monthly revenue"}</label>
              <span className="text-[13px] font-bold text-cyan-600 dark:text-cyan-400 shrink-0 whitespace-nowrap">{fmtShort(omzet)}</span>
            </div>
            <input type="range" min={5000000} max={500000000} step={5000000} value={omzet} onChange={(e) => setOmzet(parseInt(e.target.value))} className="w-full accent-gray-900 dark:accent-white h-2" />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1"><span>Rp 5jt</span><span>Rp 500jt</span></div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[13px] font-bold text-gray-900 dark:text-white">{isId ? "% Customer dari online (Google/IG/Web)" : "% Customers from online (Google/IG/Web)"}</label>
              <span className="text-[13px] font-bold text-cyan-600 dark:text-cyan-400 shrink-0">{pctOnline}%</span>
            </div>
            <input type="range" min={5} max={90} step={5} value={pctOnline} onChange={(e) => setPctOnline(parseInt(e.target.value))} className="w-full accent-gray-900 dark:accent-white h-2" />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1"><span>5%</span><span>90%</span></div>
          </div>

          <div>
            <div className="flex justify-between mb-2 gap-2">
              <label className="text-[13px] font-bold text-gray-900 dark:text-white">{isId ? "Kecepatan website Anda saat ini (LCP)" : "Your current load time (LCP)"}</label>
              <span className={`text-[13px] font-bold shrink-0 whitespace-nowrap ${lcp <= 1.5 ? "text-emerald-600" : lcp <= 3 ? "text-amber-600" : "text-red-600"}`}>{lcp}s — {lcp <= 1.5 ? (isId ? "Cepat" : "Fast") : lcp <= 3 ? (isId ? "Lambat" : "Slow") : (isId ? "Sangat lambat" : "Very slow")}</span>
            </div>
            <input type="range" min={0.5} max={8} step={0.5} value={lcp} onChange={(e) => setLcp(parseFloat(e.target.value))} className="w-full accent-gray-900 dark:accent-white h-2" />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1"><span>0.5s (Next.js)</span><span>8s (WordPress berat)</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className={`rounded-xl border p-4 cursor-pointer transition ${noSEO ? "border-red-300 bg-red-50 dark:bg-red-950/20" : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717]"}`}>
              <input type="checkbox" checked={noSEO} onChange={(e) => setNoSEO(e.target.checked)} className="accent-red-600" />
              <div className="mt-2 text-[13px] font-bold">{isId ? "Tidak SEO ready" : "Not SEO ready"}</div>
              <div className="text-[11px] text-gray-500 mt-1">{isId ? "Tanpa sitemap, OG, schema — Google tidak melakukan indexing (-25% traffic)" : "No sitemap, OG, schema — Google won't index (-25% traffic)"}</div>
            </label>
            <label className={`rounded-xl border p-4 cursor-pointer transition ${noCTA ? "border-red-300 bg-red-50 dark:bg-red-950/20" : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717]"}`}>
              <input type="checkbox" checked={noCTA} onChange={(e) => setNoCTA(e.target.checked)} className="accent-red-600" />
              <div className="mt-2 text-[13px] font-bold">{isId ? "Tanpa CTA yang jelas" : "No clear CTA"}</div>
              <div className="text-[11px] text-gray-500 mt-1">{isId ? "Tanpa tombol WA/Chat sticky — pelanggan kebingungan (-20% konversi)" : "No sticky WA/Chat button — customers confused (-20% conv)"}</div>
            </label>
          </div>
        </div>

        <div className="space-y-4 min-w-0">
          <div className="rounded-[22px] bg-gray-900 dark:bg-white text-white dark:text-black p-5 md:p-7 border border-gray-800 dark:border-white overflow-hidden">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase opacity-60">{isId ? "ESTIMASI KERUGIAN AKIBAT WEBSITE LAMBAT" : "EST. LOSS FROM SLOW WEBSITE"}</div>
            <div className="mt-4 min-w-0">
              <div className="text-[13px] opacity-70">{isId ? "Per bulan" : "Per month"}</div>
              {/* Monthly — always single line, scale down on mobile */}
              <div className="text-[26px] sm:text-[30px] md:text-[34px] font-extrabold tracking-[-0.02em] leading-[0.95] mt-1 whitespace-nowrap">{fmt(result.rugiBulan)}</div>
              <div className="text-[12px] opacity-70 mt-2 leading-snug">{isId ? `dari ${fmtShort(result.onlineRevenue)} revenue online hilang ${pct(result.totalLossPct)}` : `from ${fmtShort(result.onlineRevenue)} online revenue lost ${pct(result.totalLossPct)}`}</div>
            </div>

            {/* FIX OVERLAP: force single-line tiny format + tabular-nums + no wrap */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-white/[0.08] dark:bg-black/10 px-3.5 py-3.5 border border-white/10 dark:border-black/10">
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase opacity-50">{isId ? "Per tahun" : "Per year"}</div>
                <div className="mt-1 text-[16px] sm:text-[18px] font-extrabold leading-none tracking-tight tabular-nums whitespace-nowrap" title={fmt(result.rugiTahun)}>{fmtTiny(result.rugiTahun)}</div>
                <div className="mt-1 text-[10px] opacity-50 whitespace-nowrap truncate" title={fmt(result.rugiTahun)}>{fmt(result.rugiTahun)}</div>
              </div>
              <div className="rounded-xl bg-red-500/15 border border-red-500/30 px-3.5 py-3.5">
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase opacity-70 text-red-200 dark:text-red-700">3 tahun</div>
                <div className="mt-1 text-[16px] sm:text-[18px] font-extrabold leading-none tracking-tight tabular-nums whitespace-nowrap text-red-200 dark:text-red-600" title={fmt(result.rugi3th)}>{fmtTiny(result.rugi3th)}</div>
                <div className="mt-1 text-[10px] opacity-60 whitespace-nowrap">{isId ? "jika tidak segera diperbaiki" : "if not fixed"}</div>
                <div className="mt-0.5 text-[9px] opacity-40 whitespace-nowrap truncate hidden sm:block" title={fmt(result.rugi3th)}>{fmt(result.rugi3th)}</div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 dark:border-black/10">
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase opacity-90">{isId ? "Rincian kerugian:" : "Loss breakdown:"}</div>
              {/* FIX: each row is flex nowrap — label truncated with min-w-0, amount stays 1 line */}
              <div className="mt-3 space-y-2.5 text-[12.5px]">
                <div className="flex items-center justify-between gap-2">
                  <span className="opacity-70 min-w-0 truncate pr-2">{isId ? `Lambat ${lcp}s → ${pct(result.bouncePct)} bounce rate` : `Slow ${lcp}s → ${pct(result.bouncePct)} bounce`}</span>
                  <span className="font-bold shrink-0 whitespace-nowrap tabular-nums">{fmtShort(result.onlineRevenue * result.bouncePct)}</span>
                </div>
                {result.seoLoss > 0 && (
                  <div className="flex items-center justify-between gap-2">
                    <span className="opacity-70 min-w-0 truncate pr-2">{isId ? `Tanpa SEO → -${pct(result.seoLoss)} traffic organik` : `No SEO → -${pct(result.seoLoss)} traffic`}</span>
                    <span className="font-bold shrink-0 whitespace-nowrap tabular-nums">{fmtShort(result.onlineRevenue * result.seoLoss)}</span>
                  </div>
                )}
                {result.ctaLoss > 0 && (
                  <div className="flex items-center justify-between gap-2">
                    <span className="opacity-70 min-w-0 truncate pr-2">{isId ? `Tanpa CTA → -${pct(result.ctaLoss)} konversi` : `No CTA → -${pct(result.ctaLoss)} conv`}</span>
                    <span className="font-bold shrink-0 whitespace-nowrap tabular-nums">{fmtShort(result.onlineRevenue * result.ctaLoss)}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-emerald-500 text-black p-4 flex items-start gap-3">
              <div className="text-[20px] shrink-0">💡</div>
              <div className="min-w-0">
                <div className="text-[13px] font-bold leading-tight">{isId ? "Solusi CilokTech One-Man Studio" : "CilokTech Solution"}</div>
                <div className="text-[12px] leading-relaxed mt-1">
                  Next.js 111kB &lt;1s LCP (bounce 0%), SEO OG+Schema+Sitemap {isId ? "lengkap" : "complete"} (+25% traffic), CTA sticky + floating (+20% conv).<br />
                  <span className="font-bold">{isId ? `Invest Rp 2.5jt → balik dalam ${Math.max(1, Math.ceil(2500000 / Math.max(result.rugiBulan, 1)))} bulan.` : `Invest $155 → ROI in ${Math.max(1, Math.ceil(2500000 / Math.max(result.rugiBulan, 1)))} months.`}</span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a href={`https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20barusan%20menghitung%20kerugian%20website%20${encodeURIComponent(fmt(result.rugiBulan))}%2Fbulan%20LCP%20${lcp}s%20Mau%20jadi%20%3C1s%20kayak%20ciloktech.web.id`} target="_blank" className="w-full text-center px-6 py-3.5 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold text-[14px] hover:bg-cyan-300 hover:text-black transition whitespace-nowrap">
                {isId ? "Perbaiki kerugian ini → Chat One-Man Studio →" : "Fix this loss → Chat Studio →"}
              </a>
              <a href="/harga" className="w-full text-center px-6 py-3 bg-transparent border border-white/20 dark:border-black/20 text-white dark:text-black rounded-full font-bold text-[13px] hover:bg-white/10 dark:hover:bg-black/5 transition">{isId ? "Lihat rincian Rp 2,5jt vs Rp 7jt" : "See breakdown Rp 2.5jt vs Rp 7jt"}</a>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 p-4">
            <div className="text-[12px] font-bold text-amber-800 dark:text-amber-200">{isId ? "Perhitungan berdasarkan data, bukan perkiraan sembarangan" : "Data-driven calculation, not guesswork"}</div>
            <div className="text-[11.5px] text-amber-800/70 dark:text-amber-200/70 leading-relaxed mt-1">{isId ? "Formula bounce rate vs LCP berdasarkan Google Chrome UX Report. Dampak SEO -25% & CTA -20% berdasarkan audit 50+ website UMKM CilokTech. Pendapatan online = total omzet x % online. Total kerugian dibatasi maksimal 85%." : "Bounce vs LCP formula from Google Chrome UX Report. SEO -25% & CTA -20% from 50+ SME audits. Online revenue = revenue x % online. Total loss capped 85% max."}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
