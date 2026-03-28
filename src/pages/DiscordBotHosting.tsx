import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Clock, Download, Globe, Zap, Shield, HardDrive, Bot, Database, MessageSquare, Users, Sparkles, Home, Terminal, FileText, Calendar, User, Copy, Network, Settings, Activity } from 'lucide-react';
import discordBotBanner from '@/assets/discord-bot-banner.jpg';

const plans = [
  {
    name: 'LAMMU PLAN',
    tier: 'Basic',
    tierColor: 'text-cyan-400',
    price: 39,
    features: [
      '1GB DDR4 Ram',
      '4GB NVMe SSD',
      '100% CPU (AMD 7)',
      '1 MySQL Databases',
      'Full DDOs Migration'
    ],
    buttonGradient: 'btn-primary-gradient'
  },
  {
    name: 'WAMMU PLAN',
    tier: 'Basic',
    tierColor: 'text-blue-400',
    price: 69,
    features: [
      '2GB DDR4 Ram',
      '8GB NVMe SSD',
      '150% CPU (AMD 7)',
      '2 MySQL Databases',
      'Full DDOs Migration'
    ],
    buttonGradient: 'bg-gradient-to-r from-blue-600 to-blue-500'
  },
  {
    name: 'STARTER PLAN',
    tier: 'Standard',
    tierColor: 'text-emerald-400',
    price: 99,
    popular: true,
    features: [
      '4GB DDR4 Ram',
      '14GB NVMe SSD',
      '200% CPU (AMD 7)',
      '3 MySQL Databases',
      'Full DDOs Migration'
    ],
    buttonGradient: 'bg-gradient-to-r from-emerald-600 to-emerald-500'
  },
  {
    name: 'CODER PLAN',
    tier: 'Enhanced',
    tierColor: 'text-purple-400',
    price: 159,
    features: [
      '6GB DDR4 Ram',
      '20GB NVMe SSD',
      '300% CPU (AMD 7)',
      '4 MySQL Databases',
      'Full DDOs Migration'
    ],
    buttonGradient: 'bg-gradient-to-r from-purple-600 to-purple-500'
  }
];

const whyChooseFeatures = [
  {
    icon: MessageSquare,
    title: '24/7/365 SUPPORT',
    description: 'CodeNest Solution is by your side 24/7/365, days a year to aid with any queries you may have. Our support is the best in the industry, and we will never stop striving to be even better!'
  },
  {
    icon: Globe,
    title: 'WORLDWIDE LOCATIONS',
    description: 'Keep your bot close to home with hosting locations from around the globe! Our diverse locations provide the best connection/latency for managing and interacting with the bot and a connection to Discord\'s data centers.'
  },
  {
    icon: Shield,
    title: 'DDOS PROTECTED',
    description: 'Let our system be your guard. In the unlikely event your Discord bot is targeted by a DDoS attack, rest easy knowing our system will be working overtime to ensure your hosting stays online!'
  },
  {
    icon: HardDrive,
    title: 'SOLID-STATE DRIVES',
    description: 'DDR4 Rams are our standard, allowing your bot to read/write files at a record pace and keep up with the largest discord communities online. Even if you think your Discord server is too large and active, we can accommodate your bot.'
  },
  {
    icon: Bot,
    title: 'AUTOMATED BOT INSTALLATION',
    description: 'From NodeJS (v16 version) and Python to Java or TypeScript, CodeNest Solution has you covered no matter the bot type you wish to run. That includes our library of pre-made bots, complete with one-click install!'
  },
  {
    icon: Database,
    title: 'DAILY BACKUPS',
    description: 'Our Discord bot hosting includes seven days of backups at no extra charge. Fixing a broken config or reverting a change is one click away! If you have any questions or concerns about backups, we have an extensive knowledge base and always available customer support!'
  }
];

const supportFeatures = [
  {
    icon: MessageSquare,
    title: '24/7/365 SUPPORT',
    description: 'Have an emergency, and your bot is down? Rest assured, we can help 24/7/365, days a year!'
  },
  {
    icon: Users,
    title: 'EXPERIENCED STAFF',
    description: 'Our professional staff has years of combined experience working with Discord bots and hosting them. We are always ready to help out!'
  },
  {
    icon: Sparkles,
    title: 'PERSONALIZED SUPPORT',
    description: 'The only bots here are Discord bots! Our staff is 100% human and available 24/7 to aid with anything you may need.'
  }
];

const terminalMenuItems = [
  { icon: Home, label: 'Home' },
  { icon: Terminal, label: 'Terminal', active: true },
  { icon: FileText, label: 'Files' },
  { icon: Database, label: 'Databases' },
  { icon: Calendar, label: 'Schedules' },
  { icon: User, label: 'Users' },
  { icon: Copy, label: 'Backups' },
  { icon: Network, label: 'Network' },
  { icon: Settings, label: 'Startup' },
  { icon: Settings, label: 'Settings' },
  { icon: Activity, label: 'Activity' }
];

