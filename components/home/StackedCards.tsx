"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Bot, Globe, BarChart3, Bell, TrendingUp } from "lucide-react";
import Section from "@/components/Section";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: Zap, title: "Instant Alerts", desc: "WhatsApp + email fire the moment an enquiry lands." },
  { icon: Bot, title: "AI Chatbot", desc: "Answers questions 24/7, books calls, captures leads." },
  { icon: Globe, title: "Smart Website", desc: "Conversion-first site that captures every visitor." },
  { icon: BarChart3, title: "Analytics", desc: "See exactly where leads come from and what converts." },
  { icon: Bell, title: "Auto Follow-ups", desc: "Never lose a lead — sequences run on autopilot." },
  { icon: TrendingUp, title: "CRM Sync", desc: "Every lead logged, tagged, assigned automatically." },
];

function getTargetPositions(vw: number) {
  let cols = 3, cardW = 280, gap = 20;
  if (vw < 768) { cols = 1; cardW = 260; gap = 16; }
  else if (vw < 1024) { cols = 2; cardW = 270; gap = 18; }

  const rows = Math.ceil(cards.length / cols);
  const midCol = (cols - 1) / 2;
  const midRow = (rows - 1) / 2;

  return cards.map((_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      tx: (col - midCol) * (cardW + gap),
      ty: (row - midRow) * (190 + gap),
      rot: (i - (cards.length - 1) / 2) * 5,
    };
  });
}

export default function StackedCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const els = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || els.length === 0) return;

    let targets = getTargetPositions(window.innerWidth);

    const handleResize = () => {
      targets = getTargetPositions(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    els.forEach((el, i) => {
      gsap.set(el, {
        x: 0,
        y: 0,
        scale: 0.85,
        rotation: targets[i].rot,
        transformOrigin: "center center",
        willChange: "transform",
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    els.forEach((el, i) => {
      tl.to(el, {
        x: targets[i].tx,
        y: targets[i].ty,
        scale: 1,
        rotation: 0,
        ease: "power2.out",
      }, 0);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

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

      <div ref={sectionRef} className="relative h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="relative h-[500px] w-full max-w-5xl">
            {cards.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl glass-card-glow p-5 sm:w-72 md:w-72"
                style={{ zIndex: cards.length - i }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
