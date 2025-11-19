import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ height: '76px' }}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground">
        Skip to content
      </a>
      
      <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
        <div className="flex h-[76px] items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Civil Society SA" 
              className="h-auto w-[110px] md:w-[140px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <NavLink 
              to="/campaigns" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-bold underline"
            >
              Campaigns
            </NavLink>
            <NavLink 
              to="/media" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-bold underline"
            >
              Media
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-bold underline"
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-bold underline"
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild size="default" className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent-dark font-semibold">
              <Link to="/contribute">Contribute</Link>
            </Button>

            <button
              className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide-in drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-[76px] bg-background border-b border-border shadow-lg" aria-label="Mobile navigation">
            <div className="py-4 px-4">
              <div className="space-y-1">
                <NavLink 
                  to="/campaigns" 
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                  activeClassName="bg-secondary text-primary font-bold underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Campaigns
                </NavLink>
                <NavLink 
                  to="/media" 
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                  activeClassName="bg-secondary text-primary font-bold underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Media
                </NavLink>
                <NavLink 
                  to="/about" 
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                  activeClassName="bg-secondary text-primary font-bold underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                  activeClassName="bg-secondary text-primary font-bold underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Button asChild size="default" className="w-full bg-accent text-accent-foreground hover:bg-accent-dark font-semibold">
                  <Link to="/contribute" onClick={() => setMobileMenuOpen(false)}>Contribute</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
