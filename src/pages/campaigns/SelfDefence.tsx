import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import selfDefenceImage from "@/assets/campaigns/self-defence.png";

const SelfDefence = () => {
  return (
    <CampaignPageLayout
      campaignId="self-defence"
      campaignName="Protect the Right to Self-Defence"
      heroImage={selfDefenceImage}
      title="Legal Firearms Save Lives"
      intro="South Africa records thousands of violent attacks every year — home invasions, hijackings, armed robberies, assaults. In many cases, SAPS arrives hours later. Legal firearm owners often end up being the last line of defence for their families and communities. Yet government is proposing to eliminate self-defence as a valid reason to own a firearm."
      problemStatement="Removing self-defence from the Firearms Control Act does nothing to stop illegal guns or organised crime. Instead, it targets the law-abiding and disarms innocent families while criminals continue to operate with smuggled rifles and high-capacity weapons. Legal firearm owners already pass background checks, competency training and strict storage rules. They are not the risk. They are often the only barrier between violent criminals and vulnerable households. Taking away their ability to defend themselves is reckless."
      demands={[
        {
          title: "Keep self-defence",
          description: "as a valid legal reason for firearm ownership."
        },
        {
          title: "Reject amendments",
          description: "that disarm responsible citizens while empowering criminals."
        },
        {
          title: "Focus government action",
          description: "on illegal firearms, syndicates and trafficking networks."
        },
        {
          title: "Protect every South African's right",
          description: "to preserve their life when the state cannot."
        }
      ]}
    />
  );
};

export default SelfDefence;