const DiscordBotHosting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <img 
            src={discordBotBanner} 
            alt="Discord Bot"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Feature Tags */}
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
            {['24/7 UPTIME', 'DDOS PROTECTION', 'FULL DDOS MIGRATION', 'AUTO BACKUPS'].map((tag) => (
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
            <span className="text-cyan-400">DISCORD BOT</span>
            <br />
            <span className="text-foreground">HOSTING</span>
          </h1>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-md mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Get your Discord bot up and running in minutes with CodeNest Solution! Our Discord bot hosting services come with full file access for complete customization and a library of pre-made bots ready to be installed with one-click as soon as your hosting goes live. Not to mention our free daily backups for complete peace of mind!
          </p>
          
          {/* CTA Button */}
          <button className="btn-primary-gradient px-6 py-3 rounded-lg font-medium text-foreground flex items-center gap-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Sparkles className="w-4 h-4" />
            GET STARTED
          </button>
        </div>
      </section>

      {/* Performance Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            <span className="text-cyan-400">BLAZING FAST</span>{' '}
            <span className="text-foreground">PERFORMANCE</span>
          </h2>
          <p className="text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Experience lightning-fast bot response times with our optimized hosting infrastructure
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, value: '100.0%', label: 'Uptime' },
              { icon: Download, value: '50ms', label: 'Response Time' },
              { icon: Globe, value: '20+', label: 'Global Locations' },
              { icon: Zap, value: '<30s', label: 'Full DDOs Migration' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="p-6 rounded-xl bg-secondary/30 border border-border animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            <span className="text-foreground">CHOOSE YOUR</span>{' '}
            <span className="text-cyan-400">BOT PLAN</span>
          </h2>
          <p className="text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Scale your Discord bot with our optimized hosting plans. From small communities to massive servers.
          </p>
          
          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in ${plan.popular ? 'ring-2 ring-emerald-500/50' : ''}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 rounded-full text-xs font-semibold text-white">
                    ✨ POPULAR
                  </div>
                )}
                
                <h3 className={`text-lg font-bold ${plan.tierColor} mb-1`}>{plan.name}</h3>
                <div className={`text-xs ${plan.tierColor} flex items-center justify-center gap-1 mb-4`}>
                  <Zap className="w-3 h-3" />
                  {plan.tier}
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 mb-4">
                  <div className="text-3xl font-bold text-foreground">₹{plan.price}</div>
                  <div className="text-xs text-muted-foreground">per month</div>
                </div>
                
                <ul className="space-y-2 text-left mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2.5 rounded-lg font-medium text-white ${plan.buttonGradient} flex items-center justify-center gap-2`}>
                  <Zap className="w-4 h-4" />
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 animate-fade-in">
            <span className="text-foreground">WHY CHOOSE</span>{' '}
            <span className="text-cyan-400">CODENEST SOLUTION</span>
            <span className="text-foreground">?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature, index) => (
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

      {/* Easy to Manage Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            <span className="text-foreground">EASY TO</span>{' '}
            <span className="text-emerald-400">MANAGE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            With a full control panel to manage all files, the Discord bot hosting is yours to customize! Enjoy an easy-to-traverse UI with daily backups, automated bot installs, and full console access to interface directly with your bot.
          </p>
          
          {/* Terminal UI */}
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border bg-background animate-fade-in" style={{ animationDelay: '200ms' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="px-3 py-1 bg-emerald-500 rounded text-xs font-semibold text-white">LIVE DEMO</span>
            </div>
            
            <div className="flex">
              {/* Sidebar */}
              <div className="w-48 border-r border-border bg-secondary/20 p-2">
                {terminalMenuItems.map((item) => (
                  <div 
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${item.active ? 'bg-cyan-500/20 text-cyan-400' : 'text-muted-foreground hover:bg-secondary/30'}`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                ))}
              </div>
              
              {/* Content */}
              <div className="flex-1 p-4 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="font-medium text-foreground">Starter Plan</span>
                </div>
                
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-green-400 h-64 overflow-y-auto">
                  <p className="text-muted-foreground">{'>'} Loaded command: Use (aliases: inventory) from commands/inv.js</p>
                  <p className="text-muted-foreground">{'>'} Loaded command: class from commands/class.js</p>
                  <p className="text-muted-foreground">{'>'} Loaded command: lb (aliases: leaderboard) from commands/lb.js</p>
                  <p className="text-muted-foreground">{'>'} Loaded command: battery (aliases: bat, b) from commands/battery.js</p>
                  <p className="text-muted-foreground">{'>'} Loaded command: open from commands/open.js</p>
                  <p className="text-muted-foreground">{'>'} Loaded version data successfully</p>
                  <p className="text-muted-foreground">{'>'} Loaded command: battle (aliases: fight) from commands/pets/battle.js</p>
                  <p className="text-muted-foreground">{'>'} Loaded command: buy (aliases: adopt) from commands/pets/buy.js</p>
                  <p className="text-muted-foreground">{'>'} Loaded command: disown (aliases: do) from commands/pets/disown.js</p>
                  <p className="text-green-400">{'>'} Bot connected successfully!</p>
                  <p className="text-cyan-400">{'>'} Ready to serve Discord communities</p>
                  <p className="animate-pulse">{'>'} Type a command..._</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Support Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            <span className="text-foreground">FRIENDLY AND</span>{' '}
            <span className="text-emerald-400">PROFESSIONAL</span>{' '}
            <span className="text-foreground">SUPPORT</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Our experts are standing by no matter the date or time! From general questions to troubles with the bot itself, always know our team is happy to help. Complete with an average wait of no more than 15 minutes for support!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-xl bg-secondary/30 border border-border text-center animate-fade-in hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              READY TO POWER YOUR BOT?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of Discord communities hosting their bots with CodeNest Solution. Full DDOs Migration, 24/7 support.
            </p>
            <button className="btn-secondary-gradient px-8 py-3 rounded-lg font-medium text-foreground flex items-center gap-2 mx-auto">
              <Sparkles className="w-4 h-4" />
              GET STARTED NOW
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiscordBotHosting;
