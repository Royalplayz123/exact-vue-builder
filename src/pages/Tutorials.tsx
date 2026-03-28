import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Film, Eye, Clock, ExternalLink, ChevronDown, Gamepad2, Bot, Globe, Server, Palette, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: Film, count: 8 },
    { id: 'minecraft', name: 'Minecraft', icon: X },
    { id: 'palworld', name: 'Palworld', icon: Gamepad2 },
    { id: 'discord-bot', name: 'Discord Bot', icon: Bot },
    { id: 'web-hosting', name: 'Web Hosting', icon: Globe },
    { id: 'vps-hosting', name: 'VPS Hosting', icon: Server },
    { id: 'hosting-design', name: 'Hosting Design', icon: Palette },
  ];

  const tutorials = [
    {
      id: 1,
      title: 'HOW TO INSTALL PTERODACTYL PANEL',
      description: 'Complete guide to install Pterodactyl game panel on your server with automated setup.',
      duration: '15:33',
      views: '24K',
      category: 'vps-hosting',
      subcategory: 'Panel Setup',
      channel: 'HostingDesign Pro',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    },
    {
      id: 2,
      title: 'HOW TO INSTALL PAYMENTER PANEL',
      description: 'Step-by-step tutorial to set up Paymenter billing panel for your hosting business.',
      duration: '22:15',
      views: '18K',
      category: 'web-hosting',
      subcategory: 'Panel Setup',
      channel: 'HostingDesign Pro',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    },
    {
      id: 3,
      title: 'HOW TO INSTALL JEXACTYL PANEL',
      description: 'Complete installation guide for Jexactyl game panel with theme customization.',
      duration: '18:45',
      views: '15K',
      category: 'vps-hosting',
      subcategory: 'Panel Setup',
      channel: 'HostingDesign Pro',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    },
    {
      id: 4,
      title: 'HOW TO INSTALL WHMCS',
      description: 'Professional WHMCS installation and configuration for hosting providers.',
      duration: '20:19',
      views: '32K',
      category: 'web-hosting',
      subcategory: 'Panel Setup',
      channel: 'HostingDesign Pro',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    },
    {
      id: 5,
      title: 'HOW TO SETUP CLOUDFLARE DNS',
      description: 'Optimize your website performance with proper Cloudflare DNS configuration.',
      duration: '12:30',
      views: '45K',
      category: 'web-hosting',
      subcategory: 'Panel Setup',
      channel: 'HostingDesign Pro',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    },
    {
      id: 6,
      title: 'MINECRAFT SERVER SETUP ON VPS - COMPLETE GUIDE',
      description: 'From zero to fully functional Minecraft server with optimal performance settings.',
      duration: '28:30',
      views: '125K',
      category: 'minecraft',
      subcategory: 'Server Setup',
      channel: 'Minecraft Masters',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    },
    {
      id: 7,
      title: 'TOP 10 MUST-HAVE MINECRAFT PLUGINS 2024',
      description: 'Essential plugins every Minecraft server should have for better gameplay.',
      duration: '18:45',
      views: '89K',
      category: 'minecraft',
      subcategory: 'Plugins',
      channel: 'Minecraft Masters',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    },
    {
      id: 8,
      title: 'UBUNTU SERVER 22.04 INITIAL SETUP GUIDE',
      description: 'Secure and optimize your new VPS with this comprehensive setup tutorial.',
      duration: '20:15',
      views: '67K',
      category: 'vps-hosting',
      subcategory: 'Setup',
      channel: 'VPS Experts',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtube.com'
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-fade-in">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                <span className="text-primary">CodeNest Solution</span> Tutorials
              </h1>
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-secondary/30 border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Film className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-sm">CATEGORIES</span>
                </div>
                
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <Collapsible key={cat.id}>
                      <CollapsibleTrigger 
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex items-center justify-between w-full p-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.id 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <cat.icon className="w-4 h-4" />
                          <span>{cat.name}</span>
                          {cat.count && (
                            <span className={`text-xs px-1.5 py-0.5 rounded ${
                              selectedCategory === cat.id ? 'bg-primary-foreground/20' : 'bg-primary/20 text-primary'
                            }`}>
                              {cat.count}
                            </span>
                          )}
                        </div>
                        {cat.id !== 'all' && <ChevronDown className="w-4 h-4" />}
                      </CollapsibleTrigger>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Welcome Banner */}
              <div className="text-center py-8 mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
                <div className="w-12 h-12 mx-auto mb-4 bg-secondary/50 rounded-xl flex items-center justify-center">
                  🎬
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  WELCOME TO CODENEST SOLUTION TUTORIALS
                </h2>
                <p className="text-muted-foreground text-sm">
                  Click on any tutorial below to watch it on YouTube. All videos open in a new tab.
                </p>
              </div>

              {/* Tutorials Count */}
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-bold text-foreground">
                  ALL TUTORIALS <span className="text-muted-foreground font-normal">({filteredTutorials.length} VIDEOS)</span>
                </h3>
              </div>

              {/* Tutorial Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTutorials.map((tutorial, index) => (
                  <a 
                    key={tutorial.id}
                    href={tutorial.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-secondary/30 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.25 + index * 0.05}s` }}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-secondary">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <Film className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/90 rounded text-xs text-foreground font-medium">
                        {tutorial.duration}
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary/90 rounded text-xs text-primary-foreground font-medium">
                        {tutorial.subcategory}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h4 className="font-bold text-foreground text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {tutorial.title}
                      </h4>
                      <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                        {tutorial.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {tutorial.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {tutorial.duration}
                          </span>
                        </div>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                      
                      <div className="mt-2 pt-2 border-t border-border">
                        <span className="text-xs text-muted-foreground">{tutorial.channel}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* How to Add More Videos Info */}
              <div className="mt-8 p-6 bg-secondary/30 border border-border rounded-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Film className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground">HOW TO ADD MORE VIDEOS</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  To add more videos, simply add new objects to the <code className="bg-secondary px-2 py-0.5 rounded text-primary">videos</code> array:
                </p>
                <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-xs text-muted-foreground overflow-x-auto">
                  <pre>{`{
  id: 9, // Next number
  title: 'Your Video Title',
  description: 'Video description',
  duration: '10:30',
  views: '1K',
  category: 'category-name', // Must match categories above
  subcategory: 'Subcategory Name', // Must match subcategories
  youtubeUrl: 'https://youtu.be/YOUR_VIDEO_ID',
  youtubeId: 'YOUR_VIDEO_ID',
  thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg',
  channel: 'Channel Name'
}`}</pre>
                </div>
                <p className="text-muted-foreground text-xs mt-4">
                  The thumbnail will be automatically generated from YouTube. Videos open directly on YouTube when clicked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
