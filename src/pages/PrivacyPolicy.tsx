import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            PRIVACY POLICY
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: 2024-11-30</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-lg font-bold text-foreground mb-3">INTRODUCTION</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your privacy is a priority. We are committed to safeguarding your personal data and your privacy rights. This Privacy Policy details our practices around data collection, use, and disclosure when you use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            <h2 className="text-lg font-bold text-primary mb-3">INFORMATION WE COLLECT</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We collect personal identifiers (name, email, etc.), usage data (pages visited, interactions), technical data (IP address, browser type), and cookies to enhance your experience. Data is collected through account creation, site interaction, and service use.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-lg font-bold text-foreground mb-3">HOW WE USE YOUR INFORMATION</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your data is used to provide our services, improve user experiences, communicate updates, personalize content, and ensure compliance with regulations. We also use it for security purposes, such as monitoring and fraud prevention.
            </p>
          </section>

          {/* Your Rights */}
          <section className="animate-fade-in" style={{ animationDelay: '250ms' }}>
            <h2 className="text-lg font-bold text-primary mb-3">YOUR RIGHTS</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Depending on your location, you may have the right to access, update, delete, restrict processing, or port your data. To exercise these rights, contact us directly.
            </p>
          </section>

          {/* Data Security */}
          <section className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-lg font-bold text-foreground mb-3">DATA SECURITY</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We implement standard encryption, access controls, and regular audits to protect your data. While no system is infallible, we continuously work to enhance our security measures.
            </p>
          </section>

          {/* Contact Us */}
          <section className="animate-fade-in" style={{ animationDelay: '350ms' }}>
            <h2 className="text-lg font-bold text-primary mb-3">CONTACT US</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              For privacy-related inquiries, please contact us at <a href="mailto:solutioncodenest@gmail.com" className="text-primary hover:underline">solutioncodenest@gmail.com</a> or join our <a href="https://discord.gg/R8U3wKxwkd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord community</a>.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-lg font-bold text-foreground mb-3">ACCEPTANCE OF TERMS</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              By accessing or using this service, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          {/* Modifications */}
          <section className="animate-fade-in" style={{ animationDelay: '450ms' }}>
            <h2 className="text-lg font-bold text-primary mb-3">MODIFICATIONS</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We reserve the right to modify these terms at any time. It is your responsibility to check for updates periodically.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
            <h2 className="text-lg font-bold text-foreground mb-3">USER RESPONSIBILITIES</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
              <li>No illegal activities</li>
              <li>No spamming or abusing services</li>
              <li>Respect other users and follow community guidelines</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="animate-fade-in" style={{ animationDelay: '550ms' }}>
            <h2 className="text-lg font-bold text-primary mb-3">LIMITATION OF LIABILITY</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are not liable for any damages or losses resulting from your use of the service.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
