import React from 'react';
import { Button } from "@/components/ui/button";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import { Shield, CreditCard, Calendar, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-white/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: 2-column layout (left content, right booking). Mobile: stacked with reordering */}
          <div className="grid lg:grid-cols-5 gap-8 animate-fade-in-up">
            {/* Left column: headline, cards, payments (order changed on mobile) */}
            <div className="lg:col-span-3 space-y-8 flex flex-col lg:justify-between lg:min-h-[800px]">
              {/* Main Headline - order-1 on mobile */}
              <div className="order-1 space-y-4 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight">
                  <span className="block">Modern Family</span>
                  <span className="block text-primary">Dental Care</span>
                  <span className="block">in Broadmeadows</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg text-neutral-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Comprehensive dental services with same-day emergency appointments,
                  kids dental with Medicare CDBS, and flexible payment options for all ages
                </p>
              </div>

              {/* Key Highlights - 4 compact cards - order-2 on mobile */}
              <div className="order-2 grid grid-cols-2 gap-3">
                <div className="group bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-md hover:shadow-lg hover:border-primary/50 hover:bg-white/30 transition-all duration-300 text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-primary drop-shadow-lg" />
                  </div>
                  <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">All Major Health Funds</p>
                  <p className="text-xs text-neutral-700 drop-shadow">Accepted</p>
                </div>
                <div className="group bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-md hover:shadow-lg hover:border-primary/50 hover:bg-white/30 transition-all duration-300 text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-5 h-5 text-primary drop-shadow-lg" />
                  </div>
                  <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">Medicare CDBS</p>
                  <p className="text-xs text-neutral-700 drop-shadow">Eligibility Applies</p>
                </div>
                <div className="group bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-md hover:shadow-lg hover:border-primary/50 hover:bg-white/30 transition-all duration-300 text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-primary drop-shadow-lg" />
                  </div>
                  <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">Payment Plans</p>
                  <p className="text-xs text-neutral-700 drop-shadow">Available</p>
                </div>
                <div className="group bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-md hover:shadow-lg hover:border-primary/50 hover:bg-white/30 transition-all duration-300 text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5 text-primary drop-shadow-lg" />
                  </div>
                  <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">New Clinic</p>
                  <p className="text-xs text-neutral-700 drop-shadow">Opening 2025</p>
                </div>
              </div>

              {/* Credential/Logo Bar - order-4 on mobile (after booking form) */}
              <div className="order-4 lg:order-3">
                <p className="text-xs font-medium text-neutral-600 mb-3 text-center lg:text-left uppercase tracking-wide drop-shadow">
                  Payments we accept
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <div className="flex items-center justify-center px-4 py-2 bg-white/25 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/40 transition-gentle shadow-md">
                    <img
                      src="/Afterpay.jpg"
                      alt="Afterpay"
                      className="h-6 w-auto opacity-100 transition-gentle"
                    />
                  </div>
                  <div className="flex items-center justify-center px-4 py-2 bg-white/25 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/40 transition-gentle shadow-md">
                    <img
                      src="/humm-logo.svg"
                      alt="Humm"
                      className="h-6 w-auto opacity-100 transition-gentle"
                    />
                  </div>
                  <div className="flex items-center justify-center px-4 py-2 bg-white/25 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/40 transition-gentle shadow-md">
                    <img
                      src="/medicare-logo.svg"
                      alt="Medicare"
                      className="h-6 w-auto opacity-100 transition-gentle"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Embedded Booking Form - order-3 on mobile */}
            <div className="lg:col-span-2 order-3 lg:order-4">
              <div className="bg-white/75 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-4 h-full flex flex-col lg:sticky lg:top-24">
                {/* Intro copy */}
                <div className="flex flex-col justify-center p-2 mb-3">
                  <h3 className="text-lg font-bold text-neutral-800 mb-1">Book online in under 1 minute</h3>
                  <p className="text-sm text-neutral-700">Prefer not to call? Use our secure online booking form to pick a time that works for you.</p>
                </div>
                {/* Booking iframe */}
                <div className="flex-1 min-h-[50vh] lg:min-h-[65vh] rounded-xl overflow-hidden border border-neutral-200 bg-white">
                  <iframe
                    title="Online booking"
                    src="https://app.principle.dental/portal/booking/X0bZkaby3TQEzje3C0Im"
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-2 text-xs text-neutral-600">
                  If the form doesn't load, <a className="text-primary font-semibold" href="https://app.principle.dental/portal/booking/X0bZkaby3TQEzje3C0Im" target="_blank" rel="noopener noreferrer">open the booking portal</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
