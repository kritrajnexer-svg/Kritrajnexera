"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";

export default function ScrollVelocitySection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <ScrollVelocityContainer className="font-bold text-4xl tracking-[-0.02em] text-ink/10 md:text-7xl md:leading-20">
        <ScrollVelocityRow baseVelocity={6} direction={1}>
          Web Design &nbsp;•&nbsp; n8n Automation &nbsp;•&nbsp; CRM Integration &nbsp;•&nbsp; Lead Generation &nbsp;•&nbsp; SEO &nbsp;•&nbsp;
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1}>
          Strategy &nbsp;•&nbsp; Development &nbsp;•&nbsp; Automation &nbsp;•&nbsp; Growth &nbsp;•&nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-bg sm:w-1/4" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-bg sm:w-1/4" />
    </section>
  );
}
