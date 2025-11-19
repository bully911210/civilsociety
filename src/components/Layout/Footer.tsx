import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto" style={{ maxHeight: '480px' }}>
      <div className="container mx-auto px-4 md:px-6 py-16" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <div>
            <h4 className="font-bold text-base mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-base hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-base hover:text-accent transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Campaigns */}
          <div>
            <h4 className="font-bold text-base mb-4">Campaigns</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/campaigns/self-defence" className="text-base hover:text-accent transition-colors">
                  Legal Firearms
                </Link>
              </li>
              <li>
                <Link to="/campaigns/tax-credits" className="text-base hover:text-accent transition-colors">
                  Safety Tax Credits
                </Link>
              </li>
              <li>
                <Link to="/campaigns/private-security" className="text-base hover:text-accent transition-colors">
                  Private Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-base mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contribute" className="text-base hover:text-accent transition-colors">
                  Join
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-base hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">Legal & Contact</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <Link to="/contact" className="text-base hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-base hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-base hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-base hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://facebook.com/civilsocietysa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="https://x.com/civilsocietysa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="X (Twitter)">
                <Twitter className="h-6 w-6" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="https://instagram.com/civilsocietysa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" style={{ width: '24px', height: '24px' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-light/30 text-center">
          <p className="text-base opacity-90">© {new Date().getFullYear()} Civil Society SA. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
