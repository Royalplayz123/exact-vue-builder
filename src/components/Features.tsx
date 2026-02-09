import { Users, Globe, Download, Shield, Zap, RefreshCw } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    icon: Users,
    title: '24/7/365 SUPPORT',
    description: 'Get the best customer support of any Minecraft server host. Our average support ticket reply time is under 15 minutes.',
  },
  {
    icon: Globe,
    title: 'SERVERS WORLDWIDE FOR LOWER LATENCY',
    description: 'We offer game server hosting at 20 locations worldwide so that you can have a low latency wherever you\'re located.',
  },
  {
    icon: Download,
    title: 'AUTOMATED MODPACK INSTALLATION',
    description: 'Our Minecraft server hosting plans include automatic installation, making modpack server hosting a breeze with hundreds of mods.',
  },
  {
    icon: Shield,
    title: 'DDOS PROTECTION',
    description: 'All of our gaming servers are outfitted with DDoS protection to help you avoid downtime, including intentional DDoS attacks.',
  },
  {
    icon: Zap,
    title: 'COOL EASY TO USE GAME PANEL',
    description: 'Our game has all option you need for your minecraft server management like player, server, version manager and much more.',
  },
  {
    icon: RefreshCw,
    title: 'GAME SWAPPING',
    description: 'Want to shake things up? You can swap your server to any of our 80+ covered games anytime, at no extra charge!',
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            OUR FEATURES
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} animation="fade-up" delay={index * 80}>
              <div className="feature-card text-center">
                <div className="icon-circle mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-primary font-semibold text-sm mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
