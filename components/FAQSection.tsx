"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Berapa lama proses pembuatan?",
    a: "Landing page rata-rata 2–3 hari, company profile 4–7 hari, web app custom tergantung scope tapi biasanya ada MVP dalam 1–2 minggu. Semua dengan staging link biar lo bisa cek progress real-time.",
  },
  {
    q: "Apakah source code diberikan?",
    a: "Ya, repo private GitHub + dokumentasi. Lo pegang full ownership. Kalo butuh deploy sendiri atau pindah hosting kapan aja bisa, gak ada vendor lock-in. One-man studio — source tetap milik lo.",
  },
  {
    q: "Pakai teknologi apa?",
    a: "Next.js 15, React 19, Tailwind v4, Firebase/Supabase/Postgres sesuai kebutuhan. Hosting Vercel + Cloudflare. Stack modern 111kB First Load, <1s LCP, 98 Lighthouse, aman by default.",
  },
  {
    q: "Bisa revisi berapa kali?",
    a: "Landing page & company profile: 2x revisi minor gratis. Web app: iterasi agile tiap minggu. Revisi besar (ganti konsep) dihitung tambahan — tapi gue selalu diskusi solusi termurah dulu.",
  },
  {
    q: "Ada garansi / maintenance?",
    a: "Company profile gratis maintenance 3 bulan (bug fix + security patch). Web app custom retainer opsional — uptime monitor, backup harian, performance tuning.",
  },
  {
    q: "Cara bayar gimana?",
    a: "DP 50% untuk mulai, pelunasan setelah go-live dan lo approve. Bisa transfer bank / QRIS. Untuk retainer bulanan sistem langganan.",
  },
  {
    q: "Kenapa sebut one-man studio?",
    a: "Karena CilokTech emang dikerjain 1 orang senior full-stack — tanpa kantor, tanpa PM, tanpa sales. Lo chat langsung sama builder-nya. Kenapa bisa murah? Gak ada overhead kantor & meeting muter-muter, tapi kualitas agency Rp 7jt.",
  },
  {
    q: "Kenapa harga 2.5jt, bukan 500rb?",
    a: "Website 500rb itu template bajakan, gak SEO, lemot, kena hack, source dikunci. 2.5jt di CilokTech itu custom Next.js, SEO lengkap, <1s LCP, source milik lo, maintenance 3 bulan. Hitung pakai kalkulator di /kalkulator — website lemot bisa rugi Rp 10jt+/bulan.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#111111] border-y border-gray-200 dark:border-white/5 px-6 transition-colors duration-300" id="faq">
      {/* FAQ JSON-LD — rich snippet Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ciloktech.web.id/" },
              { "@type": "ListItem", position: 2, name: "FAQ", item: "https://ciloktech.web.id/#faq" },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-4">
            FAQ • One-Man Studio
          </div>
          <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
            Pertanyaan yang sering
            <span className="text-gray-400 dark:text-gray-500"> ditanyain</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-[16px] border bg-white dark:bg-[#171717] transition-all ${open === i ? "border-gray-900 dark:border-white shadow-sm" : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[14px] md:text-[15px] font-bold text-gray-900 dark:text-white pr-4">{f.q}</span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 transition ${open === i ? "bg-gray-900 dark:bg-white text-white dark:text-black rotate-45" : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400"}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[13.5px] leading-[1.7] text-gray-600 dark:text-gray-400 animate-in fade-in duration-200">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-400 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-5 py-2.5 rounded-full">
            Masih ada pertanyaan? <a href="https://t.me/ciloktech" className="font-bold text-gray-900 dark:text-white underline underline-offset-4">Tanya di Telegram →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
