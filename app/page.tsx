import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import TrustBadge from "@/components/home/TrustBadge";
import HonestNote from "@/components/home/HonestNote";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import HomeFAQ from "@/components/home/HomeFAQ";

const DifferenceSplit = dynamic(() => import("@/components/home/DifferenceSplit"));
const SystemFlow = dynamic(() => import("@/components/home/SystemFlow"));
const BeforeAfter = dynamic(() => import("@/components/home/BeforeAfter"));
const DemoPreview = dynamic(() => import("@/components/home/DemoPreview"));
const Process = dynamic(() => import("@/components/home/Process"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export const metadata: Metadata = {
  title: "KritRaj Nexera — We Build Sales Engines, Not Websites",
  description:
    "AI automation and website development agency — modern sites wired to n8n that capture every enquiry, route it, and convert more prospects into sales.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadge />
      <DifferenceSplit />
      <SystemFlow />
      <BeforeAfter />
      <HonestNote />
      <DemoPreview />
      <WhatWeBuild />
      <Process />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
