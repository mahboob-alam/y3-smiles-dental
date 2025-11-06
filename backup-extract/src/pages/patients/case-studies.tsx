import React from "react";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FileText, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "gatsby";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";


export const Head = () => (
  <SEO 
    title="Case studies | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <FileText className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Detailed case studies showcasing comprehensive treatment journeys are being prepared.
              These will include step-by-step treatment processes and clinical outcomes
              from our professional dental practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/patients/smile-gallery">View Smile Gallery</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Dedicated to successful patient outcomes</span>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;