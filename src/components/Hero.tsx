import { Monitor } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <ScrollReveal animation="fade-up">
          <div className="section-badge mb-6">
            <Monitor className="w-4 h-4" />
            <span>YOUR ULTIMATE GAMING PARTNER™</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text-cyan text-glow-cyan">HOSTING SOLUTION MADE</span>
            <br />
            <span className="gradient-text-cyan text-glow-cyan">SIMPLE</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base mb-8">
            We've been providing Minecraft server hosting services, as well as server hosting for other 
            games since 2011. We support hosting for all Minecraft versions and are dedicated to ensuring 
            your experience is fully supported. For a reliable server that makes modding easy, go with 
            Drip Nodes.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="scale-in" delay={300}>
          <button className="btn-primary-gradient px-8 py-3 rounded-lg font-semibold text-foreground">
            CREATE SERVER
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
