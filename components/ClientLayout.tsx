"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "framer-motion";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </MotionConfig>
    </ReactLenis>
  );
}
