import Container from "@/components/Container";
import HeroCopy from "./HeroCopy";
import SystemInMotion from "./SystemInMotion";

/**
 * Hero section — asymmetric 6/6 grid on desktop.
 * Left: headline + outcome copy + CTAs.
 * Right: animated "system in motion" flow visual.
 * Stacks on mobile (copy first, visual below).
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <HeroCopy />
          <SystemInMotion />
        </div>
      </Container>
    </section>
  );
}
