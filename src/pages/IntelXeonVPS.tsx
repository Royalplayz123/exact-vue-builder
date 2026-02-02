import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cpu, HardDrive, Network, Shield, Zap, Server, Clock, Download, Upload, MapPin, Check, Sparkles } from 'lucide-react';

const stats = [
  { icon: Clock, value: '99.9%', label: 'Uptime' },
  { icon: Zap, value: '<9ms', label: 'Average Ping' },
  { icon: Download, value: '1.0Gbps', label: 'Download Speed' },
  { icon: Upload, value: '1.0Gbps', label: 'Upload Speed' },
  { icon: Shield, value: 'Layer 7+', label: 'DDoS Protection' },
  { icon: Cpu, value: '3.00GHz', label: 'CPU Speed' },
];

const plans = [
  {
    name: 'XEON NANO VPS',
    subtitle: 'Intel Xeon VPS',
    price: 299,
    ram: '2 GB',
    cpu: '2 CPU',
    storage: '40 GB',
    bandwidth: '1 TB',
    popular: false,
  },
  {
    name: 'XEON STARTER VPS',
    subtitle: 'Intel Xeon VPS',
    price: 449,
    ram: '4 GB',
    cpu: '3 CPU',
    storage: '50 GB',
    bandwidth: '1 TB',
    popular: true,
  },
  {
    name: 'XEON GAMER VPS',
    subtitle: 'Intel Xeon VPS',
    price: 599,
    ram: '6 GB',
    cpu: '4 CPU',
    storage: '80 GB',
    bandwidth: '2 TB',
    popular: true,
  },
  {
    name: 'XEON PERF. VPS',
    subtitle: 'Intel Xeon VPS',
    price: 749,
    ram: '8 GB',
    cpu: '5 CPU',
    storage: '100 GB',
    bandwidth: '2 TB',
    popular: true,
  },
  {
    name: 'XEON PRO VPS',
    subtitle: 'Intel Xeon VPS',
    price: 999,
    ram: '16 GB',
    cpu: '8 CPU',
    storage: '150 GB',
    bandwidth: '3 TB',
    popular: false,
  },
  {
    name: 'XEON ADVANCED VPS',
    subtitle: 'Intel Xeon VPS',
    price: 1599,
    ram: '32 GB',
    cpu: '10 CPU',
    storage: '250 GB',
    bandwidth: '4 TB',
    popular: false,
  },
  {
    name: 'XEON EXTREME VPS',
    subtitle: 'Intel Xeon VPS',
    price: 1999,
    ram: '48 GB',
    cpu: '16 CPU',
    storage: '350 GB',
    bandwidth: '5 TB',
    popular: false,
  },
  {
    name: 'XEON ULTRA VPS',
    subtitle: 'Intel Xeon VPS',
    price: 2999,
    ram: '64 GB',
    cpu: '20 CPU',
    storage: '500 GB',
    bandwidth: '6 TB',
    popular: false,
  },
];

const features = [
  { icon: Cpu, title: 'INTEL XEON E-2388G', desc: 'High performance @ 3.00 GHz' },
  { icon: Server, title: 'DDR4 ECC MEMORY', desc: 'Error-correcting code RAM' },
  { icon: HardDrive, title: 'NVME SSD', desc: 'High-speed storage drives' },
  { icon: Shield, title: 'DDOS PROTECTION', desc: 'Layer 7+ Attack Mitigation' },
  { icon: Zap, title: 'HIGH SPEED NETWORK', desc: '1Gbps Uplink with Low Latency' },
  { icon: Server, title: 'DAILY BACKUPS', desc: 'Automated Backup System' },
];

const IntelXeonVPS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm mb-4">
                  <Cpu className="w-4 h-4" />
                  Intel Xeon Series
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  INTEL XEON
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                  VPS HOSTING
                </h2>
                <p className="text-muted-foreground mb-6">
                  Enterprise-grade performance with Intel Xeon processors. DDR4 ECC memory, NVMe storage, and premium network infrastructure for demanding workloads.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
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
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">INTEL XEON E-2388G</h3>
                      <p className="text-sm text-muted-foreground">High Performance • @ 3.00 GHz</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Server className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-xs text-muted-foreground">DDR4 RAM</p>
                      <p className="font-semibold text-foreground">High Speed</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <HardDrive className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-xs text-muted-foreground">Storage</p>
                      <p className="font-semibold text-foreground">NVMe SSD</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Zap className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-xs text-muted-foreground">Network</p>
                      <p className="font-semibold text-foreground">1Gbps Uplink</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Shield className="w-5 h-5 text-cyan-400 mb-2" />
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
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
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
              CHOOSE YOUR XEON PLAN
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-10">
              Select the perfect Intel Xeon VPS for your needs. All plans include premium hardware and 24/7 support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border p-6 relative animate-fade-in hover:border-cyan-500/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  
                  <h3 className="text-lg font-bold text-cyan-400 text-center">{plan.name}</h3>
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
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="text-muted-foreground">Processor</span>
                      <span className="ml-auto text-foreground">Intel Xeon E-2388G</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-cyan-400" />
                      <span className="text-muted-foreground">Network</span>
                      <span className="ml-auto text-foreground">1Gbps Unmetered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-muted-foreground">Location</span>
                      <span className="ml-auto text-foreground">Delhi, IN</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-cyan-400" /> Root Access</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-cyan-400" /> 24/7 Support</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-cyan-400" /> Instant Setup</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-cyan-400" /> DDoS Protected</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-cyan-400" /> 99.9% Uptime</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-cyan-400" /> Control Panel</div>
                  </div>

                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
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
              WHY CHOOSE INTEL XEON VPS?
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
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
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
            <Card className="bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                READY TO EXPERIENCE XEON PERFORMANCE?
              </h2>
              <p className="text-muted-foreground mb-6">
                Deploy your Intel Xeon VPS in under 60 seconds. No long-term contracts required.
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

export default IntelXeonVPS;
