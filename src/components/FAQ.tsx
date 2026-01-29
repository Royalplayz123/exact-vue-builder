import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const faqItems = [
  {
    question: 'HOW QUICK IS YOUR SUPPORT?',
    answer: 'Our average support ticket reply time is under 15 minutes. We have a dedicated team available 24/7/365 to help you with any issues you may encounter.',
  },
  {
    question: 'WHAT ARE THE SPECIFICATIONS OF WAMMUHOST SERVER NODES?',
    answer: 'Our servers use high-performance Intel Platinum and AMD Ryzen processors, NVMe SSDs for fast storage, and enterprise-grade networking for low latency gameplay.',
  },
  {
    question: 'ARE YOUR MINECRAFT AND GAMING SERVERS ON 24/7?',
    answer: 'Yes! All of our servers are online 24/7 with 99.9% uptime guarantee. You can play with your friends anytime without worrying about server availability.',
  },
  {
    question: 'CAN I SWITCH BETWEEN MODPACKS ON MY MINECRAFT SERVER WHENEVER I WANT?',
    answer: 'Absolutely! You can switch between modpacks at any time through our easy-to-use control panel. The process is simple and takes just a few clicks.',
  },
  {
    question: 'ARE THE PLAYER SLOTS UNLIMITED/ADJUSTABLE?',
    answer: 'Yes, player slots are adjustable based on your plan. You can upgrade or downgrade your slots at any time to match your community size.',
  },
  {
    question: 'DO YOU PROVIDE DDOS PROTECTION?',
    answer: 'Yes, all of our gaming servers are outfitted with enterprise-grade DDoS protection to help you avoid downtime, including protection against intentional DDoS attacks.',
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Click on each question for the answer.
        </p>

        {/* FAQ Items */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <Collapsible 
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <div className="faq-item">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                  <span className="text-foreground text-sm font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
