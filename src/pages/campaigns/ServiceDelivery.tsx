import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import serviceImage from "@/assets/campaigns/service.jpg";

const ServiceDelivery = () => {
  return (
    <CampaignPageLayout
      campaignId="service-delivery"
      campaignName="Service Delivery"
      heroImage={serviceImage}
      title="Demand functioning services — water, electricity, sanitation and roads."
      intro="Citizens pay taxes and expect basic services. When municipalities fail, livelihoods suffer. We demand accountability and immediate fixes for chronic service breakdowns."
      problemStatement="Persistent load-shedding, broken water systems and decaying infrastructure affect daily life and economic activity. Communities go without basic services while officials face no consequences. Officials must be held to delivery targets with public accountability and transparent reporting."
      demands={[
        {
          title: "Publish service-delivery scorecards",
          description: "for all municipalities with monthly updates accessible to the public."
        },
        {
          title: "Rapid-response teams",
          description: "for water and sanitation failures with 48-hour maximum response times."
        },
        {
          title: "Performance-based penalties",
          description: "for municipal leaders with repeated service delivery failures."
        }
      ]}
    />
  );
};

export default ServiceDelivery;
