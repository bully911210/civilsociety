import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import taxCreditsImage from "@/assets/campaigns/tax-credits.png";

const TaxCredits = () => {
  return (
    <CampaignPageLayout
      campaignId="tax-credits"
      campaignName="Safety Tax Credits"
      heroImage={taxCreditsImage}
      title="We Pay for Our Own Safety. It Is Time Government Recognises It."
      intro="South Africans spend billions on private security because the state cannot protect the public. Citizens are carrying the burden that government has dropped. If medical aid contributions are tax deductible, then private safety costs must also be deductible."
      problemStatement=""
      demands={[
        {
          title: "Support the call",
          description: "for Safety Tax Credits."
        }
      ]}
    />
  );
};

export default TaxCredits;
