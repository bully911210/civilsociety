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
      <section className="relative flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 pt-24 pb-16 text-center text-white z-10" style={{ maxWidth: '1200px' }}>
          <h1 className="mb-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            {title}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Content - 8 columns */}
          <div className="lg:col-span-8 space-y-8">
            {intro && (
              <section>
                <p className="text-base md:text-lg leading-relaxed text-foreground" style={{ maxWidth: '65ch' }}>
                  {intro}
                </p>
              </section>
            )}
            
            {problemStatement && (
              <section>
                <p className="text-base text-muted-foreground leading-relaxed" style={{ maxWidth: '65ch' }}>
                  {problemStatement}
                </p>
              </section>
            )}

            <section>
              <h2 className="text-4xl mb-6 font-bold">What We Demand</h2>
              <ul className="space-y-4">
                {demands.map((demand, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-base text-muted-foreground" style={{ maxWidth: '65ch' }}>
                      <strong className="text-foreground">{demand.title}</strong> {demand.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <SocialShare campaignId={campaignId} campaignName={campaignName} />
          </div>

          {/* Petition Form Sidebar - 4 columns */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <PetitionForm campaignId={campaignId} campaignName={campaignName} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
