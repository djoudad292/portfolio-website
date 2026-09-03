import type { MetadataRoute } from "next";

const BASE = "https://djaouad.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/cv",
    "/hire-ai-developer",
    "/ai-agents",
    "/industries",
    "/talk",
    "/blog",
    "/blog/pilot-to-production",
    "/blog/portfolio-mcp-server",
    "/stats",
    "/privacy",
    "/terms",
  ];
  return pages.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/hire-ai-developer" || p === "/ai-agents" ? 0.9 : p === "/industries" ? 0.8 : 0.7,
  }));
}
