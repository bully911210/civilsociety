import { ReactNode } from "react";
import { PetitionForm } from "@/components/PetitionForm";
import { SocialShare } from "@/components/SocialShare";
import { SEO } from "@/components/SEO";

interface CampaignPageLayoutProps {
  campaignId: string;
  campaignName: string;
  heroImage: string;
  title: string;
  intro: string;
  problemStatement: string;
  demands: Array<{
    title: string;
    description: string;
  }>;
}

export const CampaignPageLayout = ({
  campaignId,
  campaignName,
  heroImage,
  title,
  intro,
  problemStatement,
  demands,
}: CampaignPageLayoutProps) => {
  return (
    <>
      <SEO 
        title={campaignName}
        description={intro}
        path={`/campaigns/${campaignId}`}
      />
      <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary-dark/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-20 text-center text-white z-10">
          <h1 className="mb-6 max-w-4xl mx-auto">
            {title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl mb-4">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {problemStatement}
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-6">What We Demand</h2>
              <ul className="space-y-4">
                {demands.map((demand, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">{demand.title}</strong> {demand.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <SocialShare campaignId={campaignId} campaignName={campaignName} />
          </div>

          {/* Petition Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PetitionForm campaignId={campaignId} campaignName={campaignName} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
