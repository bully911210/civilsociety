import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Users, Mail, MessageSquare, DollarSign, FileText, Scale } from "lucide-react";

const Contribute = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("first_name");

    try {
      // In production, this would send to backend
      console.log("Join form submitted:", Object.fromEntries(formData));
      
      toast({
        title: "Welcome to Civil Society SA!",
        description: `Thank you for joining, ${firstName}. Check your email to confirm your subscription.`,
      });

      navigate("/email-optin-confirmation");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contribute"
        description="Join thousands of South Africans who want accountable governance and functioning services. Sign up for free to receive campaign updates and support our work with donations."
        path="/contribute"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Join Section */}
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4">Join Civil Society SA</h1>
          <p className="text-xl text-muted-foreground mb-8 md:mb-12">
            Join thousands of South Africans who want accountable governance and functioning services. 
            Contributor registration is free — opt in for email and SMS updates.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5 bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Sign up for updates</h2>
                  <p className="text-muted-foreground">
                    Receive campaign updates and invitations to events.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">Name *</Label>
                    <Input 
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="last_name">Surname *</Label>
                    <Input 
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder="Your surname"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile (optional)</Label>
                  <Input 
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="+27 82 123 4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City (optional)</Label>
                  <Input 
                    id="city"
                    name="city"
                    type="text"
                    placeholder="e.g., Cape Town"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Your interests (optional)</Label>
                  <div className="space-y-2">
                    {["Property Rights", "Safety & Security", "Non-Racialism", "Service Delivery"].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox id={interest.replace(/\s+/g, "-").toLowerCase()} name="interests" value={interest} />
                        <label htmlFor={interest.replace(/\s+/g, "-").toLowerCase()} className="text-sm">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="opt_in" name="opt_in" required />
                  <label htmlFor="opt_in" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I agree to receive updates via email and SMS *
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent-dark font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join the Movement"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  By joining, you agree to our{" "}
                  <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                  We are POPIA compliant and protect your data.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Why Join?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Quick updates on campaigns you care about</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Invitations to events and volunteer actions</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority access to impact reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Donate Section */}
        <div className="max-w-4xl mx-auto mt-20 pt-20 border-t border-border">
          <h1 className="mb-4">Support Our Work</h1>
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
    </div>
    </>
  );
};

export default Contribute;
