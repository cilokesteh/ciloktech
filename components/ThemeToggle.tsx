"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-10 h-10 border swiss-line bg-[var(--card)] animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="group relative w-10 h-10 bg-[var(--card)] border swiss-line flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent-text)] transition-all active:scale-95 overflow-hidden"
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      <span className="absolute transition-all duration-300 group-active:scale-75 dark:translate-y-10 dark:opacity-0 dark:rotate-90">
        {/* sun for light */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </span>
      <span className="absolute transition-all duration-300 translate-y-10 opacity-0 rotate-90 group-active:scale-75 dark:translate-y-0 dark:opacity-100 dark:rotate-0">
        {/* moon for dark */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
