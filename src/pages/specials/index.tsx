import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Gift, Star, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SpecialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <Gift className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl font-bold mb-6">Special Offers</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              We regularly offer special promotions and packages to make quality dental care 
              more accessible. Our current specials and seasonal offers are being updated. 
              Contact us to learn about available promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  Inquire About Specials
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/treatments">View All Treatments</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Percent className="w-4 h-4 text-primary" />
                <span>Seasonal promotions available</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>New patient specials</span>
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

export default SpecialsPage;