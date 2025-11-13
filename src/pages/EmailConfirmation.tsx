import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Mail, CheckCircle } from "lucide-react";

const EmailConfirmation = () => {
  return (
    <>
      <SEO 
        title="Email Confirmation"
        description="Thank you for joining Civil Society SA! Please check your email to verify your subscription."
        path="/email-optin-confirmation"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
          <Mail className="h-10 w-10 text-accent-foreground" />
        </div>
        
        <h1 className="mb-4">Check Your Email</h1>
        
        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground mb-4">
            Thank you for joining Civil Society SA! We've sent a confirmation email to verify your subscription.
          </p>
          <p className="text-muted-foreground">
            Please check your inbox and click the confirmation link to complete your registration. 
            Don't forget to check your spam folder if you don't see it within a few minutes.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Didn't receive the email?
          </p>
          <Button variant="outline">
            Resend Confirmation Email
          </Button>
        </div>

        <div className="mt-12">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-dark">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default EmailConfirmation;
