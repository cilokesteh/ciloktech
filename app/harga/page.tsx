import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Harga Jasa Website — Penjelasan Lengkap & Transparan",
  description:
    "Kenapa CilokTech bandrol Rp 2.5jt untuk kualitas senilai Rp 7jt? Breakdown transparan, comparison dengan freelance pemula vs agency, dan apa yang lo dapet. Tanpa hidden fee.",
  alternates: { canonical: "https://ciloktech.web.id/harga" },
};

const comparison = [
  { feature: "Desain", low: "Template beli Rp 150rb", mid: "Custom Figma → code (kayak ciloktech.web.id)", high: "Custom + brand guideline" },
  { feature: "Teknologi", low: "WordPress + Elementor berat", mid: "Next.js 15 + Tailwind v4 — 107kB, 98 Lighthouse", high: "Next.js + testing + CI/CD" },
  { feature: "SEO", low: "Gak ada / asal", mid: "OG, Schema, Sitemap, Robots, Canonical — lengkap", high: "Sama + blog SEO + analytics setup" },
  { feature: "Dark / Light Mode", low: "❌", mid: "✅ Pro toggle + persist + anti-FOUC", high: "✅" },
  { feature: "Speed", low: "3-6 detik", mid: "<1s LCP", high: "<1s LCP" },
  { feature: "Source Code", low: "❌ Terkunci theme", mid: "✅ Repo private GitHub milik lo 100%", high: "✅" },
  { feature: "Revisi", low: "1x, lama", mid: "2x minor gratis, iterasi cepat", high: "Unlimited (meeting muter)" },
  { feature: "Maintenance", low: "❌", mid: "3 bulan bug + security", high: "Retainer bulanan" },
  { feature: "Komunikasi", low: "Slow respon, hilang", mid: "Balas <2 jam — Telegram direct ke dev", high: "Via PM → meeting → dev" },
  { feature: "Go-Live", low: "1-3 minggu gagal", mid: "3-7 hari average", high: "2-4 minggu" },
  { feature: "Harga", low: "Rp 800rb - 1.8jt", mid: "Rp 2.5jt", high: "Rp 8jt - 15jt", highlight: true },
];

