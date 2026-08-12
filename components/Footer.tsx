"use client";
import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  const handleHomeClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (window.location.pathname === "/") {
      if (window.scrollY < 10 && !window.location.hash) {
        window.location.reload();
        return;
      }
      if (window.location.hash) history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <footer className="bg-[#050507] text-gray-400 py-14 px-6 border-t border-white/[0.06] transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-cyan-500/[0.06] to-transparent blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-4 max-w-[340px]">
            <button onClick={handleHomeClick} className="flex items-center gap-2.5 group cursor-pointer text-left" aria-label={`${t.nav.beranda} — Cilok Tech — refresh`} title={`Click: top • Already at top: refresh`}>
              <img src="/logo.jpg" alt="Cilok Tech One-Man Studio" className="h-7 w-7 rounded-full object-cover group-hover:ring-2 group-hover:ring-white/20 group-hover:scale-105 transition" />
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-extrabold text-[16px] tracking-tight group-hover:text-cyan-300 transition">Cilok Tech</span>
                  <span className="text-[9px] font-black tracking-widest uppercase bg-white text-black px-2 py-0.5 rounded-full group-hover:bg-cyan-300 transition">WEB.ID</span>
                </div>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/60 mt-1 group-hover:text-white/70 transition">ONE-MAN STUDIO • {t.nav.clickToTop}</span>
              </div>
            </button>
            <p className="text-[13px] leading-relaxed">{t.footer.desc}</p>
            <div className="inline-flex items-center gap-2 text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full hover:bg-white/10 cursor-pointer transition" onClick={handleHomeClick}>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> One-man studio • Senior • 🇮🇩
            </div>
            <div className="flex gap-2 pt-1">
              <a href="https://t.me/ciloktechcsbot" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition">✈</a>
              <a href="https://github.com/cilokesteh" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition">G</a>
              <a href="mailto:hi@ciloktech.my.id" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition">✉</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <div className="text-white font-bold mb-4 text-[13px] tracking-wide uppercase">{t.footer.nav}</div>
              <nav className="space-y-3 text-[13px]">
                <button onClick={handleHomeClick} className="block hover:text-white transition text-left group">{t.nav.beranda} <span className="opacity-0 group-hover:opacity-100 transition">↺</span></button>
                <a href="#layanan" className="block hover:text-white transition">{t.footer.layanan}</a>
                <a href="#portofolio" className="block hover:text-white transition">{t.footer.portofolio}</a>
                <a href="#harga" className="block hover:text-white transition">{t.footer.harga}</a>
                <a href="#testimoni" className="block hover:text-white transition">{t.footer.testimoni}</a>
              </nav>
            </div>
            <div>
              <div className="text-white font-bold mb-4 text-[13px] tracking-wide uppercase">{t.footer.contact}</div>
              <div className="space-y-3 text-[13px]">
                <a href="https://t.me/ciloktechcsbot" className="block hover:text-white transition">{t.footer.telegram}</a>
                <a href="mailto:hi@ciloktech.my.id" className="block hover:text-white transition">hi@ciloktech.my.id</a>
                <div className="text-gray-400 text-xs mt-4 leading-relaxed whitespace-pre-line">{t.footer.replyNote}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col gap-2">
          <div className="text-center text-[12.5px] text-gray-400 tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <span>{t.footer.copyright}</span>
            <span className="w-px h-3 bg-white/10" />
            <button onClick={handleHomeClick} className="hover:text-white transition">One-man studio ↺</button>
          </div>
          <div className="flex items-center justify-center gap-4 text-[11.5px] text-gray-400 flex-wrap">
            <button onClick={handleHomeClick} className="hover:text-white transition flex items-center gap-1 group">{t.footer.backToTop} <span className="opacity-0 group-hover:opacity-100 transition">↺</span></button>
            <span>•</span>
            <span>{t.footer.lcp}</span>
            <span>•</span>
            <span>{t.footer.oneManLong}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
