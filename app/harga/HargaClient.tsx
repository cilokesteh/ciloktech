"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function HargaClient() {
  const { t } = useI18n();
  const hp = t.hargaPage;
  const comparison = hp.comparison;
  const breakdown = hp.breakdown;

  return (
    <main className="pt-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <section className="py-16 md:py-24 px-6 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full mb-6">{hp.badge}</div>
          <h1 className="text-[32px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white max-w-[720px]">
            {hp.heroH1a} <span className="line-through decoration-2 decoration-gray-400">{hp.heroH1b}</span> {hp.heroH1c}
            <br />{hp.heroH1d} <span className="text-cyan-600 dark:text-cyan-400">{hp.heroH1e}</span>{hp.heroH1f}
          </h1>
          <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400 mt-6 max-w-[600px]">{hp.heroSub}</p>

          <div className="mt-10 grid md:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#fafafa] dark:bg-[#111111] border border-gray-200 dark:border-white/10 p-5">
              <div className="text-[12px] font-bold uppercase tracking-widest text-gray-500">{hp.whatYouPay}</div>
              <div className="text-[28px] font-extrabold mt-1 text-gray-900 dark:text-white">Rp 2.5jt</div>
              <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">{hp.once}</div>
            </div>
            <div className="rounded-2xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/50 p-5">
              <div className="text-[12px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">{hp.realValue}</div>
              <div className="text-[28px] font-extrabold mt-1 text-gray-900 dark:text-white">Rp 6jt — 7jt</div>
              <div className="text-[12px] text-cyan-700/70 dark:text-cyan-300/70 mt-1">{hp.ifAgency}</div>
            </div>
            <div className="rounded-2xl bg-gray-900 dark:bg-white border border-gray-900 dark:border-white p-5 text-white dark:text-black">
              <div className="text-[12px] font-bold uppercase tracking-widest opacity-60">{hp.youSave}</div>
              <div className="text-[28px] font-extrabold mt-1">~Rp 4jt</div>
              <div className="text-[12px] opacity-60 mt-1">{hp.noCut}</div>
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-[12.5px] text-gray-500 dark:text-gray-400 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-full">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">✨</span> Premium Website tersedia — Rp 7,5jt (katalog + keranjang + dashboard admin). Lihat di <Link href="/#harga" className="font-bold underline underline-offset-4">paket</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#fafafa] dark:bg-[#111111] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[24px] md:text-[32px] font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">{hp.breakdownTitle}</h2>
          <p className="text-[14px] text-gray-600 dark:text-gray-400 mb-8">{hp.breakdownSub}</p>
          <div className="bg-white dark:bg-[#171717] rounded-[20px] border border-gray-200 dark:border-white/10 overflow-hidden">
            {breakdown.map((b: { item: string; value: string; note: string }, i: number) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-5 border-b last:border-0 border-gray-100 dark:border-white/5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition">
                <div className="flex-1"><div className="text-[14px] font-bold text-gray-900 dark:text-white">{i + 1}. {b.item}</div><div className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">{b.note}</div></div>
                <div className="text-[13px] font-bold bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full w-fit">{b.value}</div>
              </div>
            ))}
            <div className="p-5 bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-between"><span className="font-bold text-[14px]">{hp.totalSeparate}</span><span className="font-extrabold text-[18px]">{hp.totalSeparateVal}</span></div>
            <div className="p-5 bg-cyan-500 dark:bg-cyan-400 text-gray-900 flex items-center justify-between font-bold"><span>{hp.paketCilok}</span><span className="text-[20px]">{hp.paketVal}</span></div>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-[12px] text-gray-500 dark:text-gray-400 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-full"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> {hp.noHidden}</div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[28px] md:text-[40px] font-extrabold tracking-tight text-gray-900 dark:text-white">{hp.compareTitle}</h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 mt-3">{hp.compareSub}</p>
          </div>
          <div className="overflow-x-auto rounded-[20px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717]">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="bg-[#fafafa] dark:bg-[#111111] border-b border-gray-200 dark:border-white/10">
                  <th className="p-4 text-[11px] font-bold uppercase tracking-widest text-gray-500 w-[22%]">{hp.feature}</th>
                  <th className="p-4 text-[12px] font-bold text-gray-600 dark:text-gray-400 w-[26%]">{hp.freelance}<br/><span className="font-normal text-[11px]">{hp.freelanceRange}</span></th>
                  <th className="p-4 text-[12px] font-extrabold text-gray-900 dark:text-white bg-cyan-50/50 dark:bg-cyan-950/20 w-[26%] border-x border-cyan-200/50 dark:border-cyan-900/30">{hp.cilokCol}<br/><span className="font-bold text-cyan-600 dark:text-cyan-400">{hp.cilokRange}</span></th>
                  <th className="p-4 text-[12px] font-bold text-gray-600 dark:text-gray-400 w-[26%]">{hp.agencyCol}<br/><span className="font-normal text-[11px]">{hp.agencyRange}</span></th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                {comparison.map((row: { feature: string; low: string; mid: string; high: string; highlight?: boolean }, i: number) => (
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
              <div className="font-bold text-red-900 dark:text-red-300 text-[14px]">{hp.ifCheapTitle}</div>
              <ul className="mt-3 space-y-2 text-[13px] text-red-800/80 dark:text-red-300/80 list-disc pl-5">{hp.ifCheapBullets.map((b: string, i: number) => <li key={i}>{b}</li>)}</ul>
            </div>
            <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 p-5">
              <div className="font-bold text-emerald-900 dark:text-emerald-300 text-[14px]">{hp.ifCilokTitle}</div>
              <ul className="mt-3 space-y-2 text-[13px] text-emerald-900/80 dark:text-emerald-300/80 list-disc pl-5">{hp.ifCilokBullets.map((b: string, i: number) => <li key={i}>{b}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900 dark:bg-white text-white dark:text-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex text-[11px] font-bold tracking-widest uppercase bg-white/10 dark:bg-black/10 border border-white/10 dark:border-black/10 px-3 py-1 rounded-full mb-4">{hp.whyCheapBadge}</div>
            <h2 className="text-[28px] md:text-[36px] font-extrabold leading-[0.9] tracking-tight whitespace-pre-line">{hp.whyCheapTitle}</h2>
            <div className="mt-8 space-y-6 text-[14px] leading-relaxed opacity-80">
              {hp.whyCheapPoints.map((p: string, i: number) => (<div key={i} className="flex gap-3"><span className="font-bold">{i + 1}.</span><span>{p}</span></div>))}
            </div>
          </div>
          <div className="rounded-[22px] bg-white dark:bg-black text-gray-900 dark:text-white p-7 border border-gray-200 dark:border-white/10">
            <div className="text-[13px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{hp.sideCardTitle}</div>
            <div className="mt-5 space-y-4">
              {hp.sideRows.map((r: string, i: number) => {
                const isCilok = i === 2;
                return (
                  <div key={i} className={`flex justify-between p-3 rounded-xl border ${isCilok ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800" : "bg-[#fafafa] dark:bg-white/5 border-gray-100 dark:border-white/10"}`}>
                    <span className={`text-[13px] ${isCilok ? "font-bold text-emerald-900 dark:text-emerald-300" : ""}`}>{r}</span>
                    <span className={`text-[12px] font-bold ${isCilok ? "text-emerald-700" : ""}`}>{isCilok ? "✅" : "❌"}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-[12px] leading-relaxed text-gray-600 dark:text-gray-400">{hp.sideNote}</div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#fafafa] dark:bg-[#111111] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[24px] font-extrabold text-gray-900 dark:text-white">{hp.stepsTitle}</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {hp.steps.map((p: { s: string; t: string; d: string }) => (
              <div key={p.s} className="bg-white dark:bg-[#171717] border border-gray-200 dark:border-white/10 rounded-2xl p-5">
                <div className="text-[11px] font-bold text-gray-400">{p.s}</div>
                <div className="font-bold text-[15px] text-gray-900 dark:text-white mt-2">{p.t}</div>
                <div className="text-[12.5px] text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-[#0a0a0a] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-tight text-gray-900 dark:text-white leading-[0.9] whitespace-pre-line">{hp.finalH1}</h2>
          <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-5 max-w-[520px] mx-auto leading-relaxed">{hp.finalP}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kalkulator" className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition text-sm">{hp.calcCta}</Link>
            <a href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Company%20Profile%20Rp%202.5jt%20(detail%20dari%20/harga)" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-black dark:hover:bg-cyan-300 transition text-sm">{hp.gasCta}</a>
          </div>
          <div className="mt-4 flex justify-center"><Link href="/#harga" className="text-[13px] text-gray-500 hover:text-gray-900 dark:hover:text-white underline underline-offset-4">{hp.backPkg}</Link></div>
          <div className="mt-6 text-[11px] text-gray-400">{hp.freeNote}</div>
        </div>
      </section>
    </main>
  );
}
