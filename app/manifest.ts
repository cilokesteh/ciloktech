import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cilok Tech — Jasa Website & Web App Profesional",
    short_name: "CilokTech",
    description:
      "Jasa pembuatan website profesional, landing page, dan web app custom. Cepat, aman, SEO-ready.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
