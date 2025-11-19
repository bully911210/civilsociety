import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Shield, Target } from "lucide-react";

const About = () => {
  return (
    <>
      <SEO 
        title="About"
        description="Civil Society South Africa exists because the truth can no longer be ignored. When a state fails to protect its people, citizens must become their own first line of defence."
        path="/about"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
        <h1 className="mb-6 md:mb-8">About Civil Society South Africa</h1>
        
        <div className="mb-8 p-6 bg-secondary rounded-lg">
          <h2 className="text-2xl mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            South Africa is in a state of violent collapse. Crime syndicates operate freely. SAPS is under staffed, poorly managed and unable to protect the public. Families are forced to defend themselves.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Civil Society South Africa exists because the truth can no longer be ignored. When a state fails to protect its people, citizens must become their own first line of defence.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Mission */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl mb-4">Mission</h2>
                <ul className="space-y-2 text-lg text-muted-foreground leading-relaxed">
                  <li>• Defend the right to self defence, including legal firearm ownership</li>
                  <li>• Oppose harmful legislation that weakens citizens and private security</li>
                  <li>• Protect private security officers</li>
                  <li>• Demand Safety Tax Credits</li>
                  <li>• Expose the truth about South Africa's crime emergency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl mb-4">Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A South Africa where citizens are empowered, armed and protected, and no longer abandoned by a government that refuses to confront violent crime.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark font-semibold">
            <Link to="/campaigns">See Our Campaigns</Link>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
