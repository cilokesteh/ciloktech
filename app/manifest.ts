import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cilok Tech — One-Man Studio",
    short_name: "CilokTech",
    description: "One-man studio — senior full-stack, jasa website & web app profesional. Tanpa kantor, tanpa PM, langsung builder. 50+ project, <1s LCP, Lighthouse 100 (SEO & Aksesibilitas).",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo-oneman-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/logo-oneman.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
