import Container from "@/components/Container";
import Section from "@/components/Section";

export default function HonestNote() {
  return (
    <Section muted>
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl glass-card-glow p-8 text-center sm:p-10">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-ink font-display">
            We&apos;re a new agency. Here&apos;s the honest deal.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            We&apos;re building our client base, and we keep it honest — no fake
            testimonials. What we do have: a live portfolio project you can visit
            today, a working demo below, and a founding-client offer — we&apos;re
            onboarding our first few businesses at a discounted rate in exchange
            for a case study once your system is live. Because we&apos;re hungry
            to prove ourselves, your system goes live in 3–7 days, not months.
            You see our work and the demo before you commit.
          </p>
        </div>
      </Container>
    </Section>
  );
}
