import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arundodamani.tech",
      lastModified: new Date(),
    },
  ];
}
