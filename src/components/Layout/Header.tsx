import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground">
        Skip to content
      </a>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Civil Society SA logo" className="h-15 w-auto" style={{ height: '60px' }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            <Link to="/campaigns" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Campaigns
            </Link>
            <Link to="/media" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Media
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/join" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Join
            </Link>
            <Link to="/donate" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Donate
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent-dark">
              <Link to="/join">Join the Movement</Link>
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2" aria-label="Mobile navigation">
            <Link 
              to="/campaigns" 
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campaigns
            </Link>
            <Link 
              to="/media" 
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Media
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/join" 
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join
            </Link>
            <Link 
              to="/donate" 
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-dark">
                <Link to="/join">Join the Movement</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
