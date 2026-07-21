import Container from "@/components/Container";
import Section from "@/components/Section";

function RealEstateIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="30" y="36" width="60" height="34" rx="3" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <path d="M60 12L28 38h64L60 12z" stroke="currentColor" strokeWidth={0.6} opacity={0.25} fill="none" strokeLinejoin="round" />
      <rect x="48" y="46" width="24" height="24" rx="2" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <rect x="52" y="50" width="8" height="8" rx="1" fill="currentColor" opacity={0.15} />
      <rect x="62" y="50" width="8" height="8" rx="1" fill="currentColor" opacity={0.1} />
      <rect x="52" y="60" width="16" height="4" rx="1" fill="currentColor" opacity={0.1} />
      <path d="M36 42l4-2M80 42l4-2" stroke="currentColor" strokeWidth={1.2} opacity={0.2} strokeLinecap="round" />
    </svg>
  );
}

function ClinicIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="40" y="20" width="40" height="48" rx="10" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <rect x="44" y="38" width="32" height="26" rx="4" stroke="currentColor" strokeWidth={0.3} opacity={0.15} />
      <line x1="60" y1="24" x2="60" y2="34" stroke="currentColor" strokeWidth={0.6} opacity={0.3} strokeLinecap="round" />
      <line x1="55" y1="29" x2="65" y2="29" stroke="currentColor" strokeWidth={0.6} opacity={0.3} strokeLinecap="round" />
      <circle cx="60" cy="52" r="4" stroke="currentColor" strokeWidth={0.4} opacity={0.2} />
      <circle cx="60" cy="52" r="1.5" fill="currentColor" opacity={0.25} />
      <path d="M70 58c-6 3-14 3-20 0" stroke="currentColor" strokeWidth={0.4} opacity={0.15} fill="none" strokeLinecap="round" />
    </svg>
  );
}

function EcomIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="22" y="18" width="76" height="10" rx="3" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <rect x="26" y="20" width="68" height="6" rx="1.5" fill="currentColor" opacity={0.12} />
      <rect x="22" y="36" width="34" height="26" rx="3" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <rect x="64" y="36" width="34" height="26" rx="3" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <rect x="26" y="40" width="26" height="18" rx="2" fill="currentColor" opacity={0.08} />
      <rect x="68" y="40" width="26" height="18" rx="2" fill="currentColor" opacity={0.08} />
      <path d="M30 30v3M60 30v3M90 30v3" stroke="currentColor" strokeWidth={0.5} opacity={0.15} strokeLinecap="round" />
      <path d="M20 70h80" stroke="currentColor" strokeWidth={0.3} opacity={0.1} />
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
              className="glass-card-glow rounded-2xl p-6"
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
