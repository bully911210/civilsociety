import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import propertyImage from "@/assets/campaigns/property.jpg";

const PropertyRights = () => {
  return (
    <CampaignPageLayout
      campaignId="property-rights"
      campaignName="Property Rights"
      heroImage={propertyImage}
      title="Protect property owners. Stop arbitrary expropriation without fair compensation."
      intro="Property owners — smallholders, homeowners and farmers — are under threat from policies that remove legal protections and leave owners vulnerable. We demand clarity, fairness and protection for property rights."
      problemStatement="Recent proposals and local actions threaten to remove property protections without clear compensation frameworks. This creates insecurity, undermines investment and harms livelihoods. Families and small business owners are left vulnerable without due process or fair recourse."
      demands={[
        {
          title: "Transparent legal frameworks",
          description: "for any land reform that includes public consultation and parliamentary oversight."
        },
        {
          title: "Guarantee fair compensation",
          description: "and due process for all property owners affected by government action."
        },
        {
          title: "Protect smallholders",
          description: "and family-owned properties from being targeted without legitimate public interest justification."
        }
      ]}
    />
  );
};

export default PropertyRights;
