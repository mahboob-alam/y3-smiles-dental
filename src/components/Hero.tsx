import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental-clinic.jpg";
import logo from "@/assets/logo.svg";
import { CheckCircle, Clock, Heart, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight">
                Modern Family
                <span className="block text-primary">
                  Dental Care
                </span>
                <span className="block text-neutral-700 text-3xl md:text-4xl lg:text-5xl">
                  in Broadmeadows
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-neutral-800 leading-relaxed max-w-2xl">
                Comprehensive dental services with same-day emergency appointments,
                kids dental with Medicare CDBS, and flexible payment options for all ages
              </p>
            </div>

            {/* Social Proof Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-neutral-800">All Major Health Funds</span>
                <span className="text-xs text-neutral-600">Accepted</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                <Heart className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-neutral-800">Medicare CDBS</span>
                <span className="text-xs text-neutral-600">Provider</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-neutral-800">Payment Plans</span>
                <span className="text-xs text-neutral-600">Available</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-neutral-800">New Clinic</span>
                <span className="text-xs text-neutral-600">Opening 2025</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="booking" size="xl" asChild className="text-lg px-8 py-6">
                <a href="#contact">Book Your Appointment</a>
              </Button>

              <Button variant="outline" size="xl" asChild className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:03 9022 4442">Call (03) 9022 4442</a>
              </Button>
            </div>

            {/* Credential/Logo Bar */}
            <div className="pt-8">
              <p className="text-sm font-medium text-neutral-600 mb-4 text-center lg:text-left">
                Trusted Payment & Healthcare Partners
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8">
                <div className="flex items-center justify-center p-3 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                  <img
                    src="/afterpay-logo.png"
                    alt="Afterpay"
                    className="h-8 w-auto opacity-70 hover:opacity-100 transition-gentle"
                  />
                </div>
                <div className="flex items-center justify-center p-3 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                  <img
                    src="/hicaps-logo.svg"
                    alt="HiCaps"
                    className="h-8 w-auto opacity-70 hover:opacity-100 transition-gentle"
                  />
                </div>
                <div className="flex items-center justify-center p-3 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                  <img
                    src="/humm-logo.svg"
                    alt="Humm"
                    className="h-8 w-auto opacity-70 hover:opacity-100 transition-gentle"
                  />
                </div>
                <div className="flex items-center justify-center p-3 bg-white rounded-xl shadow-soft border border-neutral-100 hover:shadow-md transition-gentle">
                  <img
                    src="/medicare-logo.svg"
                    alt="Medicare"
                    className="h-8 w-auto opacity-70 hover:opacity-100 transition-gentle"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main Image with Rounded Border */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="Modern Dental Clinic in Broadmeadows - Y3 Smiles Dental"
                  className="w-full h-[600px] lg:h-[700px] object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">12+</div>
                        <div className="text-xs text-neutral-600">Locations</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">Modern</div>
                        <div className="text-xs text-neutral-600">Equipment</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">2025</div>
                        <div className="text-xs text-neutral-600">Opening Soon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;