import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi & Perlindungan Data (UU PDP) | CilokTech One-Man Studio",
  description:
    "Komitmen perlindungan data pribadi dan transparansi pemrosesan informasi sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022) di CilokTech.",
  alternates: {
    canonical: "https://www.ciloktech.id/privasi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivasiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--background)] text-gray-900 dark:text-white transition-colors duration-200">
        <div className="max-w-[880px] mx-auto px-5 md:px-7 font-sans">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-1 border swiss-line text-[var(--accent-text)] mb-4 bg-[var(--card)]">
            KEPATUHAN UU PDP NO. 27 TAHUN 2022
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold tracking-tight leading-tight mb-4">
            Kebijakan Privasi &amp; Perlindungan Data Pribadi
          </h1>
          <p className="font-mono text-[13px] text-gray-500 mb-10 pb-6 border-b swiss-line">
            Terakhir diperbarui: 5 September 2026 • Versi Standar Studio v3.0
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-gray-900 dark:text-white tracking-tight">
                1. Prinsip &amp; Komitmen Privasi
              </h2>
              <p>
                CilokTech berkomitmen penuh melindungi hak privasi setiap pengunjung, klien, dan mitra sesuai ketentuan
                <strong> Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</strong>. Kami menerapkan prinsip
                <em> data minimization</em>: kami hanya mengumpulkan data yang benar-benar esensial untuk komunikasi proyek dan pengoperasian layanan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-gray-900 dark:text-white tracking-tight">
                2. Data Pribadi yang Kami Kumpulkan &amp; Tujuannya
              </h2>
              <ul className="list-disc pl-5 space-y-2 font-mono text-[13px]">
                <li>
                  <strong>Komunikasi Konsultasi Proyek:</strong> Nama dan username Telegram atau alamat email yang Anda gunakan saat menghubungi kami via tautan chat resmi (t.me/ciloktech atau email resmi). Digunakan semata-mata untuk koordinasi teknis dan penawaran proyek.
                </li>
                <li>
                  <strong>Data Analitik Teragregasi:</strong> Pengukuran performa web umum menggunakan Google Analytics 4 tanpa menyimpan informasi sensitif pribadi (PII), nomor identitas, atau lokasi presisi.
                </li>
                <li>
                  <strong>Zero-PAN &amp; Keuangan:</strong> CilokTech tidak pernah memproses, meminta, atau menyimpan data kartu pembayaran (Primary Account Number / CVV) di infrastruktur server internal kami.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-gray-900 dark:text-white tracking-tight">
                3. Retensi &amp; Jadwal Penghapusan Data
              </h2>
              <p>
                Data komunikasi brief konsultasi yang tidak berlanjut ke tahap kontrak aktif akan dihapus secara berkala dalam waktu maksimal 90 hari kalender. Data proyek aktif disimpan selama masa kontrak dan garansi pemeliharaan berlangsung untuk keperluan pemenuhan hak serah terima source code klien.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-gray-900 dark:text-white tracking-tight">
                4. Transfer Data Lintas Negara &amp; Keamanan Subprocessor
              </h2>
              <p>
                Infrastruktur hosting kami menggunakan edge network Vercel yang menerapkan standar enkripsi transit (TLS 1.3) dan at-rest (AES-256). Seluruh vendor pihak ketiga kami pilih dengan standar perlindungan setara dan terikat komitmen kerahasiaan ketat.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-gray-900 dark:text-white tracking-tight">
                5. Prosedur Notifikasi Kegagalan Pelindungan Data (Breach Notification)
              </h2>
              <p>
                Sesuai Pasal 46 UU PDP, jika terjadi insiden kegagalan pelindungan data pribadi yang melibatkan sistem kami, CilokTech akan menyampaikan pemberitahuan tertulis kepada subjek data terdampak dan lembaga terkait dalam waktu paling lambat <strong>3 × 24 jam (72 jam)</strong> terhitung sejak insiden tersebut diketahui secara terverifikasi.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-gray-900 dark:text-white tracking-tight">
                6. Hak Subjek Data (Data Subject Rights)
              </h2>
              <p>
                Sesuai UU PDP, Anda berhak untuk:
              </p>
              <ul className="list-disc pl-5 space-y-1 font-mono text-[13px]">
                <li>Mendapatkan kejelasan identitas dan dasar pemrosesan data.</li>
                <li>Mengakses dan memperoleh salinan data pribadi Anda.</li>
                <li>Mengakhiri pemrosesan, menghapus, atau memusnahkan data pribadi Anda.</li>
                <li>Mengajukan keberatan atas pemrosesan data tertentu.</li>
              </ul>
              <p className="mt-3">
                Untuk mengajukan permohonan hak subjek data, Anda dapat menghubungi narahubung resmi kami melalui Telegram di{" "}
                <a href="https://t.me/ciloktech" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-text)] underline">
                  @ciloktech
                </a>{" "}
                atau email ke{" "}
                <a href="mailto:hi@ciloktech.my.id" className="text-[var(--accent-text)] underline">
                  hi@ciloktech.my.id
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t swiss-line flex justify-between items-center font-mono text-[12px]">
            <Link href="/" className="hover:text-[var(--accent-text)] transition flex items-center gap-2">
              <span>← Kembali ke Beranda</span>
            </Link>
            <Link href="/jasa-pembuatan-website" className="hover:text-[var(--accent-text)] transition flex items-center gap-2">
              <span>Jasa Pembuatan Website →</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
