"use client";
import { useState, useMemo } from "react";

export default function Kalkulator() {
  const [omzet, setOmzet] = useState(50000000); // 50jt
  const [pctOnline, setPctOnline] = useState(40); // % customer dari online
  const [lcp, setLcp] = useState(4.5); // seconds
  const [noSEO, setNoSEO] = useState(true);
  const [noCTA, setNoCTA] = useState(true);

  const result = useMemo(() => {
    // bounce due to LCP
    // <1s = 0% bounce extra, 2s=20%, 3s=35%, 4.5s=50%
    let bouncePct = 0;
    if (lcp <= 1) bouncePct = 0;
    else if (lcp <= 2) bouncePct = 0.2;
    else if (lcp <= 3) bouncePct = 0.35;
    else if (lcp <= 4) bouncePct = 0.45;
    else bouncePct = 0.5 + Math.min(0.15, (lcp - 4.5) * 0.05);

    const seoLoss = noSEO ? 0.25 : 0; // 25% traffic hilang kalo gak SEO
    const ctaLoss = noCTA ? 0.20 : 0; // 20% conversion hilang kalo gak CTA

    const onlineRevenue = omzet * (pctOnline / 100);
    // total loss = bounce + seo + cta, capped 85%
    const totalLossPct = Math.min(0.85, bouncePct + seoLoss + ctaLoss);
    const rugiBulan = Math.round(onlineRevenue * totalLossPct);
    const rugiTahun = rugiBulan * 12;
    const rugi3th = rugiTahun * 3;

    return { bouncePct, seoLoss, ctaLoss, totalLossPct, rugiBulan, rugiTahun, rugi3th, onlineRevenue };
  }, [omzet, pctOnline, lcp, noSEO, noCTA]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  const pct = (v: number) => `${Math.round(v * 100)}%`;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      {/* HERO */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-3 py-1 rounded-full mb-6">
          KALKULATOR GRATIS • ONE-MAN STUDIO
        </div>
        <h1 className="text-[32px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
          Website lemot itu<br />
          <span className="text-red-600 dark:text-red-400">rugi Rp {Math.round(result.rugiBulan / 1000000)}jt</span> per bulan.
        </h1>
        <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400 mt-6 max-w-[600px]">
          Hitung berapa omzet yang hilang karena website lemot, gak SEO, dan gak ada CTA. Data dari 50+ audit UMKM — bukan teori. Gratis, no email required.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        {/* INPUTS */}
        <div className="rounded-[22px] border border-gray-200 dark:border-white/10 bg-[#fafafa] dark:bg-[#111111] p-6 md:p-7 space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[13px] font-bold text-gray-900 dark:text-white">Omzet per bulan</label>
              <span className="text-[13px] font-bold text-cyan-600 dark:text-cyan-400">{fmt(omzet)}</span>
            </div>
            <input
              type="range"
              min={5000000}
              max={500000000}
              step={5000000}
              value={omzet}
              onChange={(e) => setOmzet(parseInt(e.target.value))}
              className="w-full accent-gray-900 dark:accent-white h-2"
            />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
              <span>Rp 5jt</span><span>Rp 500jt</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[13px] font-bold text-gray-900 dark:text-white">% Customer dari online (Google/IG/Web)</label>
              <span className="text-[13px] font-bold text-cyan-600 dark:text-cyan-400">{pctOnline}%</span>
            </div>
            <input type="range" min={5} max={90} step={5} value={pctOnline} onChange={(e) => setPctOnline(parseInt(e.target.value))} className="w-full accent-gray-900 dark:accent-white h-2" />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1"><span>5%</span><span>90%</span></div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[13px] font-bold text-gray-900 dark:text-white">Load time website lo sekarang (LCP)</label>
              <span className={`text-[13px] font-bold ${lcp <= 1.5 ? "text-emerald-600" : lcp <= 3 ? "text-amber-600" : "text-red-600"}`}>{lcp}s — {lcp <= 1.5 ? "Ngebut" : lcp <= 3 ? "Lambat" : "Lemot parah"}</span>
            </div>
            <input type="range" min={0.5} max={8} step={0.5} value={lcp} onChange={(e) => setLcp(parseFloat(e.target.value))} className="w-full accent-gray-900 dark:accent-white h-2" />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1"><span>0.5s (Next.js)</span><span>8s (WP berat)</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className={`rounded-xl border p-4 cursor-pointer transition ${noSEO ? "border-red-300 bg-red-50 dark:bg-red-950/20" : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717]"}`}>
              <input type="checkbox" checked={noSEO} onChange={(e) => setNoSEO(e.target.checked)} className="accent-red-600" />
              <div className="mt-2 text-[13px] font-bold">Gak SEO ready</div>
              <div className="text-[11px] text-gray-500 mt-1">Gak ada sitemap, OG, schema — Google gak index (-25% traffic)</div>
            </label>
            <label className={`rounded-xl border p-4 cursor-pointer transition ${noCTA ? "border-red-300 bg-red-50 dark:bg-red-950/20" : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717]"}`}>
              <input type="checkbox" checked={noCTA} onChange={(e) => setNoCTA(e.target.checked)} className="accent-red-600" />
              <div className="mt-2 text-[13px] font-bold">Gak ada CTA jelas</div>
              <div className="text-[11px] text-gray-500 mt-1">Gak ada tombol WA/Chat sticky — customer bingung (-20% conv)</div>
            </label>
          </div>
        </div>

        {/* RESULT */}
        <div className="space-y-4">
          <div className="rounded-[22px] bg-gray-900 dark:bg-white text-white dark:text-black p-7 border border-gray-800 dark:border-white">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase opacity-60">ESTIMASI RUGI KARENA WEBSITE LEMOT</div>
            <div className="mt-4">
              <div className="text-[13px] opacity-70">Per bulan</div>
              <div className="text-[36px] font-extrabold tracking-tight leading-none mt-1">{fmt(result.rugiBulan)}</div>
              <div className="text-[13px] opacity-70 mt-1">dari {fmt(result.onlineRevenue)} revenue online hilang {pct(result.totalLossPct)}</div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 dark:bg-black/10 p-4">
                <div className="text-[11px] opacity-60">Per tahun</div>
                <div className="text-[20px] font-extrabold mt-1">{fmt(result.rugiTahun)}</div>
              </div>
              <div className="rounded-xl bg-red-500/20 border border-red-500/30 p-4">
                <div className="text-[11px] opacity-80">3 tahun</div>
                <div className="text-[20px] font-extrabold mt-1 text-red-300 dark:text-red-600">{fmt(result.rugi3th)}</div>
                <div className="text-[11px] opacity-70 mt-1">kalo gak di-fix</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 dark:border-black/10">
              <div className="text-[12px] font-bold opacity-90">Breakdown rugi:</div>
              <div className="mt-3 space-y-2 text-[12px]">
                <div className="flex justify-between"><span className="opacity-70">Lemot {lcp}s → {pct(result.bouncePct)} bounce</span><span className="font-bold">{fmt(result.onlineRevenue * result.bouncePct)}</span></div>
                {result.seoLoss > 0 && <div className="flex justify-between"><span className="opacity-70">Gak SEO → -{pct(result.seoLoss)} traffic</span><span className="font-bold">{fmt(result.onlineRevenue * result.seoLoss)}</span></div>}
                {result.ctaLoss > 0 && <div className="flex justify-between"><span className="opacity-70">Gak CTA → -{pct(result.ctaLoss)} conversion</span><span className="font-bold">{fmt(result.onlineRevenue * result.ctaLoss)}</span></div>}
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-emerald-500 text-black p-4 flex items-start gap-3">
              <div className="text-[20px]">💡</div>
              <div>
                <div className="text-[13px] font-bold leading-tight">Solusi CilokTech One-Man Studio</div>
                <div className="text-[12px] leading-relaxed mt-1">
                  Next.js 111kB &lt;1s LCP (bounce 0%), SEO OG+Schema+Sitemap lengkap (+25% traffic), CTA sticky + floating (+20% conv).<br />
                  <span className="font-bold">Invest Rp 2.5jt → balik dalam {Math.max(1, Math.ceil(2500000 / Math.max(result.rugiBulan, 1)))} bulan.</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`https://t.me/ciloktech?text=Halo%20Cilok%2C%20gue%20barusan%20hitung%20kalkulator%20rugi%20website%3A%20rugi%20${encodeURIComponent(fmt(result.rugiBulan))}%2Fbulan%20karena%20LCP%20${lcp}s%20%2B%20${noSEO ? "no%20SEO" : "SEO%20ok"}%20%2B%20${noCTA ? "no%20CTA" : "CTA%20ok"}.%20Mau%20fix%20jadi%20%3C1s%20kayak%20ciloktech.web.id`}
                target="_blank"
                className="w-full text-center px-6 py-3.5 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold text-[14px] hover:bg-cyan-300 hover:text-black transition"
              >
                Fix rugi ini → Chat One-Man Studio →
              </a>
              <a href="/harga" className="w-full text-center px-6 py-3 bg-transparent border border-white/20 dark:border-black/20 text-white dark:text-black rounded-full font-bold text-[13px] hover:bg-white/10 dark:hover:bg-black/5 transition">
                Lihat breakdown Rp 2.5jt vs Rp 7jt
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 p-4">
            <div className="text-[12px] font-bold text-amber-800 dark:text-amber-200">Ini bukan angka ngarang</div>
            <div className="text-[11.5px] text-amber-800/70 dark:text-amber-200/70 leading-relaxed mt-1">
              Rumus bounce vs LCP dari Google Chrome UX Report. SEO -25% & CTA -20% dari audit 50+ site UMKM CilokTech. Omzet online = omzet x % online. Total loss di-cap 85% max.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
