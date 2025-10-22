import React from "react";
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
  Star,
  Gift,
  Phone,
  Clock,
  CheckCircle,
  Users,
  Award,
  Shield,
  ArrowRight,
  DollarSign,
  Calendar,
  Heart,
  Zap
} from "lucide-react";
import OfferBanner from "@/components/OfferBanner";


export const Head = () => (
  <SEO 
    title="Index | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const SpecialsPage = () => {
  useScrollAnimation();

  const benefits = [
    "Limited Time Offers",
    "Quality Dental Care",
    "Family-Friendly Pricing"
  ];

  const offers = [
    {
      id: 1,
      badge: "New Patient Special",
      title: "Check-Up, Clean & X-Rays",
      price: "$229",
      originalPrice: "$540",
      savings: "Save $311",
      description: "Comprehensive examination, professional clean & necessary X-rays",
      eligibility: "Eligibility Applies",
      icon: Star,
      bgGradient: "from-primary/5 to-primary/10",
      borderColor: "border-primary/20",
      iconColor: "text-primary",
      badgeColor: "bg-primary",
      features: [
        "Comprehensive oral examination",
        "Oral cancer and pathology screening",
        "Gum assessment",
        "Intraoral photos",
        "Intraoral x-rays (as necessary)",
        "Full mouth x-ray (as necessary)",
        "Professional scale and clean",
        "Fluoride treatment",
        "Personalised quote and treatment plan"
      ]
    },
    {
      id: 2,
      badge: "Kids Dental",
      title: "Up to $1,132 FREE with Medicare CDBS",
      price: "FREE*",
      originalPrice: null,
      savings: "100% FREE",
      description: "Comprehensive dental care for eligible children aged 0-17 years",
      eligibility: "Medicare Eligibility Required",
      icon: Gift,
      bgGradient: "from-primary/5 to-primary/10",
      borderColor: "border-primary/20",
      iconColor: "text-primary",
      badgeColor: "bg-primary",
      features: [
        "💳 No out-of-pocket costs — we bulk bill directly to Medicare",
        "🦷 Covers check-ups, cleans, X-rays, fissure seals, fillings, and extractions",
        "📅 Easy appointment booking — just bring your Medicare card",
        "💬 We can check your child’s eligibility instantly in-clinic",
        "😊 Friendly, gentle care designed to make dental visits positive for kids",
        "📍 Available now at Y3 Smiles Dental, Melbourne’s northern suburbs"
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All treatments performed by experienced dental professionals"
    },
    {
      icon: Clock,
      title: "Flexible Appointments",
      description: "Same-day appointments available for urgent dental needs"
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "Welcoming environment suitable for patients of all ages"
    },
    {
      icon: Award,
      title: "Modern Technology",
      description: "State-of-the-art equipment for precise, comfortable treatments"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <img src="/special-offer.png" alt="Special Offers" className="w-20 h-20 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Special Offers
              </h1>
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                Take advantage of our current promotions designed to make quality dental care more accessible and affordable for you and your family.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="booking" size="xl" asChild>
                  <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                    BOOK YOUR APPOINTMENT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="tel:0390224442">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (03) 9022 4442
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Special Offers */}
        <section className="py-16 text-center mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {offers.map((offer) => {
              const IconComponent = offer.icon;
              return (
                <div
                  key={offer.id}
                  className={`relative bg-gradient-to-br ${offer.bgGradient} rounded-2xl border ${offer.borderColor} shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  <div className="relative p-6 md:p-8 flex flex-col flex-grow">
                    {/* Badge & Limited Time */}
                    <div className="flex items-center justify-between mb-6 h-10">
                      <span className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold text-white ${offer.badgeColor}`}>
                        <IconComponent className="w-4 h-4 mr-2" />
                        {offer.badge}
                      </span>
                      <div className="flex items-center text-sm text-neutral-600">
                        <Clock className="w-4 h-4 mr-1" />
                        Limited Time
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="text-center mb-6 h-48">
                      {/* Savings Badge */}
                      <div className="inline-block mb-4">
                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                          {offer.savings}
                        </span>
                      </div>

                      {/* Price Display */}
                      <div className="space-y-2 mb-4">
                        <div className="h-8">
                          {offer.originalPrice && (
                            <p className="text-xl text-neutral-500 line-through">
                              {offer.originalPrice}
                            </p>
                          )}
                        </div>
                        <p className={`font-bold text-primary ${offer.id === 2 ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}`}>
                          {offer.price}
                        </p>
                      </div>

                      {/* Visual Icon */}
                      <div className={`w-20 h-20 mx-auto rounded-full bg-white/50 flex items-center justify-center ${offer.iconColor}`}>
                        <IconComponent className="w-10 h-10" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="h-16 flex items-center justify-center mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-800 text-center leading-tight">
                        {offer.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="h-20 flex items-center justify-center mb-6">
                      <p className="text-neutral-800 text-center leading-relaxed text-sm">
                        {offer.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {offer.features?.map((feat, idx) => (
                        <div key={idx} className="flex items-start text-neutral-800">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-left">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Eligibility */}
                    <div className="h-8 flex items-center justify-center mb-6">
                      <p className="text-xs text-neutral-600 italic text-center">
                        * {offer.eligibility}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    {/* <div className="mt-auto space-y-3">
                                        <Button variant="booking" size="lg" className="w-full" asChild>
                                            <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                                BOOK NOW
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <a href="tel:0390224442">
                                                Call 03 9022 4442
                                            </a>
                                        </Button>
                                    </div> */}

                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-600">
              Offers valid for new and existing patients. Terms and conditions apply.
              Contact us for full details and to check your eligibility.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SpecialsPage;
