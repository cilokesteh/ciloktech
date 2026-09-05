"use client";
import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";
import Link from "next/link";

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
    <footer className="bg-[var(--background)] text-gray-900 dark:text-white border-t swiss-line py-12 px-5 md:px-7 transition-colors duration-200">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-10 border-b swiss-line">
          <div className="space-y-4">
            <button onClick={handleHomeClick} className="flex items-center gap-3 group cursor-pointer text-left font-mono">
              <Image src="/logo.jpg" alt="Cilok Tech One-Man Studio" width={32} height={32} className="h-8 w-8 rounded-none border swiss-line object-cover" />
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-[16px] tracking-tight text-gray-900 dark:text-white">CILOKTECH</span>
                <span className="text-[var(--accent-text)] font-bold text-sm">.ID</span>
              </div>
            </button>
            <p className="font-mono text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">{t.footer.desc}</p>
            <div className="flex gap-2 pt-2 font-mono text-[11px]">
              <a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 border swiss-line bg-[var(--card)] hover:border-[var(--accent)]">Telegram ↗</a>
              <a href="https://github.com/cilokesteh" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 border swiss-line bg-[var(--card)] hover:border-[var(--accent)]">GitHub ↗</a>
              <a href="mailto:hi@ciloktech.my.id" className="px-3 py-1.5 border swiss-line bg-[var(--card)] hover:border-[var(--accent)]">Email ↗</a>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 mb-4">{t.footer.nav}</div>
            <nav className="space-y-2.5 font-mono text-[12px]">
              <button onClick={handleHomeClick} className="block hover:text-[var(--accent-text)] transition text-left">{t.nav.beranda} ↺</button>
              <Link href="/jasa-pembuatan-website" className="block hover:text-[var(--accent-text)] transition">Jasa Website</Link>
              <Link href="/#layanan" className="block hover:text-[var(--accent-text)] transition">{t.footer.layanan}</Link>
              <Link href="/#portofolio" className="block hover:text-[var(--accent-text)] transition">{t.footer.portofolio}</Link>
              <Link href="/#harga" className="block hover:text-[var(--accent-text)] transition">{t.footer.harga}</Link>
            </nav>
          </div>
          <div>
            <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 mb-4">{t.footer.contact}</div>
            <div className="space-y-2 font-mono text-[12px] text-gray-600 dark:text-gray-400">
              <div><a href="https://t.me/ciloktech" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-text)] text-gray-900 dark:text-white">@ciloktech (Builder) ↗</a></div>
              <div><a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-text)] text-gray-900 dark:text-white">{t.footer.telegram} ↗</a></div>
              <div><a href="mailto:hi@ciloktech.my.id" className="hover:text-[var(--accent-text)]">hi@ciloktech.my.id</a></div>
              <div className="pt-2 text-[11px]">{t.footer.replyNote}</div>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-gray-500">
          <div>{t.footer.copyright}</div>
          <button onClick={handleHomeClick} className="hover:text-[var(--accent-text)] transition">{t.footer.backToTop} ↑</button>
        </div>
      </div>
    </footer>
  );
}
