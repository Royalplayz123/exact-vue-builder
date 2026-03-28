import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Clock, Wifi, Download, Upload, Monitor, Globe, Shield, Folder, MapPin, Sparkles, Server, HardDrive, Zap } from 'lucide-react';

export interface GamePlan {
  name: string;
  price: number;
  ram: string;
  cpu: string;
  storage: string;
  ports: string;
  backups: number;
  locations: string;
  ddos: string;
  popular?: boolean;
}

export interface GameHostingConfig {
  gameName: string;
  bannerImage: string;
  accentColor: string; // tailwind color like 'green', 'blue', 'red'
  platforms: string[];
  features: string[];
  plans: GamePlan[];
  whyChooseFeatures: string[];
  description?: string;
}

const GameHostingTemplate = ({ config }: { config: GameHostingConfig }) => {
  const accent = config.accentColor;
  const accentClass = `text-${accent}-400`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${config.bannerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in">
            {config.platforms.map((platform) => (
              <span 
                key={platform}
                className="px-3 py-1 text-xs font-medium bg-muted/80 backdrop-blur-sm rounded-full text-muted-foreground border border-border/50"
              >
                {platform}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in text-primary" style={{ animationDelay: '100ms' }}>
            {config.gameName}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            SERVER HOSTING
          </h2>
          
          <div className="space-y-3 mb-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3 text-muted-foreground bg-muted/30 backdrop-blur-sm rounded-lg px-4 py-2">
              <Monitor className="w-4 h-4 text-primary" />
              <span className="text-sm">Instant Setup & Easy Configuration</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground bg-muted/30 backdrop-blur-sm rounded-lg px-4 py-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm">20 Worldwide Locations</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground bg-muted/30 backdrop-blur-sm rounded-lg px-4 py-2">
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-sm">Full Mod Support</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground bg-muted/30 backdrop-blur-sm rounded-lg px-4 py-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">24/7 DDoS Protection</span>
            </div>
          </div>
          
          <a href="#plans" className="animate-fade-in" style={{ animationDelay: '250ms' }}>
            <Button 
              size="lg" 
              className="w-full max-w-md bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground font-semibold py-6"
            >
              <Server className="w-5 h-5 mr-2" />
              CHOOSE YOUR PLAN
            </Button>
          </a>
        </div>
      </section>

      {/* Real-Time Performance */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 animate-fade-in">
            REAL-TIME <span className="text-primary">PERFORMANCE</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-sm max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Monitor our network performance in real-time. We guarantee the best gaming experience for {config.gameName}.
          </p>
          
          <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4 text-center animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Clock className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-xl font-bold text-green-400">100.0%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Wifi className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-xl font-bold text-cyan-400">&lt;9ms</div>
              <div className="text-xs text-muted-foreground">Average Ping</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center animate-fade-in" style={{ animationDelay: '250ms' }}>
              <Download className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-xl font-bold text-green-400">1Gbps</div>
              <div className="text-xs text-muted-foreground">Download Speed</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Upload className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-xl font-bold text-cyan-400">1Gbps</div>
              <div className="text-xs text-muted-foreground">Upload Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 animate-fade-in">
            CHOOSE YOUR <span className="text-primary">PLAN</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-sm max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Scale your {config.gameName} adventure with our optimized server plans.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.plans.map((plan, index) => (
              <div 
                key={plan.name}
                className="relative bg-card border border-border rounded-xl overflow-hidden animate-fade-in hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}
                
                <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-6 flex justify-center">
                  <Server className="w-12 h-12 text-primary" />
                </div>
                
                <div className="text-center py-3">
                  <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
                </div>
                
                <div className="mx-4 mb-4 bg-muted/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-foreground">₹{plan.price}</div>
                  <div className="text-xs text-muted-foreground">per month</div>
                </div>
                
                <div className="px-4 grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-muted/30 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <Server className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-cyan-400">{plan.ram}</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-5">RAM</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">{plan.cpu}</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-5">CPU</div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-cyan-400">{plan.storage}</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-5">SSD</div>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <Folder className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-orange-400">{plan.ports}</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-5">Additional</div>
                  </div>
                </div>
                
                <div className="px-4 space-y-2 mb-4">
                  <div className="flex justify-between items-center py-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Folder className="w-3 h-3" />
                      Backups Limit
                    </div>
                    <span className="text-xs text-foreground">{plan.backups}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 text-red-400" />
                      Locations
                    </div>
                    <span className="text-xs text-foreground">{plan.locations}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="w-3 h-3 text-green-400" />
                      DDoS Protection
                    </div>
                    <span className="text-xs text-foreground">{plan.ddos}</span>
                  </div>
                </div>
                
                <div className="px-4 mb-4">
                  <div className="text-xs font-medium text-center text-foreground mb-3">Features:</div>
                  <div className="grid grid-cols-2 gap-1">
                    {config.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-4 pb-4">
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            WHY CHOOSE <span className="text-primary">CODENEST SOLUTION?</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            Experience enterprise-grade hosting with gaming-optimized performance for {config.gameName}.
          </p>
          
          <div className="space-y-3 max-w-3xl">
            {config.whyChooseFeatures.map((feature, index) => (
              <div 
                key={feature}
                className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground animate-fade-in hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${(index + 2) * 50}ms` }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center max-w-2xl mx-auto animate-fade-in">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              READY TO START YOUR {config.gameName} SERVER?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Join thousands of players hosting their {config.gameName} servers with CodeNest Solution. Instant setup, 24/7 support.
            </p>
            <a href="#plans">
              <Button 
                size="lg" 
                className="w-full max-w-md bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                GET STARTED NOW
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameHostingTemplate;
