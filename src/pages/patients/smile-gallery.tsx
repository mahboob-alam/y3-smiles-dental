import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Camera, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SmileGalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <Camera className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl font-bold mb-6">Smile Gallery</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Our smile gallery showcasing real patient transformations is coming soon. 
              We're carefully curating before and after photos to show you the amazing 
              results we achieve every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  Book Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/patients/case-studies">View Case Studies</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>Join thousands of satisfied patients with beautiful smiles</span>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SmileGalleryPage;