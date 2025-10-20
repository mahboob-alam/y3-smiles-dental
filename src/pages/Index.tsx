import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import OfferBanner from "@/components/OfferBanner";
import ServiceProcess from "@/components/ServiceProcess";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
// import Testimonials from "@/components/Testimonials";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { locationConfigs } from "@/data/locationData";

const Index = () => {
  useScrollAnimation();
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
