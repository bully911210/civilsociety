import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/CampaignCard";
import { SEO } from "@/components/SEO";
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
      <section className="relative flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/hero-background.png)`, aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 pt-24 pb-16 text-center text-white z-10" style={{ maxWidth: '1200px' }}>
          <div className="mx-auto" style={{ maxWidth: '680px' }}>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              South Africa Is in a Crime War.<br />
              Stand With the Citizens Fighting Back.
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-dark font-semibold h-[52px] px-8">
                <Link to="/contribute">Join the Movement</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-semibold h-[52px] px-8">
                <Link to="/campaigns">See Campaigns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero - Safety messaging */}
      <section className="relative flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 pt-24 pb-16 text-center text-white z-10" style={{ maxWidth: '1200px' }}>
          <div className="mx-auto" style={{ maxWidth: '620px' }}>
            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The state has failed. Crime syndicates rule the streets.
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Citizens are under siege. Civil Society South Africa fights for your right to survive, defend yourself and protect your family.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-dark font-semibold h-[52px] px-8">
                <Link to="/contribute">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center" style={{ maxWidth: '1200px' }}>
          <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
              South Africa is not simply unsafe. Violent criminals operate with near total freedom.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Police response times stretch into hours. Criminal networks use military grade weapons. Families are attacked in their homes, on the roads and in public spaces.
              Safety is no longer a basic service. It is a fight for survival.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground mt-6">
              Civil Society South Africa exists to defend the rights of ordinary people to protect themselves when the state cannot.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <h2 className="text-center mb-4 text-4xl font-bold">Core Campaigns</h2>
          <p className="text-center text-muted-foreground text-base mb-12 max-w-2xl mx-auto">
            We fight for legal firearm ownership, tax relief for the enormous cost of private safety, and protection of private security who are the real first responders in most communities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1080px] mx-auto">
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

      {/* Join Our Safety Net */}
      <section className="pt-16 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center" style={{ maxWidth: '1200px' }}>
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <h2 className="mb-8 text-4xl font-bold leading-tight">
              Join our safety net.<br />
              Stand with Civil Society South Africa.
            </h2>
            <div className="flex justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-dark font-semibold h-[52px] px-8">
                <Link to="/contribute">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Home;
