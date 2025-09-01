import { Button } from "@/components/ui/button";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-gentle">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Menu */}
          <div className="flex items-center space-x-6">
            <Navigation />
            <Link to="/" className="flex items-center transition-gentle hover:scale-105">
              <img 
              src={logo} 
              alt="Y3 Smiles Logo" 
              className="h-10 w-auto transition-gentle hover:drop-shadow-lg"
              />
            </Link>
          </div>

          

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a href="tel:(03) 9820 1899" className="hidden md:block text-neutral-600 hover:text-primary transition-gentle font-medium hover:scale-105">
              (03) 9820 1899
            </a>
            <Button variant="cta" asChild>
              <Link to="/contact">BOOK NOW</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;