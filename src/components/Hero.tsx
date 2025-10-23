import React, { useRef, useState } from 'react';
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
      <div className="container mx-auto px-6 relative z-10 py-32">
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

          {/* Key Highlights - with icons and center-aligned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
            <div className="group bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:border-primary/50 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary drop-shadow-lg" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">All Major Health Funds</p>
              <p className="text-sm text-neutral-700 drop-shadow">Accepted</p>
            </div>
            <div className="group bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:border-primary/50 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-primary drop-shadow-lg" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">Medicare CDBS</p>
              <p className="text-sm text-neutral-700 drop-shadow">Eligibility Applies</p>
            </div>
            <div className="group bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:border-primary/50 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-primary drop-shadow-lg" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">Payment Plans</p>
              <p className="text-sm text-neutral-700 drop-shadow">Available</p>
            </div>
            <div className="group bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:border-primary/50 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-primary drop-shadow-lg" />
              </div>
              <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors drop-shadow-md">New Clinic</p>
              <p className="text-sm text-neutral-700 drop-shadow">Opening 2025</p>
            </div>
          </div>

          {/* Credential/Logo Bar - Compact Design with drag-scroll */}
          <div className="pt-4 animate-fade-in-up">
            <p className="text-xs font-medium text-neutral-600 mb-3 text-center lg:text-left uppercase tracking-wide drop-shadow">
              Payments we accept
            </p>
            <DragScrollLogos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Lightweight drag-to-scroll for the insurer/payment logos bar
const DragScrollLogos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!containerRef.current) return;
    setIsDown(true);
    containerRef.current.classList.add('cursor-grabbing');
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    if (!containerRef.current) return;
    setIsDown(false);
    containerRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
    if (!containerRef.current) return;
    setIsDown(false);
    containerRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // scroll-fast factor
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const LogoCard: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="shrink-0 inline-flex items-center justify-center px-5 py-3 bg-white/25 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/40 hover:shadow-lg transition-all duration-200">
      <img
        src={src}
        alt={alt}
        height={32}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-8 w-auto object-contain select-none"
      />
    </div>
  );

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Payment methods and insurers logos"
      className="flex items-center gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar cursor-grab select-none px-1"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <LogoCard src="/afterpay-logo.png" alt="Afterpay" />
      <LogoCard src="/humm-logo.svg" alt="Humm" />
      <LogoCard src="/medicare-logo.svg" alt="Medicare" />
      <LogoCard src="/hicaps.png" alt="HICAPS" />
    </div>
  );
};