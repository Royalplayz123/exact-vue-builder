import ScrollReveal from '@/components/ScrollReveal';
import minecraftBanner from '@/assets/minecraft-banner.jpg';
import controlPanel from '@/assets/control-panel.jpg';
import minecraftOres from '@/assets/minecraft-ores.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              SERVER HOSTING FOR
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text-cyan mb-2">
              MINECRAFT & TOP GAMES
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              MADE EASY
            </h2>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We've been in the Minecraft server hosting world for over a decade, committed to making sure that hosting your own server is easy, fun, and affordable! Since we started, we've branched out and now offer server hosting for 80+ other titles and counting.
            </p>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our customized gaming server control panel makes changing server settings and installing plugins a breeze. But if you're ever feeling stuck, see our library of tutorials or send in a support ticket and expect a response within about 15 minutes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="rounded-xl overflow-hidden border border-border mb-16">
            <img 
              src={minecraftBanner} 
              alt="Minecraft Characters" 
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            WHY DRIP NODES?
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="rounded-xl border border-border overflow-hidden mb-8">
            <img 
              src={controlPanel} 
              alt="SME Control Panel" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="mb-12">
            <h3 className="text-primary font-semibold text-sm mb-3">
              OUR SUPPORT TEAM IS AVAILABLE 24/7/365
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              When you run into an issue with a mod, modpack, plugin, or setting on your server, <span className="text-primary">our support team</span> is here to help within 15 minutes on average. From Minecraft to Garry's mod server hosting, our team does it all. Spend more time playing with your friends instead of troubleshooting your server.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-right">
          <div className="rounded-xl border border-border overflow-hidden mb-8">
            <img 
              src={controlPanel} 
              alt="Server Dashboard" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="mb-12">
            <h3 className="text-primary font-semibold text-sm mb-3">
              POWERFUL CONTROL PANEL FOR EASY SERVER MANAGEMENT
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our easy-to-use control panel allows you to take charge of all aspects of your hosted Minecraft and gaming servers. From stopping and starting your server to adding modpacks with a few clicks, editing config files, or adjusting player slots, the <span className="text-primary">interface is easy to navigate</span> for new players and includes the <span className="text-primary">powerful tools and features</span> you need.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="rounded-xl border border-border overflow-hidden mb-8">
            <img 
              src={minecraftOres} 
              alt="Minecraft Ores" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="mb-8">
            <h3 className="text-primary font-semibold text-sm mb-3">
              TRUSTED HOST, MINECRAFT COMMUNITY APPROVED
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hundreds of members of the Minecraft community trust Drip Nodes to be their Minecraft server host—including some of the biggest modpack developers and content creators out there.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
