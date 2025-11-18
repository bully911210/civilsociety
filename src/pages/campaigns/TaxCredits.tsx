import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import taxCreditsImage from "@/assets/campaigns/tax-credits.png";

const TaxCredits = () => {
  return (
    <CampaignPageLayout
      campaignId="tax-credits"
      campaignName="Support Safety Tax Credits"
      heroImage={taxCreditsImage}
      title="South Africans Should Not Be Punished for Protecting Themselves"
      intro="Families across South Africa pay out of pocket for alarms, cameras, private security and neighbourhood watches because SAPS cannot keep them safe. Citizens are doing the job of the state, yet they receive no financial relief for this essential expense. A petition for Safety Tax Credits goes before Parliament on 9 December 2025."
      problemStatement="SAPS is under-resourced and widely distrusted. Crime levels remain among the highest in the world. Ordinary citizens have been forced to secure their own homes and communities — at their own cost. Government already recognises this principle in other sectors. Medical aid deductions exist because the public health system cannot cope. Safety is no different. South Africans are carrying a state burden and funding services government has failed to deliver. Tax policy needs to reflect this reality."
      demands={[
        {
          title: "Allow tax deductions",
          description: "for private and household safety expenses."
        },
        {
          title: "Recognise that citizens",
          description: "are filling critical gaps left by failing policing structures."
        },
        {
          title: "Support the petition",
          description: "before Parliament's Finance Committee on 9 December 2025."
        },
        {
          title: "Stop financially penalising people",
          description: "for protecting their families."
        }
      ]}
    />
  );
};

export default TaxCredits;
