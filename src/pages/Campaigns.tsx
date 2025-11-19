import { CampaignCard } from "@/components/CampaignCard";
import { SEO } from "@/components/SEO";
import privateSecurityImage from "@/assets/campaigns/private-security.png";
import selfDefenceImage from "@/assets/campaigns/self-defence.png";
import taxCreditsImage from "@/assets/campaigns/tax-credits.png";

const Campaigns = () => {
  return (
    <>
      <SEO 
        title="Campaigns"
        description="Choose Your Fight. Your Voice Matters. Join our campaigns for legal firearms, safety tax credits, and protecting private security."
        path="/campaigns"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="mb-4">Choose Your Fight. Your Voice Matters.</h1>
        <p className="text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl">
          Click a campaign to read the problem, what we demand, and sign the petition. 
          Your signature adds to the collective voice demanding change.
        </p>

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
    </div>
    </>
  );
};

export default Campaigns;
