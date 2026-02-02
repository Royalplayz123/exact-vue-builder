import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cpu, HardDrive, Network, Shield, Zap, Server, Clock, Download, Upload, MapPin, Check, Sparkles } from 'lucide-react';

const stats = [
  { icon: Clock, value: '99.9%', label: 'Uptime' },
  { icon: Zap, value: '<11ms', label: 'Average Ping' },
  { icon: Download, value: '0.9Gbps', label: 'Download Speed' },
  { icon: Upload, value: '1.0Gbps', label: 'Upload Speed' },
  { icon: Shield, value: 'Layer 7+', label: 'DDoS Protection' },
  { icon: Cpu, value: '2.10GHz', label: 'CPU Speed' },
];

const plans = [
  {
    name: 'INTEL NANO VPS',
    subtitle: 'Intel Platinum VPS',
    price: 239,
    ram: '2 GB',
    cpu: '2 CPU',
    storage: '30 GB',
    bandwidth: '1 TB',
    popular: false,
  },
  {
    name: 'INTEL STARTER VPS',
    subtitle: 'Intel Platinum VPS',
    price: 379,
    ram: '4 GB',
    cpu: '3 CPU',
    storage: '40 GB',
    bandwidth: '1 TB',
    popular: true,
  },
  {
    name: 'INTEL GAMER VPS',
    subtitle: 'Intel Platinum VPS',
    price: 489,
    ram: '6 GB',
    cpu: '4 CPU',
    storage: '60 GB',
    bandwidth: '2 TB',
    popular: true,
  },
  {
    name: 'INTEL PERF. VPS',
    subtitle: 'Intel Platinum VPS',
    price: 599,
    ram: '8 GB',
    cpu: '5 CPU',
    storage: '80 GB',
    bandwidth: '2 TB',
    popular: true,
  },
  {
    name: 'INTEL PRO VPS',
    subtitle: 'Intel Platinum VPS',
    price: 799,
    ram: '16 GB',
    cpu: '7 CPU',
    storage: '100 GB',
    bandwidth: '3 TB',
    popular: false,
  },
  {
    name: 'INTEL ADVANCED VPS',
    subtitle: 'Intel Platinum VPS',
    price: 1399,
    ram: '32 GB',
    cpu: '9 CPU',
    storage: '200 GB',
    bandwidth: '3 TB',
    popular: false,
  },
  {
    name: 'INTEL EXTREME VPS',
    subtitle: 'Intel Platinum VPS',
    price: 1699,
    ram: '42 GB',
    cpu: '14 CPU',
    storage: '300 GB',
    bandwidth: '5 TB',
    popular: false,
  },
  {
    name: 'INTEL ULTRA VPS',
    subtitle: 'Intel Platinum VPS',
    price: 2599,
    ram: '64 GB',
    cpu: '18 CPU',
    storage: '400 GB',
    bandwidth: '5 TB',
    popular: false,
  },
];

const features = [
  { icon: Cpu, title: 'INTEL PLATINUM 8160', desc: 'High performance @ 2.10 GHz' },
  { icon: Server, title: 'DDR4 ECC MEMORY', desc: 'Error-correcting code RAM' },
  { icon: HardDrive, title: 'NVME SSD', desc: 'High-speed storage drives' },
  { icon: Shield, title: 'DDOS PROTECTION', desc: 'Layer 7+ Attack Mitigation' },
  { icon: Zap, title: 'HIGH SPEED NETWORK', desc: '1Gbps Uplink with Low Latency' },
  { icon: Server, title: 'DAILY BACKUPS', desc: 'Automated Backup System' },
];

const IntelPlatinumVPS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
                  <Cpu className="w-4 h-4" />
                  Intel Platinum Series
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  INTEL PLATINUM
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  VPS HOSTING
                </h2>
                <p className="text-muted-foreground mb-6">
                  Enterprise-grade performance with Intel Platinum processors. DDR4 ECC memory, NVMe storage, and premium network infrastructure for demanding workloads.
                </p>
                <div className="flex gap-3">
                  <Button className="btn-primary-gradient">
                    <Server className="w-4 h-4 mr-2" />
                    View Plans
                  </Button>
                  <Button variant="outline">
                    <Cpu className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="bg-card/50 border-border p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">INTEL PLATINUM 8160</h3>
                      <p className="text-sm text-muted-foreground">High Performance • @ 2.10 GHz</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Server className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-muted-foreground">DDR4 RAM</p>
                      <p className="font-semibold text-foreground">High Speed</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <HardDrive className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-muted-foreground">Storage</p>
                      <p className="font-semibold text-foreground">NVMe SSD</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Zap className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-muted-foreground">Network</p>
                      <p className="font-semibold text-foreground">1Gbps Uplink</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Shield className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-muted-foreground">Protection</p>
                      <p className="font-semibold text-foreground">DDoS Protected</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 border-y border-border bg-secondary/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
              CHOOSE YOUR INTEL PLAN
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-10">
              Select the perfect Intel VPS for your needs. All plans include premium hardware and 24/7 support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border p-6 relative animate-fade-in hover:border-primary/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  
                  <h3 className="text-lg font-bold text-primary text-center">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{plan.subtitle}</p>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-foreground">₹{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                    <p className="text-xs text-muted-foreground">No setup fee</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Server className="w-3 h-3" /> RAM
                      </p>
                      <p className="font-semibold text-foreground">{plan.ram}</p>
                      <p className="text-xs text-muted-foreground">DDR4</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> CPU
                      </p>
                      <p className="font-semibold text-foreground">{plan.cpu}</p>
                      <p className="text-xs text-muted-foreground">Cores</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <HardDrive className="w-3 h-3" /> Storage
                      </p>
                      <p className="font-semibold text-foreground">{plan.storage}</p>
                      <p className="text-xs text-muted-foreground">SSD</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Network className="w-3 h-3" /> Bandwidth
                      </p>
                      <p className="font-semibold text-foreground">{plan.bandwidth}</p>
                      <p className="text-xs text-muted-foreground">10Gbps Network</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">1 IPv4 Address</span>
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">1 IPv6 Address</span>
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">DDoS</span>
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">Layer 7</span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Processor</span>
                      <span className="ml-auto text-foreground">Intel Platinum 8160</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Network</span>
                      <span className="ml-auto text-foreground">1Gbps Unmetered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Location</span>
                      <span className="ml-auto text-foreground">Delhi, IN</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> Root Access</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> 24/7 Support</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> Instant Setup</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> DDoS Protected</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> 99.9% Uptime</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> Control Panel</div>
                  </div>

                  <Button className="w-full btn-primary-gradient">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </Card>
              ))}
            </div>

            <p className="text-center text-muted-foreground text-sm mt-8">
              ⓘ All prices exclude taxes. No setup fee. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
              WHY CHOOSE INTEL VPS?
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-10">
              Unmatched performance for business applications, development, and production workloads
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                READY TO EXPERIENCE INTEL PERFORMANCE?
              </h2>
              <p className="text-muted-foreground mb-6">
                Deploy your Intel Platinum VPS in under 60 seconds. No long-term contracts required.
              </p>
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started Now
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IntelPlatinumVPS;
