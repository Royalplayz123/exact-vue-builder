import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Clock, Zap, Shield, Globe, Lock, Terminal, Settings, Sparkles, Link2 } from 'lucide-react';
import webHostingBanner from '@/assets/web-hosting-banner.jpg';

type HostingType = 'cpanel' | 'simple';

const cpanelPlans = [
  {
    name: 'STARTER PLAN',
    icon: '🛡️',
    iconBg: 'bg-cyan-500/20',
    websites: '1 Website',
    price: 99,
    perfectFor: 'Portfolios, blogs and small landing pages',
    features: [
      '1 TB DDOs Migration',
      '1 GB NVMe SSD Storage',
      '2 GB RAM',
      '70 GB Bandwidth',
      'Free SSL Certificate',
      'Free Weekly Backups',
      'Unlimited Emails, Subdomains & Databases',
      'Free Migration'
    ],
    buttonGradient: 'btn-primary-gradient'
  },
  {
    name: 'PRO PLAN',
    icon: '✏️',
    iconBg: 'bg-blue-500/20',
    websites: '3 Websites',
    price: 199,
    popular: true,
    perfectFor: 'Growing businesses and Hosting Business',
    features: [
      '5 TB DDOs Migrations',
      '4 GB NVMe SSD Storage',
      '4 GB RAM',
      '200 GB Bandwidth',
      'Free SSL Certificate',
      'Free Daily Backups',
      'Unlimited Emails, Subdomains & Databases',
      'Free Migration & WHMCS'
    ],
    buttonGradient: 'bg-gradient-to-r from-blue-600 to-blue-500'
  },
  {
    name: 'ELITE PLAN',
    icon: '👑',
    iconBg: 'bg-orange-500/20',
    websites: '5 Websites',
    price: 299,
    perfectFor: 'Agencies, developers and high-demand users',
    features: [
      '10 TB DDOs Migrations',
      '6 GB NVMe SSD Storage',
      '7 GB RAM',
      '500 GB Bandwidth',
      'Free SSL Certificate',
      'Free Daily Backups',
      'Unlimited Emails, Subdomains & Databases',
      'Free WHMCS and Migrations'
    ],
    buttonGradient: 'bg-gradient-to-r from-orange-600 to-orange-500'
  }
];

const simplePlans = [
  {
    name: 'BASIC HOSTING',
    icon: '🔗',
    iconBg: 'bg-cyan-500/20',
    websites: '1 Website',
    badge: 'Beginner Friendly',
    badgeColor: 'bg-secondary text-foreground',
    price: 59,
    idealFor: 'Beginners and personal websites',
    features: [
      '10 TB DDOs Migrations',
      '2 GB SSD Storage',
      '2 GB RAM',
      '1 Database',
      'High Frequency CPUs'
    ],
    buttonGradient: 'btn-primary-gradient'
  },
  {
    name: 'BUSINESS HOSTING',
    icon: '🔒',
    iconBg: 'bg-emerald-500/20',
    websites: '5 Websites',
    badge: 'Most Popular',
    badgeColor: 'bg-emerald-500 text-white',
    popular: true,
    price: 99,
    idealFor: 'Small businesses and online stores',
    features: [
      '10 TB DDOs Migrations',
      '4 GB SSD Storage',
      '4 GB RAM',
      '1 Database',
      'High Frequency CPUs'
    ],
    buttonGradient: 'bg-gradient-to-r from-emerald-600 to-emerald-500'
  },
  {
    name: 'PREMIUM HOSTING',
    icon: '🏆',
    iconBg: 'bg-orange-500/20',
    websites: '10 Websites',
    badge: 'Best Value',
    badgeColor: 'bg-orange-500 text-white',
    price: 149,
    idealFor: 'Growing businesses and professionals',
    features: [
      '10 TB DDOs Migrations',
      '6 GB SSD Storage',
      '6 GB RAM',
      '1 Database',
      'High Frequency CPUs'
    ],
    buttonGradient: 'bg-gradient-to-r from-orange-600 to-orange-500'
  }
];

const cpanelFeatures = [
  {
    icon: Settings,
    title: 'Full Control',
    description: 'Complete access to server settings and configurations'
  },
  {
    icon: Terminal,
    title: 'Advanced Features',
    description: 'WHM, Softaculous, and professional tools'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed and reliability'
  }
];

