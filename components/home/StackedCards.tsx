"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Bot, Globe, BarChart3, Bell, RefreshCw } from "lucide-react";
import Section from "@/components/Section";

const cards = [
  { icon: Zap, title: "Instant Alerts", desc: "Every enquiry fires WhatsApp + email instantly — no inbox checking." },
  { icon: Bot, title: "AI Chatbot", desc: "Answers queries 24/7, books calls, and captures leads while you sleep." },
  { icon: Globe, title: "Smart Website", desc: "Conversion-optimised site that captures every visitor." },
  { icon: BarChart3, title: "Analytics", desc: "Know exactly where leads come from and what converts." },
  { icon: Bell, title: "Automated Follow-ups", desc: "Never lose a lead — sequences run on autopilot." },
  { icon: RefreshCw, title: "CRM Sync", desc: "Every lead logged, tagged, and assigned automatically." },
];

export default function StackedCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <Section>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
          Everything works together
        </h2>
        <p className="mt-4 text-ink-muted">
          Scroll to see how each piece of the system stacks into your sales engine.
        </p>
      </div>

      <div
        ref={sectionRef}
        className="relative h-[300vh]"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="relative grid w-full max-w-6xl grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ icon: Icon, title, desc }, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              const totalRows = Math.ceil(cards.length / 3);

              const startX = col === 0 ? -80 : col === 2 ? 80 : 0;
              const startY = row === 0 ? -60 : row === totalRows - 1 ? 60 : 0;
              const startRotate = (i - (cards.length - 1) / 2) * 4;

              const x = useTransform(
                scrollYProgress,
                [0, 0.15, 0.5, 0.85, 1],
                [startX, startX * 0.3, 0, 0, 0]
              );
              const y = useTransform(
                scrollYProgress,
                [0, 0.2, 0.5, 0.85, 1],
                [startY, startY * 0.3, 0, 0, 0]
              );
              const scale = useTransform(
                scrollYProgress,
                [0, 0.15, 0.5, 0.85, 1],
                [0.85, 0.92, 1, 1, 1]
              );
              const rotate = useTransform(
                scrollYProgress,
                [0, 0.2, 0.5, 0.85, 1],
                [startRotate, startRotate * 0.3, 0, 0, 0]
              );
              const opacity = useTransform(
                scrollYProgress,
                [0, 0.08 + i * 0.02, 0.2 + i * 0.03, 0.45, 1],
                [0, 0, 1, 1, 1]
              );
              const zIndex = useTransform(
                scrollYProgress,
                [0, 0.3, 0.5],
                [cards.length - i, cards.length - i, 1]
              );

              return (
                <motion.div
                  key={title}
                  style={{
                    x,
                    y,
                    scale,
                    rotate,
                    opacity,
                    zIndex,
                    willChange: "transform",
                  }}
                  className="rounded-2xl glass-card-glow p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1.5 font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
