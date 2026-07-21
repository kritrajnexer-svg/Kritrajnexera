"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Zap, Bot, Globe, BarChart3, Bell, RefreshCw, TrendingUp } from "lucide-react";
import Section from "@/components/Section";

const cards = [
  { icon: Zap, title: "Instant Alerts", desc: "WhatsApp + email fire the moment an enquiry lands." },
  { icon: Bot, title: "AI Chatbot", desc: "Answers questions 24/7, books calls, captures leads." },
  { icon: Globe, title: "Smart Website", desc: "Conversion-first site that captures every visitor." },
  { icon: BarChart3, title: "Analytics", desc: "See exactly where leads come from and what converts." },
  { icon: Bell, title: "Auto Follow-ups", desc: "Never lose a lead — sequences run on autopilot." },
  { icon: TrendingUp, title: "CRM Sync", desc: "Every lead logged, tagged, assigned automatically." },
];

const cols = 3;
const gap = 16;
const cardW = 320;
const cardH = 180;

function Card({
  icon: Icon,
  title,
  desc,
  index,
  total,
  progress,
}: {
  icon: typeof Zap;
  title: string;
  desc: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const col = index % cols;
  const row = Math.floor(index / cols);
  const totalRows = Math.ceil(total / cols);
  const midCol = (cols - 1) / 2;
  const midRow = (totalRows - 1) / 2;

  const targetX = (col - midCol) * (cardW + gap);
  const targetY = (row - midRow) * (cardH + gap);
  const startRotate = (index - (total - 1) / 2) * 5;

  const x = useTransform(progress, [0, 0.2, 0.7, 1], [0, targetX * 0.3, targetX, targetX]);
  const y = useTransform(progress, [0, 0.2, 0.7, 1], [0, targetY * 0.3, targetY, targetY]);
  const scale = useTransform(progress, [0, 0.2, 0.7, 1], [0.8, 0.9, 1, 1]);
  const rotate = useTransform(progress, [0, 0.25, 0.7, 1], [startRotate, startRotate * 0.3, 0, 0]);
  const opacity = useTransform(progress, [0, 0.1 + index * 0.025, 0.25 + index * 0.03, 0.6, 1], [0, 0, 1, 1, 1]);

  return (
    <motion.div
      style={{ x, y, scale, rotate, opacity, willChange: "transform", zIndex: total - index }}
      className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl glass-card-glow p-6 sm:w-80"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1.5 font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
    </motion.div>
  );
}

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

      <div ref={sectionRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="relative h-[500px] w-full max-w-5xl">
            {cards.map((card, i) => (
              <Card key={card.title} {...card} index={i} total={cards.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
