import { CampaignCard } from "@/components/CampaignCard";
import { SEO } from "@/components/SEO";
import privateSecurityImage from "@/assets/campaigns/private-security.png";
import selfDefenceImage from "@/assets/campaigns/self-defence.png";
import taxCreditsImage from "@/assets/campaigns/tax-credits.png";
import civilSocietyImage from "@/assets/campaigns/civil-society.png";

const Campaigns = () => {
  return (
    <>
      <SEO 
        title="Campaigns"
        description="Join our campaigns for property rights, safety & security, non-racialism, and service delivery. Sign petitions and add your voice to the movement."
        path="/campaigns"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="mb-4">Campaigns</h1>
        <p className="text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl">
          Click a campaign to read the problem, what we demand, and sign the petition. 
          Your signature adds to the collective voice demanding change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <CampaignCard 
            id="private-security"
            title="Stop the Dangerous Private Security Restrictions"
            excerpt="Protect Those Who Protect Us"
            image={privateSecurityImage}
            imageAlt="Legal Firearms Save Lives"
          />
          <CampaignCard 
            id="self-defence"
            title="Protect the Right to Self-Defence"
            excerpt="Legal Firearms Save Lives"
            image={selfDefenceImage}
            imageAlt="Legal Firearms Save Lives"
          />
          <CampaignCard 
            id="tax-credits"
            title="Support Safety Tax Credits"
            excerpt="South Africans Should Not Be Punished for Protecting Themselves"
            image={taxCreditsImage}
            imageAlt="CSSA Safety Credits"
          />
          <CampaignCard 
            id="civil-society"
            title="Strengthen Civil Society"
            excerpt="Hold Government Accountable Through Law, Oversight and Public Pressure"
            image={civilSocietyImage}
            imageAlt="Legal Firearms Save Lives"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Campaigns;
