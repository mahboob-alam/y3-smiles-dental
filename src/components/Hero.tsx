import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental-clinic.jpg";
import logo from "@/assets/logo.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="Y3 Dental Logo" 
              className="h-24 md:h-32 w-auto animate-scale-in transition-gentle hover:scale-110 hover:drop-shadow-2xl"
              // className="h-24 md:h-32 w-auto drop-shadow-lg filter brightness-0 invert"
            />
          </div>

          {/* Tagline */}
          <div className="space-y-2 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl font-light">
              Healthy teeth, happy life.
            </p>
            <p className="text-xl md:text-2xl font-light italic">
              Confident smiles, <em className="font-medium">every day</em>
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">BOOK NOW</a>
            </Button>
          </div>

          {/* Partner Logos */}
          {/* <div className="mt-16 flex justify-center items-center space-x-8 opacity-80">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium text-white/90">Humm</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium text-white/90">SuperCare</span>
            </div>
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-white/70 hover:text-white transition-gentle" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;