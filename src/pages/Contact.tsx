import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MessageSquare, TicketCheck, FileText, User, Phone, MapPin, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'EMAIL SUPPORT',
    primary: 'help@codenest.com',
    secondary: 'Get a response within 24 hours.',
  },
  {
    icon: MessageSquare,
    title: 'DISCORD COMMUNITY',
    primary: 'Join our Discord Server',
    secondary: 'For community support & discussion.',
  },
  {
    icon: TicketCheck,
    title: 'SUBMIT TICKET',
    primary: 'Create a support ticket',
    secondary: 'Official support channel for issues.',
  },
];

const legalInfo = [
  {
    icon: User,
    label: 'MERCHANT LEGAL ENTITY NAME',
    value: 'CODENEST SOLUTION',
  },
  {
    icon: Phone,
    label: 'TELEPHONE NO',
    value: '9234521981, 9613354980',
  },
  {
    icon: MapPin,
    label: 'REGISTERED ADDRESS',
    value: 'School, Dhanekhowa, Bhomoraguri, Kaliabor, Nagaon, Dhanekhowa, Assam, India, 782143',
  },
  {
    icon: MapPin,
    label: 'OPERATIONAL ADDRESS',
    value: 'Alkapuri, Gardanibagh, Patna-2, Bihar, India, 800002',
  },
  {
    icon: Mail,
    label: 'E-MAIL ID',
    value: 'help@codenest.com',
  },
  {
    icon: Clock,
    label: 'LAST UPDATED',
    value: '17-09-2025 13:50:35',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Experience world-class support around the clock. Our team is here to help you with any questions or concerns.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <div 
              key={method.title}
              className="bg-card border border-border rounded-xl p-6 animate-fade-in hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                <method.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{method.title}</h3>
              <p className="text-primary text-sm mb-1">{method.primary}</p>
              <p className="text-muted-foreground text-xs">{method.secondary}</p>
            </div>
          ))}
        </div>

        {/* Legal Information */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-foreground">LEGAL INFORMATION</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalInfo.map((info, index) => (
                <div key={info.label} className="flex items-start gap-3">
                  <info.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
