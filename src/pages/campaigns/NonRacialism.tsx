import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import nonracialImage from "@/assets/campaigns/nonracial.jpg";

const NonRacialism = () => {
  return (
    <CampaignPageLayout
      campaignId="non-racialism"
      campaignName="Non-Racialism"
      heroImage={nonracialImage}
      title="Stand against politics that divide. Protect equal treatment under the law for all South Africans."
      intro="Politics that pit communities against each other weaken our country. We want politicians and public institutions to commit to non-racial, non-discriminatory policies and rhetoric."
      problemStatement="Divisive language and racially charged policies erode trust and create instability. When leaders use race as a political tool, communities suffer and national unity fractures. We demand clear commitments to equal treatment and accountability for inflammatory rhetoric."
      demands={[
        {
          title: "Non-racial policy reviews",
          description: "across all government departments to eliminate discriminatory practices."
        },
        {
          title: "Public condemnations",
          description: "and remedial action required for politicians who use racist rhetoric."
        },
        {
          title: "Education programmes",
          description: "that promote unity, civic values and mutual respect in schools and communities."
        }
      ]}
    />
  );
};

export default NonRacialism;
