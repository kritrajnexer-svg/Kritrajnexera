"use client";

import dynamic from "next/dynamic";
import Hero from "./Hero";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function HomeHero() {
  return (
    <div className="relative">
      <Hero3D />
      <Hero />
    </div>
  );
}
