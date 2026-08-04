"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

type NavLink = { href: string; label: string; type: "anchor" | "page"; highlight?: boolean };

const navLinks: NavLink[] = [
  { href: "/#layanan", label: "Layanan", type: "anchor" },
  { href: "/#portofolio", label: "Portofolio", type: "anchor" },
  { href: "/#harga", label: "Harga", type: "anchor" },
  { href: "/harga", label: "Breakdown", type: "page", highlight: true },
  { href: "/blog", label: "Blog", type: "page" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // REFRESH TO HOME — works from any page
  const handleHomeClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setOpen(false);
    if (isHome) {
      // Same page — clear hash + scroll top smooth + force reload if already at top (refresh)
      if (window.scrollY < 10 && !window.location.hash) {
        // Already at top on same page → full refresh to reset state
        window.location.reload();
        return;
      }
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Different page → go home
      window.location.href = "/";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          : "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">
        {/* WORDMARK — ONE-MAN STUDIO + REFRESH TO HOME */}
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-3 group cursor-pointer text-left"
          aria-label="Kembali ke beranda — refresh"
          title="Klik: kembali ke atas • Double-click / sudah di atas: refresh halaman"
        >
          <div className="relative">
            <img
              src="/logo.jpg"
              alt="Cilok Tech One-Man Studio"
              className="h-[34px] w-[34px] rounded-full object-cover ring-1 ring-gray-200 dark:ring-white/10 group-hover:ring-cyan-400 group-hover:scale-[1.03] transition-all shadow-sm"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-[#0a0a0a] group-hover:shadow-[0_0_0_3px_rgba(16,185,129,0.3)] transition" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-baseline gap-[1px]">
              <span className="font-extrabold text-[18px] tracking-[-0.02em] text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">Cilok</span>
              <span className="font-extrabold text-[18px] tracking-[-0.02em] text-cyan-600 dark:text-cyan-400">Tech</span>
              <span className="ml-1.5 hidden sm:inline-flex text-[8.5px] font-black tracking-[0.14em] uppercase bg-gray-900 dark:bg-white text-white dark:text-black px-[6px] py-[2px] rounded-full leading-none -translate-y-[1px] group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 transition">WEB.ID</span>
            </div>
            <div className="flex items-center gap-1.5 mt-[3px]">
              <span className="text-[9px] font-bold tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition">ONE-MAN STUDIO</span>
              <span className="hidden sm:block w-px h-2.5 bg-gray-200 dark:bg-white/10" />
              <span className="hidden sm:block text-[9px] font-medium tracking-wide text-gray-400 dark:text-white/40 group-hover:text-gray-600 transition">SENIOR FULL-STACK</span>
            </div>
          </div>
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((l) => {
            const active = pathname === l.href || (l.type === "page" && pathname.startsWith(l.href));
            if (l.type === "page") {
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[13px] font-medium px-3 py-1.5 rounded-full transition ${
                    active
                      ? "bg-gray-900 dark:bg-white text-white dark:text-black"
                      : l.highlight
                      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 hover:bg-amber-100"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  {l.highlight ? `💰 ${l.label}` : l.label}
                </Link>
              );
            }
            return (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            );
          })}
          <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-2" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://t.me/ciloktech"
              className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black text-[13.5px] font-bold rounded-full hover:bg-black dark:hover:bg-cyan-300 hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-1.5"
            >
              Konsultasi Gratis <span className="text-[11px] opacity-60">↗</span>
            </a>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-900 dark:text-white active:scale-95 transition"
            onClick={() => setOpen(!open)}
          >
            <span className="text-[18px] leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#111111] border-t border-gray-100 dark:border-white/10 px-6 py-5 space-y-1 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">ONE-MAN STUDIO • ONE-MAN OPS</span>
            <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[10px] text-gray-500">Available</span>
          </div>
          <button
            onClick={handleHomeClick}
            className="w-full flex items-center justify-between py-3 text-[15px] font-bold text-gray-900 dark:text-white border-b border-gray-50 dark:border-white/5 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
          >
            <span>🏠 Beranda ↺ Refresh</span>
            <span className="text-gray-300 dark:text-white/20 text-[12px]">TAP TO TOP</span>
          </button>
          <Link href="/#layanan" onClick={() => setOpen(false)} className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-700 dark:text-gray-300 border-b border-gray-50 dark:border-white/5">Layanan <span className="text-gray-300">›</span></Link>
          <Link href="/#portofolio" onClick={() => setOpen(false)} className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-700 dark:text-gray-300 border-b border-gray-50 dark:border-white/5">Portofolio <span className="text-gray-300">›</span></Link>
          <Link href="/#harga" onClick={() => setOpen(false)} className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-700 dark:text-gray-300 border-b border-gray-50 dark:border-white/5">Harga <span className="text-gray-300">›</span></Link>
          <Link href="/harga" onClick={() => setOpen(false)} className="flex items-center justify-between py-3 text-[15px] font-medium text-amber-600 dark:text-amber-400 border-b border-gray-50 dark:border-white/5">💰 Breakdown Harga <span className="text-amber-400">→</span></Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="flex items-center justify-between py-3 text-[15px] font-bold text-gray-900 dark:text-white">📝 Blog <span className="flex items-center gap-1"><span className="bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] px-2 py-0.5 rounded-full">11 Artikel</span><span className="text-emerald-500 text-[10px]">●</span></span></Link>
          <a href="https://t.me/ciloktech" className="block mt-4 text-center px-5 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl">💬 Chat — One-Man Studio</a>
        </div>
      )}
    </nav>
  );
}
