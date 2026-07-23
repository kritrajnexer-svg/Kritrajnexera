"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";

export default function ScrollVelocitySection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <ScrollVelocityContainer className="font-bold text-4xl tracking-[-0.02em] text-ink/10 md:text-7xl md:leading-20">
        <ScrollVelocityRow baseVelocity={15} direction={1}>
          Websites That Sell &nbsp;•&nbsp; Automations That Scale &nbsp;•&nbsp; Results That Matter &nbsp;•&nbsp;
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={15} direction={-1}>
          Design &nbsp;•&nbsp; Develop &nbsp;•&nbsp; Automate &nbsp;•&nbsp; Convert &nbsp;•&nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg" />
    </section>
  );
}
