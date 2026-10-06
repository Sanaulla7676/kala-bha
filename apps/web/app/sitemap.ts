import type { MetadataRoute } from "next";
import { blogPosts, destinations, packages, tours } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticRoutes = ["/","/destinations","/tours","/packages","/about","/blog","/contact","/quote","/booking"];
  const dynamic = [
    ...destinations.map(x=>"/destinations/"+x.slug),
    ...tours.map(x=>"/tours/"+x.slug),
    ...packages.map(x=>"/packages/"+x.slug),
    ...blogPosts.map(x=>"/blog/"+x.slug)
  ];
  return [...staticRoutes,...dynamic].map(path=>({url:base+path,lastModified:new Date(),changeFrequency:"weekly",priority:path==="/" ? 1 : 0.7}));
}