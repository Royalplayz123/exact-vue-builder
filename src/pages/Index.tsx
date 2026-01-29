import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GameServers from '@/components/GameServers';
import Features from '@/components/Features';
import AboutSection from '@/components/AboutSection';
import FAQ from '@/components/FAQ';
import BeyondGaming from '@/components/BeyondGaming';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GameServers />
        <Features />
        <AboutSection />
        <FAQ />
        <BeyondGaming />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
