import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Mail, Shield, Zap, Clock, Globe, Lock, Users, Sparkles, Server } from 'lucide-react';

const emailPlans = [
  {
    name: 'STARTER',
    icon: '📧',
    iconBg: 'bg-cyan-500/20',
    mailboxes: '5 Mailboxes',
    price: 79,
    perfectFor: 'Freelancers and small teams',
    features: [
      '5 GB Storage per Mailbox',
      'Custom Domain Email',
      'Webmail Access',
      'Spam & Virus Protection',
      'IMAP / POP3 / SMTP',
      'Email Forwarding',
      'Auto Responders',
      '99.9% Uptime'
    ],
    buttonGradient: 'btn-primary-gradient'
  },
  {
    name: 'BUSINESS',
    icon: '💼',
    iconBg: 'bg-blue-500/20',
    mailboxes: '25 Mailboxes',
    price: 199,
    popular: true,
    perfectFor: 'Growing businesses and teams',
    features: [
      '15 GB Storage per Mailbox',
      'Custom Domain Email',
      'Webmail + Mobile Sync',
      'Advanced Spam Filtering',
      'IMAP / POP3 / SMTP',
      'Email Forwarding & Aliases',
      'Shared Contacts & Calendars',
      'Priority Support'
    ],
    buttonGradient: 'bg-gradient-to-r from-blue-600 to-blue-500'
  },
  {
    name: 'ENTERPRISE',
    icon: '🏢',
    iconBg: 'bg-orange-500/20',
    mailboxes: 'Unlimited Mailboxes',
    price: 399,
    perfectFor: 'Large teams and organizations',
    features: [
      '50 GB Storage per Mailbox',
      'Custom Domain Email',
      'Webmail + Mobile + Desktop',
      'AI-Powered Spam Protection',
      'IMAP / POP3 / SMTP',
      'Catch-All & Distribution Lists',
      'Shared Calendars & Contacts',
      'Dedicated Support Manager'
    ],
    buttonGradient: 'bg-gradient-to-r from-orange-600 to-orange-500'
  }
];

const emailFeatures = [
  {
    icon: Shield,
    title: 'Anti-Spam & Anti-Virus',
    description: 'Enterprise-grade spam filtering and malware protection for all inbound and outbound emails.'
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'TLS encryption ensures your emails are secure in transit and at rest.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'Optimized mail servers ensure instant email delivery worldwide.'
  },
  {
    icon: Globe,
    title: 'Webmail Access',
    description: 'Access your emails from anywhere with our modern webmail interface.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Shared calendars, contacts, and distribution lists for seamless teamwork.'
  },
  {
    icon: Server,
    title: '99.9% Uptime',
    description: 'Redundant infrastructure ensures your email is always available.'
  }
];

const EmailHosting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
                {['CUSTOM DOMAIN', 'SPAM PROTECTION', 'WEBMAIL', 'MOBILE SYNC', 'ENCRYPTED', '24/7 SUPPORT'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background/60 backdrop-blur-sm rounded-full text-xs text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <span className="text-primary">PROFESSIONAL</span>
                <br />
                <span className="text-foreground">EMAIL HOSTING</span>
              </h1>

              <p className="text-muted-foreground max-w-md mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Get custom domain email addresses for your business. Secure, reliable, and packed with features to keep your team connected.
              </p>

              <div className="flex gap-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <a
                  href="#plans"
                  className="btn-primary-gradient px-5 py-2.5 rounded-lg font-medium text-foreground flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  View Plans
                </a>
                <a
                  href="https://discord.gg/R8U3wKxwkd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-gradient px-5 py-2.5 rounded-lg font-medium text-foreground flex items-center gap-2 text-sm"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="p-6 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground">Encrypted</div>
                </div>
                <div className="text-center">
                  <Mail className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold text-foreground">50GB</div>
                  <div className="text-xs text-muted-foreground">Storage</div>
                </div>
                <div className="text-center">
                  <Globe className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary mb-4 animate-fade-in">
            <Mail className="w-3 h-3 inline mr-1" />
            Email Plans
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="text-primary">CHOOSE YOUR</span>{' '}
            <span className="text-foreground">EMAIL PLAN</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Professional email hosting with custom domain support. All plans include spam protection, webmail access, and mobile sync.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emailPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in ${plan.popular ? 'ring-2 ring-blue-500/50' : ''}`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 rounded-full text-xs font-semibold text-white">
                    ✨ POPULAR
                  </div>
                )}

                <div className={`w-12 h-12 mx-auto ${plan.iconBg} rounded-xl flex items-center justify-center text-2xl mb-3`}>
                  {plan.icon}
                </div>

                <h3 className="text-lg font-bold text-primary mb-1">{plan.name}</h3>
                <div className="text-xs text-muted-foreground flex items-center justify-center gap-1 mb-4">
                  <Mail className="w-3 h-3" />
                  {plan.mailboxes}
                </div>

                <div className="bg-background/50 rounded-lg p-4 mb-4">
                  <div className="text-3xl font-bold text-foreground">₹{plan.price} <span className="text-sm font-normal text-muted-foreground">/month</span></div>
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  <span className="text-foreground font-medium">PERFECT FOR</span>
                  <br />{plan.perfectFor}
                </div>

                <ul className="space-y-2 text-left mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-2.5 rounded-lg font-medium text-white ${plan.buttonGradient} flex items-center justify-center gap-2`}>
                  <Sparkles className="w-4 h-4" />
                  Get Started Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 animate-fade-in">
            <span className="text-foreground">WHY CHOOSE OUR</span>{' '}
            <span className="text-primary">EMAIL HOSTING</span>
            <span className="text-foreground">?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emailFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-secondary/30 border border-border text-left animate-fade-in hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-border animate-fade-in">
            <Mail className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Get Professional Email?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Set up your custom domain email in minutes. Need help choosing a plan? Our team is here to assist you.
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href="https://discord.gg/R8U3wKxwkd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gradient px-6 py-3 rounded-lg font-medium text-foreground"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="btn-secondary-gradient px-6 py-3 rounded-lg font-medium text-foreground"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailHosting;
