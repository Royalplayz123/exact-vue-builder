import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, ChevronUp, User, Gamepad2, Server, BookOpen, HelpCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: 'Game Servers',
    icon: Gamepad2,
    items: [
      { name: 'Minecraft Hosting', desc: 'Premium NVMe SSD Minecraft Servers' },
      { name: 'Hytale Hosting', desc: 'Best Hytale Hosting' },
      { name: 'Palworld Hosting', desc: 'Dedicated Palworld Server Hosting' },
      { name: 'See All Game Servers', desc: 'Browse 50+ Supported Games' },
    ]
  },
  {
    title: 'Services',
    icon: Server,
    categories: [
      {
        label: 'HOSTING',
        items: [
          { name: 'Web Hosting', desc: 'cPanel Hosting with Free Domain' },
          { name: 'Discord Bot Hosting', desc: '24/7 Discord Bot Servers' },
        ]
      },
      {
        label: 'VPS',
        items: [
          { name: 'Intel Platinum VPS', desc: 'Budget VPS in India' },
          { name: 'AMD Ryzen VPS', desc: 'Premium Performance' },
        ]
      }
    ]
  },
  {
    title: 'Learn',
    icon: BookOpen,
    items: [
      { name: 'About Our Company', desc: 'Our Story & Mission' },
      { name: 'Terms of Service', desc: 'Our Terms & Conditions' },
      { name: 'Privacy Policy', desc: 'How We Handle Your Data' },
      { name: 'Refund Policy', desc: 'Our Refund Policy' },
    ]
  },
  {
    title: 'Support',
    icon: HelpCircle,
    items: [
      { name: 'Contact Support', desc: 'Get in Touch with Our Team' },
      { name: 'FAQ & Knowledge Base', desc: 'Answers to Common Questions' },
      { name: 'Tutorials & Guides', desc: 'Step-by-Step Setup Guides' },
      { name: 'Server Status', desc: 'Check Our System Status' },
    ]
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark') || 
      !document.documentElement.classList.contains('light');
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground text-sm">CODENEST</span>
            <span className="text-[10px] text-muted-foreground -mt-1">SOLUTION</span>
          </div>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent 
              className="w-[320px] bg-background border-l border-border overflow-y-auto top-[57px] h-[calc(100%-57px)]"
            >
              <div className="flex items-center justify-end gap-2 mb-4 pr-8 pt-2">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  {isDark ? (
                    <Moon className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Sun className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>

              <nav className="space-y-2">
                {menuItems.map((menu) => (
                  <Collapsible 
                    key={menu.title}
                    open={openMenus.includes(menu.title)}
                    onOpenChange={() => toggleMenu(menu.title)}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                          <menu.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{menu.title}</span>
                      </div>
                      {openMenus.includes(menu.title) ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-6 pr-2 py-2 space-y-1">
                      {menu.items && menu.items.map((item) => (
                        <a 
                          key={item.name}
                          href="#" 
                          className="block p-2 rounded-lg hover:bg-secondary/30 transition-colors"
                        >
                          <div className="text-sm text-foreground">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </a>
                      ))}
                      {menu.categories && menu.categories.map((cat) => (
                        <div key={cat.label} className="mb-3">
                          <div className="text-xs font-semibold text-primary mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {cat.label}
                          </div>
                          {cat.items.map((item) => (
                            <a 
                              key={item.name}
                              href="#" 
                              className="block p-2 rounded-lg hover:bg-secondary/30 transition-colors"
                            >
                              <div className="text-sm text-foreground">{item.name}</div>
                              <div className="text-xs text-muted-foreground">{item.desc}</div>
                            </a>
                          ))}
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </nav>

              <div className="mt-6 space-y-3">
                <button className="w-full py-3 rounded-lg btn-primary-gradient text-foreground font-medium flex items-center justify-center gap-2">
                  <User className="w-4 h-4" />
                  LOGIN
                </button>
                <button className="w-full py-3 rounded-lg btn-secondary-gradient text-foreground font-medium flex items-center justify-center gap-2">
                  <User className="w-4 h-4" />
                  REGISTER
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="text-xs text-muted-foreground">© 2025 Codenest Solution</p>
                <p className="text-[10px] text-muted-foreground">Premium Game Server & VPS Hosting Solutions</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
