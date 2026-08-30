// Global loading boundary — Next.js App Router otomatis render ini
// saat server components menunggu (route segment loading).
// Voice CilokTech: kalem, kontekstual, tanpa spinner generik.

export default function Loading() {
  return (
    <div
      className="min-h-[40vh] flex items-center justify-center bg-white dark:bg-[#08080b] transition-colors duration-300"
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Skeleton ring — bukan spinner memusingkan */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-500 dark:border-t-cyan-400 animate-spin" />
        </div>
        <div className="text-[12px] font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
          Memuat
        </div>
      </div>
    </div>
  );
}
