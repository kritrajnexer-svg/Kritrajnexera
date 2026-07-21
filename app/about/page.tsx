import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business automation and AI automation agency — modern websites with intelligent workflows that grow your business and capture more clients.",
  alternates: {
    canonical: "/about",
  },
};

function GrowthIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <path d="M18 62h84" stroke="currentColor" strokeWidth={0.8} opacity={0.2} />
      <rect x="32" y="42" width="10" height="20" rx="2" fill="currentColor" opacity={0.3} />
      <rect x="48" y="30" width="10" height="32" rx="2" fill="currentColor" opacity={0.4} />
      <rect x="64" y="36" width="10" height="26" rx="2" fill="currentColor" opacity={0.35} />
      <rect x="80" y="22" width="10" height="40" rx="2" fill="currentColor" opacity={0.45} />
      <path d="M30 44c6-4 10-14 16-12s10 8 16 6 8-10 16-8" stroke="currentColor" strokeWidth={1} opacity={0.3} fill="none" />
    </svg>
  );
}

function WorkflowIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="34" cy="40" r="10" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx="60" cy="22" r="10" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx="86" cy="40" r="10" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx="60" cy="58" r="10" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <path d="M44 40l6 0M76 40l6 0" stroke="currentColor" strokeWidth={1.2} opacity={0.4} />
      <path d="M60 32l0 6M60 50l0 6" stroke="currentColor" strokeWidth={1.2} opacity={0.4} />
      <path d="M48 28l4-2M72 28l-4-2" stroke="currentColor" strokeWidth={0.8} opacity={0.25} />
      <circle cx="34" cy="40" r="3" fill="currentColor" opacity={0.3} />
      <circle cx="60" cy="22" r="3" fill="currentColor" opacity={0.3} />
      <circle cx="86" cy="40" r="3" fill="currentColor" opacity={0.3} />
      <circle cx="60" cy="58" r="3" fill="currentColor" opacity={0.3} />
    </svg>
  );
}

function CodeIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <path d="M32 28l-12 12 12 12" stroke="currentColor" strokeWidth={1.4} opacity={0.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M88 28l12 12-12 12" stroke="currentColor" strokeWidth={1.4} opacity={0.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M68 22L52 58" stroke="currentColor" strokeWidth={1.2} opacity={0.4} strokeLinecap="round" />
      <rect x="20" y="18" width="80" height="44" rx="6" stroke="currentColor" strokeWidth={0.6} opacity={0.15} />
    </svg>
  );
}

function ClockIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="60" cy="40" r="24" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx="60" cy="40" r="3" fill="currentColor" opacity={0.35} />
      <path d="M60 40V26" stroke="currentColor" strokeWidth={1.2} opacity={0.45} strokeLinecap="round" />
      <path d="M60 40l10 6" stroke="currentColor" strokeWidth={1.2} opacity={0.35} strokeLinecap="round" />
      <path d="M60 16v4" stroke="currentColor" strokeWidth={0.6} opacity={0.2} strokeLinecap="round" />
      <path d="M60 60v4" stroke="currentColor" strokeWidth={0.6} opacity={0.2} strokeLinecap="round" />
    </svg>
  );
}

function RobotIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="44" y="30" width="32" height="28" rx="6" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <rect x="48" y="34" width="10" height="8" rx="3" stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      <rect x="62" y="34" width="10" height="8" rx="3" stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      <rect x="52" y="46" width="16" height="5" rx="2" fill="currentColor" opacity={0.25} />
      <line x1="50" y1="24" x2="50" y2="30" stroke="currentColor" strokeWidth={1.2} opacity={0.35} strokeLinecap="round" />
      <line x1="70" y1="24" x2="70" y2="30" stroke="currentColor" strokeWidth={1.2} opacity={0.35} strokeLinecap="round" />
      <path d="M40 62c4 6 16 6 20 0" stroke="currentColor" strokeWidth={0.8} opacity={0.25} fill="none" />
    </svg>
  );
}

function ChartIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <path d="M18 62h84" stroke="currentColor" strokeWidth={0.8} opacity={0.2} />
      <rect x="30" y="40" width="12" height="22" rx="2" fill="currentColor" opacity={0.35} />
      <rect x="46" y="28" width="12" height="34" rx="2" fill="currentColor" opacity={0.4} />
      <rect x="62" y="34" width="12" height="28" rx="2" fill="currentColor" opacity={0.3} />
      <rect x="78" y="20" width="12" height="42" rx="2" fill="currentColor" opacity={0.45} />
      <circle cx="36" cy="40" r="2" fill="currentColor" opacity={0.25} />
      <circle cx="52" cy="28" r="2" fill="currentColor" opacity={0.25} />
      <circle cx="84" cy="20" r="2" fill="currentColor" opacity={0.25} />
    </svg>
  );
}

function HandshakeIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <path d="M26 52c6-10 14-16 26-18l8-4c6-3 14-3 20 0l8 4c12 2 20 8 26 18" stroke="currentColor" strokeWidth={1.2} opacity={0.4} fill="none" strokeLinecap="round" />
      <path d="M34 48c4-6 10-12 18-14" stroke="currentColor" strokeWidth={1.2} opacity={0.5} strokeLinecap="round" />
      <path d="M86 48c-4-6-10-12-18-14" stroke="currentColor" strokeWidth={1.2} opacity={0.5} strokeLinecap="round" />
      <path d="M40 52c4-4 10-6 16-6" stroke="currentColor" strokeWidth={0.8} opacity={0.3} fill="none" />
      <path d="M80 52c-4-4-10-6-16-6" stroke="currentColor" strokeWidth={0.8} opacity={0.3} fill="none" />
    </svg>
  );
}

const values = [
  {
    Illustration: GrowthIllus,
    title: "Build for Business Growth",
    desc: "Every decision we make is focused on improving lead generation, response speed, and customer conversion — not simply building attractive websites.",
    gradient: "linear-gradient(135deg, #f0eeff 0%, #ffffff 50%, #fafaff 100%)",
    accent: "#6655ff",
  },
  {
    Illustration: WorkflowIllus,
    title: "Automation Comes First",
    desc: "A website without workflow automation is incomplete. Every platform we build is designed to reduce manual work, improve efficiency, and create a better customer experience.",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
    accent: "#2dd4bf",
  },
  {
    Illustration: CodeIllus,
    title: "Built to Scale",
    desc: "Our solutions are designed to grow alongside your business with clean architecture, maintainable Next.js development, and flexible n8n automation that adapts as your business evolves.",
    gradient: "linear-gradient(135deg, #fafaff 0%, #ffffff 50%, #f0eeff 100%)",
    accent: "#6655ff",
  },
];

