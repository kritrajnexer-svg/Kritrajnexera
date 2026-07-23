import Container from "@/components/Container";
import HeroCopy from "./HeroCopy";
import SystemInMotion from "./SystemInMotion";
import ParallaxSection from "@/components/ParallaxSection";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Container className="relative z-10">
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
