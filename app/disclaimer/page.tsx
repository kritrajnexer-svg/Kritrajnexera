import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimers regarding the use of KritRaj Nexera's website, services, and digital solutions. General info only — not professional advice or guaranteed results.",
  alternates: {
    canonical: "/disclaimer",
  },
};

const sections = [
  {
    title: "General Information",
    content:
      "The information provided on the KritRaj Nexera website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics on the website.",
  },
  {
    title: "Professional Advice",
    content:
      "The content on this website does not constitute professional advice (legal, financial, technical, or otherwise). You should consult with appropriate professionals before making any decisions based on the information provided on this site. Any reliance you place on such information is strictly at your own risk.",
  },
  {
    title: "Service Results",
    content:
      "While we showcase case studies and results achieved for previous clients, individual results will vary. The outcomes described on our website are not guarantees of future performance. The success of any web development or automation project depends on numerous factors, including market conditions, client participation, and specific business circumstances.",
  },
  {
    title: "External Links",
    content:
      "Our website may contain links to external websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
  },
  {
    title: "Limitation of Liability",
    content:
      "KritRaj Nexera shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.",
  },
  {
    title: "Technology & Availability",
    content:
      "We make every effort to keep the website running smoothly. However, KritRaj Nexera takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control, including but not limited to hosting outages, DNS propagation delays, or maintenance windows.",
  },
  {
    title: "No Endorsement",
    content:
      "Reference to any specific product, process, or service by trade name, trademark, manufacturer, or otherwise does not constitute or imply endorsement, recommendation, or favoring by KritRaj Nexera.",
  },
  {
    title: "Changes to This Disclaimer",
    content:
      "We reserve the right to modify this disclaimer at any time without prior notice. By using our website, you agree to be bound by the current version of this disclaimer.",
  },
  {
    title: "Contact Us",
    content:
      'If you have any questions about this disclaimer, please contact us at <a href="mailto:kritrajnexera@gmail.com" class="text-brand-400 hover:underline">kritrajnexera@gmail.com</a>.',
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Section>
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <TypeInHeading className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Disclaimer
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
