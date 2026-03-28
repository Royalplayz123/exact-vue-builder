import { Cloud, Shield, Zap, Globe, HardDrive, RefreshCw, Lock, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plans = [
  {
    name: 'Starter',
    storage: '50 GB',
    price: '₹99',
    period: '/mo',
    features: [
      '50 GB Cloud Storage',
      '5 GB File Upload Limit',
      'SSL Encrypted Transfers',
      'Web File Manager',
      '99.9% Uptime SLA',
      'Email Support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    storage: '250 GB',
    price: '₹249',
    period: '/mo',
    features: [
      '250 GB Cloud Storage',
      '25 GB File Upload Limit',
      'SSL Encrypted Transfers',
      'Web & API Access',
      'File Versioning',
      'Team Sharing (5 Users)',
      '99.95% Uptime SLA',
      'Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Business',
    storage: '1 TB',
    price: '₹499',
    period: '/mo',
    features: [
      '1 TB Cloud Storage',
      '50 GB File Upload Limit',
      'SSL Encrypted Transfers',
      'Web, API & FTP Access',
      'File Versioning & Recovery',
      'Team Sharing (25 Users)',
      'Custom Branding',
      '99.99% Uptime SLA',
      '24/7 Priority Support',
    ],
    popular: false,
  },
  {
    name: 'Enterprise',
    storage: '5 TB',
    price: '₹999',
    period: '/mo',
    features: [
      '5 TB Cloud Storage',
      'Unlimited File Upload',
      'End-to-End Encryption',
      'Web, API, FTP & S3 Access',
      'Advanced Versioning & Audit Logs',
      'Unlimited Team Members',
      'Custom Branding & Domain',
      'Dedicated Account Manager',
      '99.99% Uptime SLA',
      '24/7 Premium Support',
    ],
    popular: false,
  },
];

const features = [
  { icon: Shield, title: 'Enterprise Security', desc: 'AES-256 encryption at rest and SSL/TLS in transit for all your files.' },
  { icon: Zap, title: 'Blazing Fast CDN', desc: 'Global CDN ensures fast downloads from anywhere in the world.' },
  { icon: RefreshCw, title: 'Auto Backups', desc: 'Automated daily backups with point-in-time recovery options.' },
  { icon: Globe, title: 'Global Access', desc: 'Access your files from any device, anywhere with our web portal & apps.' },
  { icon: Lock, title: 'File Versioning', desc: 'Keep track of every change with automatic file version history.' },
  { icon: Users, title: 'Team Collaboration', desc: 'Share folders, set permissions, and collaborate with your team seamlessly.' },
];

const CloudStoragePlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Cloud Storage Hosting</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Secure <span className="text-primary">Cloud Storage</span> Hosting
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Store, share, and access your files from anywhere with CodeNest Solution' blazing-fast and encrypted cloud storage solutions. Built for individuals and teams alike.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] animate-fade-in ${
                  plan.popular
                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-border bg-card'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <HardDrive className={`w-8 h-8 mx-auto mb-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.storage} Storage</p>
                  <div className="mt-3">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                    plan.popular
                      ? 'btn-primary-gradient text-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Why Choose <span className="text-primary">CodeNest Solution</span> Cloud Storage?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudStoragePlans;
