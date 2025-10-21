import React from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealthInsuranceTicker from "@/components/HealthInsuranceTicker";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import OfferBanner from "@/components/OfferBanner";
import ServiceProcess from "@/components/ServiceProcess";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { locationConfigs } from "@/data/locationData";

export const Head = () => <SEO />

const IndexPage = () => {
  useScrollAnimation();
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HealthInsuranceTicker />
        <About />
        <Treatments />
        <OfferBanner />
        <ServiceProcess />
        <FAQ />
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
        <GoogleMap
          locationName="Broadmeadows"
          locationData={locationConfigs.broadmeadows.locationData}
          openingHours={locationConfigs.broadmeadows.openingHours}
        />
        <Contact />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
