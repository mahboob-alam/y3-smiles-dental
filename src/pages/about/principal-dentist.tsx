import React from "react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrincipalDentist from "@/components/PrincipalDentist";
import { Button } from "@/components/ui/button";
import { Link } from "gatsby";
import { Phone, ArrowRight } from "lucide-react";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";

export const Head = () => (
  <SEO 
    title="Principal Dentist | Y3 Smiles Dental"
    description="Meet our Principal Dentist at Y3 Smiles Dental. Learn about experience, philosophy, and clinical interests, and book an appointment."
  />
);

const PrincipalDentistPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Principal Dentist</h1>
            <p className="text-neutral-800 max-w-2xl mx-auto mb-6">
              Get to know our lead clinician and practice principal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="booking" size="xl" asChild className="group">
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  BOOK APPOINTMENT
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about/y3-smiles-dental">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  About Y3 Smiles Dental
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Profile */}
        <PrincipalDentist variant="full" secondaryCta={{ to: "/about/y3-smiles-dental", label: "About Y3 Smiles Dental" }} />
      </main>
      <Footer />
    </div>
  );
};

export default PrincipalDentistPage;
