import Container from "@/components/Container";
import HeroCopy from "./HeroCopy";
import SystemInMotion from "./SystemInMotion";
import ParallaxSection from "@/components/ParallaxSection";

/**
 * Hero section — asymmetric 6/6 grid on desktop.
 * Left: headline + outcome copy + CTAs.
 * Right: animated "system in motion" flow visual.
 * Stacks on mobile (copy first, visual below).
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{backgroundImage:"radial-gradient(ellipse at 50% 0,rgba(102,85,255,0.08),transparent 60%)"}}>
      <Container>
        <ParallaxSection speed={0.6}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <HeroCopy />
            <SystemInMotion />
          </div>
        </ParallaxSection>
      </Container>
    </section>
  );
}
