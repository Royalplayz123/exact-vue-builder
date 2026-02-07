import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Clock, Wifi, Download, Upload, Monitor, Globe, Shield, Folder, MapPin, Sparkles, Server, RefreshCw, Wrench, HardDrive, Zap } from 'lucide-react';

import hytaleBanner from '@/assets/hytale-banner.jpg';
import grassBlock from '@/assets/blocks/grass.png';
import stoneBlock from '@/assets/blocks/stone.png';
import diamondBlock from '@/assets/blocks/diamond.png';

const platforms = ['CROSS-PLAY', 'PC', 'XBOX', 'PLAYSTATION'];

const features = [
  'Instant Setup',
  '24/7 Support',
  'One-Click Mods',
  '99.9% Uptime',
  'Free Subdomain',
  'All Game Versions',
  'Automatic Backups',
  'Custom Domain',
  'SFTP Access',
  'Cross-Play Support',
];

const plans = [
  {
    name: 'GRASS PLAN',
    price: 199,
    ram: '8GB',
    cpu: '2 cores',
    storage: '20GB',
    ports: '1 Ports',
    backups: 1,
    locations: 'India, Mumbai/Delhi',
    ddos: '17 TB',
    image: grassBlock,
    popular: false,
  },
  {
    name: 'STONE PLAN',
    price: 399,
    ram: '12GB',
    cpu: '4 cores',
    storage: '60GB',
    ports: '1 Ports',
    backups: 1,
    locations: 'India, Mumbai/Delhi',
    ddos: '17 TB',
    image: stoneBlock,
    popular: true,
  },
  {
    name: 'DIAMOND PLAN',
    price: 899,
    ram: '24GB',
    cpu: '7 cores',
    storage: '75GB',
    ports: '1 Ports',
    backups: 1,
    locations: 'India, Mumbai/Delhi',
    ddos: '17 TB',
    image: diamondBlock,
    popular: false,
  },
];

const whyChooseFeatures = [
  'Easy to Use',
  'Instance Manager',
  'Game Swapping',
  'Modding Support',
  'Backups Manager',
  'Instant Setup',
  'DDoS Protection',
];

const HytalePlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hytaleBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Platform Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in">
            {platforms.map((platform) => (
              <span 
                key={platform}
                className="px-3 py-1 text-xs font-medium bg-muted/80 backdrop-blur-sm rounded-full text-muted-foreground border border-border/50"
              >
                {platform}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="text-primary">HYTALE</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            SERVER HOSTING
          </h2>
          
          {/* Features List */}
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
          
          {/* CTA Button */}
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

      {/* Real-Time Performance Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 animate-fade-in">
            REAL-TIME <span className="text-primary">PERFORMANCE</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-sm max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Monitor our network performance in real-time. We guarantee the best gaming experience for HYTALE.
          </p>
          
          {/* Stats Grid */}
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
            Scale your HYTALE adventure with our optimized server plans. From casual bases to massive empires.
          </p>
          
          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className="relative bg-card border border-border rounded-xl overflow-hidden animate-fade-in hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}
                
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 p-6 flex justify-center">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                
                {/* Plan Name */}
                <div className="text-center py-3">
                  <h3 className="text-lg font-bold text-green-400">{plan.name}</h3>
                </div>
                
                {/* Price */}
                <div className="mx-4 mb-4 bg-muted/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-foreground">₹{plan.price}</div>
                  <div className="text-xs text-muted-foreground">per month</div>
                </div>
                
                {/* Specs Grid */}
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
                
                {/* Additional Info */}
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
                
                {/* Features */}
                <div className="px-4 mb-4">
                  <div className="text-xs font-medium text-center text-foreground mb-3">Features:</div>
                  <div className="grid grid-cols-2 gap-1">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Order Button */}
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
          {/* Logo Section */}
          <div className="mb-12 max-w-3xl mx-auto animate-fade-in">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-600/30 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-6xl md:text-8xl font-bold text-purple-400/80">
                DN
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            WHY CHOOSE <span className="text-primary">DRIP NODES?</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '150ms' }}>
            Experience enterprise-grade hosting with gaming-optimized performance. Our platform is built specifically for HYTALE's demanding requirements.
          </p>
          
          {/* Features List */}
          <div className="space-y-3 max-w-3xl">
            {whyChooseFeatures.map((feature, index) => (
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
              READY TO START YOUR HYTALE JOURNEY?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Join thousands of players hosting their HYTALE servers with Drip Nodes. Instant setup, 24/7 support.
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

export default HytalePlans;
