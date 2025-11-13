import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, FileText, Target } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="mb-8">About Civil Society SA</h1>
        
        <div className="space-y-12">
          {/* Mission */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl mb-4">Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To strengthen civic accountability by mobilising citizens, securing signatures, 
                  and pressing for concrete policy and administrative change.
                </p>
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
                  A South Africa where individual rights are protected, public services work, 
                  and politicians are held accountable to the people.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl mb-4">Core Values</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Rights-based:</strong> We prioritise individual rights and rule of law.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Non-partisan:</strong> We hold leaders accountable regardless of party.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Data-responsible:</strong> POPIA compliance and secure handling of supporter data.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Action-driven:</strong> Petitions lead to real follow-up actions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl mb-4">How We Work</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We run focused campaigns with clear demands. Each campaign collects signatures 
                  through short petitions. After a petition reaches threshold, we:
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3">1.</span>
                    <span className="text-lg text-muted-foreground">
                      Deliver the petition to the relevant authority with a public demand schedule.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3">2.</span>
                    <span className="text-lg text-muted-foreground">
                      Escalate through media and targeted advocacy.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3">3.</span>
                    <span className="text-lg text-muted-foreground">
                      Report back to signatories about outcomes and next steps.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark font-bold">
            <Link to="/campaigns">See Our Campaigns</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
