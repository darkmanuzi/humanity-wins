import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://humanitywins.world";
  const lastModified = new Date("2026-08-02");

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
