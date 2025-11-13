import { PetitionForm } from "@/components/PetitionForm";
import { SocialShare } from "@/components/SocialShare";
import safetyImage from "@/assets/campaigns/safety.jpg";

const SafetySecurity = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${safetyImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary-dark/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center text-white z-10">
          <h1 className="mb-6 max-w-4xl mx-auto">
            Make our streets safe again. Demand accountable policing and stronger community safety measures.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Citizens deserve to feel safe in their homes and neighbourhoods. We want measurable action 
            on policing, faster responses, and community-led safety initiatives.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl mb-4">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rising crime, slow police response times, and poorly resourced community policing forums 
                leave citizens exposed. Communities are taking security into their own hands because 
                official systems are failing. We demand transparent policing metrics and funded local 
                safety programmes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-6">What We Demand</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Publish police response times</strong> by district 
                    with quarterly public reports and accountability measures.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Fund community policing</strong> and neighbourhood 
                    watch programmes with equipment, training and support.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Introduce independent oversight</strong> for 
                    policing failures with clear consequences for systemic underperformance.
                  </span>
                </li>
              </ul>
            </section>

            <SocialShare campaignId="safety-security" campaignName="Safety & Security" />
          </div>

          {/* Petition Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PetitionForm campaignId="safety-security" campaignName="Safety & Security" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySecurity;
