import type { MetadataRoute } from "next";
import { posts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ciloktech.web.id";
  const now = new Date().toISOString();

  const staticPages = [
    "",
    "/harga",
    "/kalkulator",
    "/changelog",
    "/blog",
    "/#layanan",
    "/#portofolio",
    "/#harga",
    "/#testimoni",
    "/#faq",
  ];

  const staticRoutes = staticPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p === "/kalkulator" ? 0.9 : p === "/changelog" ? 0.8 : p === "/harga" ? 0.9 : p === "/blog" ? 0.85 : 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "weekly" as const,
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