const trustCards = [
  {
    Illustration: ClockIllus,
    title: "Faster Enquiry Response",
    desc: "Respond to prospects in seconds instead of hours.",
    gradient: "linear-gradient(135deg, #f0eeff 0%, #ffffff 50%, #fafaff 100%)",
    accent: "#6655ff",
  },
  {
    Illustration: RobotIllus,
    title: "AI Automation",
    desc: "Reduce repetitive work and streamline everyday operations with intelligent workflows.",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
    accent: "#2dd4bf",
  },
  {
    Illustration: ChartIllus,
    title: "Built for Growth",
    desc: "Scalable web design and business automation designed for long-term growth.",
    gradient: "linear-gradient(135deg, #fafaff 0%, #ffffff 50%, #f0eeff 100%)",
    accent: "#6655ff",
  },
  {
    Illustration: HandshakeIllus,
    title: "Transparent Partnership",
    desc: "Clear communication, clean code, and solutions your team can confidently manage.",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
    accent: "#2dd4bf",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <TypeInHeading className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
                We Believe a Website Should Generate Business — Not Just Exist.
              </TypeInHeading>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Most businesses don&apos;t lose customers because of poor marketing.
              They lose them because enquiries go unanswered, follow-ups are
              delayed, and manual processes create friction at every step.
            </p>
            <p>
              A website brings traffic. But without workflow automation behind it,
              that traffic rarely turns into revenue. The contact form submits to
              an inbox nobody checks. The hot prospect waits hours for a reply.
              The opportunity quietly disappears.
            </p>
            <p>
              KritRaj Nexera was created to solve that problem. We combine
              website development with AI automation — so every enquiry is
              captured, routed, and followed up on automatically. We don&apos;t
              build websites that sit there.{" "}
              <span className="font-medium text-ink">
                We build AI-powered automation that generates business.
              </span>
            </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founder */}
      <section className="border-y border-line bg-surface/40 py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
            {/* Founder photo */}
            <div className="mx-auto w-full max-w-xs">
              <div className="overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/founder.webp"
                  alt="Rajnish Singh — Founder of KritRaj Nexera"
                  width={800}
                  height={800}
                  className="aspect-square object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
            </div>

            <div>
              <Reveal>
                <p className="mb-2 text-sm font-medium text-brand-400">
                  Founder
                </p>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                  Rajnish Singh
                </h2>
                <p className="mb-5 text-ink-muted">Founder, KritRaj Nexera</p>
              </Reveal>

              <Reveal>
              <div className="space-y-4 leading-relaxed text-ink-muted">
                <p>
                  Rajnish founded KritRaj Nexera after recognising a common
                  problem across service businesses: companies invested in
                  websites but still lost customers because there was no
                  automation behind the website.
                </p>
                <p>
                  A website alone generates traffic. But enquiries, follow-ups,
                  and client management still depend on manual effort — and that
                  effort has limits. People get busy. Messages get missed.
                  Responses come too late.
                </p>
                <p>
                  KritRaj Nexera exists to solve that gap. We combine websites,
                  AI automation, CRM integration, and intelligent workflows into
                  one complete platform — so your business captures every
                  opportunity, responds instantly, and never loses a prospect to a
                  slow reply.
                </p>
                <p className="border-l-2 border-brand-500 pl-4 italic text-ink">
                  &ldquo;A website shouldn&apos;t stop working when your office
                  closes. It should continue capturing opportunities, responding
                  instantly through AI chatbots, and supporting your business
                  around the clock. That&apos;s the standard we build for.&rdquo;
                </p>
              </div>
            </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Why We Exist */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
            Why We Exist
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Every missed enquiry is a missed opportunity.
          </p>
          <p className="mt-4 text-ink-muted">
            Most businesses invest in websites to attract customers but rely on
            manual processes to manage them. We built KritRaj Nexera to bridge
            that gap by combining modern web design with AI automation,
            helping businesses respond faster, work smarter, and
            grow with confidence.
          </p>
        </div>
        </Reveal>
      </Section>

      {/* Values */}
      <section className="border-y border-line bg-surface/40 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-ink font-display">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ Illustration, title, desc, gradient, accent }, i) => (
              <Reveal key={title} delay={i * 0.1} direction={i % 2 === 0 ? "up" : "down"}>
                <div className="premium-card p-8 h-full" style={{background: gradient}}>
                <div className="mb-5 flex h-20 w-full items-center justify-center rounded-xl" style={{color: accent, background: `${accent}08`}}>
                  <Illustration />
                </div>
                <h3 className="mb-3 font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Businesses Choose KritRaj Nexera */}
      <Section>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-ink font-display">
            Why Businesses Choose KritRaj Nexera
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map(({ Illustration, title, desc, gradient, accent }, i) => (
              <Reveal key={title} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
                <div className="premium-card p-6 h-full" style={{background: gradient}}>
              <div className="mb-4 flex h-20 w-full items-center justify-center rounded-xl" style={{color: accent, background: `${accent}08`}}>
                <Illustration />
              </div>
              <h3 className="mb-2 font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
                </div>
              </Reveal>
            ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="relative overflow-hidden text-center">
        <Reveal>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-brand-500/10" />
        </div>
        <div className="relative">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
            Ready to Build Your AI Automation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let&apos;s explore how website development powered by n8n automation
            can help your business capture more enquiries, respond faster, and
            convert more opportunities into customers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" className="group">
              Book a Free Strategy Call
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round"/></svg>
            </Button>
            <Button href="/demo" variant="secondary">
              Try Live Demo
            </Button>
          </div>
        </div>
        </Reveal>
      </Section>
    </>
  );
}
