import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
  CheckCircle,
  Crown,
  Heart,
  Phone,
  Shield,
  Star,
  TriangleAlert
} from "lucide-react";
import { Link } from "react-router-dom";

const PeriodontalTherapy = () => {
  useScrollAnimation();

  const benefits = [
    "Prevent tooth loss",
    "Reduce inflammation",
    "Professional care",
    "Long-term health"
  ];

  const treatmentTypes = [
    {
      title: "Gingivitis Treatment",
      description: "In the early stages, gum disease can often be reversed. Gentle cleaning removes plaque and tartar, restoring gum health.",
      imageSrc: "/gingivitis.png"
    },
    {
      title: "Periodontitis Treatment",
      description: "In more advanced cases, treatment may involve cleaning below the gumline, root planing, and in some instances, surgical care to remove infection and support recovery.",
      imageSrc: "/periodontal-therapy.png"
    },
    {
      title: "Maintenance Care",
      description: "Regular check-ups and cleanings help maintain gum health and prevent gum disease from returning.",
      imageSrc: "/dental-care.png"
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
              <img src="/periodontal-therapy.png" alt="Periodontal Therapy" className="w-20 h-20 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Periodontal Therapy
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                At Y3 Smiles Dental, we know healthy gums are the foundation of a confident, lasting smile. Periodontal care is not only about treating problems when they appear — it's about preventing them before they start. Our focus is on keeping your gums healthy, your teeth strong, and your smile at its best.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK CONSULTATION</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Periodontal Treatment */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Gum Health & Prevention
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    What Is Periodontal Treatment?
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Periodontal treatment supports the health of your gums and the bone around your teeth. Gum disease begins with plaque build-up that can cause inflammation and infection if left untreated, potentially leading to tooth loss.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Deep Cleaning</h4>
                        <p className="text-neutral-600 text-sm">Professional deep cleaning removes plaque and tartar buildup</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Scaling & Root Planing</h4>
                        <p className="text-neutral-600 text-sm">Advanced techniques to clean below the gumline and smooth root surfaces</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Ongoing Maintenance</h4>
                        <p className="text-neutral-600 text-sm">Regular care to protect your gums and overall oral health</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Professional periodontal treatment and gum care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Types */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Periodontal Care
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                From prevention to advanced treatment, we provide comprehensive periodontal care tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatmentTypes.map((treatment, index) => {
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <img src={treatment.imageSrc} alt={treatment.title} className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {treatment.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed">
                        {treatment.description}
                      </p>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg italic text-primary max-w-2xl mx-auto">
                Think of periodontal care as the foundation for strong teeth and a healthier smile, now and into the future.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                  <TriangleAlert className="w-5 h-5 mr-2" />
                  Disclaimer
                </h3>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  All dental treatments carry risks. Please consult with your treating dentist to assess suitability and understand risks and recovery considerations before proceeding.
                </p>
              </div>
            </div>
          </div>
        </section>                {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/10 via-white to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Ready to Protect Your Gum Health?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Early intervention is key to maintaining healthy gums and preventing tooth loss. Let our experienced team help you achieve optimal oral health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="booking" size="xl" asChild className="group">
                  <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    BOOK CONSULTATION
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/treatments">View All Treatments</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default PeriodontalTherapy;