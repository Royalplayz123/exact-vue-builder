import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link text-sm">About Us</Link></li>
              <li><Link to="/faq" className="footer-link text-sm">FAQ</Link></li>
              <li><a href="#" className="footer-link text-sm">Sitemap</a></li>
              <li><Link to="/privacy-policy" className="footer-link text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="footer-link text-sm">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="footer-link text-sm">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li><Link to="/games/minecraft" className="footer-link text-sm">Minecraft</Link></li>
              <li><Link to="/vps/intel-platinum" className="footer-link text-sm">Intel Platinum VPS</Link></li>
              <li><Link to="/vps/intel-xeon" className="footer-link text-sm">Intel Xeon VPS</Link></li>
              <li><Link to="/vps/amd-ryzen" className="footer-link text-sm">AMD Ryzen VPS</Link></li>
              <li><Link to="/vps/amd-epyc" className="footer-link text-sm">AMD Epyc VPS</Link></li>
              <li><Link to="/services/web-hosting" className="footer-link text-sm">Web Hosting</Link></li>
              <li><Link to="/services/discord-bot" className="footer-link text-sm">Discord Bot</Link></li>
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">CUSTOMERS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link text-sm">My Account</a></li>
              <li><a href="#" className="footer-link text-sm">Knowledgebase</a></li>
              <li><Link to="/contact" className="footer-link text-sm">Contact Us</Link></li>
              <li><Link to="/tutorials" className="footer-link text-sm">Tutorials</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">SOCIAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link text-sm">Discord</a></li>
              <li><a href="#" className="footer-link text-sm">YouTube</a></li>
              <li><a href="#" className="footer-link text-sm">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Trustpilot */}
        <div className="text-center mb-8">
          <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
            Trustpilot Reviews
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6">
          {/* Payment Icons */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">₹</span>
            </div>
            <div className="px-3 py-1 bg-muted rounded text-xs text-muted-foreground font-semibold">
              UPI
            </div>
            <div className="px-3 py-1 bg-[#1a1f71] rounded text-xs text-white font-semibold">
              VISA
            </div>
            <div className="px-3 py-1 bg-muted rounded text-xs text-muted-foreground font-semibold">
              RuPay
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-muted-foreground text-xs">
            Copyright 2025 © Codenest Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
