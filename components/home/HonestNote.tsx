import Container from "@/components/Container";
import Section from "@/components/Section";

export default function HonestNote() {
  return (
    <Section muted>
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-8 text-center sm:p-10">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-ink">
            We&apos;re a new agency. Here&apos;s the honest deal.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            We don&apos;t have client testimonials yet, so we won&apos;t fake
            them. What we do have: a live, working demo below, and a
            founding-client offer — we&apos;re onboarding our first few
            businesses at a discounted rate in exchange for a case study once
            your system is live. And because we&apos;re new, we move fast — your
            system goes live in 3–7 days, not months. You see it work before you
            pay full price.
          </p>
        </div>
      </Container>
    </Section>
  );
}
