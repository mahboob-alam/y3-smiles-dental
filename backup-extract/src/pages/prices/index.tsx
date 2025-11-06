import React from "react";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DollarSign, CreditCard, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "gatsby";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";


export const Head = () => (
  <SEO 
    title="Index | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const PricesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <DollarSign className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl font-bold mb-6">Pricing & Payment Options</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              We believe quality dental care should be accessible to everyone. Our comprehensive 
              pricing information and flexible payment options are being finalized to provide 
              you with transparent, affordable dental care solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  Get Pricing Information
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/treatments">View Treatments</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span>Flexible payment plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Insurance accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>Transparent pricing</span>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default PricesPage;