import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

const DemoPageClient = dynamic(() => import("./DemoPageClient"));

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Experience AI and workflow automation live. Submit a sample inquiry and watch our n8n pipeline capture, route, and process it — sales automation in action.",
  alternates: {
    canonical: "/demo",
  },
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-xs font-medium text-rose-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-400" />
                </span>
                Live Demo
              </div>
              <TypeInHeading className="text-[var(--text-title)] font-semibold leading-[1.1] tracking-tight text-ink">
                Experience AI Automation Live
              </TypeInHeading>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
                Submit a sample inquiry and watch as it moves through a
                complete workflow automation pipeline in real time — the same
                automation we&apos;d ship for you, live in 3–7 days.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Demo Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <DemoPageClient />
        </Container>
      </section>
    </>
  );
}
