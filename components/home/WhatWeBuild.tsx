import Container from "@/components/Container";
import Section from "@/components/Section";

function RealEstateIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="30" y="34" width="60" height="36" rx="4" stroke="currentColor" strokeWidth={1.2} opacity={0.55} />
      <path d="M60 10 24 38h72z" stroke="currentColor" strokeWidth={1.4} opacity={0.6} fill="none" strokeLinejoin="round" />
      <rect x="48" y="44" width="24" height="26" rx="2" stroke="currentColor" strokeWidth={1} opacity={0.5} />
      <rect x="52" y="48" width="7" height="7" rx="1" fill="currentColor" opacity={0.45} />
      <rect x="61" y="48" width="7" height="7" rx="1" fill="currentColor" opacity={0.4} />
      <rect x="52" y="58" width="16" height="5" rx="1" fill="currentColor" opacity={0.35} />
      <path d="M36 40 32 42M84 40l4 2" stroke="currentColor" strokeWidth={1.5} opacity={0.4} strokeLinecap="round" />
    </svg>
  );
}

function ClinicIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="38" y="18" width="44" height="52" rx="12" stroke="currentColor" strokeWidth={1.2} opacity={0.55} />
      <rect x="44" y="38" width="32" height="28" rx="4" stroke="currentColor" strokeWidth={0.8} opacity={0.4} />
      <line x1="60" y1="22" x2="60" y2="34" stroke="currentColor" strokeWidth={1.4} opacity={0.65} strokeLinecap="round" />
      <line x1="53" y1="28" x2="67" y2="28" stroke="currentColor" strokeWidth={1.4} opacity={0.65} strokeLinecap="round" />
      <circle cx="60" cy="54" r="5" stroke="currentColor" strokeWidth={1} opacity={0.5} />
      <circle cx="60" cy="54" r="2" fill="currentColor" opacity={0.5} />
      <path d="M70 60c-6 4-14 4-20 0" stroke="currentColor" strokeWidth={0.8} opacity={0.35} fill="none" strokeLinecap="round" />
    </svg>
  );
}

function EcomIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="20" y="16" width="80" height="10" rx="3" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <rect x="24" y="18" width="72" height="6" rx="1.5" fill="currentColor" opacity={0.25} />
      <rect x="20" y="34" width="36" height="28" rx="4" stroke="currentColor" strokeWidth={1.2} opacity={0.55} />
      <rect x="64" y="34" width="36" height="28" rx="4" stroke="currentColor" strokeWidth={1.2} opacity={0.55} />
      <rect x="24" y="38" width="28" height="20" rx="2" fill="currentColor" opacity={0.3} />
      <rect x="68" y="38" width="28" height="20" rx="2" fill="currentColor" opacity={0.3} />
      <path d="M30 28v3M60 28v3M90 28v3" stroke="currentColor" strokeWidth={1.2} opacity={0.4} strokeLinecap="round" />
      <path d="M18 72h84" stroke="currentColor" strokeWidth={0.8} opacity={0.2} />
    </svg>
  );
}

const items = [
  {
    Illustration: RealEstateIllus,
    label: "Real Estate",
    desc: "Enquiry-to-tour automation: dynamic listings site wired to WhatsApp automation, so every enquiry reaches an agent fast.",
    gradient: "linear-gradient(135deg, #f0eeff 0%, #ffffff 50%, #fafaff 100%)",
    accent: "#6655ff",
  },
  {
    Illustration: ClinicIllus,
    label: "Clinic",
    desc: "Appointment system: booking site with automated reminders, rescheduling, and no-show follow-ups.",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
    accent: "#2dd4bf",
  },
  {
    Illustration: EcomIllus,
    label: "E-commerce",
    desc: "Catalog + sales automation: filterable product site feeding orders into inventory, dispatch, and customer win-back flows.",
    gradient: "linear-gradient(135deg, #fafaff 0%, #ffffff 50%, #f0eeff 100%)",
    accent: "#6655ff",
  },
];

export default function WhatWeBuild() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,3vw,2rem)] font-semibold leading-tight text-ink font-display">
            What we build
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map(({ Illustration, label, desc, gradient, accent }) => (
            <div
              key={label}
              className="premium-card p-6"
              style={{ background: gradient }}
            >
              <div
                className="mb-4 flex h-20 w-full items-center justify-center rounded-xl"
                style={{ color: accent, background: `${accent}08` }}
              >
                <Illustration />
              </div>
              <h3 className="mb-1 font-semibold text-ink">{label}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-muted">
          These describe what we build, not completed client results.
        </p>
      </Container>
    </Section>
  );
}
