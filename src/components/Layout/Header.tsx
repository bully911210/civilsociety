import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground">
        Skip to content
      </a>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Civil Society SA" 
              className="h-auto w-[110px] md:w-[140px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <NavLink 
              to="/campaigns" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Campaigns
            </NavLink>
            <NavLink 
              to="/media" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Media
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border" aria-label="Mobile navigation">
            <div className="space-y-1">
              <NavLink 
                to="/campaigns" 
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                activeClassName="bg-secondary text-primary font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Campaigns
              </NavLink>
              <NavLink 
                to="/media" 
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                activeClassName="bg-secondary text-primary font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Media
              </NavLink>
              <NavLink 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                activeClassName="bg-secondary text-primary font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                activeClassName="bg-secondary text-primary font-semibold"
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
          </nav>
        )}
      </div>
    </header>
  );
};
