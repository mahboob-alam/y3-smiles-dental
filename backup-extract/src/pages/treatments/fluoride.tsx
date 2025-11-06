import React, { useState } from 'react';
import { Link } from "gatsby";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
  Shield,
  Baby,
  Users,
  Heart,
  CheckCircle,
  Star,
  Award,
  Clock,
  Droplets,
  Zap,
  ArrowRight
} from "lucide-react";

const FluorideTreatments = () => {
  useScrollAnimation();

  const benefits = [
    "Prevents tooth decay",
    "Strengthens enamel",
    "Reverses early decay",
    "Safe and effective"
  ];

  const fluorideTypes = [
    {
      title: "Professional Fluoride Varnish",
      description: "High-concentration fluoride applied directly to teeth",
      imageSrc: "/fluoride-treatments.png",
      features: ["Long-lasting protection", "Easy application", "Pleasant taste", "Immediate effect"],
      duration: "5 minutes",
      frequency: "Every 3-6 months",
      suitableFor: "All ages, high cavity risk"
    },
    {
      title: "Fluoride Foam Treatment",
      description: "Foam application using custom trays for complete coverage",
      imageSrc: "/fluoride-treatments.png",
      features: ["Complete tooth coverage", "Comfortable application", "Various flavors", "Professional strength"],
      duration: "4 minutes",
      frequency: "Every 6 months",
      suitableFor: "Children and adults"
    },
    {
      title: "Prescription Fluoride",
      description: "High-strength fluoride for home use in severe cases",
      imageSrc: "/fluoride-treatments.png",
      features: ["Daily home use", "Maximum protection", "Prescription strength", "Targeted treatment"],
      duration: "Daily use",
      frequency: "As prescribed",
      suitableFor: "High cavity risk, dry mouth"
    }
  ];

  const whoNeedsFluoride = [
    {
      title: "Children & Teens",
      description: "Developing teeth benefit most from fluoride protection",
      imageSrc: "/cdbs.png"
    },
    {
      title: "High Cavity Risk",
      description: "Patients with frequent cavities or poor oral hygiene",
      imageSrc: "/cavities.png"
    },
    {
      title: "Dry Mouth Patients",
      description: "Reduced saliva increases cavity risk",
      imageSrc: "/dry-mouth.png"
    },
    {
      title: "Orthodontic Patients",
      description: "Braces make cleaning difficult, increasing decay risk",
      imageSrc: "/orthodontics.png"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Assessment",
      description: "Evaluate cavity risk and determine appropriate fluoride treatment"
    },
    {
      step: "2",
      title: "Preparation",
      description: "Clean teeth thoroughly before fluoride application"
    },
    {
      step: "3",
      title: "Application",
      description: "Apply fluoride varnish, foam, or gel to all tooth surfaces"
    },
    {
      step: "4",
      title: "Setting Time",
      description: "Allow fluoride to remain on teeth for optimal absorption"
    },
    {
      step: "5",
      title: "Post-Treatment Care",
      description: "Provide instructions for maximizing fluoride benefits"
    }
  ];

  const afterCare = [
    "Avoid eating for 30 minutes",
    "No brushing for 4-6 hours",
    "Avoid hot beverages initially",
    "Drink through a straw if needed",
    "Continue regular oral hygiene",
    "Schedule follow-up treatments"
  ];

  const prevention = [
    "Use fluoride toothpaste daily",
    "Drink fluoridated water",
    "Limit sugary snacks and drinks",
    "Regular dental checkups",
    "Professional fluoride treatments",
    "Good oral hygiene habits"
  ];

  const faqs = [
    {
      question: "Is fluoride treatment safe?",
      answer: "Yes, professional fluoride treatments are completely safe when applied by dental professionals. The amount used is carefully controlled and much less than what would cause any harm."
    },
    {
      question: "How often should I get fluoride treatments?",
      answer: "Most patients benefit from fluoride treatments every 6 months during regular checkups. High-risk patients may need treatments every 3 months."
    },
    {
      question: "Can adults benefit from fluoride treatments?",
      answer: "Absolutely! Adults with high cavity risk, dry mouth, gum recession, or frequent cavities can significantly benefit from professional fluoride treatments."
    },
    {
      question: "What should I avoid after fluoride treatment?",
      answer: "Avoid eating, drinking (except water), and brushing for 30 minutes to 4 hours depending on the type of fluoride used. This allows maximum absorption."
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
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Fluoride Treatments
              </h1>
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                Professional fluoride treatments provide superior cavity protection by strengthening
                tooth enamel and reversing early stages of tooth decay. Safe, effective prevention for all ages.
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
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK FLUORIDE TREATMENT</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Types of Fluoride Treatments */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Fluoride Treatments
              </h2>
              <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                We offer various fluoride treatment options to meet different needs and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fluorideTypes.map((type, index) => {
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <img src={type.imageSrc} alt={type.title} className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {type.title}
                      </CardTitle>
                      <p className="text-neutral-800 leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div className="flex items-center text-primary font-medium">
                          <Clock className="w-4 h-4 mr-1" />
                          {type.duration}
                        </div>
                        <div className="flex items-center text-green-600 font-medium">
                          <Star className="w-4 h-4 mr-1" />
                          {type.frequency}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <ul className="space-y-2 mb-4">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-neutral-800">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Best for:</h4>
                        <p className="text-sm text-neutral-800">{type.suitableFor}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who Needs Fluoride */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Who Benefits from Fluoride Treatments?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whoNeedsFluoride.map((group, index) => {
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <img src={group.imageSrc} alt={group.title} className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {group.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-800 text-sm leading-relaxed">
                        {group.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-neutral-800">
                  Get answers to common questions about fluoride treatments.
                </p>
              </div>

              <Accordion className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-soft border-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-lg font-semibold text-neutral-800">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-neutral-800 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Protect Your Smile Today
              </h2>
              <p className="text-lg text-neutral-800 mb-8">
                Give your teeth the extra protection they deserve with professional fluoride treatments.
                Safe, effective, and proven to prevent cavities.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  SCHEDULE FLUORIDE TREATMENT
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default FluorideTreatments;