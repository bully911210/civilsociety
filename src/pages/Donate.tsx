import { Button } from "@/components/ui/button";
import { DollarSign, FileText, Users, Scale } from "lucide-react";

const Donate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="mb-4">Support our work</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Donations fund campaign research, petition delivery, legal reviews and public outreach. 
          We publish an annual financial summary for transparency.
        </p>

        {/* What your donation supports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border border-border">
            <FileText className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Research & Evidence</h3>
            <p className="text-muted-foreground">
              Funding research, data collection, and expert analysis to build strong, evidence-based campaigns.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Community Outreach</h3>
            <p className="text-muted-foreground">
              Supporting grassroots mobilization, petition delivery, and community engagement activities.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <Scale className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Legal Work</h3>
            <p className="text-muted-foreground">
              Paying for legal reviews, submissions to authorities, and advocacy work that holds power accountable.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <DollarSign className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Operations</h3>
            <p className="text-muted-foreground">
              Maintaining our platform, communications systems, and staff needed to run effective campaigns.
            </p>
          </div>
        </div>

        {/* Donation tiers */}
        <div className="bg-accent/10 p-8 rounded-lg mb-12">
          <h2 className="text-2xl mb-6 text-center">Support at your level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">R50</div>
              <h3 className="font-bold mb-2">Coffee & Bandwidth</h3>
              <p className="text-sm text-muted-foreground">Helps pay for ad boost for petitions</p>
            </div>
            <div className="bg-card p-6 rounded-lg border-2 border-primary text-center">
              <div className="text-3xl font-bold text-primary mb-2">R250</div>
              <h3 className="font-bold mb-2">Field Support</h3>
              <p className="text-sm text-muted-foreground">Supports community outreach materials</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">R1000</div>
              <h3 className="font-bold mb-2">Campaign Partner</h3>
              <p className="text-sm text-muted-foreground">Helps fund legal / research work</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-2xl mb-4">Ready to contribute?</h2>
          <p className="mb-6">
            You will be taken to a secure donation form.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark font-bold">
            Make a Donation
          </Button>
        </div>

        {/* Transparency note */}
        <div className="mt-8 p-6 bg-secondary rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Transparency commitment:</strong> We publish donors above R10,000 
            on an annual donors list unless the donor opts for anonymity. All donor information is handled 
            in accordance with POPIA regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
