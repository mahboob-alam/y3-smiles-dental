import React from 'react';
import { Button } from "@/components/ui/button";
import { StaticImage } from "gatsby-plugin-image";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-white pt-32 pb-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight">
                Modern Family
                <span className="block text-primary">
                  Dental Care
                </span>
                <span className="block text-neutral-700 text-2xl md:text-3xl lg:text-4xl">
                  in Broadmeadows
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-lg text-neutral-800 leading-relaxed max-w-2xl">
                Comprehensive dental services with same-day emergency appointments,
                kids dental with Medicare CDBS, and flexible payment options for all ages
              </p>
            </div>

            {/* Key Highlights - 4 Boxed Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-neutral-100 shadow-soft hover:shadow-hover hover-lift">
                <div className="flex items-center gap-4">
                  <img src="/health-insurance.png" alt="All Major Health Funds" className="w-10 h-10" />
                  <div>
                    <p className="font-semibold text-neutral-800">All Major Health Funds</p>
                    <p className="text-sm text-neutral-600">Accepted</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-neutral-100 shadow-soft hover:shadow-hover hover-lift">
                <div className="flex items-center gap-4">
                  <img src="/medicare-logo.svg" alt="Medicare CDBS" className="w-10 h-10" />
                  <div>
                    <p className="font-semibold text-neutral-800">Medicare CDBS</p>
                    <p className="text-sm text-neutral-600">Eligibility Applies</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-neutral-100 shadow-soft hover:shadow-hover hover-lift">
                <div className="flex items-center gap-4">
                  <img src="/payment-plan.png" alt="Payment Plans Available" className="w-10 h-10" />
                  <div>
                    <p className="font-semibold text-neutral-800">Payment Plans</p>
                    <p className="text-sm text-neutral-600">Available</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-neutral-100 shadow-soft hover:shadow-hover hover-lift">
                <div className="flex items-center gap-4">
                  <img src="/dental-clinic.png" alt="New Clinic Opening 2025" className="w-10 h-10" />
                  <div>
                    <p className="font-semibold text-neutral-800">New Clinic</p>
                    <p className="text-sm text-neutral-600">Opening 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="booking" size="xl" asChild className="text-lg px-8 py-6">
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>Book Your Appointment</a>
              </Button>

              <Button variant="outline" size="xl" asChild className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:03 9022 4442">Call (03) 9022 4442</a>
              </Button>
            </div>

            {/* Credential/Logo Bar - Compact Design */}
            <div className="pt-6">
              <p className="text-xs font-medium text-neutral-500 mb-3 text-center lg:text-left uppercase tracking-wide">
                Payments we accept
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center justify-center px-5 py-3 bg-white/80 rounded-lg border border-neutral-100 hover:bg-white transition-gentle">
                  <img
                    src="/afterpay-logo.png"
                    alt="Afterpay"
                    className="h-8 w-auto opacity-100  transition-gentle"
                  />
                </div>
                <div className="flex items-center justify-center px-5 py-3 bg-white/80 rounded-lg border border-neutral-100 hover:bg-white transition-gentle">
                  <img
                    src="/humm-logo.svg"
                    alt="Humm"
                    className="h-8 w-auto opacity-100  transition-gentle"
                  />
                </div>
                <div className="flex items-center justify-center px-5 py-3 bg-white/80 rounded-lg border border-neutral-100 hover:bg-white transition-gentle">
                  <img
                    src="/medicare-logo.svg"
                    alt="Medicare"
                    className="h-8 w-auto opacity-100  transition-gentle"
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
                <StaticImage
                  src="../assets/hero-dental-clinic.jpg"
                  alt="Modern Dental Clinic in Broadmeadows - Y3 Smiles Dental"
                  className="w-full h-[600px] lg:h-[700px]"
                  placeholder="blurred"
                  layout="fullWidth"
                  objectFit="cover"
                />

                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div> */}

                {/* Floating Stats Card */}
                {/* <div className="absolute bottom-6 left-6 right-6">
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
                </div> */}
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