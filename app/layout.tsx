import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Sans } from "next/font/google";

const displayFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
import { MotionConfig } from "framer-motion";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";
import "./globals.css";

const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "KritRaj Nexera — We Build Sales Engines, Not Websites",
    description:
      "End-to-end growth systems: website + automation that brings in qualified leads and converts them into sales.",
    url: siteUrl,
    siteName: "KritRaj Nexera",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KritRaj Nexera — We Build Sales Engines" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KritRaj Nexera — We Build Sales Engines, Not Websites",
    description: "End-to-end growth systems: website + automation for qualified leads.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${displayFont.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1QNYQ952S5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1QNYQ952S5', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <JsonLd />
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </MotionConfig>
      </body>
    </html>
  );
}
