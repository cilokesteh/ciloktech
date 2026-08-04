"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#harga", label: "Harga" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // reset all anchors + scroll to top + refresh state
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Kembali ke beranda"
          title="Kembali ke beranda — CilokTech"
        >
          <img
            src="/logo.jpg"
            alt="Cilok Tech"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200 dark:ring-white/10 group-hover:ring-cyan-300 transition"
          />
          <span className="font-extrabold text-[19px] tracking-tight">
            <span className="text-gray-900 dark:text-white">Cilok</span>
            <span className="text-cyan-600 dark:text-cyan-400">Tech</span>
          </span>
          <span className="hidden sm:inline-flex ml-1 text-[10px] font-bold tracking-widest uppercase bg-gray-900 dark:bg-white text-white dark:text-black px-2 py-0.5 rounded-full">
            WEB.ID
          </span>
        </button>

        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 dark:after:bg-cyan-400 after:transition-all hover:after:w-full transition"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <ThemeToggle />
            <a
              href="https://t.me/ciloktech"
              className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black text-[13.5px] font-bold rounded-full hover:bg-black dark:hover:bg-cyan-300 hover:shadow-lg hover:shadow-gray-900/20 transition-all active:scale-[0.98]"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

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
        <div className="md:hidden bg-white dark:bg-[#111111] border-t border-gray-100 dark:border-white/10 px-6 py-5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={handleHomeClick}
            className="w-full flex items-center justify-between py-3 text-[15px] font-bold text-gray-900 dark:text-white border-b border-gray-50 dark:border-white/5"
          >
            🏠 Beranda
            <span className="text-gray-300 dark:text-white/20">↺</span>
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 border-b border-gray-50 dark:border-white/5 last:border-0"
            >
              {l.label}
              <span className="text-gray-300 dark:text-white/20">›</span>
            </a>
          ))}
          <a
            href="https://t.me/ciloktech"
            className="block mt-4 text-center px-5 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl"
          >
            💬 Chat di Telegram
          </a>
        </div>
      )}
    </nav>
  );
}
