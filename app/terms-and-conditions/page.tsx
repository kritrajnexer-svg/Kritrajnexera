import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of KritRaj Nexera's website, services, and digital products, including IP rights, payment terms, and governing law.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the KritRaj Nexera website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website or services.",
  },
  {
    title: "Services Description",
    content:
      "KritRaj Nexera provides web development, AI automation, and digital solutions. The specific scope, deliverables, timelines, and pricing for each engagement will be outlined in a separate service agreement. These terms serve as a general framework governing all engagements.",
  },
  {
    title: "Intellectual Property",
    content:
      "Unless otherwise agreed in writing, all intellectual property rights in the deliverables we create (websites, code, automations, designs) are transferred to the client upon full payment. KritRaj Nexera retains the right to display completed work in our portfolio unless a non-disclosure agreement is in place.",
  },
  {
    title: "Use of Website",
    content:
      "You agree not to misuse our website for any unlawful purpose or in violation of Indian laws, including the Information Technology Act, 2000. You may not attempt to gain unauthorised access to our systems, disrupt service availability, or use automated tools to scrape or harvest data from our website.",
  },
  {
    title: "Limitation of Liability",
    content:
      "KritRaj Nexera shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the total amount paid by you for the specific service giving rise to the claim.",
  },
  {
    title: "Payment Terms",
    content:
      "Payment terms for services are specified in individual project agreements. Failure to make timely payments may result in suspension of services until outstanding amounts are settled. All payments are in Indian Rupees unless otherwise agreed.",
  },
  {
    title: "Confidentiality",
    content:
      "Both parties agree to maintain the confidentiality of proprietary information shared during the course of business. This obligation survives the termination of our service agreement for a period of three years.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate a service agreement as per the terms specified in that agreement. KritRaj Nexera reserves the right to refuse service to anyone at our discretion, subject to applicable law.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Continued use of our services after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact",
    content:
      'For questions about these terms, please contact us at <a href="mailto:kritrajnexera@gmail.com" class="text-brand-400 hover:underline">kritrajnexera@gmail.com</a>.',
  },
];

export default function TermsPage() {
  return (
    <>
      <Section>
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <TypeInHeading className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Terms &amp; Conditions
              </TypeInHeading>
              <p className="mt-2 text-sm text-ink-muted">
                Last updated: July 2026
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
