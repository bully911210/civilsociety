import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import civilSocietyImage from "@/assets/campaigns/civil-society.png";

const CivilSociety = () => {
  return (
    <CampaignPageLayout
      campaignId="civil-society"
      campaignName="Strengthen Civil Society"
      heroImage={civilSocietyImage}
      title="Hold Government Accountable Through Law, Oversight and Public Pressure"
      intro="Civil Society SA operates on six strategic pillars: legal enforcement, parliamentary scrutiny, public mobilisation, deep research, national coalitions and international pressure. These pillars work together to force government into lawful, accountable behaviour."
      problemStatement="State failures, unlawful actions, irrational regulations and widespread corruption continue to harm South Africans. Without strong civil oversight, government operates without consequences. Citizens suffer the results: unsafe communities, collapsing institutions and rights violations. To protect constitutional freedoms, civil society must remain strong, independent and active across all fronts — the courts, parliament, media, communities and international bodies."
      demands={[
        {
          title: "Proper legal enforcement",
          description: "against unlawful state actions through the courts."
        },
        {
          title: "Real parliamentary oversight,",
          description: "public consultation and policy transparency."
        },
        {
          title: "National mobilisation",
          description: "to apply social and political pressure where government fails."
        },
        {
          title: "Independent research and monitoring",
          description: "to expose corruption and mismanagement."
        },
        {
          title: "Partnerships with NGOs, safety groups,",
          description: "private security, business and international bodies to form a united front."
        }
      ]}
    />
  );
};

export default CivilSociety;
