import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How KritRaj Nexera collects, uses, stores, and protects your personal data when you visit our website or use our services, consistent with Indian law.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you voluntarily provide when filling out forms on our website, including your name, email address, phone number, company name, and any additional details you share via contact or demo inquiry forms. We also automatically collect certain technical data such as your IP address, browser type, device information, and pages visited through cookies and similar tracking technologies.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to respond to your inquiries, provide the services you request, improve our website and service offerings, send relevant communications regarding your projects, and comply with legal obligations. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable Indian law. Once no longer needed, your data is securely deleted or anonymised.",
  },
  {
    title: "Data Sharing",
    content:
      "We may share your information with trusted third-party service providers who assist us in operating our website and business (e.g., hosting providers, email services, analytics). These providers are contractually bound to protect your data and use it only for the services we engage them for.",
  },
  {
    title: "Your Rights",
    content:
      "Under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, you have the right to access, correct, or delete your personal data held by us. You may also withdraw consent for processing at any time. To exercise these rights, please contact us at kritrajnexera@gmail.com.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses essential and analytics cookies to improve your browsing experience and understand site usage. You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
  },
  {
    title: "Security",
    content:
      "We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no data transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to external sites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any personal information.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.",
  },
  {
    title: "Contact Us",
    content:
      'If you have questions or concerns about this Privacy Policy or how we handle your data, please reach out to us at <a href="mailto:kritrajnexera@gmail.com" class="text-brand-400 hover:underline">kritrajnexera@gmail.com</a>.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section>
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <TypeInHeading className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Privacy Policy
              </TypeInHeading>
              <p className="mt-2 text-sm text-ink-muted">
                Last updated: July 2026
              </p>
              <p className="mt-6 text-ink-muted leading-relaxed">
                At KritRaj Nexera, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </Reveal>

            <div className="mt-12 space-y-10">
              {sections.map((s, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <div>
                    <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
                    <p
                      className="mt-2 text-ink-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: s.content }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
