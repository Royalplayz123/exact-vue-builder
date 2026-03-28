import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Gamepad2, Bot, Globe, Server, Cpu, Shield, Globe2, Clock, Zap, Users, MessageCircle, Sparkles } from 'lucide-react';
import minecraftImg from '@/assets/games/minecraft.jpg';
import hytaleImg from '@/assets/games/hytale.jpg';
import palworldImg from '@/assets/games/palworld.jpg';
import enshroudedImg from '@/assets/games/enshrouded.jpg';
import projectZomboidImg from '@/assets/games/project-zomboid.jpg';
import terrariaImg from '@/assets/games/terraria.jpg';
import valheimImg from '@/assets/games/valheim.jpg';
import arkSurvivalImg from '@/assets/games/ark-survival.jpg';
import arma3Img from '@/assets/games/arma3.jpg';

const games = [
  { name: 'MINECRAFT', image: minecraftImg, link: '/games/minecraft', price: '₹49', category: 'Sandbox', slots: 'Unlimited' },
  { name: 'HYTALE', image: hytaleImg, link: '/games/hytale', price: '₹99', category: 'Survival', slots: 'Unlimited' },
  { name: 'PALWORLD', image: palworldImg, link: '/games/palworld', price: '₹699', category: 'Survival', slots: '32' },
  { name: 'ENSHROUDED', image: enshroudedImg, link: '#', price: '₹299', category: 'RPG', slots: '16' },
  { name: 'PROJECT ZOMBOID', image: projectZomboidImg, link: '#', price: '₹199', category: 'Survival', slots: '64' },
  { name: 'TERRARIA', image: terrariaImg, link: '#', price: '₹149', category: 'Sandbox', slots: '16' },
  { name: 'VALHEIM', image: valheimImg, link: '#', price: '₹249', category: 'Survival', slots: '10' },
  { name: '7 DAYS TO DIE', image: arkSurvivalImg, link: '#', price: '₹299', category: 'Survival', slots: '12' },
  { name: 'ARK: SURVIVAL', image: arkSurvivalImg, link: '#', price: '₹399', category: 'Survival', slots: '70' },
  { name: 'SATISFACTORY', image: terrariaImg, link: '#', price: '₹249', category: 'Simulation', slots: '4' },
  { name: 'ARMA 3', image: arma3Img, link: '#', price: '₹349', category: 'Military', slots: '80' },
];

const hostingSolutions = [
  { icon: Gamepad2, title: 'GAME SERVERS', desc: '80+ popular games with instant setup', color: 'text-purple-400', link: '/games' },
  { icon: Bot, title: 'DISCORD BOTS', desc: '24/7 bot hosting with auto-scaling', color: 'text-orange-400', link: '/services/discord-bot' },
  { icon: Globe, title: 'WEB HOSTING', desc: 'cPanel hosting with free SSL', color: 'text-cyan-400', link: '/services/web-hosting' },
  { icon: Server, title: 'VPS HOSTING', desc: 'High-performance virtual servers', color: 'text-green-400', link: '/vps/amd-ryzen' },
];

const whyChooseFeatures = [
  { icon: Cpu, title: 'HIGH PERFORMANCE', desc: 'AMD EPYC processors and NVMe SSDs for lag-free gaming' },
  { icon: Shield, title: 'DDOS PROTECTION', desc: 'Enterprise-grade protection keeps your server online' },
  { icon: Globe2, title: 'GLOBAL LOCATIONS', desc: '20+ worldwide locations for lowest ping' },
  { icon: Clock, title: 'AUTO BACKUPS', desc: 'Daily automated backups with 7-day retention' },
  { icon: Zap, title: 'INSTANT SETUP', desc: 'Your server is ready in under 60 seconds' },
  { icon: Users, title: '24/7 SUPPORT', desc: 'Expert support team available around the clock' },
];

const supportFeatures = [
  { icon: MessageCircle, title: '24/7/365 SUPPORT', desc: 'At CodeNest Solution, we offer 24/7/365 support through our live chat and ticket services. Get help instantly from our chat or submit a ticket with any questions or concerns you may have, and get answers in an average 15 minutes.' },
  { icon: Users, title: 'EXPERIENCED STAFF', desc: 'CodeNest Solution has been building and playing on game servers for many years. Our team of professionals are experts in game server hosting and are always ready to help!' },
  { icon: Sparkles, title: 'PERSONALIZED SUPPORT', desc: 'At CodeNest Solution, we skip the automated messages and chatbots to connect you right to a server hosting expert. Get personalized help for your specific setup and requirements.' },
];

const AllGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredGames = games.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background" />
          <div className="container mx-auto relative z-10">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['80+ GAMES', 'INSTANT SETUP', 'DDOS PROTECTION', '24/7 SUPPORT'].map((badge, index) => (
                <span 
                  key={badge}
                  className="px-4 py-1.5 rounded-full bg-secondary/50 border border-border text-xs font-medium text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {badge}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <span className="gradient-text-purple">GAME SERVER</span>
              <br />
              <span className="text-foreground">HOSTING</span>
            </h1>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              Rent a game server where you and your friends can play privately with low latency and custom settings. 
              Choose from 80+ games, invite people from around the globe, and enjoy private matches, or build your own online community with your own rules.
            </p>
            
            <button className="btn-primary-gradient px-8 py-3 rounded-lg font-medium text-foreground inline-flex items-center gap-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Gamepad2 className="w-5 h-5" />
              EXPLORE GAMES
            </button>
          </div>
        </section>

        {/* Explore Games Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="text-foreground">EXPLORE</span>{' '}
              <span className="gradient-text-purple">80+ GAMES</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8">Find the perfect game server for your community</p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            
            {/* Games Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredGames.map((game, index) => (
                <Link 
                  key={game.name}
                  to={game.link}
                  className="group rounded-xl overflow-hidden border border-border bg-secondary/20 hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Category Badge */}
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/80 text-white">
                      {game.category}
                    </span>
                    {/* Slots Badge */}
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-secondary/80 text-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {game.slots}
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-xs font-bold text-foreground mb-1">{game.name}</h3>
                    <p className="text-sm font-semibold text-primary">{game.price}/mo</p>
                    <button className="w-full mt-2 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary text-xs font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Hosting Solutions */}
        <section className="py-16 px-4 bg-secondary/10">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="text-foreground">COMPLETE</span>{' '}
              <span className="gradient-text-purple">HOSTING</span>{' '}
              <span className="text-foreground">SOLUTIONS</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10">Everything you need to power your online presence</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hostingSolutions.map((solution, index) => (
                <Link 
                  key={solution.title}
                  to={solution.link}
                  className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 ${solution.color}`}>
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{solution.title}</h3>
                  <p className="text-xs text-muted-foreground">{solution.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              <span className="text-foreground">WHY CHOOSE</span>{' '}
              <span className="gradient-text-purple">CODENEST SOLUTION</span>
              <span className="text-foreground">?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChooseFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-xl bg-secondary/20 border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross Platform Section */}
        <section className="py-16 px-4 bg-secondary/10">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img 
                  src={minecraftImg} 
                  alt="Cross Platform Gaming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-primary text-sm font-semibold mb-2 block">CROSS-PLATFORM</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="text-foreground">PLAY</span>{' '}
                  <span className="gradient-text-purple">ANYWHERE</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  With a CodeNest Solution server, play your game however you want, wherever you want, with whoever you want, thanks to our crossplay support. Stick to your platform of choice to keep things comfortable while customizing the experience to your needs.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['PC', 'XBOX', 'PlayStation', 'Mobile'].map((platform) => (
                    <button 
                      key={platform}
                      className="py-2.5 rounded-lg bg-secondary border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Friendly Support Team */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="text-foreground">FRIENDLY</span>{' '}
              <span className="gradient-text-purple">SUPPORT</span>{' '}
              <span className="text-foreground">TEAM</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Our experts are standing by no matter the date or time! Get help instantly from our chat or submit a ticket with any questions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {supportFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-xl bg-secondary/20 border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise-Grade Performance */}
        <section className="py-16 px-4 bg-secondary/10">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="gradient-text-purple">ENTERPRISE-GRADE</span>{' '}
              <span className="text-foreground">PERFORMANCE</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Experience lag-free gaming with our optimized hosting infrastructure
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Clock, value: '99.9%', label: 'Uptime' },
                { icon: Globe2, value: '20+', label: 'Global Locations' },
                { icon: Zap, value: '<60s', label: 'Instant Setup' },
                { icon: Shield, value: 'Always On', label: 'DDoS Protection' },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="p-6 rounded-xl bg-secondary/30 border border-border text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 text-center overflow-hidden">
              <Sparkles className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                READY TO START GAMING?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of gamers hosting their servers with CodeNest Solution. Instant setup, 24/7 support.
              </p>
              <button className="btn-primary-gradient px-8 py-3 rounded-lg font-medium text-foreground inline-flex items-center gap-2">
                <Zap className="w-5 h-5" />
                EXPLORE GAMES NOW
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllGames;
