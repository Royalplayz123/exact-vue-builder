import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              TERMS & CONDITIONS
            </h1>
            <p className="text-muted-foreground text-sm">
              Last Updated: 09-08-2025 12:55:09
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                1. ACCEPTANCE OF TERMS
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                By accessing or using this website and our services, you agree to be bound by these Terms & Conditions, Refund Policy along with our Privacy Policy and any other applicable terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                2. MODIFICATIONS
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We reserve the right to modify these Terms at any time without prior notice. It is your responsibility to review them periodically for updates.
              </p>
            </div>

            {/* Section 3 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                3. USER RESPONSIBILITIES
              </h2>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li>Provide accurate and complete information during registration.</li>
                <li>Do not engage in unlawful or prohibited activities.</li>
                <li>Respect intellectual property rights.</li>
                <li>Avoid unauthorized use of our services.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                4. RATE LIMIT WARN
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You are not allowed to misuse our resources even if you are our paid/normal customer.
              </p>
            </div>

            {/* Section 5 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                5. LIMITATION OF LIABILITY
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We are not responsible for any losses, damages, or liabilities arising from your use of our services.
              </p>
            </div>

            {/* Section 6 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                6. REFUND POLICY
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Refunds may be claimed if we fail to provide the agreed-upon service. Please Visit refund policy for more details.
              </p>
            </div>

            {/* Section 7 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                7. THIRD-PARTY LINKS
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our website may contain links to third-party sites, governed by their own terms and policies.
              </p>
            </div>

            {/* Section 8 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
              <h2 className="text-lg font-bold text-foreground mb-3">
                9. CONTACT
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For any questions or concerns regarding these Terms, contact us using the details provided on this website.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
