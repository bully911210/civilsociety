import { PetitionForm } from "@/components/PetitionForm";
import { SocialShare } from "@/components/SocialShare";
import propertyImage from "@/assets/campaigns/property.jpg";

const PropertyRights = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${propertyImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary-dark/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center text-white z-10">
          <h1 className="mb-6 max-w-4xl mx-auto">
            Protect property owners. Stop arbitrary expropriation without fair compensation.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Property owners — smallholders, homeowners and farmers — are under threat from policies 
            that remove legal protections and leave owners vulnerable. We demand clarity, fairness 
            and protection for property rights.
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
                Recent proposals and local actions threaten to remove property protections without 
                clear compensation frameworks. This creates insecurity, undermines investment and 
                harms livelihoods. Families and small business owners are left vulnerable without 
                due process or fair recourse.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-6">What We Demand</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Transparent legal frameworks</strong> for any land reform that 
                    includes public consultation and parliamentary oversight.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Guarantee fair compensation</strong> and due process for 
                    all property owners affected by government action.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Protect smallholders</strong> and family-owned properties 
                    from being targeted without legitimate public interest justification.
                  </span>
                </li>
              </ul>
            </section>

            <SocialShare campaignId="property-rights" campaignName="Property Rights" />
          </div>

          {/* Petition Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PetitionForm campaignId="property-rights" campaignName="Property Rights" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyRights;
