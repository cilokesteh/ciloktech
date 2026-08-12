"use client";
import Link from "next/link";
import { posts } from "./data";
import { useI18n } from "@/lib/i18n/context";

export default function BlogClient() {
  const { locale } = useI18n();
  const isId = locale === "id";
  const featured = posts.filter((p) => p.featured);

  return (
    <main className="pt-16 bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <section className="py-14 md:py-20 px-6 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full mb-5">BLOG • {isId ? "TIPS PRAKTIS DARI LAPANGAN" : "STRAIGHT TALK — REAL INSIGHTS"}</div>
          <h1 className="text-[36px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white max-w-[560px]">
            {isId ? <>Website yang <span className="text-cyan-700 dark:text-cyan-400">menghasilkan</span> pelanggan,<br />bukan sekadar tampilan menarik.</> : <>Websites that <span className="text-cyan-700 dark:text-cyan-400">convert</span> customers,<br />not just look pretty.</>}
          </h1>
          <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 mt-5 max-w-[520px]">
            {isId ? "Saya menulis berdasarkan temuan di lapangan: mengapa website UMKM sepi pengunjung, perbedaan landing page vs company profile, mengapa WordPress lambat, dan checklist konversi yang benar-benar terbukti." : "I write based on real field findings: why SME websites get zero traffic, landing vs company profile differences, why WordPress is slow, and the conversion checklist that actually works."}
          </p>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">⭐ {isId ? "Rekomendasi Utama" : "Featured Articles"}</div>
          <div className="grid md:grid-cols-3 gap-4">
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-[20px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717] overflow-hidden hover:border-gray-900 dark:hover:border-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col">
                <div className="h-40 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex gap-2 flex-wrap">{post.tags.slice(0, 2).map((t) => (<span key={t} className="text-[10px] font-bold tracking-wide uppercase bg-white/90 dark:bg-black/80 text-gray-900 dark:text-white px-2.5 py-1 rounded-full">{t}</span>))}</div>
                  <div className="text-white dark:text-black font-extrabold text-[18px] leading-tight mt-auto">{post.title.split(":")[0]}</div>
                  <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px]" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-bold text-[15px] leading-snug text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition line-clamp-2">{post.title}</h2>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400 mt-2 leading-relaxed line-clamp-2">{post.description}</p>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString(isId ? "id-ID" : "en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="font-medium">{post.readingTime} • {isId ? "Baca" : "Read"} →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-[#fafafa] dark:bg-[#111111] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">{isId ? "Semua Artikel" : "All Articles"}</div>
          <div className="space-y-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col md:flex-row md:items-center justify-between gap-3 p-5 bg-white dark:bg-[#171717] rounded-2xl border border-gray-200 dark:border-white/10 hover:border-gray-900 dark:hover:border-white transition">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] text-gray-500">{new Date(post.date).toLocaleDateString(isId ? "id-ID" : "en-US")}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[11px] text-gray-500">{post.readingTime}</span>
                    {post.featured && <span className="text-[10px] font-bold bg-amber-500 text-amber-950 px-2 py-0.5 rounded-full">FEATURED</span>}
                  </div>
                  <div className="font-bold text-[15px] text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">{post.title}</div>
                  <div className="text-[13px] text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{post.description}</div>
                </div>
                <div className="shrink-0 flex items-center gap-2 flex-wrap">{post.tags.map((t) => (<span key={t} className="text-[10px] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">{t}</span>))}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gray-900 dark:bg-white rounded-[24px] p-8 md:p-10 text-white dark:text-black">
          <h2 className="text-[24px] md:text-[32px] font-extrabold tracking-tight leading-[0.9]">{isId ? "Ingin website seperti yang dibahas di blog?" : "Want a website like the ones featured in the blog?"}</h2>
          <p className="text-[14px] opacity-70 mt-3 max-w-[500px] mx-auto">{isId ? "Jangan hanya membaca — saatnya eksekusi. Konsultasi 15 menit, saya berikan roadmap gratis." : "Ready to take the next step? Book a free 15-minute consultation and get a complimentary roadmap."}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20saya%20baru%20membaca%20blog%20dan%20ingin%20konsultasi" className="px-7 py-3.5 bg-white dark:bg-black text-gray-900 dark:text-white rounded-full font-bold text-[13.5px] hover:bg-cyan-300 dark:hover:bg-cyan-300 hover:text-black transition">🚀 {isId ? "Mulai Konsultasi" : "Start Consultation"}</a>
            <Link href="/harga" className="px-7 py-3.5 bg-transparent border border-white/20 dark:border-black/20 rounded-full font-bold text-[13.5px] hover:bg-white/10 dark:hover:bg-black/10 transition">{isId ? "Lihat Paket Harga →" : "View Pricing Plans →"}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
