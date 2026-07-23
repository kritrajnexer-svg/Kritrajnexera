import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business automation and AI automation agency — modern websites with intelligent workflows that grow your business and capture more clients.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
