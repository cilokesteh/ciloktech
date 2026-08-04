"use client";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function FloatingCTA() {
  const [showChat, setShowChat] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowChat(y > 400);
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
        className={`fixed bottom-6 left-6 z-[60] w-11 h-11 rounded-full bg-white dark:bg-white border border-gray-200 dark:border-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-cyan-300 dark:hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        title={`↑ ${t.nav.backToTop} — click again at top to refresh`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6" /></svg>
      </button>

      <a
        href="https://t.me/ciloktech?text=Halo%20CilokTech%20One-Man%20Studio%2C%20mau%20tanya%20jasa%20website"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-[60] group flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.22)] hover:bg-black dark:hover:bg-cyan-300 dark:hover:text-black transition-all duration-300 ${showChat ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        title={t.floating.chatTitle}
      >
        <span className="w-12 h-12 rounded-full bg-white dark:bg-black text-gray-900 dark:text-white flex items-center justify-center text-[20px] group-hover:rotate-[10deg] transition">💬</span>
        <span className="pr-5 text-[13px] font-bold hidden sm:inline">{t.floating.chatShort}</span>
      </a>
    </>
  );
}
