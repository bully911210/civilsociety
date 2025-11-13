import { useParams, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SocialShare } from "@/components/SocialShare";
import { SEO } from "@/components/SEO";
import { CheckCircle } from "lucide-react";

const campaignNames: Record<string, string> = {
  "property-rights": "Property Rights",
  "safety-security": "Safety & Security",
  "non-racialism": "Non-Racialism",
  "service-delivery": "Service Delivery",
};

const ThankYou = () => {
  const { campaignId } = useParams();
  const location = useLocation();
  const firstName = location.state?.firstName || "there";
  const campaignName = campaignNames[campaignId || ""] || "this campaign";

  return (
    <>
      <SEO 
        title={`Thank You - ${campaignName}`}
        description={`Thank you for signing the ${campaignName} petition. We've received your support and will include your voice in our tally.`}
        path={`/campaigns/${campaignId}/thank-you`}
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
            <CheckCircle className="h-10 w-10 text-accent-foreground" />
          </div>
          <h1 className="mb-4">Thank you — your voice matters</h1>
          <p className="text-xl text-muted-foreground">
            Dankie, {firstName}. Thank you for signing the {campaignName} petition. 
            We've received your support and will include your name in our tally.
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <h2 className="text-2xl mb-6">What happens next?</h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="font-bold text-primary mr-4 text-lg">1.</span>
              <span className="text-lg text-muted-foreground">
                We verify signatures and remove duplicates to ensure accuracy and legitimacy.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-4 text-lg">2.</span>
              <span className="text-lg text-muted-foreground">
                We deliver the petition to the relevant authority and publish the delivery on our tracker.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-4 text-lg">3.</span>
              <span className="text-lg text-muted-foreground">
                We update supporters by SMS and email about follow-up actions and how to help further.
              </span>
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <SocialShare campaignId={campaignId || ""} campaignName={campaignName} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark">
            <Link to="/campaigns">Back to Campaigns</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/join">Become a Contributor</Link>
          </Button>
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            Ons waardeer jou ondersteuning. Together we can demand the accountability South Africa deserves.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ThankYou;
