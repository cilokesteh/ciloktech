"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

type DemoTab = "pos" | "jasaflow";

interface PosItem {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

const POS_SAMPLE_MENU: PosItem[] = [
  { id: "m1", name: "Cilok Kuah Pedas Spesial", category: "Makanan", price: 15000, stock: 45 },
  { id: "m2", name: "Cilok Goreng Crispy Keju", category: "Makanan", price: 18000, stock: 30 },
  { id: "m3", name: "Es Teh Manis Jumbo", category: "Minuman", price: 5000, stock: 100 },
  { id: "m4", name: "Paket Combo Kenyang Berdua", category: "Paket", price: 35000, stock: 20 },
  { id: "m5", name: "Baso Aci Komplit Urat", category: "Makanan", price: 22000, stock: 18 },
  { id: "m6", name: "Air Mineral Botol 600ml", category: "Minuman", price: 4000, stock: 60 },
];

interface BarberService {
  id: string;
  name: string;
  durationMin: number;
  price: number;
}

const BARBER_SERVICES: BarberService[] = [
  { id: "s1", name: "Gentleman Haircut + Styling", durationMin: 30, price: 50000 },
  { id: "s2", name: "Signature Fade + Hot Towel", durationMin: 45, price: 75000 },
  { id: "s3", name: "Beard Trim & Mustache Shape", durationMin: 20, price: 35000 },
  { id: "s4", name: "Hair Treatment & Head Massage", durationMin: 40, price: 65000 },
];

export default function DemoSandbox() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const [activeTab, setActiveTab] = useState<DemoTab>("pos");

  // POS State
  const [posCart, setPosCart] = useState<{ item: PosItem; qty: number }[]>([]);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "qris">("qris");
  const [cashGiven, setCashGiven] = useState<number>(50000);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [lastOrderTrxId, setLastOrderTrxId] = useState<string>("");

