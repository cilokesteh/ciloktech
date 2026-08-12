"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, Dict, dictionaries, defaultLocale } from "./dictionaries";

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: dictionaries[defaultLocale],
});

const STORAGE_KEY = "cilok-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Locale) || null;
    if (saved && (saved === "id" || saved === "en")) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
    // NOTE: auto-detect navigator.language removed (2026-08-12). It caused
    // SSR(id) -> client(en) hydration reflow -> CLS 0.119 on /blog in Lighthouse,
    // and served EN to Indonesian visitors with English browser settings.
    // Default stays ID; EN is opt-in via the language toggle (persisted).
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  // Render the default locale immediately. Hiding SSR content until hydration turns
  // a transient client-side locale update into a blank-page failure when JS is slow.
  const t = dictionaries[locale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export function useT() {
  const { t, locale, setLocale } = useContext(I18nContext);
  return { t, locale, setLocale };
}
