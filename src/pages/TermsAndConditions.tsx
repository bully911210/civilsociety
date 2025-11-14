import { SEO } from "@/components/SEO";

const TermsAndConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions"
        description="Terms and conditions for using the Civil Society SA website and participating in our campaigns."
        path="/terms-and-conditions"
      />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
        <h1 className="mb-6 md:mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg">
            Use of this website indicates acceptance of these Terms and Conditions. Please read them carefully.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Civil Society SA website, you accept and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Petitions and Campaigns</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>By signing petitions, you confirm that all details provided are accurate and truthful</li>
              <li>Our petitions are citizen-driven and non-partisan</li>
              <li>We reserve the right to verify signatures and remove fraudulent or duplicate entries</li>
              <li>Signing a petition grants us permission to include your name in our tally and delivery to authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Donations</h2>
            <p>
              Donations are subject to separate terms and conditions provided at the time of donation. 
              All donations are voluntary and non-refundable unless otherwise stated. Donation receipts 
              will be issued for tax purposes where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide false or misleading information</li>
              <li>Use automated systems to submit multiple signatures</li>
              <li>Engage in any activity that disrupts or interferes with the website</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property 
              of Civil Society SA or its content suppliers and is protected by copyright and intellectual 
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. Civil Society SA is not responsible 
              for the content or privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>
              Civil Society SA, its directors, employees, and affiliates will not be liable for any indirect, 
              incidental, special, or consequential damages arising from your use of this website or participation 
              in our campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">8. Privacy</h2>
            <p>
              Your use of this website is also governed by our Privacy Policy. Please review our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> to understand 
              how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">9. Modifications</h2>
            <p>
              Civil Society SA reserves the right to modify these Terms and Conditions at any time. 
              Changes will be effective immediately upon posting to the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of the Republic of South Africa. 
              Any disputes arising from these terms will be subject to the exclusive jurisdiction of 
              South African courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">11. Contact</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:{" "}
              <a href="mailto:info@civilsocietysa.org.za" className="text-primary hover:underline">info@civilsocietysa.org.za</a>
            </p>
          </section>

          <p className="text-sm pt-6 border-t border-border">
            Last updated: {new Date().toLocaleDateString("en-ZA")}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermsAndConditions;
