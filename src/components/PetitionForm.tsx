import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface PetitionFormProps {
  campaignId: string;
  campaignName: string;
}

export const PetitionForm = ({ campaignId, campaignName }: PetitionFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      first_name: (formData.get("first_name") as string).trim(),
      last_name: (formData.get("last_name") as string).trim(),
      mobile: (formData.get("mobile") as string).trim(),
      email: (formData.get("email") as string).trim(),
      postal_code: (formData.get("postal_code") as string).trim(),
      opt_in: formData.get("opt_in") === "on",
      campaign_id: campaignId,
      lead_source: "website_petition",
      created_at: new Date().toISOString(),
    };

    // Validate South African mobile number
    const mobileRegex = /^(\+27|0)[0-9]{9}$/;
    if (!mobileRegex.test(data.mobile)) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid South African mobile number (e.g., +27 82 123 4567 or 0821234567)",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Canonicalize mobile to +27 format
    if (data.mobile.startsWith("0")) {
      data.mobile = "+27" + data.mobile.substring(1);
    }

    try {
      // In production, this would send to backend/webhook
      console.log("Petition signed:", data);
      
      toast({
        title: "Petition signed!",
        description: `Thank you ${data.first_name}. We've received your signature.`,
      });

      // Navigate to thank you page
      navigate(`/campaigns/${campaignId}/thank-you`, { 
        state: { firstName: data.first_name } 
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-lg border border-border">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Sign this petition</h3>
        <p className="text-muted-foreground">
          We will only use your data to update you about this campaign.
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
            minLength={1}
            maxLength={60}
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
            minLength={1}
            maxLength={60}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobile">Cellphone *</Label>
        <Input 
          id="mobile"
          name="mobile"
          type="tel"
          placeholder="+27 82 123 4567"
          required
          pattern="^(\+27|0)[0-9]{9}$"
        />
        <p className="text-xs text-muted-foreground">Format: +27821234567 or 0821234567</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (optional)</Label>
        <Input 
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          maxLength={255}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="postal_code">Postal code (optional)</Label>
        <Input 
          id="postal_code"
          name="postal_code"
          type="text"
          placeholder="e.g., 7700"
          maxLength={10}
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="opt_in" name="opt_in" required />
        <label
          htmlFor="opt_in"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to receive campaign updates via email and SMS *
        </label>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-accent text-accent-foreground hover:bg-accent-dark font-bold"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing..." : "Sign the Petition"}
      </Button>

      <p className="text-xs text-muted-foreground">
        By signing, you agree to our{" "}
        <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
        We are POPIA compliant and protect your data.
      </p>
    </form>
  );
};
