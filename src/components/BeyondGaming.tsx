import { Globe, Bot, Server, Database } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  { icon: Globe, name: 'WEB HOSTING' },
  { icon: Bot, name: 'BOT SERVERS' },
  { icon: Server, name: 'VPS SERVERS' },
  { icon: Database, name: 'DEDICATED SERVERS' },
];

const BeyondGaming = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <ScrollReveal animation="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            GO BEYOND GAMING
          </h2>
          
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto mb-10">
            Drip Nodes offers more than just Minecraft hosting and gaming servers — We also have <span className="text-primary">Dedicated Servers</span> for VPS, Web, Discord Bots. With our unbeatable customer support and global reach, we can offer server hosting for any need.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} animation="scale-in" delay={index * 100}>
              <div className="service-card">
                <div className="icon-circle mx-auto">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs font-semibold text-foreground mt-2">
                  {service.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="zoom-in">
          <div className="cta-section">
            <h3 className="text-2xl font-bold gradient-text-cyan mb-4">
              START HERE
            </h3>
            <button className="btn-primary-gradient px-8 py-3 rounded-lg font-semibold text-foreground">
              CREATE SERVER
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BeyondGaming;
