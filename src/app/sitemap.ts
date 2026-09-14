import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { contentUpdated, site } from "@/content/site";
import { projects } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  /*
    A fixed date rather than the build time. A lastModified that changes on
    every deploy without the content changing teaches search engines to
    ignore it.
  */
  const lastModified = new Date(contentUpdated);

  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/work", priority: 0.7 },
    { path: "/about", priority: 0.7 },
  ];

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
