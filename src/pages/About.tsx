import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Server, Shield, Heart, Rocket, Star, Globe, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Server, value: '500+', label: 'Servers Hosted' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Users, value: '1,000+', label: 'Happy Customers' },
    { icon: Globe, value: '9', label: 'Global Locations' },
  ];

  const values = [
    {
      icon: Globe,
      title: 'OUR MISSION',
      description: 'To redefine hosting by combining world-class performance with affordability. We provide a reliable platform where gamers can craft their worlds, build communities, and create memories that last a lifetime.'
    },
    {
      icon: Heart,
      title: 'PLAYER-CENTRIC',
      description: "We're passionate about delivering a gaming experience like no other. Whether you're a casual builder or a hardcore gamer, our solutions are designed to cater to all your needs."
    },
    {
      icon: Rocket,
      title: 'INNOVATION',
      description: 'We use state-of-the-art servers strategically located to provide exceptional performance and ultra-low latency, no matter where you are. We constantly push boundaries.'
    }
  ];

  const team = [
    {
      name: 'SOUMIK',
      role: 'Founder & CEO',
      skills: ['Cloud Infrastructure', 'Management'],
      avatar: '👨‍💻'
    },
    {
      name: 'ASHISH',
      role: 'Owner',
      skills: ['Admin', 'Acc. Management'],
      avatar: '🧑‍💼'
    },
    {
      name: 'MIHAD',
      role: 'Lead Developer',
      skills: ['HTML', 'Game Server Optimization'],
      avatar: '👨‍🔧'
    }
  ];

  const journey = [
    {
      year: '2023',
      title: 'CODENEST FOUNDED',
      description: 'Started with a vision to revolutionize game server hosting',
      position: 'left'
    },
    {
      year: '2023',
      title: 'FIRST 100 SERVERS',
      description: 'Reached milestone of hosting 100+ game servers',
      position: 'right'
    },
    {
      year: '2024',
      title: 'GLOBAL EXPANSION',
      description: 'Launched data centers in 3 continents',
      position: 'left'
    },
    {
      year: '2025',
      title: '3,000+ USERS',
      description: 'Served over 3,000 satisfied customers worldwide',
      position: 'right'
    }
  ];

  const testimonials = [
    {
      stars: 5,
      text: "I've been using Codenest Solution for a while, and I'm really impressed with their service. They provide very powerful VPS and reliable cPanel hosting at great prices. The performance is excellent — fast, stable, and smooth — and the support team is always helpful whenever I need assistance.",
      author: 'NOT SG PLAYZ',
      role: 'FurrowHost Owner'
    },
    {
      stars: 5,
      text: '',
      author: '-.-',
      role: '-'
    },
    {
      stars: 5,
      text: '',
      author: '-.-',
      role: '-'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                <Globe className="w-3 h-3" />
                Home / About Us
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  ABOUT
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  CODENEST
                </h2>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  At <span className="text-primary font-semibold">Codenest</span> Solution, we are dedicated to delivering exceptional server hosting solutions tailored to the diverse needs of gamers, content creators, developers, and studios. Established in 2023, our journey began with a passion for Minecraft and a commitment to revolutionize the hosting experience.
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Frustrated by subpar customer support and prolonged wait times from existing providers, we set out to create a platform where customers would receive prompt, knowledgeable, and comprehensive assistance. With over a decade of experience and 1,000+ servers hosted, we look to continue setting the standard for server hosting and multiplayer support.
                </p>
              </div>

              {/* Terminal */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-secondary/50 border border-border rounded-xl p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-muted-foreground">$ codenest --status</p>
                    <p><span className="text-muted-foreground">SERVER_STATUS:</span> <span className="text-green-400">ONLINE</span></p>
                    <p><span className="text-muted-foreground">UPTIME:</span> <span className="text-primary">99.97%</span></p>
                    <p><span className="text-muted-foreground">ACTIVE_USERS:</span> <span className="text-primary">3,247</span></p>
                    <p><span className="text-muted-foreground">GLOBAL_NODES:</span> <span className="text-primary">12</span></p>
                    <p className="text-muted-foreground">Ready to host your world?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="flex flex-col items-center p-4 rounded-xl bg-secondary/30 border border-border animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                OUR MISSION & <span className="text-primary">VALUES</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Driving innovation in game server hosting with cutting-edge technology and unwavering commitment to our community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <value.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                MEET THE TEAM
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                The passionate individuals behind Codenest Solution's success, dedicated to delivering exceptional hosting experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className="p-6 rounded-xl bg-secondary/30 border border-border text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 border-2 border-primary/50 flex items-center justify-center mx-auto mb-4 text-3xl">
                    {member.avatar}
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Click for details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                OUR JOURNEY
              </h2>
              <p className="text-muted-foreground text-sm">
                From humble beginnings to hosting thousands of game servers worldwide
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-2xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/50"></div>

              {journey.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-8 animate-fade-in ${
                    item.position === 'left' ? 'justify-start' : 'justify-end'
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10"></div>
                  
                  {/* Card */}
                  <div className={`w-5/12 p-4 rounded-xl bg-secondary/50 border border-border ${
                    item.position === 'left' ? 'mr-auto text-left' : 'ml-auto text-left'
                  }`}>
                    <span className="text-primary text-sm font-semibold">{item.year}</span>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                WHAT OUR <span className="text-primary">CUSTOMERS SAY</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Join 3,000+ satisfied gamers who trust Codenest Solution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-secondary/30 border border-border animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[100px]">
                    {testimonial.text || '-.-\n\n-\n-'}
                  </p>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-primary text-xs">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              READY TO GET STARTED?
            </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
              Join thousands of gamers who have already experienced the Codenest Solution difference. Start your server in minutes.
            </p>
            <button className="btn-primary-gradient px-8 py-3 rounded-lg font-semibold text-foreground">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
