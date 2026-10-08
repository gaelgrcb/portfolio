import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://gaelgarcia.dev",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
