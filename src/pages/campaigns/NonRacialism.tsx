import { PetitionForm } from "@/components/PetitionForm";
import { SocialShare } from "@/components/SocialShare";
import nonracialImage from "@/assets/campaigns/nonracial.jpg";

const NonRacialism = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nonracialImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary-dark/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center text-white z-10">
          <h1 className="mb-6 max-w-4xl mx-auto">
            Stand against politics that divide. Protect equal treatment under the law for all South Africans.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Politics that pit communities against each other weaken our country. We want politicians 
            and public institutions to commit to non-racial, non-discriminatory policies and rhetoric.
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
                Divisive language and racially charged policies erode trust and create instability. 
                When leaders use race as a political tool, communities suffer and national unity 
                fractures. We demand clear commitments to equal treatment and accountability for 
                inflammatory rhetoric.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-6">What We Demand</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Non-racial policy reviews</strong> across all 
                    government departments to eliminate discriminatory practices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Public condemnations</strong> and remedial action 
                    required for politicians who use racist rhetoric.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Education programmes</strong> that promote unity, 
                    civic values and mutual respect in schools and communities.
                  </span>
                </li>
              </ul>
            </section>

            <SocialShare campaignId="non-racialism" campaignName="Non-Racialism" />
          </div>

          {/* Petition Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PetitionForm campaignId="non-racialism" campaignName="Non-Racialism" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonRacialism;
