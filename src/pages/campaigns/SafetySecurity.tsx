import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import safetyImage from "@/assets/campaigns/safety.png";

const SafetySecurity = () => {
  return (
    <CampaignPageLayout
      campaignId="safety-security"
      campaignName="Safety & Security"
      heroImage={safetyImage}
      title="Make our streets safe again. Demand accountable policing and stronger community safety measures."
      intro="Citizens deserve to feel safe in their homes and neighbourhoods. We want measurable action on policing, faster responses, and community-led safety initiatives."
      problemStatement="Rising crime, slow police response times, and poorly resourced community policing forums leave citizens exposed. Communities are taking security into their own hands because official systems are failing. We demand transparent policing metrics and funded local safety programmes."
      demands={[
        {
          title: "Publish police response times",
          description: "by district with quarterly public reports and accountability measures."
        },
        {
          title: "Fund community policing",
          description: "and neighbourhood watch programmes with equipment, training and support."
        },
        {
          title: "Introduce independent oversight",
          description: "for policing failures with clear consequences for systemic underperformance."
        }
      ]}
    />
  );
};

export default SafetySecurity;
