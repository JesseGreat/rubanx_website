import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#231F20",
    lang: "en-NG",
    icons: [
      { src: "/icon.png?v=2", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
      { src: "/favicon-512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
  };
}
