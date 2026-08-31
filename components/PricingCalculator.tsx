"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

import { AVAILABLE_ADDONS, BASE_PLANS } from "@/lib/pricing-config";

export default function PricingCalculator() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const [selectedPlanId, setSelectedPlanId] = useState<string>("company");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "addon-telegram-route",
    "addon-pwa",
  ]);
  const [copied, setCopied] = useState(false);

  const activePlan = BASE_PLANS.find((p) => p.id === selectedPlanId) || BASE_PLANS[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let idr = activePlan.basePriceIdr;
    let usd = activePlan.basePriceUsd;

    for (const addonId of selectedAddons) {
      const addon = AVAILABLE_ADDONS.find((a) => a.id === addonId);
      if (addon) {
        idr += addon.priceIdr;
        usd += addon.priceUsd;
      }
    }

    return { idr, usd };
  };

  const total = calculateTotal();

  const formatPrice = (val: number, currency: "IDR" | "USD") => {
    if (currency === "IDR") {
      return `Rp ${val.toLocaleString("id-ID")}`;
    }
    return `$${val}`;
  };

  // Generate structured brief text
  const generateBriefSummaryText = () => {
    const chosenAddons = selectedAddons
      .map((id) => {
        const a = AVAILABLE_ADDONS.find((item) => item.id === id);
        return a ? `${a.name}${a.isBundledFree ? " (Gratis/Bonus)" : ""}` : null;
      })
      .filter(Boolean);

    const priceText = isEn
      ? `$${total.usd} (USD)`
      : `Rp ${total.idr.toLocaleString("id-ID")}`;

    if (isEn) {
      return `[CILOKTECH PROJECT ESTIMATION]\n\n• Package: ${activePlan.name} ($${activePlan.basePriceUsd})\n• Add-ons:\n  - ${chosenAddons.length > 0 ? chosenAddons.join("\n  - ") : "None"}\n• Est. Total: ${priceText}\n• Timeline Target: ${activePlan.timeline}\n• Contact Channel: @ciloktech\n\nHello CilokTech, I would like to consult this customized scope for my business.`;
    }

    return `[RINGKASAN ESTIMASI SCOPE CILOKTECH]\n\n• Pilihan Paket: ${activePlan.name} (Rp ${activePlan.basePriceIdr.toLocaleString("id-ID")})\n• Fitur Tambahan / Add-on:\n  - ${chosenAddons.length > 0 ? chosenAddons.join("\n  - ") : "Tidak ada"}\n• Total Estimasi: ${priceText}\n• Estimasi Timeline: ${activePlan.timeline}\n• Kontak Studio: @ciloktech\n\nHalo CilokTech, saya ingin konsultasi pengerjaan website dengan rincian scope di atas.`;
  };

  const briefText = generateBriefSummaryText();

  const copyBriefText = async () => {
    await navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyText = async () => {
    try {
      await copyBriefText();
    } catch {
      setCopied(false);
    }
  };

  const tgHref = "https://t.me/ciloktech";

  return (
    <div className="w-full bg-[#fbfbfb] dark:bg-[#121214] border border-gray-200/80 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-amber-900/10 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full mb-3">
            {isEn ? "Interactive Estimator" : "Kalkulator Estimasi Proyek"}
          </div>
          <h3 className="text-[26px] md:text-[34px] font-black tracking-tight text-gray-900 dark:text-white">
            {isEn ? "Build Your Custom Scope" : "Sesuaikan Kebutuhan & Fitur"}
          </h3>
          <p className="text-[14px] text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
            {isEn
              ? "Select your base project architecture. Includes 2 bundled free add-ons with transparent optional upgrades."
              : "Pilih paket dasar. Sudah termasuk 2 fitur add-on bundling gratis dengan rincian teks otomatis yang siap dikirim saat konsultasi."}
          </p>
        </div>

        <div className="text-right">
          <div className="text-[12px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isEn ? "Estimated Investment" : "Mulai dari"}
          </div>
          <div className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-gray-900 dark:text-white">
            {isEn ? formatPrice(total.usd, "USD") : formatPrice(total.idr, "IDR")}
          </div>
          <div className="text-[12px] text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
            {isEn ? `Est. Delivery: ${activePlan.timeline}` : `Estimasi Pengerjaan: ${activePlan.timeline}`}
          </div>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-12 gap-8">
        {/* LEFT: Plan Selector & Addon Checkboxes */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
              1. {isEn ? "Choose Base Architecture" : "Pilih Arsitektur & Paket Dasar"}
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {BASE_PLANS.map((plan) => {
                const isSelected = plan.id === selectedPlanId;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 relative ${
                      isSelected
                        ? "bg-amber-500/10 dark:bg-amber-400/10 border-amber-600 dark:border-amber-400 shadow-sm ring-1 ring-amber-500/50"
                        : "bg-white dark:bg-[#18181b] border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20"
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                        {plan.badge}
                      </span>
                    )}
                    <div className="font-bold text-[15px] text-gray-900 dark:text-white">{plan.name}</div>
                    <div className="text-[13px] font-extrabold text-amber-800 dark:text-amber-300 mt-1">
                      {isEn ? formatPrice(plan.basePriceUsd, "USD") : formatPrice(plan.basePriceIdr, "IDR")}
                    </div>
                    <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                      {plan.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                2. {isEn ? "Select Add-on Modules" : "Pilih Modul & Add-on Tambahan"}
              </label>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full">
                2 Free Included
              </span>
            </div>
            <div className="space-y-2.5">
              {AVAILABLE_ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-start justify-between gap-4 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                      isChecked
                        ? "bg-amber-500/5 dark:bg-amber-400/5 border-amber-600/50 dark:border-amber-400/40"
                        : "bg-white dark:bg-[#18181b] border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-amber-700 focus:ring-amber-500 accent-amber-700 dark:accent-amber-400 cursor-pointer"
                      />
                      <div>
                        <div className="text-[13.5px] font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          <span>{addon.name}</span>
                          {addon.isBundledFree && (
                            <span className="text-[10px] uppercase font-black px-1.5 py-0.2 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 rounded">
                              GRATIS
                            </span>
                          )}
                        </div>
                        <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-0.5">
                          {addon.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-[13px] font-bold whitespace-nowrap pt-0.5">
                      {addon.isBundledFree ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Rp 0 (Bonus)</span>
                      ) : (
                        <span className="text-gray-800 dark:text-gray-200">
                          +{isEn ? formatPrice(addon.priceUsd, "USD") : formatPrice(addon.priceIdr, "IDR")}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Scope Summary & Live Generated Output Text */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-2xl p-6">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-white/5">
              <span className="text-[12px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {isEn ? "Generated Scope Output" : "Rincian & Output Brief"}
              </span>
              <button
                type="button"
                onClick={handleCopyText}
                className="text-[11.5px] font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copied ? "✓ Tersalin!" : "📋 Salin Teks"}
              </button>
            </div>

            {/* LIVE AUTO-GENERATED OUTPUT BOX */}
            <div className="mt-3.5 p-3.5 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 font-mono text-[11.5px] leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line max-h-[190px] overflow-y-auto">
              {briefText}
            </div>

            <div className="mt-5 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                {isEn ? "Included in Base Package:" : "Fitur Bawaan Paket:"}
              </div>
              {activePlan.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[12px] text-gray-700 dark:text-gray-300">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] font-bold text-gray-600 dark:text-gray-400">
                {isEn ? "Total Estimation" : "Total Estimasi"}
              </span>
              <span className="text-[22px] font-black text-gray-900 dark:text-white">
                {isEn ? formatPrice(total.usd, "USD") : formatPrice(total.idr, "IDR")}
              </span>
            </div>

            {/* DIRECT TELEGRAM ACTION BUTTON */}
            <div className="space-y-2.5">
              <a
                href={tgHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCopyText}
                className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-gray-950 font-bold text-[13.5px] py-3 px-4 rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                <span>✈️ Salin &amp; Buka Chat Telegram @ciloktech</span>
                <span>→</span>
              </a>
            </div>

            <p className="text-[10.5px] text-center text-gray-500 dark:text-gray-400 mt-2.5">
              {isEn
                ? "Clicking above copies the brief text to your clipboard and opens @ciloktech."
                : "Klik tombol di atas untuk menyalin rincian scope dan langsung membuka chat @ciloktech."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
