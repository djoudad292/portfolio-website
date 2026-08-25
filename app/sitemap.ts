import type { MetadataRoute } from "next";

const BASE = "https://djaouad.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/industries",
    "/privacy",
    "/terms",
  ];
  return pages.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/industries" ? 0.9 : 0.8,
  }));
}
