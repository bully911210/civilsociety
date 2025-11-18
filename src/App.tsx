import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Campaigns from "./pages/Campaigns";
import PrivateSecurity from "./pages/campaigns/PrivateSecurity";
import SelfDefence from "./pages/campaigns/SelfDefence";
import TaxCredits from "./pages/campaigns/TaxCredits";
import CivilSociety from "./pages/campaigns/CivilSociety";
import ThankYou from "./pages/campaigns/ThankYou";
import Join from "./pages/Join";
import Donate from "./pages/Donate";
import Contribute from "./pages/Contribute";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Disclaimer from "./pages/Disclaimer";
import EmailConfirmation from "./pages/EmailConfirmation";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main" className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/private-security" element={<PrivateSecurity />} />
              <Route path="/campaigns/self-defence" element={<SelfDefence />} />
              <Route path="/campaigns/tax-credits" element={<TaxCredits />} />
              <Route path="/campaigns/civil-society" element={<CivilSociety />} />
              <Route path="/campaigns/:campaignId/thank-you" element={<ThankYou />} />
              <Route path="/join" element={<Join />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contribute" element={<Contribute />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/email-optin-confirmation" element={<EmailConfirmation />} />
              <Route path="/unsubscribe" element={<Unsubscribe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
