import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog";

const SITE_URL = "https://adam.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/blog", "/resume"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
