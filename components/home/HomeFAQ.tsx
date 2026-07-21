import Container from "@/components/Container";
import Section from "@/components/Section";

const faqs = [
  {
    q: "You're new — why should I trust you?",
    a: "We're not asking you to trust a track record — trust the live demo instead. Submit a test enquiry above and watch the automation run in real time.",
  },
  {
    q: "What if it doesn't fit how my business actually works?",
    a: "Step one of our process is mapping your funnel before we build anything. If it doesn't fit, we fix it before launch.",
  },
  {
    q: "How long does this take?",
    a: "Most first builds go live in 2–3 weeks from kickoff.",
  },
];

export default function HomeFAQ() {
  return (
    <Section muted>
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-[var(--text-h3)] font-semibold leading-tight text-ink font-display">
            Quick answers
          </h2>
        </div>
        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="rounded-2xl glass-card p-5"
            >
              <h3 className="text-sm font-semibold text-ink">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
