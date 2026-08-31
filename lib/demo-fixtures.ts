export interface PosItem {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export const POS_SAMPLE_MENU: PosItem[] = [
  { id: "m1", name: "Overshirt Linen Stone", category: "Fashion", price: 289000, stock: 12 },
  { id: "m2", name: "Relaxed Tee Charcoal", category: "Fashion", price: 149000, stock: 24 },
  { id: "m3", name: "Canvas Tote Natural", category: "Aksesori", price: 119000, stock: 18 },
  { id: "m4", name: "Daily Cap Ochre", category: "Aksesori", price: 99000, stock: 9 },
  { id: "m5", name: "Straight Pants Oxblood", category: "Fashion", price: 259000, stock: 7 },
  { id: "m6", name: "Essential Socks Set", category: "Aksesori", price: 79000, stock: 31 },
];

export interface BarberService {
  id: string;
  name: string;
  durationMin: number;
  price: number;
}

export const BARBER_SERVICES: BarberService[] = [
  { id: "s1", name: "Gentleman Haircut + Styling", durationMin: 30, price: 50000 },
  { id: "s2", name: "Signature Fade + Hot Towel", durationMin: 45, price: 75000 },
  { id: "s3", name: "Beard Trim & Mustache Shape", durationMin: 20, price: 35000 },
  { id: "s4", name: "Hair Treatment & Head Massage", durationMin: 40, price: 65000 },
];
