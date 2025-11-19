import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import selfDefenceImage from "@/assets/campaigns/self-defence.png";

const SelfDefence = () => {
  return (
    <CampaignPageLayout
      campaignId="self-defence"
      campaignName="Legal Firearms Save Lives"
      heroImage={selfDefenceImage}
      title="Legal Firearms Save Lives. Government Wants to Take Them Away."
      intro="South Africans face home invasions, hijackings, farm attacks, armed robberies and violent crime at extreme levels. SAPS often arrives late or does not arrive at all. Government is proposing the removal of self defence as a valid reason to own a firearm. This proposal places innocent families in greater danger."
      problemStatement=""
      demands={[
        {
          title: "Stand against this reckless proposal.",
          description: "Protect your right to defend your family."
        }
      ]}
    />
  );
};

export default SelfDefence;
