import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          <div>
            <h3 className="font-semibold text-base mb-3">About</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Civil Society SA
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-sm hover:text-accent transition-colors">
                  Campaigns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3">Support</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/join" className="text-sm hover:text-accent transition-colors">
                  Join
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-sm hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3">Legal</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3">Connect</h3>

            <p className="text-sm mb-4">
              Contact: <a href="mailto:info@civilsocietysa.org.za" className="hover:text-accent transition-colors">info@civilsocietysa.org.za</a>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/civilsocietysa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/civilsocietysa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/civilsocietysa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-light/30 text-center">
          <p className="text-sm opacity-90">© {new Date().getFullYear()} Civil Society SA. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
