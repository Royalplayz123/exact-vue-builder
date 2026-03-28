import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Monitor, Cpu, HardDrive, Gauge, Shield, Zap, Clock, Globe } from 'lucide-react';

const rdpPlans = [
  {
    name: 'Starter',
    price: '₹499',
    period: '/mo',
    cores: '2 vCPU Cores',
    ram: '4 GB DDR4 RAM',
    storage: '50 GB NVMe SSD',
    bandwidth: '1 TB Bandwidth',
    os: 'Windows Server 2022',
    popular: false,
  },
  {
    name: 'Basic',
    price: '₹799',
    period: '/mo',
    cores: '4 vCPU Cores',
    ram: '8 GB DDR4 RAM',
    storage: '100 GB NVMe SSD',
    bandwidth: '2 TB Bandwidth',
    os: 'Windows Server 2022',
    popular: false,
  },
  {
    name: 'Standard',
    price: '₹1,299',
    period: '/mo',
    cores: '6 vCPU Cores',
    ram: '16 GB DDR4 RAM',
    storage: '150 GB NVMe SSD',
    bandwidth: '3 TB Bandwidth',
    os: 'Windows Server 2022',
    popular: true,
  },
  {
    name: 'Professional',
    price: '₹1,999',
    period: '/mo',
    cores: '8 vCPU Cores',
    ram: '32 GB DDR4 RAM',
    storage: '200 GB NVMe SSD',
    bandwidth: '5 TB Bandwidth',
    os: 'Windows Server 2022',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: '₹2,999',
    period: '/mo',
    cores: '12 vCPU Cores',
    ram: '48 GB DDR4 RAM',
    storage: '300 GB NVMe SSD',
    bandwidth: 'Unlimited',
    os: 'Windows Server 2022',
    popular: false,
  },
  {
    name: 'Ultimate',
    price: '₹4,999',
    period: '/mo',
    cores: '16 vCPU Cores',
    ram: '64 GB DDR4 RAM',
    storage: '500 GB NVMe SSD',
    bandwidth: 'Unlimited',
    os: 'Windows Server 2022',
    popular: false,
  },
];

const features = [
  { icon: Shield, title: 'DDoS Protection', desc: 'Enterprise-grade protection keeps your RDP secure' },
  { icon: Zap, title: 'Instant Activation', desc: 'Your RDP is ready in under 60 seconds' },
  { icon: Clock, title: '24/7 Support', desc: 'Expert support team available around the clock' },
  { icon: Globe, title: 'Global Locations', desc: 'Multiple datacenter locations worldwide' },
];

const RDPPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 text-center">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Monitor className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-foreground">RDP</span>{' '}
              <span className="gradient-text-purple">HOSTING</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              High-performance Windows Remote Desktop servers with dedicated resources, 
              perfect for running applications, trading software, and remote work.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Gauge, value: '99.9%', label: 'Uptime' },
                { icon: Globe, value: '20+', label: 'Locations' },
                { icon: Zap, value: '<60s', label: 'Setup' },
                { icon: Shield, value: 'Always On', label: 'DDoS Protection' },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="flex flex-col items-center p-4 rounded-xl bg-secondary/30 border border-border min-w-[120px] animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <span className="text-lg font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-foreground">Choose Your</span>{' '}
              <span className="gradient-text-purple">RDP Plan</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rdpPlans.map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`relative p-6 rounded-2xl border ${plan.popular ? 'border-primary bg-primary/5' : 'border-border bg-secondary/20'} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{plan.cores}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                      <Monitor className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{plan.ram}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                      <HardDrive className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{plan.storage}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{plan.bandwidth}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{plan.os}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-medium transition-all ${plan.popular ? 'btn-primary-gradient text-foreground' : 'bg-secondary hover:bg-secondary/80 text-foreground'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">
              <span className="text-foreground">Why Choose</span>{' '}
              <span className="gradient-text-purple">CodeNest Solution RDP?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-xl bg-secondary/20 border border-border text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RDPPlans;
