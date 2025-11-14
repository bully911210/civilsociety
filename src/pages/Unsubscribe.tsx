import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

const Unsubscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In production, this would send to backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsUnsubscribed(true);
      toast({
        title: "Unsubscribed",
        description: "You have been removed from our mailing list.",
      });
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

  if (isUnsubscribed) {
    return (
      <>
        <SEO 
          title="Unsubscribed"
          description="You have been successfully unsubscribed from Civil Society SA communications."
          path="/unsubscribe"
        />
        <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-2xl text-center">
          <h1 className="mb-4">You've been unsubscribed</h1>
          <div className="bg-card p-8 rounded-lg border border-border">
            <p className="text-lg text-muted-foreground mb-6">
              You have been successfully removed from our mailing list. We're sorry to see you go.
            </p>
            <p className="text-muted-foreground mb-8">
              If you change your mind, you can always rejoin our movement at any time.
            </p>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Unsubscribe"
        description="Unsubscribe from Civil Society SA communications."
        path="/unsubscribe"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-2xl">
        <h1 className="mb-4">Unsubscribe</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're sorry to see you go. Enter your email address to unsubscribe from our communications.
        </p>

        <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-lg border border-border space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              By unsubscribing, you will no longer receive:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
              <li>Campaign updates</li>
              <li>Petition notifications</li>
              <li>Event invitations</li>
              <li>Impact reports</li>
            </ul>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            variant="destructive"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Unsubscribing..." : "Unsubscribe"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            You can rejoin at any time by signing up again on our website.
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Unsubscribe;
