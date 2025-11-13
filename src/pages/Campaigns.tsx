import { CampaignCard } from "@/components/CampaignCard";
import propertyImage from "@/assets/campaigns/property.jpg";
import safetyImage from "@/assets/campaigns/safety.jpg";
import nonracialImage from "@/assets/campaigns/nonracial.jpg";
import serviceImage from "@/assets/campaigns/service.jpg";

const Campaigns = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-4">Campaigns</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Click a campaign to read the problem, what we demand, and sign the petition. 
          Your signature adds to the collective voice demanding change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CampaignCard 
            id="property-rights"
            title="Property Rights"
            excerpt="Protect homeowners and smallholdings from unlawful expropriation."
            image={propertyImage}
            imageAlt="Home with lock"
          />
          <CampaignCard 
            id="safety-security"
            title="Safety & Security"
            excerpt="Demand effective policing and safer communities."
            image={safetyImage}
            imageAlt="Police presence in a neighbourhood"
          />
          <CampaignCard 
            id="non-racialism"
            title="Non-Racialism"
            excerpt="Stand against divisive racial politics."
            image={nonracialImage}
            imageAlt="Hands of different colours clasped"
          />
          <CampaignCard 
            id="service-delivery"
            title="Service Delivery"
            excerpt="Ensure basic services are delivered reliably."
            image={serviceImage}
            imageAlt="Pothole-filled road"
          />
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
