import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/CampaignCard";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-people-protest.jpg";
import propertyImage from "@/assets/campaigns/property.jpg";
import safetyImage from "@/assets/campaigns/safety.jpg";
import nonracialImage from "@/assets/campaigns/nonracial.jpg";
import serviceImage from "@/assets/campaigns/service.jpg";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/80 to-primary-dark/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-center text-white z-10">
          <h1 className="mb-6 max-w-4xl mx-auto">
            Stand up for your rights. Join thousands demanding accountability.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Civil Society SA is a people-powered movement working for property rights, safety, non-racialism and better service delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark font-bold text-lg px-8">
              <Link to="/join">Join the Movement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8">
              <Link to="/campaigns">See Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground">
            We mobilise citizens, collect signatures, and turn petitions into actionable demands. 
            We operate transparently and protect your data under POPIA.
          </p>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4">Our Campaigns</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Choose the issues that matter most to you. Sign petitions and add your voice to the movement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CampaignCard 
              id="property-rights"
              title="Property Rights"
              excerpt="Protect small property owners and end arbitrary expropriation without compensation."
              image={propertyImage}
              imageAlt="Home with lock"
            />
            <CampaignCard 
              id="safety-security"
              title="Safety & Security"
              excerpt="Make our streets safer and demand accountable policing and better community policing forums."
              image={safetyImage}
              imageAlt="Police presence in a neighbourhood"
            />
            <CampaignCard 
              id="non-racialism"
              title="Non-Racialism"
              excerpt="Stand against divisive politics and protect equal treatment for all citizens."
              image={nonracialImage}
              imageAlt="Hands of different colours clasped"
            />
            <CampaignCard 
              id="service-delivery"
              title="Service Delivery"
              excerpt="Demand functioning services — water, electricity, and sanitation — from elected officials."
              image={serviceImage}
              imageAlt="Pothole-filled road"
            />
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Why Your Voice Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl mb-2">Collective Power</h3>
              <p className="text-primary-foreground/90">
                Your signature joins thousands of others to create political pressure that cannot be ignored.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl mb-2">Simple Action</h3>
              <p className="text-primary-foreground/90">
                Sign in minutes, share with friends, and support with donations. Every action counts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl mb-2">Real Results</h3>
              <p className="text-primary-foreground/90">
                We turn signatures into legally framed demands and public actions that deliver change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-accent-foreground">Ready to act?</h2>
          <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
            Sign a petition or join as a member. Together we can demand the accountability South Africa deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark font-bold text-lg px-8">
              <Link to="/campaigns">Sign a Petition</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8">
              <Link to="/join">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
