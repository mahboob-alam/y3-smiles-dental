import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollToHash } from "@/hooks/useScrollToHash";

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
        <WhyChooseUs />
        <Testimonials />
        <GoogleMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
