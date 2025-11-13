const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="mb-8">Privacy Policy (POPIA Compliant)</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Controller</h2>
            <p>Civil Society SA — <a href="mailto:info@civilsocietysa.org.za" className="text-primary hover:underline">info@civilsocietysa.org.za</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Purpose of Processing</h2>
            <p>We process your personal information for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Managing petitions and campaign participation</li>
              <li>Communication and campaign updates</li>
              <li>Processing donations and issuing receipts</li>
              <li>Analytics to improve our services</li>
              <li>Legal compliance and administrative purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Lawful Basis</h2>
            <p>We process your data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> For marketing communications (opt-in required)</li>
              <li><strong>Legitimate interest:</strong> For administrative communication about petitions and campaigns you've signed</li>
              <li><strong>Legal compliance:</strong> Where required by law (e.g., donor records)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. Data Collected</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and surname</li>
              <li>Mobile phone number</li>
              <li>Email address</li>
              <li>Postal code and city</li>
              <li>Campaign interests</li>
              <li>IP address and consent records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. Data Retention</h2>
            <p>
              We retain contact details for supporters who opt in until they unsubscribe or for a maximum of 3 years 
              where lawful. Transactional donor records are retained as required by law (minimum 5 years for tax purposes).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">6. Data Sharing</h2>
            <p>We do not sell your data. We may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Share aggregate or anonymised datasets for research purposes</li>
              <li>Share data with third-party service providers under Data Processing Agreements with appropriate safeguards</li>
              <li>Disclose information when legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">7. Security Measures</h2>
            <p>We protect your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption at rest for sensitive contact fields</li>
              <li>TLS encryption in transit</li>
              <li>Role-based access control</li>
              <li>Regular security audits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">8. Your Rights</h2>
            <p>Under POPIA, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion (subject to legal retention requirements)</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">9. Contact for Data Queries</h2>
            <p>
              For any data protection questions or to exercise your rights, contact our Data Protection Officer at:{" "}
              <a href="mailto:dpo@civilsocietysa.org.za" className="text-primary hover:underline">dpo@civilsocietysa.org.za</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <p className="text-sm pt-6 border-t border-border">
            Last updated: {new Date().toLocaleDateString("en-ZA")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