const breakdown = [
  { item: "UI Design custom Figma-inspired + responsive", value: "Rp 1.2jt", note: "Agency charge 2-3jt" },
  { item: "Frontend Next.js 15 + Tailwind + Dark/Light", value: "Rp 1.5jt", note: "Custom bukan template" },
  { item: "SEO on-page: OG, Schema, Sitemap, Robots, 98 Lighthouse", value: "Rp 800rb", note: "Jasa SEO aja 1jt/bln di luar" },
  { item: "Copywriting B2B high-conversion + structure", value: "Rp 700rb", note: "Bukan Lorem Ipsum" },
  { item: "Hosting Vercel + domain web.id + SSL 1th", value: "Rp 300rb", note: "Gratis tahun pertama" },
  { item: "Deploy + training + docs", value: "Rp 500rb", note: "Via Telegram / GMeet" },
];

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        {/* HERO */}
        <section className="py-16 md:py-24 px-6 border-b border-gray-100 dark:border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full mb-6">
              HARGA JUJUR — NO GIMMICK
            </div>
            <h1 className="text-[32px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white max-w-[720px]">
              Kualitas <span className="line-through decoration-2 decoration-gray-400">Rp 7jt</span> agency,
              <br />gue jual <span className="text-cyan-600 dark:text-cyan-400">Rp 2.5jt</span>. Kok bisa?
            </h1>
            <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400 mt-6 max-w-[600px]">
              Karena gue solo senior, bukan agency yang harus bayar kantor + PM + sales. Stack modern Next.js jadi dev ngebut. Tanpa meeting muter-muter. Hasilnya sama — biaya overhead aja yang kepangkas.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#fafafa] dark:bg-[#111111] border border-gray-200 dark:border-white/10 p-5">
                <div className="text-[12px] font-bold uppercase tracking-widest text-gray-500">Yang lo bayar</div>
                <div className="text-[28px] font-extrabold mt-1 text-gray-900 dark:text-white">Rp 2.5jt</div>
                <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">Sekali bayar, milik selamanya</div>
              </div>
              <div className="rounded-2xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/50 p-5">
                <div className="text-[12px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Value aslinya</div>
                <div className="text-[28px] font-extrabold mt-1 text-gray-900 dark:text-white">Rp 6jt — 7jt</div>
                <div className="text-[12px] text-cyan-700/70 dark:text-cyan-300/70 mt-1">Kalo di agency Jakarta</div>
              </div>
              <div className="rounded-2xl bg-gray-900 dark:bg-white border border-gray-900 dark:border-white p-5 text-white dark:text-black">
                <div className="text-[12px] font-bold uppercase tracking-widest opacity-60">Lo hemat</div>
                <div className="text-[28px] font-extrabold mt-1">~Rp 4jt</div>
                <div className="text-[12px] opacity-60 mt-1">Tanpa potong kualitas</div>
              </div>
            </div>
          </div>
        </section>

        {/* BREAKDOWN */}
        <section className="py-16 px-6 bg-[#fafafa] dark:bg-[#111111] border-b border-gray-100 dark:border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[24px] md:text-[32px] font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">Breakdown transparan: Rp 2.5jt itu buat apa aja?</h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 mb-8">Ini kalo lo pecah satu-per-satu, agency jual terpisah lebih mahal.</p>

            <div className="bg-white dark:bg-[#171717] rounded-[20px] border border-gray-200 dark:border-white/10 overflow-hidden">
              {breakdown.map((b, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-5 border-b last:border-0 border-gray-100 dark:border-white/5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition">
                  <div className="flex-1">
                    <div className="text-[14px] font-bold text-gray-900 dark:text-white">{i + 1}. {b.item}</div>
                    <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">{b.note}</div>
                  </div>
                  <div className="text-[13px] font-bold bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full w-fit">{b.value}</div>
                </div>
              ))}
              <div className="p-5 bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-between">
                <span className="font-bold text-[14px]">Total value kalo beli pisah</span>
                <span className="font-extrabold text-[18px]">Rp ±5jt + belum jadi website</span>
              </div>
              <div className="p-5 bg-cyan-500 dark:bg-cyan-400 text-gray-900 flex items-center justify-between font-bold">
                <span>Paket CilokTech (udah jadi, live 3-7 hari)</span>
                <span className="text-[20px]">Rp 2.5jt all-in ✅</span>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-[12px] text-gray-500 dark:text-gray-400 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Gak ada hidden fee. Domain + hosting tahun pertama include.
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-[28px] md:text-[40px] font-extrabold tracking-tight text-gray-900 dark:text-white">Bandingin biar jelas</h2>
              <p className="text-[14px] text-gray-600 dark:text-gray-400 mt-3">Kenapa Rp 900rb beda jauh sama Rp 2.5jt, dan kenapa Rp 2.5jt jauh lebih worth daripada Rp 10jt agency.</p>
            </div>

            <div className="overflow-x-auto rounded-[20px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717]">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[#fafafa] dark:bg-[#111111] border-b border-gray-200 dark:border-white/10">
                    <th className="p-4 text-[11px] font-bold uppercase tracking-widest text-gray-500 w-[22%]">Fitur</th>
                    <th className="p-4 text-[12px] font-bold text-gray-600 dark:text-gray-400 w-[26%]">Freelance Pemula<br/><span className="font-normal text-[11px]">Rp 800rb - 1.8jt</span></th>
                    <th className="p-4 text-[12px] font-extrabold text-gray-900 dark:text-white bg-cyan-50/50 dark:bg-cyan-950/20 w-[26%] border-x border-cyan-200/50 dark:border-cyan-900/30">CilokTech ⭐<br/><span className="font-bold text-cyan-600 dark:text-cyan-400">Rp 2.5jt — Value Rp 7jt</span></th>
                    <th className="p-4 text-[12px] font-bold text-gray-600 dark:text-gray-400 w-[26%]">Agency Jakarta<br/><span className="font-normal text-[11px]">Rp 8jt - 15jt</span></th>
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  {comparison.map((row, i) => (
                    <tr key={i} className={`border-b last:border-0 border-gray-100 dark:border-white/5 ${row.highlight ? "bg-gray-900 dark:bg-white text-white dark:text-black font-bold" : "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"} transition`}>
                      <td className={`p-4 font-bold ${row.highlight ? "text-white dark:text-black" : "text-gray-900 dark:text-white"}`}>{row.feature}</td>
                      <td className={`p-4 ${row.highlight ? "text-white/80 dark:text-black/70" : "text-gray-600 dark:text-gray-400"}`}>{row.low}</td>
                      <td className={`p-4 border-x border-cyan-200/30 dark:border-cyan-900/20 ${row.highlight ? "bg-gray-900 dark:bg-white text-white dark:text-black" : "bg-cyan-50/30 dark:bg-cyan-950/10 text-gray-900 dark:text-white font-medium"}`}>{row.mid}</td>
                      <td className={`p-4 ${row.highlight ? "text-white/80 dark:text-black/70" : "text-gray-600 dark:text-gray-400"}`}>{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 p-5">
                <div className="font-bold text-red-900 dark:text-red-300 text-[14px]">❌ Kalo pilih yang Rp 800rb, cost sebenernya lebih mahal:</div>
                <ul className="mt-3 space-y-2 text-[13px] text-red-800/80 dark:text-red-300/80 list-disc pl-5">
                  <li>Website lemot → pengunjung kabur → 0 konversi</li>
                  <li>SEO gak ada → gak muncul di Google → sepi order</li>
                  <li>Kena hack / down → brand rusak</li>
                  <li>Akhirnya bikin ulang lagi dari nol → bayar 2x</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 p-5">
                <div className="font-bold text-emerald-900 dark:text-emerald-300 text-[14px]">✅ Kalo pilih CilokTech Rp 2.5jt:</div>
                <ul className="mt-3 space-y-2 text-[13px] text-emerald-900/80 dark:text-emerald-300/80 list-disc pl-5">
                  <li>Live 3-7 hari, langsung bisa dipake jualan</li>
                  <li>SEO ready → muncul di Google dalam minggu pertama</li>
                  <li>&lt;1s load → pengunjung betah, konversi naik</li>
                  <li>Source code milik lo 100% → gak dikunci vendor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHEAP */}
        <section className="py-16 px-6 bg-gray-900 dark:bg-white text-white dark:text-black">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex text-[11px] font-bold tracking-widest uppercase bg-white/10 dark:bg-black/10 border border-white/10 dark:border-black/10 px-3 py-1 rounded-full mb-4">KENAPA BISA MURAH?</div>
              <h2 className="text-[28px] md:text-[36px] font-extrabold leading-[0.9] tracking-tight">Gue potong birokrasi,<br/>bukan kualitas.</h2>
              <div className="mt-8 space-y-6 text-[14px] leading-relaxed opacity-80">
                <div className="flex gap-3"><span className="font-bold">1.</span><span><b>Solo senior, bukan agency.</b> Gak ada biaya kantor, PM, sales, finance. Lo chat langsung sama dev yang ngerjain — bukan perantara.</span></div>
                <div className="flex gap-3"><span className="font-bold">2.</span><span><b>Stack modern = dev ngebut.</b> Next.js 15 + Tailwind v4, gue gak ngulik WordPress berat. 1 fitur yang agency 2 hari, gue 2 jam.</span></div>
                <div className="flex gap-3"><span className="font-bold">3.</span><span><b>No meeting muter-muter.</b> Brief via Telegram, progress via staging link, revisi to-the-point. Gak ada 5x meeting cuma buat milih warna button.</span></div>
                <div className="flex gap-3"><span className="font-bold">4.</span><span><b>Reuse sistem internal.</b> Gue udah punya boilerplate auth, SEO, dark mode, deployment — jadi gak mulai dari nol tiap project.</span></div>
              </div>
            </div>
            <div className="rounded-[22px] bg-white dark:bg-black text-gray-900 dark:text-white p-7 border border-gray-200 dark:border-white/10">
              <div className="text-[13px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Yang gak lo dapet di tempat murah</div>
              <div className="mt-5 space-y-4">
                <div className="flex justify-between p-3 rounded-xl bg-[#fafafa] dark:bg-white/5 border border-gray-100 dark:border-white/10">
                  <span className="text-[13px]">Agency 10jt: 60% budget = meeting</span>
                  <span className="text-[12px] font-bold">❌</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-[#fafafa] dark:bg-white/5 border border-gray-100 dark:border-white/10">
                  <span className="text-[13px]">Freelance 900rb: template, gak scalable</span>
                  <span className="text-[12px] font-bold">❌</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                  <span className="text-[13px] font-bold text-emerald-900 dark:text-emerald-300">CilokTech 2.5jt: 100% = produk</span>
                  <span className="text-[12px] font-bold text-emerald-700">✅</span>
                </div>
              </div>
              <div className="mt-6 text-[12px] leading-relaxed text-gray-600 dark:text-gray-400">
                Lo bayar buat hasil akhir yang live dan ngasilin cuan, bukan buat jam meeting.
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 px-6 bg-[#fafafa] dark:bg-[#111111] border-y border-gray-200 dark:border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[24px] font-extrabold text-gray-900 dark:text-white">Alur kerja biar gak drama</h2>
            <div className="mt-8 grid md:grid-cols-4 gap-4">
              {[
                { s: "01", t: "Briefing 15 menit", d: "Via Telegram — ceritain bisnis, target, referensi. Gue kasih roadmap." },
                { s: "02", t: "DP 50% & Design", d: "Gue desain, lo approve di Figma preview. Bukan revisi muter." },
                { s: "03", t: "Dev & Staging", d: "Live staging link tiap hari. Lo bisa cek progress real-time." },
                { s: "04", t: "Go-Live & Pelunasan", d: "Approve → gue deploy ke ciloktech.web.id style + training tim." },
              ].map((p) => (
                <div key={p.s} className="bg-white dark:bg-[#171717] border border-gray-200 dark:border-white/10 rounded-2xl p-5">
                  <div className="text-[11px] font-bold text-gray-400">{p.s}</div>
                  <div className="font-bold text-[15px] text-gray-900 dark:text-white mt-2">{p.t}</div>
                  <div className="text-[12.5px] text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 bg-white dark:bg-[#0a0a0a] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-tight text-gray-900 dark:text-white leading-[0.9]">Masih mikir<br/><span className="text-gray-400">2.5jt mahal?</span></h2>
            <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-5 max-w-[520px] mx-auto leading-relaxed">
              Hitung gini: kalo website naikin 1 customer tambahan per minggu senilai Rp 500rb — dalam 5 minggu udah balik modal. Sisanya profit terus. Website murah yang gak konversi = rugi selamanya.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20mau%20Company%20Profile%20Rp%202.5jt%20(detail%20dari%20/harga)" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-black dark:hover:bg-cyan-300 transition text-sm">
                🚀 Gas — Ambil Paket Rp 2.5jt
              </a>
              <Link href="/#harga" className="px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition text-sm">
                Balik lihat paket
              </Link>
            </div>
            <div className="mt-6 text-[11px] text-gray-400">Konsultasi gratis 15 menit — kalo gak cocok gak usah lanjut, santai.</div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
