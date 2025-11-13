import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In production, this would send to backend
      toast({
        title: "Message sent!",
        description: "Thank you — we'll get back to you within 3 working days.",
      });
      (e.target as HTMLFormElement).reset();
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
        title="Contact"
        description="Get in touch with Civil Society SA for media enquiries, volunteer information or general questions. We're here to help."
        path="/contact"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get in touch for media enquiries, volunteer information or general questions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent-dark font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Direct Contacts */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">General Enquiries</p>
                      <a href="mailto:info@civilsocietysa.org.za" className="text-sm text-primary hover:underline">
                        info@civilsocietysa.org.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Press Enquiries</p>
                      <a href="mailto:press@civilsocietysa.org.za" className="text-sm text-primary hover:underline">
                        press@civilsocietysa.org.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Phone</p>
                      <a href="tel:+27210000000" className="text-sm text-primary hover:underline">
                        +27 21 000 0000
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM (SAST)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
