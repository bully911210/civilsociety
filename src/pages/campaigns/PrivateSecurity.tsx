import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import privateSecurityImage from "@/assets/campaigns/private-security.png";

const PrivateSecurity = () => {
  return (
    <CampaignPageLayout
      campaignId="private-security"
      campaignName="Protect Those Who Protect Us"
      heroImage={privateSecurityImage}
      title="Government Wants to Disarm Private Security. Innocent People Will Die."
      intro="Private security officers respond faster than SAPS and protect millions of people every day. Government's proposed regulations will weaken them by restricting firearms, ammunition, magazines and tactical rifles. Criminals ignore every law. Punishing the law abiding creates victims."
      problemStatement=""
      demands={[
        {
          title: "Stand against",
          description: "the dangerous new private security regulations."
        }
      ]}
    />
  );
};

export default PrivateSecurity;
