export const dynamic = "force-static";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {const base="https://humanitywins.world";return [{url:base,lastModified:new Date(),changeFrequency:"weekly",priority:1},{url:`${base}/impressum`,lastModified:new Date(),changeFrequency:"yearly",priority:.3},{url:`${base}/datenschutz`,lastModified:new Date(),changeFrequency:"yearly",priority:.3}]}