  // JasaFlow State
  const [selectedServiceId, setSelectedServiceId] = useState<string>("s1");
  const [selectedBarber, setSelectedBarber] = useState<string>("Bima (Master)");
  const [selectedSlot, setSelectedSlot] = useState<string>("14:30");
  const [customerName, setCustomerName] = useState<string>("Cilok Tester");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingToken, setBookingToken] = useState<string>("");

  // POS Handlers
  const addToCart = (item: PosItem) => {
    setPosCart((prev) => {
      const exist = prev.find((c) => c.item.id === item.id);
      if (exist) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setPosCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.qty + delta;
            return newQty > 0 ? { ...c, qty: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as { item: PosItem; qty: number }[]
    );
  };

  const clearCart = () => setPosCart([]);

  const subtotal = posCart.reduce((acc, c) => acc + c.item.price * c.qty, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const grandTotal = Math.max(0, subtotal - discountAmount);
  const changeAmount = Math.max(0, cashGiven - grandTotal);

  const handleCheckout = () => {
    if (posCart.length === 0) return;
    const trxId = `TRX-${Date.now().toString().slice(-6)}`;
    setLastOrderTrxId(trxId);
    setIsReceiptModalOpen(true);
  };

  // JasaFlow Handlers
  const handleCreateBooking = () => {
    const token = `JF-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    setBookingToken(token);
    setBookingConfirmed(true);
  };

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("pos")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-[14px] transition-all ${
            activeTab === "pos"
              ? "bg-amber-800 text-white dark:bg-amber-400 dark:text-gray-950 shadow-sm"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <span>📦</span>
          <span>{isEn ? "POS Enterprise Kasir" : "POS Enterprise (Kasir & Resto)"}</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("jasaflow")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-[14px] transition-all ${
            activeTab === "jasaflow"
              ? "bg-amber-800 text-white dark:bg-amber-400 dark:text-gray-950 shadow-sm"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <span>✂️</span>
          <span>{isEn ? "JasaFlow Engine" : "JasaFlow (Booking & Antrean)"}</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: POS ENTERPRISE SANDBOX */}
      {/* ========================================================================= */}
      {activeTab === "pos" && (
        <div className="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm">
          {/* Top Bar Sandbox Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-[13px] font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span>CilokTech POS v11.2 (Interactive Simulation)</span>
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full">
                    Sandbox
                  </span>
                </div>
                <div className="text-[11.5px] text-gray-500 dark:text-gray-400">
                  Mode demo interaktif kasir tanpa autentikasi atau instalasi database.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-500 font-mono bg-gray-50 dark:bg-white/5 px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/10">
                Outlet: CilokTech Flagship
              </span>
              <button
                type="button"
                onClick={clearCart}
                className="text-[12px] text-red-600 dark:text-red-400 hover:underline px-2 py-1"
              >
                Reset Order
              </button>
            </div>
          </div>

          {/* POS Grid: Menu vs Cart */}
          <div className="mt-6 grid lg:grid-cols-12 gap-6">
            {/* Menu Catalog */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-[12px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Daftar Produk & Stok
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {POS_SAMPLE_MENU.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-[#18181b] hover:border-amber-600/40 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-mono bg-gray-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-300">
                          Stok: {item.stock}
                        </span>
                      </div>
                      <div className="font-bold text-[14px] text-gray-900 dark:text-white mt-1">
                        {item.name}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-200/50 dark:border-white/5">
                      <span className="font-black text-[13.5px] text-amber-800 dark:text-amber-300">
                        Rp {item.price.toLocaleString("id-ID")}
                      </span>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className="text-[12px] font-bold bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black px-3 py-1.5 rounded-lg transition"
                      >
                        + Tambah
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart & Billing Checkout */}
            <div className="lg:col-span-5 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
                  <span className="text-[13px] font-bold text-gray-900 dark:text-white">
                    Keranjang Pesanan ({posCart.reduce((a, b) => a + b.qty, 0)})
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">Order #LIVE-DEMO</span>
                </div>

                {/* Items List */}
                <div className="mt-3 space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                  {posCart.length === 0 ? (
                    <div className="py-8 text-center text-[12px] text-gray-400">
                      Keranjang kosong. Klik produk di sebelah kiri untuk simulasi order.
                    </div>
                  ) : (
                    posCart.map(({ item, qty }) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-[12.5px] bg-white dark:bg-black/30 p-2.5 rounded-xl border border-gray-200/60 dark:border-white/5"
                      >
                        <div className="flex-1 pr-2">
                          <div className="font-bold text-gray-900 dark:text-white">{item.name}</div>
                          <div className="text-[11px] text-gray-500">
                            Rp {item.price.toLocaleString("id-ID")}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -1)}
                            className="w-6 h-6 rounded bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 font-bold flex items-center justify-center hover:bg-gray-200"
                          >
                            -
                          </button>
                          <span className="font-bold font-mono text-[12px] min-w-[16px] text-center">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            className="w-6 h-6 rounded bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 font-bold flex items-center justify-center hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Discounts & Payment Method */}
                {posCart.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-gray-600 dark:text-gray-400">Diskon Member:</span>
                      <div className="flex gap-1.5">
                        {[0, 10, 20].map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setDiscountPercent(d)}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              discountPercent === d
                                ? "bg-amber-700 text-white dark:bg-amber-400 dark:text-black"
                                : "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {d}%
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-gray-600 dark:text-gray-400">Metode Bayar:</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("qris")}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                            paymentMethod === "qris"
                              ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                              : "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          📱 QRIS
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("cash")}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                            paymentMethod === "cash"
                              ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                              : "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          💵 Tunai
                        </button>
                      </div>
                    </div>

                    {paymentMethod === "cash" && (
                      <div className="flex items-center justify-between text-[12px]">
                        <span className="text-gray-600 dark:text-gray-400">Nominal Diterima:</span>
                        <input
                          type="number"
                          value={cashGiven}
                          onChange={(e) => setCashGiven(Number(e.target.value) || 0)}
                          className="w-24 px-2 py-1 text-right font-mono text-[12px] rounded border border-gray-300 dark:border-white/10 bg-white dark:bg-black"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Total Summary */}
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10">
                <div className="space-y-1 text-[12px]">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal:</span>
                    <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span>Diskon ({discountPercent}%):</span>
                      <span>- Rp {discountAmount.toLocaleString("id-ID")}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[15px] font-black text-gray-900 dark:text-white pt-1">
                    <span>Total Tagihan:</span>
                    <span>Rp {grandTotal.toLocaleString("id-ID")}</span>
                  </div>
                  {paymentMethod === "cash" && (
                    <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                      <span>Kembalian:</span>
                      <span>Rp {changeAmount.toLocaleString("id-ID")}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  disabled={posCart.length === 0}
                  onClick={handleCheckout}
                  className="w-full mt-4 py-3 px-4 rounded-xl font-bold text-[13px] bg-amber-700 hover:bg-amber-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-gray-950 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  Bayar & Cetak Struk Thermal →
                </button>
              </div>
            </div>
          </div>

          {/* Receipt Modal Simulation */}
          {isReceiptModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-white text-gray-950 p-6 rounded-2xl max-w-sm w-full font-mono text-[11.5px] border shadow-2xl animate-in fade-in zoom-in-95">
                <div className="text-center pb-3 border-b border-dashed border-gray-300">
                  <div className="font-bold text-[14px] uppercase tracking-wider">CILOKTECH POS</div>
                  <div className="text-gray-600 text-[10px]">Jl. Wonodri Sendang No. 3, Semarang</div>
                  <div className="text-[10px] text-gray-500 mt-1">Telp: 0887-0540-908</div>
                </div>

                <div className="py-2.5 border-b border-dashed border-gray-300 space-y-0.5 text-[10px] text-gray-600">
                  <div className="flex justify-between">
                    <span>No: {lastOrderTrxId}</span>
                    <span>Kasir: Cilok Admin</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tgl: {new Date().toLocaleDateString("id-ID")}</span>
                    <span>Metode: {paymentMethod.toUpperCase()}</span>
                  </div>
                </div>

                <div className="py-3 border-b border-dashed border-gray-300 space-y-1.5">
                  {posCart.map(({ item, qty }) => (
                    <div key={item.id}>
                      <div className="font-semibold">{item.name}</div>
                      <div className="flex justify-between text-gray-600 text-[10px]">
                        <span>{qty} x Rp {item.price.toLocaleString("id-ID")}</span>
                        <span>Rp {(qty * item.price).toLocaleString("id-ID")}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="py-2.5 border-b border-dashed border-gray-300 space-y-1 font-semibold">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Diskon ({discountPercent}%)</span>
                      <span>- Rp {discountAmount.toLocaleString("id-ID")}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[13px] font-black pt-1">
                    <span>TOTAL</span>
                    <span>Rp {grandTotal.toLocaleString("id-ID")}</span>
                  </div>
                  {paymentMethod === "cash" && (
                    <>
                      <div className="flex justify-between text-[10px] text-gray-600 font-normal">
                        <span>Bayar Tunai</span>
                        <span>Rp {cashGiven.toLocaleString("id-ID")}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-600 font-normal">
                        <span>Kembali</span>
                        <span>Rp {changeAmount.toLocaleString("id-ID")}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="text-center pt-3 text-[9.5px] text-gray-500">
                  <div>Terima kasih atas kunjungan Anda!</div>
                  <div className="font-bold text-[9px] mt-1">SIMULASI ENGINE POS ENTERPRISE</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsReceiptModalOpen(false);
                    clearCart();
                  }}
                  className="w-full mt-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-[12px] font-sans transition"
                >
                  Selesai & Transaksi Baru
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: JASAFLOW ENGINE SANDBOX */}
      {/* ========================================================================= */}
      {activeTab === "jasaflow" && (
        <div className="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm">
          {/* Top Bar Sandbox Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <div>
                <div className="text-[13px] font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span>JasaFlow Engine (Barbershop & Clinic Booking)</span>
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 rounded-full">
                    Sandbox
                  </span>
                </div>
                <div className="text-[11.5px] text-gray-500 dark:text-gray-400">
                  Simulasi alur booking slot anti-overlap, pemilihan kapster, dan status token antrean.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-500 font-mono bg-gray-50 dark:bg-white/5 px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/10">
                Outlet: Cilok Cuts Studio
              </span>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-12 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  1. Pilih Layanan
                </label>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {BARBER_SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`text-left p-3.5 rounded-xl border transition ${
                        selectedServiceId === s.id
                          ? "bg-cyan-500/10 border-cyan-600 dark:border-cyan-400 ring-1 ring-cyan-500/50"
                          : "bg-gray-50/50 dark:bg-[#18181b] border-gray-200 dark:border-white/5"
                      }`}
                    >
                      <div className="font-bold text-[13px] text-gray-900 dark:text-white">{s.name}</div>
                      <div className="flex justify-between items-center mt-2 text-[12px]">
                        <span className="text-gray-500">{s.durationMin} menit</span>
                        <span className="font-bold text-cyan-800 dark:text-cyan-300">
                          Rp {s.price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    2. Pilih Kapster / Barber
                  </label>
                  <select
                    value={selectedBarber}
                    onChange={(e) => setSelectedBarber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#18181b] text-[13px] font-medium"
                  >
                    <option value="Bima (Master)">Bima (Master Barber)</option>
                    <option value="Rian (Senior)">Rian (Senior Barber)</option>
                    <option value="Agus (Fade Specialist)">Agus (Fade Specialist)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    3. Slot Waktu Hari Ini
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#18181b] text-[13px] font-medium"
                  >
                    <option value="13:00">13:00 - 13:30 (Tersedia)</option>
                    <option value="14:30">14:30 - 15:15 (Tersedia)</option>
                    <option value="16:00">16:00 - 16:45 (Tersedia)</option>
                    <option value="19:30">19:30 - 20:00 (Tersedia)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  4. Nama Pemesan &amp; Username Telegram
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#18181b] text-[13px]"
                  placeholder="Contoh: Bima (@username)"
                />
              </div>
            </div>

            {/* Booking State & Queue Tracker */}
            <div className="lg:col-span-5 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="text-[12px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Ringkasan Booking
                </div>

                {bookingConfirmed ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-300">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase">Status: Terkonfirmasi</span>
                        <span className="font-mono font-black text-[13px]">{bookingToken}</span>
                      </div>
                      <div className="text-[16px] font-black mt-1">Slot Berhasil Diamankan!</div>
                      <div className="text-[11px] opacity-80 mt-0.5">
                        Tunjukkan token ini saat tiba di outlet.
                      </div>
                    </div>

                    <div className="space-y-2 text-[12.5px] bg-white dark:bg-black/30 p-3.5 rounded-xl border border-gray-200/50 dark:border-white/5">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Nama:</span>
                        <span className="font-bold">{customerName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Layanan:</span>
                        <span className="font-bold">
                          {BARBER_SERVICES.find((s) => s.id === selectedServiceId)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Kapster:</span>
                        <span className="font-bold">{selectedBarber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Waktu:</span>
                        <span className="font-bold font-mono">Hari ini, {selectedSlot} WIB</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setBookingConfirmed(false)}
                      className="text-[11.5px] text-gray-500 underline text-center w-full block hover:text-gray-800"
                    >
                      Ubah / Buat Booking Baru
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2 text-[12.5px] bg-white dark:bg-black/30 p-4 rounded-xl border border-gray-200/50 dark:border-white/5">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Layanan:</span>
                        <span className="font-bold">
                          {BARBER_SERVICES.find((s) => s.id === selectedServiceId)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Kapster:</span>
                        <span className="font-bold">{selectedBarber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Slot Waktu:</span>
                        <span className="font-bold font-mono">{selectedSlot} WIB</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-200/50 dark:border-white/5 font-black text-[14px]">
                        <span>Deposit (DP 50%):</span>
                        <span className="text-cyan-800 dark:text-cyan-300">
                          Rp{" "}
                          {(
                            (BARBER_SERVICES.find((s) => s.id === selectedServiceId)?.price || 0) / 2
                          ).toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCreateBooking}
                      className="w-full py-3 px-4 rounded-xl font-bold text-[13px] bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-white dark:text-gray-950 transition"
                    >
                      Simulasi Kunci Slot Booking →
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10 text-center">
                <Link
                  href="/#harga"
                  className="text-[12px] text-gray-500 hover:text-gray-900 dark:hover:text-white font-medium underline underline-offset-4"
                >
                  Tertarik pasang sistem ini di bisnis Anda? Lihat Paket JasaFlow
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
