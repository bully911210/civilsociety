import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/CampaignCard";
import { SEO } from "@/components/SEO";
import { Check } from "lucide-react";
import privateSecurityImage from "@/assets/campaigns/private-security.png";
import selfDefenceImage from "@/assets/campaigns/self-defence.png";
import taxCreditsImage from "@/assets/campaigns/tax-credits.png";

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="South Africa Is in a Crime War. Stand With the Citizens Fighting Back. Civil Society South Africa fights for your right to survive, defend yourself and protect your family."
        path="/"
      />
      <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/hero-background.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 via-primary/50 to-primary-dark/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-20 text-center text-white z-10">
          <h1 className="mb-6 max-w-4xl mx-auto">
            South Africa Is in a Crime War. Stand With the Citizens Fighting Back.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            The state has failed. Crime syndicates rule the streets. Citizens are under siege.
            Civil Society South Africa fights for your right to survive, defend yourself and protect your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark font-semibold">
              <Link to="/contribute">Join the Movement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary font-semibold backdrop-blur-sm">
              <Link to="/campaigns">See Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-10 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
            South Africa is not simply unsafe. Violent criminals operate with near total freedom.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Police response times stretch into hours. Criminal networks use military grade weapons. Families are attacked in their homes, on the roads and in public spaces.
            Safety is no longer a basic service. It is a fight for survival.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground mt-6">
            Civil Society South Africa exists to defend the rights of ordinary people to protect themselves when the state cannot.
          </p>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center mb-4">Core Campaigns</h2>
          <p className="text-center text-muted-foreground text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            We fight for:
          </p>
          <div className="max-w-2xl mx-auto mb-8 space-y-2">
            <p className="text-center text-lg">• Legal firearm ownership</p>
            <p className="text-center text-lg">• Tax relief for the enormous cost of private safety</p>
            <p className="text-center text-lg">• Protection of private security, who are the real first responders in most communities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <CampaignCard 
              id="self-defence"
              title="Legal Firearms Save Lives"
              excerpt="Criminals carry rifles. Government wants citizens defenceless."
              image={selfDefenceImage}
              imageAlt="Legal Firearms Save Lives"
            />
            <CampaignCard 
              id="tax-credits"
              title="Safety Tax Credits"
              excerpt="South Africans pay for their own safety because SAPS cannot."
              image={taxCreditsImage}
              imageAlt="CSSA Safety Credits"
            />
            <CampaignCard 
              id="private-security"
              title="Protect Those Who Protect Us"
              excerpt="Government wants to restrict private security in a crime war zone."
              image={privateSecurityImage}
              imageAlt="Legal Firearms Save Lives"
            />
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center mb-8 md:mb-12">Join Our Safety Net</h2>
          <p className="text-center text-xl mb-8 max-w-3xl mx-auto">
            Stand with Civil Society South Africa. This is not politics. This is survival.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl mb-2">Defend Legal Firearm Ownership</h3>
              <p className="text-primary-foreground/90">
                Legal firearms save lives when the state cannot protect you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl mb-2">Protect Private Security</h3>
              <p className="text-primary-foreground/90">
                They are the real first responders in most communities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl mb-2">Demand Safety Tax Credits</h3>
              <p className="text-primary-foreground/90">
                South Africans should not be punished for protecting themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 bg-accent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="mb-4 text-accent-foreground">Ready to act?</h2>
          <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
            Join our safety net. Stand with Civil Society South Africa. This is not politics. This is survival.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark font-semibold">
              <Link to="/contribute">Join the Movement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              <Link to="/campaigns">See Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
