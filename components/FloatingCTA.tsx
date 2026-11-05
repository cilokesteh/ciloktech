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
        className={`fixed bottom-6 left-5 z-[60] w-11 h-11 rounded-full bg-[var(--card)] border-2 border-[var(--border-strong)] shadow-[4px_4px_0_var(--border-strong)] text-gray-900 dark:text-white flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-[var(--accent)] dark:hover:text-[var(--accent-ink)] hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        title={`↑ ${t.nav.backToTop} — click again at top to refresh`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6" /></svg>
      </button>

      <a
        href={t.floating.promoLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-4 left-4 sm:left-auto sm:right-6 z-[60] group flex items-center gap-3 bg-[var(--card)] text-[var(--foreground)] rounded-full border-2 border-[var(--border-strong)] shadow-[4px_4px_0_var(--border-strong)] hover:border-[var(--accent)] hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 p-1.5 sm:p-2 ${showPromo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        title={t.floating.promoTitle}
      >
        <span className="pop-tint-lime w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[var(--pop-ink)] flex items-center justify-center text-[18px] shrink-0">⚡</span>
        <span className="pr-4 sm:pr-5 text-left leading-tight py-1 sm:py-0 flex-1 sm:flex-initial">
          <span className="block text-[12.5px] sm:text-[13px] font-extrabold text-[var(--foreground)] group-hover:text-[var(--accent-text)] transition-colors">{t.floating.promoTitle}</span>
          <span className="block text-[10.5px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium">{t.floating.promoSub}</span>
        </span>
      </a>
    </>
  );
}
