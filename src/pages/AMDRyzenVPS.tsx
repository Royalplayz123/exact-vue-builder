import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cpu, HardDrive, Network, Shield, Zap, Server, Clock, Download, Upload, MapPin, Check, Sparkles } from 'lucide-react';

const stats = [
  { icon: Clock, value: '99.8%', label: 'Uptime' },
  { icon: Zap, value: '<10ms', label: 'Average Ping' },
  { icon: Download, value: '1.0Gbps', label: 'Download Speed' },
  { icon: Upload, value: '1.1Gbps', label: 'Upload Speed' },
  { icon: Shield, value: 'Layer 7+', label: 'DDoS Protection' },
  { icon: Cpu, value: '5.3GHz', label: 'CPU Speed' },
];

const plans = [
  {
    name: 'WAMMU STARTER',
    subtitle: 'AMD Ryzen VPS',
    price: 489,
    ram: '4 GB',
    cpu: '2 Core',
    storage: '40 GB',
    bandwidth: '1 TB',
    popular: false,
  },
  {
    name: 'WAMMU GROW',
    subtitle: 'AMD Ryzen VPS',
    price: 899,
    ram: '8 GB',
    cpu: '3 Cores',
    storage: '60 GB',
    bandwidth: '2 TB',
    popular: true,
  },
  {
    name: 'WAMMU POWER',
    subtitle: 'AMD Ryzen VPS',
    price: 1699,
    ram: '16 GB',
    cpu: '4 Cores',
    storage: '120 GB',
    bandwidth: '3 TB',
    popular: false,
  },
  {
    name: 'WAMMU PRO',
    subtitle: 'AMD Ryzen VPS',
    price: 1999,
    ram: '24 GB',
    cpu: '6 Cores',
    storage: '180 GB',
    bandwidth: '4 TB',
    popular: true,
  },
  {
    name: 'WAMMU EXTREME',
    subtitle: 'AMD Ryzen VPS',
    price: 2999,
    ram: '32 GB',
    cpu: '8 Cores',
    storage: '240 GB',
    bandwidth: '5 TB',
    popular: false,
  },
  {
    name: 'WAMMU ULTIMATE',
    subtitle: 'AMD Ryzen VPS',
    price: 5999,
    ram: '64 GB',
    cpu: '8 Cores',
    storage: '300 GB',
    bandwidth: '6 TB',
    popular: false,
  },
];

const features = [
  { icon: Cpu, title: 'AMD RYZEN 9 9950X', desc: 'High performance cores @ 5.3 GHz' },
  { icon: Server, title: 'DDR5 MEMORY', desc: 'Up to 64GB high-speed RAM' },
  { icon: HardDrive, title: 'NVME SSD', desc: 'RAID1 Storage for Data Safety' },
  { icon: Shield, title: 'DDOS PROTECTION', desc: 'Layer 7+ Attack Mitigation' },
  { icon: Zap, title: 'HIGH SPEED NETWORK', desc: '1Gbps Uplink with Low Latency' },
  { icon: Server, title: 'DAILY BACKUPS', desc: 'Automated Backup System' },
];

const AMDRyzenVPS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm mb-4">
                  <Cpu className="w-4 h-4" />
                  AMD Ryzen Series
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  AMD RYZEN
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
                  VPS HOSTING
                </h2>
                <p className="text-muted-foreground mb-6">
                  Enterprise-grade performance with AMD Ryzen processors. DDR5 memory, NVMe storage, and premium network infrastructure for demanding workloads.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
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
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">AMD RYZEN 9 9950X</h3>
                      <p className="text-sm text-muted-foreground">High Performance • @ 5.3 GHz</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Server className="w-5 h-5 text-orange-400 mb-2" />
                      <p className="text-xs text-muted-foreground">DDR5 RAM</p>
                      <p className="font-semibold text-foreground">High Speed</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <HardDrive className="w-5 h-5 text-orange-400 mb-2" />
                      <p className="text-xs text-muted-foreground">Storage</p>
                      <p className="font-semibold text-foreground">NVMe SSD</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Zap className="w-5 h-5 text-orange-400 mb-2" />
                      <p className="text-xs text-muted-foreground">Network</p>
                      <p className="font-semibold text-foreground">1Gbps Uplink</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <Shield className="w-5 h-5 text-orange-400 mb-2" />
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
                  <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
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
              CHOOSE YOUR AMD PLAN
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-10">
              Select the perfect AMD Ryzen VPS for your needs. All plans include premium hardware and 24/7 support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border p-6 relative animate-fade-in hover:border-orange-500/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  
                  <h3 className="text-lg font-bold text-orange-400 text-center">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{plan.subtitle}</p>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-foreground">₹{plan.price.toLocaleString()}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Server className="w-3 h-3" /> RAM
                      </p>
                      <p className="font-semibold text-foreground">{plan.ram}</p>
                      <p className="text-xs text-muted-foreground">DDR5</p>
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
                      <p className="text-xs text-muted-foreground">NVMe SSD</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Network className="w-3 h-3" /> Bandwidth
                      </p>
                      <p className="font-semibold text-foreground">{plan.bandwidth}</p>
                      <p className="text-xs text-muted-foreground">10Gbps Network</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">1 IPv4 Address</span>
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">1 IPv6 Address</span>
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">DDoS</span>
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">Layer 7</span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-orange-400" />
                      <span className="text-muted-foreground">Processor</span>
                      <span className="ml-auto text-foreground">AMD Ryzen 9 9950X</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-orange-400" />
                      <span className="text-muted-foreground">Network</span>
                      <span className="ml-auto text-foreground">1Gbps Uplink</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span className="text-muted-foreground">Location</span>
                      <span className="ml-auto text-foreground">Mumbai/Delhi</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-orange-400" /> Root Access</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-orange-400" /> 24/7 Support</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-orange-400" /> Instant Setup</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-orange-400" /> DDoS Protected</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-orange-400" /> 99.9% Uptime</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-orange-400" /> Control Panel</div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
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
              WHY CHOOSE AMD VPS?
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-10">
              Unmatched performance for gaming, development, and production workloads
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-400" />
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
            <Card className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border-orange-500/30 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                READY TO EXPERIENCE AMD PERFORMANCE?
              </h2>
              <p className="text-muted-foreground mb-6">
                Deploy your AMD Ryzen VPS in under 60 seconds. No long-term contracts required.
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

export default AMDRyzenVPS;
