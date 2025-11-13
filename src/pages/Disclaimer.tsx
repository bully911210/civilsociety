const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">General Information</h2>
            <p>
              The information provided on the Civil Society SA website is for civic action and informational 
              purposes only. It is not intended to be, and should not be construed as, legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">No Legal Advice</h2>
            <p>
              While we strive to provide accurate and up-to-date information about campaigns, policy issues, 
              and civic action, this information is for general guidance only. It does not constitute legal, 
              financial, or professional advice. For specific advice tailored to your situation, please consult 
              with qualified professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Accuracy of Information</h2>
            <p>
              We make every effort to ensure that the information on our website is accurate and current. 
              However, we cannot guarantee that all information is complete, accurate, or up-to-date at all times. 
              Civil Society SA accepts no liability for any errors or omissions in the content provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Campaign Outcomes</h2>
            <p>
              While we work diligently to deliver petitions and advocate for change, we cannot guarantee specific 
              outcomes from any campaign or petition. The success of campaigns depends on numerous factors beyond 
              our control, including government responses, public support, and political circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">External Links</h2>
            <p>
              Our website may contain links to external websites. These links are provided for convenience only. 
              Civil Society SA does not endorse, control, or assume responsibility for the content, privacy policies, 
              or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">No Warranties</h2>
            <p>
              This website and its content are provided "as is" without any warranties, express or implied. 
              Civil Society SA makes no representations or warranties regarding the reliability, accuracy, 
              completeness, or timeliness of any content on this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Civil Society SA shall not be liable for any direct, 
              indirect, incidental, consequential, or punitive damages arising from your use of this website 
              or participation in our campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Changes to Disclaimer</h2>
            <p>
              We reserve the right to modify this disclaimer at any time. Any changes will be posted on this 
              page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Contact</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at:{" "}
              <a href="mailto:info@civilsocietysa.org.za" className="text-primary hover:underline">info@civilsocietysa.org.za</a>
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

export default Disclaimer;
