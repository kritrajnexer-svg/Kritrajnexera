import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = "https://kritrajnexera.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KritRaj Nexera — We Build Sales Engines, Not Websites",
    template: "%s — KritRaj Nexera",
  },
  description:
    "KritRaj Nexera builds end-to-end growth systems: a website that captures leads, plus n8n automation that routes, notifies, and follows up — so qualified leads convert into sales without manual work.",
  keywords: [
    "lead generation system",
    "sales automation",
    "n8n workflows",
    "business website with automation",
    "growth system",
    "client acquisition system",
  ],
  openGraph: {
    title: "KritRaj Nexera — We Build Sales Engines, Not Websites",
    description:
      "End-to-end growth systems: website + automation that brings in qualified leads and converts them into sales.",
    url: siteUrl,
    siteName: "KritRaj Nexera",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
