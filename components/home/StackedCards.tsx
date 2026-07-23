"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";

gsap.registerPlugin(ScrollTrigger);

// ─── Abstract SVG Illustrations ───

function AlertIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
      <circle cx="60" cy="40" r="36" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <circle cx="60" cy="40" r="28" stroke="currentColor" strokeWidth={0.4} opacity={0.3} strokeDasharray="4 6" />
      <circle cx="60" cy="40" r="20" stroke="currentColor" strokeWidth={0.3} opacity={0.2} />
      <path d="M56 18L44 48h9l-4 24 18-30h-9l7-24z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function ChatIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
      <circle cx="30" cy="30" r="3" fill="currentColor" opacity={0.3} />
      <circle cx="60" cy="18" r="5" fill="currentColor" opacity={0.5} />
      <circle cx="90" cy="28" r="4" fill="currentColor" opacity={0.4} />
      <circle cx="45" cy="55" r="3" fill="currentColor" opacity={0.3} />
      <circle cx="75" cy="58" r="4" fill="currentColor" opacity={0.4} />
      <circle cx="60" cy="45" r="2" fill="currentColor" opacity={0.25} />
      <path d="M34 33L57 21M63 22L87 30M80 31l-4 26M57 22l2 22M47 55l12-9M60 48l14 8" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <path d="M50 62c-10-3-20-10-20-22s9-22 30-22 30 10 30 22-8 19-20 22" stroke="currentColor" strokeWidth={0.5} opacity={0.12} fill="none" strokeDasharray="2 4" />
    </svg>
  );
}

function WebIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
      <rect x="20" y="16" width="80" height="54" rx="8" stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
      <rect x="20" y="16" width="80" height="12" rx="8" stroke="currentColor" strokeWidth={0.3} opacity={0.15} />
      <circle cx="28" cy="22" r="2" fill="currentColor" opacity={0.2} />
      <circle cx="36" cy="22" r="2" fill="currentColor" opacity={0.2} />
      <circle cx="44" cy="22" r="2" fill="currentColor" opacity={0.2} />
      <rect x="28" y="36" width="64" height="2" rx="1" fill="currentColor" opacity={0.1} />
      <rect x="28" y="42" width="48" height="2" rx="1" fill="currentColor" opacity={0.08} />
      <rect x="28" y="48" width="56" height="2" rx="1" fill="currentColor" opacity={0.1} />
      <rect x="28" y="54" width="38" height="2" rx="1" fill="currentColor" opacity={0.08} />
    </svg>
  );
}

function AnalyticsIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
      <path d="M15 62h90" stroke="currentColor" strokeWidth={0.5} opacity={0.15} />
      <rect x="30" y="44" width="10" height="18" rx="2" fill="currentColor" opacity={0.2} />
      <rect x="46" y="32" width="10" height="30" rx="2" fill="currentColor" opacity={0.3} />
      <rect x="62" y="38" width="10" height="24" rx="2" fill="currentColor" opacity={0.25} />
      <rect x="78" y="24" width="10" height="38" rx="2" fill="currentColor" opacity={0.35} />
      <path d="M30 46c6-2 10-16 16-14s10 10 16 8 8-12 16-10" stroke="currentColor" strokeWidth={0.5} opacity={0.2} fill="none" />
      <circle cx="30" cy="46" r="1.5" fill="currentColor" opacity={0.25} />
      <circle cx="46" cy="32" r="1.5" fill="currentColor" opacity={0.25} />
      <circle cx="78" cy="24" r="1.5" fill="currentColor" opacity={0.25} />
    </svg>
  );
}

function CycleIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
      <path d="M60 18c13 0 24 10 24 22s-11 22-24 22-24-10-24-22" stroke="currentColor" strokeWidth={0.6} opacity={0.2} fill="none" />
      <path d="M60 40l8-10-8-10" stroke="currentColor" strokeWidth={1.2} opacity={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 40l-8 10 8 10" stroke="currentColor" strokeWidth={1.2} opacity={0.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="40" r="3" fill="currentColor" opacity={0.4} />
      <circle cx="60" cy="40" r="8" stroke="currentColor" strokeWidth={0.3} opacity={0.15} strokeDasharray="3 4" />
    </svg>
  );
}

function SyncIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
      <rect x="25" y="18" width="70" height="12" rx="4" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <rect x="30" y="20" width="60" height="8" rx="2" fill="currentColor" opacity={0.15} />
      <rect x="25" y="34" width="62" height="12" rx="4" stroke="currentColor" strokeWidth={0.5} opacity={0.25} />
      <rect x="30" y="36" width="52" height="8" rx="2" fill="currentColor" opacity={0.2} />
      <rect x="25" y="50" width="54" height="12" rx="4" stroke="currentColor" strokeWidth={0.5} opacity={0.3} />
      <rect x="30" y="52" width="44" height="8" rx="2" fill="currentColor" opacity={0.25} />
      <path d="M95 24h4v4M95 40h4v4M79 56h4v4" stroke="currentColor" strokeWidth={1.2} opacity={0.3} strokeLinecap="round" />
    </svg>
  );
}

// ─── Card Data ───

interface CardData {
  Illustration: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  accent: string;
  gradient: string;
}

const cardData: CardData[] = [
  {
    Illustration: AlertIllus,
    title: "Instant Alerts",
    desc: "Real-time WhatsApp and email notifications fire the moment an enquiry lands so you never miss a lead.",
    accent: "#6655ff",
    gradient: "linear-gradient(135deg, #f0eeff 0%, #ffffff 50%, #fafaff 100%)",
  },
  {
    Illustration: ChatIllus,
    title: "AI Chatbot",
    desc: "Answers questions around the clock, books calls automatically, and captures every lead that visits your site.",
    accent: "#2dd4bf",
    gradient: "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #fafaff 100%)",
  },
  {
    Illustration: WebIllus,
    title: "Smart Website",
    desc: "A conversion-first site designed to capture every visitor with clear paths from landing to enquiry.",
    accent: "#6655ff",
    gradient: "linear-gradient(135deg, #ffffff 0%, #fafaff 50%, #f0eeff 100%)",
  },
  {
    Illustration: AnalyticsIllus,
    title: "Analytics",
    desc: "See exactly where your leads come from, what converts, and which channels deliver the best ROI.",
    accent: "#14b8a6",
    gradient: "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #fafaff 100%)",
  },
  {
    Illustration: CycleIllus,
    title: "Auto Follow-ups",
    desc: "Never lose a lead — intelligent sequences nurture enquiries on autopilot until they convert.",
    accent: "#6655ff",
    gradient: "linear-gradient(135deg, #fafaff 0%, #ffffff 50%, #f0eeff 100%)",
  },
  {
    Illustration: SyncIllus,
    title: "CRM Sync",
    desc: "Every lead is logged, tagged, and assigned automatically so your team knows exactly who to call.",
    accent: "#2dd4bf",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
  },
];

// ─── Target Positions ───

function getTargetPositions(vw: number) {
  let cols = 3, cardW = 290, gap = 24;
  if (vw < 768) { cols = 1; cardW = 280; gap = 16; }
  else if (vw < 1024) { cols = 2; cardW = 280; gap = 20; }

  const rows = Math.ceil(cardData.length / cols);
  const midCol = (cols - 1) / 2;
  const midRow = (rows - 1) / 2;

  return cardData.map((_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      tx: (col - midCol) * (cardW + gap),
      ty: (row - midRow) * (220 + gap),
      rot: (i - (cardData.length - 1) / 2) * 5,
      rotX: 12 - Math.abs(col - midCol) * 4,
      rotY: (col - midCol) * 3 + (row - midRow) * 2,
    };
  });
}

// ─── Component ───

export default function StackedCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const els = wrapperRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || els.length === 0) return;

    let targets = getTargetPositions(window.innerWidth);

    const handleResize = () => {
      targets = getTargetPositions(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    els.forEach((el, i) => {
      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        scale: 0.85,
        rotation: targets[i].rot,
        rotateX: targets[i].rotX,
        rotateY: targets[i].rotY,
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
        xPercent: -50,
        yPercent: -50,
        x: targets[i].tx,
        y: targets[i].ty,
        scale: 1,
        rotation: 0,
        rotateX: 0,
        rotateY: 0,
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
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
          <div className="relative h-[540px] w-full max-w-6xl">
            {cardData.map(({ Illustration, title, desc, accent, gradient }, i) => (
              <div
                key={title}
                ref={(el) => { wrapperRefs.current[i] = el; }}
                className="absolute left-1/2 top-1/2"
                style={{ zIndex: cardData.length - i }}
              >
                <div
                  className="premium-card w-[85vw] max-w-[280px] p-6 sm:w-72 md:w-72"
                  style={{ background: gradient }}
                >
                  <div
                    className="mb-6 flex h-24 w-full items-center justify-center rounded-2xl"
                    style={{ color: accent, background: `${accent}08` }}
                  >
                    <Illustration />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold leading-tight tracking-tight text-ink">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