const simpleFeatures = [
  {
    icon: Sparkles,
    title: 'Easy to Use',
    description: 'No technical knowledge required'
  },
  {
    icon: Lock,
    title: 'Fully Managed',
    description: 'We handle all technical aspects'
  },
  {
    icon: Globe,
    title: 'Quick Setup',
    description: 'Get online in minutes'
  }
];

const comparisonData = [
  { feature: 'Control Panel', cpanel: 'Full cPanel Access', simple: 'Simplified Dashboard' },
  { feature: 'Technical Knowledge', cpanel: 'Technical Required', simple: 'No Experience Needed' },
  { feature: 'Setup Time', cpanel: '5-10 minutes', simple: '2-5 minutes' },
  { feature: 'Maintenance', cpanel: 'Self-managed', simple: 'Fully Managed' },
  { feature: 'Best For', cpanel: 'Developers & Agencies', simple: 'Beginners & Small Biz' },
  { feature: 'Support', cpanel: 'Expert Support', simple: '24/7 Basic Support' }
];

const WebHosting = () => {
  const [activeTab, setActiveTab] = useState<HostingType>('cpanel');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <img 
            src={webHostingBanner} 
            alt="Web Hosting"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        
        {/* Tab Buttons - Fixed at Top */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex rounded-lg bg-secondary/80 backdrop-blur-sm p-1">
          <button
            onClick={() => setActiveTab('cpanel')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'cpanel' 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Terminal className="w-4 h-4" />
            cPanel Hosting
          </button>
          <button
            onClick={() => setActiveTab('simple')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'simple' 
                ? 'bg-purple-500 text-white' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Link2 className="w-4 h-4" />
            Simple Hosting
          </button>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
            <div className="flex-1">
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
                {['CPANEL INCLUDED', 'NVME SSD', 'FREE SSL', '24/7 SUPPORT', 'SIMPLE OPTIONS', 'MANAGED HOSTING'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-background/60 backdrop-blur-sm rounded-full text-xs text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <span className="text-purple-400">WEB HOSTING</span>
                <br />
                <span className="text-foreground">FOR EVERY NEED</span>
              </h1>
              
              {/* Description */}
              <p className="text-muted-foreground max-w-md mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Choose between powerful cPanel hosting for professionals or simple managed hosting for beginners. All with 99.9% uptime guarantee, free SSL, and 24/7 support.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex gap-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <button 
                  onClick={() => setActiveTab('cpanel')}
                  className="btn-primary-gradient px-5 py-2.5 rounded-lg font-medium text-foreground flex items-center gap-2 text-sm"
                >
                  <Terminal className="w-4 h-4" />
                  cPanel Hosting
                </button>
                <button 
                  onClick={() => setActiveTab('simple')}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2.5 rounded-lg font-medium text-white flex items-center gap-2 text-sm"
                >
                  <Link2 className="w-4 h-4" />
                  Simple Hosting
                </button>
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
                  <Zap className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold text-foreground">&lt;100ms</div>
                  <div className="text-xs text-muted-foreground">Speed</div>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold text-foreground">Free</div>
                  <div className="text-xs text-muted-foreground">SSL</div>
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

      {/* cPanel Hosting Section */}
      {activeTab === 'cpanel' && (
        <>
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary mb-4 animate-fade-in">
                <Terminal className="w-3 h-3 inline mr-1" />
                Professional Hosting
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <span className="text-cyan-400">CPANEL WEB HOSTING</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Full control with cPanel. Perfect for developers, agencies, and growing businesses who need advanced features.
              </p>
              
              {/* cPanel Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cpanelPlans.map((plan, index) => (
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
                    
                    <h3 className="text-lg font-bold text-cyan-400 mb-1">{plan.name}</h3>
                    <div className="text-xs text-muted-foreground flex items-center justify-center gap-1 mb-4">
                      <Check className="w-3 h-3" />
                      {plan.websites}
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
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
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

          {/* Why Choose cPanel */}
          <section className="py-16 px-4 bg-secondary/10">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 animate-fade-in">
                <span className="text-foreground">WHY CHOOSE</span>{' '}
                <span className="text-cyan-400">CPANEL HOSTING</span>
                <span className="text-foreground">?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cpanelFeatures.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="p-6 rounded-xl bg-secondary/30 border border-border text-left animate-fade-in hover:border-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Simple Hosting Section */}
      {activeTab === 'simple' && (
        <>
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-purple-500/20 rounded-full text-xs font-medium text-purple-400 mb-4 animate-fade-in">
                <Link2 className="w-3 h-3 inline mr-1" />
                Beginner Friendly
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <span className="text-emerald-400">SIMPLE WEB HOSTING</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Managed hosting made easy. Perfect for beginners, small businesses, and anyone who wants hassle-free hosting.
              </p>
              
              {/* Simple Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {simplePlans.map((plan, index) => (
                  <div 
                    key={plan.name}
                    className={`relative p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in ${plan.popular ? 'ring-2 ring-emerald-500/50' : ''}`}
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 ${plan.badgeColor} rounded-full text-xs font-semibold`}>
                      {plan.badge}
                    </div>
                    
                    <div className={`w-12 h-12 mx-auto ${plan.iconBg} rounded-xl flex items-center justify-center text-2xl mb-3 mt-2`}>
                      {plan.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                    <div className="text-xs text-cyan-400 flex items-center justify-center gap-1 mb-4">
                      <Globe className="w-3 h-3" />
                      {plan.websites}
                    </div>
                    
                    <div className="bg-background/50 rounded-lg p-4 mb-4">
                      <div className="text-3xl font-bold text-foreground">₹{plan.price}</div>
                      <div className="text-xs text-muted-foreground">per month</div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground mb-4">
                      <span className="text-foreground font-medium">IDEAL FOR</span>
                      <br />{plan.idealFor}
                    </div>
                    
                    <ul className="space-y-2 text-left mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-2.5 rounded-lg font-medium text-white ${plan.buttonGradient} flex items-center justify-center gap-2`}>
                      <Link2 className="w-4 h-4" />
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Simple */}
          <section className="py-16 px-4 bg-secondary/10">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 animate-fade-in">
                <span className="text-foreground">WHY CHOOSE</span>{' '}
                <span className="text-emerald-400">SIMPLE HOSTING</span>
                <span className="text-foreground">?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {simpleFeatures.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="p-6 rounded-xl bg-secondary/30 border border-border text-left animate-fade-in hover:border-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <feature.icon className="w-10 h-10 text-emerald-400 mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Comparison Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            <span className="text-foreground">WHICH ONE IS RIGHT FOR YOU?</span>
          </h2>
          <p className="text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Compare our hosting solutions
          </p>
          
          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto rounded-xl border border-border overflow-hidden animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="grid grid-cols-3 bg-secondary/50">
              <div className="p-4 font-semibold text-foreground text-left">FEATURES</div>
              <div className="p-4 font-semibold text-foreground flex items-center justify-center gap-2">
                <Terminal className="w-4 h-4" />
                CPANEL HOSTING
              </div>
              <div className="p-4 font-semibold text-foreground flex items-center justify-center gap-2">
                <Link2 className="w-4 h-4" />
                SIMPLE HOSTING
              </div>
            </div>
            
            {comparisonData.map((row, index) => (
              <div key={row.feature} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-secondary/20' : ''}`}>
                <div className="p-4 text-sm text-muted-foreground text-left">{row.feature}</div>
                <div className="p-4 text-sm text-foreground flex items-center justify-center gap-1">
                  {row.feature === 'Control Panel' && <Check className="w-4 h-4 text-emerald-400" />}
                  {row.cpanel}
                </div>
                <div className="p-4 text-sm text-foreground flex items-center justify-center gap-1">
                  {row.feature === 'Control Panel' && <Check className="w-4 h-4 text-emerald-400" />}
                  {row.simple}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-secondary/50 to-secondary/30 border border-border animate-fade-in">
            <Sparkles className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              READY TO GET STARTED?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust Drip Nodes for their hosting needs.
            </p>
            <div className="flex gap-3 justify-center">
              <button 
                onClick={() => setActiveTab('cpanel')}
                className="btn-primary-gradient px-6 py-3 rounded-lg font-medium text-foreground flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                View cPanel Plans
              </button>
              <button 
                onClick={() => setActiveTab('simple')}
                className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2"
              >
                <Link2 className="w-4 h-4" />
                View Simple Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebHosting;
