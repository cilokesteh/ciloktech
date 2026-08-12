"use client";
import { useI18n } from "@/lib/i18n/context";
import { localeNames, Locale } from "@/lib/i18n/dictionaries";

export default function LanguageSwitcher({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const { locale, setLocale } = useI18n();

  const toggle = () => {
    const next: Locale = locale === "id" ? "en" : "id";
    setLocale(next);
  };

  if (compact) {
    return (
      <button
        onClick={toggle}
        title={`${localeNames[locale].label} → ${localeNames[locale === "id" ? "en" : "id"].label}`}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-bold tracking-wide transition active:scale-95 bg-white dark:bg-[#1a1a1a] border-gray-200 dark:border-white/20 text-gray-800 dark:text-white shadow-sm dark:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:bg-gray-50 dark:hover:bg-white/15 hover:border-gray-900 dark:hover:border-white ${className}`}
      >
        <span className="text-[14px] leading-none">{localeNames[locale].flag}</span>
        <span>{localeNames[locale].short}</span>
        <span className="opacity-30">/</span>
        <span className="opacity-80">{localeNames[locale === "id" ? "en" : "id"].short}</span>
      </button>
    );
  }

  return (
    <div className={`inline-flex items-center rounded-full p-1 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/20 shadow-sm ${className}`}>
      {(["id", "en"] as Locale[]).map((l) => {
        const active = locale === l;
        const info = localeNames[l];
        return (
          <button
            key={l}
            onClick={() => setLocale(l)}
            aria-label={`Switch to ${info.label}`}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-wide flex items-center gap-1.5 transition-all active:scale-95 ${
              active
                ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <span className="text-[13px] leading-none">{info.flag}</span> {info.short}
          </button>
        );
      })}
    </div>
  );
}
