"use client";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function FloatingCTA() {
  const [showPromo, setShowPromo] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowPromo(y > 200);
      setShowTop(y > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY < 10 && !window.location.hash) {
        window.location.reload();
        return;
      }
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (window.location.hash) history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={handleScrollTop}
        aria-label={`${t.nav.backToTop} — click again to refresh`}
        className={`fixed bottom-6 left-5 z-[60] w-11 h-11 rounded-full bg-white dark:bg-[#12161f] border border-gray-200 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.15)] text-gray-900 dark:text-white flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        title={`↑ ${t.nav.backToTop} — click again at top to refresh`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6" /></svg>
      </button>

      <a
        href={t.floating.promoLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-4 left-4 sm:left-auto sm:right-6 z-[60] group flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-2xl sm:rounded-full border border-white/20 shadow-[0_12px_32px_rgba(14,165,233,0.35)] hover:from-sky-500 hover:to-blue-600 hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 ${showPromo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        title={t.floating.promoTitle}
      >
        <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-white text-sky-700 flex items-center justify-center text-[18px] sm:text-[20px] group-hover:rotate-[10deg] transition shrink-0 ml-1 sm:ml-0 shadow-sm">⚡</span>
        <span className="pr-4 sm:pr-5 text-left leading-tight py-2 sm:py-0 flex-1 sm:flex-initial">
          <span className="block text-[12.5px] sm:text-[13px] font-extrabold">{t.floating.promoTitle}</span>
          <span className="block text-[10.5px] sm:text-[11px] opacity-90 font-medium">{t.floating.promoSub}</span>
        </span>
      </a>
    </>
  );
}
