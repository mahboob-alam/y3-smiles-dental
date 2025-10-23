import React from 'react';
import { Button } from "@/components/ui/button";
import { StaticImage } from "gatsby-plugin-image";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import { Shield, CreditCard, Calendar, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-white pt-32 pb-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-8 lg:space-y-12 max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="space-y-4 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight">
              Modern Family
              <span className="block text-primary">
                Dental Care
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl">
                in Broadmeadows
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-lg text-neutral-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Comprehensive dental services with same-day emergency appointments,
              kids dental with Medicare CDBS, and flexible payment options for all ages
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
            <Button variant="booking" size="xl" asChild className="text-lg px-8 py-6">
              <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>Book Your Appointment</a>
            </Button>

            <Button variant="outline" size="xl" asChild className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <a href="tel:03 9022 4442">Call (03) 9022 4442</a>
            </Button>
          </div>

          {/* Hero Image/Video */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Main Image with Rounded Border */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <StaticImage
                  src="../assets/hero-dental-clinic.jpg"
                  alt="Modern Dental Clinic in Broadmeadows - Y3 Smiles Dental"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
                  placeholder="blurred"
                  layout="fullWidth"
                  objectFit="cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Key Highlights - with icons and center-aligned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-100 shadow-soft hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors">All Major Health Funds</p>
              <p className="text-sm text-neutral-600">Accepted</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-100 shadow-soft hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors">Medicare CDBS</p>
              <p className="text-sm text-neutral-600">Eligibility Applies</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-100 shadow-soft hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors">Payment Plans</p>
              <p className="text-sm text-neutral-600">Available</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-100 shadow-soft hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors">New Clinic</p>
              <p className="text-sm text-neutral-600">Opening 2025</p>
            </div>
          </div>

          {/* Credential/Logo Bar - Compact Design */}
          <div className="pt-4 animate-fade-in-up">
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
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;