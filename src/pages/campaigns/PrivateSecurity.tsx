import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import privateSecurityImage from "@/assets/campaigns/private-security.png";

const PrivateSecurity = () => {
  return (
    <CampaignPageLayout
      campaignId="private-security"
      campaignName="Stop the Dangerous Private Security Restrictions"
      heroImage={privateSecurityImage}
      title="Protect Those Who Protect Us"
      intro="South Africans face violent crime every day. In many areas, private security is the only real line of defence when SAPS arrives too late, or not at all. Instead of strengthening these frontline protectors, government is proposing regulations that would disarm them where they are needed most."
      problemStatement="The new Private Security Industry Regulations restrict where officers may carry firearms: estates, schools, malls, public spaces and community patrol zones. These are the very places criminals target with military-grade rifles. The regulations also cap ammunition, limit magazines and ban essential firearms like semi-auto rifles and tactical shotguns. Officers responding to hijackings, armed robberies or farm attacks would be forced to face heavily armed criminals with half-empty pistols. This is not safety regulation. It is dangerous policymaking that puts officers, families and communities at risk."
      demands={[
        {
          title: "Scrap the firearm restrictions",
          description: "that limit private security in high-risk areas."
        },
        {
          title: "Allow officers to carry the equipment",
          description: "required to respond to violent crime."
        },
        {
          title: "Remove magazine and ammunition caps",
          description: "that put trained professionals at a tactical disadvantage."
        },
        {
          title: "Recognise private security",
          description: "as an essential part of South Africa's safety network, not a threat to be over-regulated."
        }
      ]}
    />
  );
};

export default PrivateSecurity;
