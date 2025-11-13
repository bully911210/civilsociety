import { PetitionForm } from "@/components/PetitionForm";
import { SocialShare } from "@/components/SocialShare";
import serviceImage from "@/assets/campaigns/service.jpg";

const ServiceDelivery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary-dark/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center text-white z-10">
          <h1 className="mb-6 max-w-4xl mx-auto">
            Demand functioning services — water, electricity, sanitation and roads.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Citizens pay taxes and expect basic services. When municipalities fail, livelihoods suffer. 
            We demand accountability and immediate fixes for chronic service breakdowns.
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
                Persistent load-shedding, broken water systems and decaying infrastructure affect daily 
                life and economic activity. Communities go without basic services while officials face 
                no consequences. Officials must be held to delivery targets with public accountability 
                and transparent reporting.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-6">What We Demand</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Publish service-delivery scorecards</strong> for 
                    all municipalities with monthly updates accessible to the public.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Rapid-response teams</strong> for water and 
                    sanitation failures with 48-hour maximum response times.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Performance-based penalties</strong> for municipal 
                    leaders with repeated service delivery failures.
                  </span>
                </li>
              </ul>
            </section>

            <SocialShare campaignId="service-delivery" campaignName="Service Delivery" />
          </div>

          {/* Petition Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PetitionForm campaignId="service-delivery" campaignName="Service Delivery" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDelivery;
