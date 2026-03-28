import Header from '@/components/Header';
import Footer from '@/components/Footer';

const refundSections = [
  {
    number: '1',
    title: 'GENERAL REFUND POLICY',
    items: [
      'Refunds are only applicable to first-time purchases of eligible products and services.',
      'Refund requests must be submitted within 2 days of the original purchase date.',
      "Shared Hosting refunds are only granted if a valid technical issue is confirmed on CodeNest Solution' side.",
      'VPS Hosting is strictly non-refundable under any circumstances.',
      'No refunds will be issued after 2 days, regardless of the situation.',
      'Refunds are not available for change-of-mind cases or user-side misconfiguration.',
    ],
  },
  {
    number: '2',
    title: 'ELIGIBLE SERVICES',
    items: [
      'Shared Hosting (only if a confirmed technical fault exists on our end).',
      'Minecraft Server Hosting (first-time orders only).',
    ],
  },
  {
    number: '3',
    title: 'NON-REFUNDABLE SERVICES',
    items: [
      'VPS Hosting & Domain Names',
      'SSL Certificates & Dedicated Servers',
      'Software Licenses & Setup Fees',
      'Promotional Plans, Renewals & Upgrades',
    ],
  },
  {
    number: '4',
    title: 'SERVICE CANCELLATION',
    items: [
      'Clients may cancel services by notifying us at least 3 days in advance via Email (solutioncodenest@gmail.com) or Phone (9258422159).',
      'Cancellations with sufficient notice will receive a full refund (if eligible).',
      'Cancellations made less than 3 days before the service date may incur a 20% cancellation fee.',
    ],
  },
  {
    number: '5',
    title: 'ABUSE, SUSPENSION, AND CHARGEBACKS',
    items: [
      'Services suspended or terminated due to Terms of Service violations are not eligible for refunds.',
      'Refund requests during abuse investigations will be held until resolution.',
      'Filing a chargeback without contacting support will result in service termination and permanent ban.',
    ],
  },
  {
    number: '6',
    title: 'REFUND PROCESSING TIME',
    items: [
      'Approved refunds will be processed within 5-10 business days.',
      'Refunds are always returned to the original payment method.',
      'CodeNest Solution is not responsible for delays caused by your payment provider or bank.',
    ],
  },
  {
    number: '7',
    title: 'PARTIAL REFUNDS',
    items: [
      'If a service has been partially delivered, partial refunds may be issued at our sole discretion, based on service usage.',
    ],
  },
  {
    number: '8',
    title: 'FORCE MAJEURE',
    items: [
      'We are not liable for cancellations, delays, or failures caused by events beyond our control, including natural disasters, network outages, strikes, or government actions.',
    ],
  },
  {
    number: '9',
    title: 'GOVERNING LAW',
    items: [
      'This Refund & Cancellation Policy is governed by and construed in accordance with the laws of your country/state.',
    ],
  },
];

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            CANCELLATION & REFUND POLICY
          </h1>
          <p className="text-sm text-muted-foreground">Last Updated: 30-03-2025</p>
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto space-y-6">
          {refundSections.map((section, index) => (
            <div 
              key={section.number}
              className="bg-card border border-border rounded-xl p-6 animate-fade-in hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <h2 className="text-base font-bold text-foreground mb-4">
                {section.number}. {section.title}
              </h2>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
