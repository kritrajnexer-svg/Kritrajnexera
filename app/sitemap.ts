import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kritrajnexera.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/demo",
    "/real-estate",
    "/clinic",
    "/consultant",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/refund-policy",
    "/cancellation-policy",
    "/disclaimer",
  ];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
