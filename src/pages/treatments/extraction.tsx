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
  Scissors,
  Shield,
  Clock,
  Heart,
  CheckCircle,
  Users,
  Star,
  Award,
  AlertTriangle,
  Zap,
  ArrowRight
} from "lucide-react";

const ToothExtraction = () => {
  useScrollAnimation();

  const benefits = [
    "Pain relief",
    "Prevent infection spread",
    "Protect adjacent teeth",
    "Gentle techniques"
  ];

  const extractionTypes = [
    {
      title: "Simple Extraction",
      description: "Removal of visible teeth that can be easily accessed",
      imageSrc: "/tooth-extraction.png",
      features: ["Local anesthesia only", "Quick procedure", "Minimal discomfort", "Fast healing"],
      duration: "15-30 minutes",
      recovery: "3-7 days",
      suitableFor: "Visible, accessible teeth"
    },
    {
      title: "Surgical Extraction",
      description: "Removal of teeth that require surgical access",
      imageSrc: "/tooth-extraction.png",
      features: ["Sedation options", "Surgical access", "Specialised techniques", "Comprehensive care"],
      duration: "30-60 minutes",
      recovery: "7-14 days",
      suitableFor: "Impacted or broken teeth"
    }
  ];

  const reasons = [
    {
      title: "Severe Decay",
      description: "Tooth damage beyond repair with fillings or crowns",
      icon: AlertTriangle
    },
    {
      title: "Advanced Gum Disease",
      description: "Periodontal disease causing tooth loosening",
      icon: Heart
    },
    {
      title: "Overcrowding",
      description: "Creating space for orthodontic treatment",
      icon: Users
    },
    {
      title: "Impacted Teeth",
      description: "Teeth unable to properly erupt into position",
      icon: Shield
    },
    {
      title: "Infection Risk",
      description: "Preventing spread of infection to other areas",
      icon: Zap
    },
    {
      title: "Trauma Damage",
      description: "Teeth damaged beyond repair from injury",
      icon: Star
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & X-Rays",
      description: "Thorough examination and imaging to plan the extraction procedure"
    },
    {
      step: "2",
      title: "Anesthesia Administration",
      description: "Local anesthesia or sedation to ensure comfort during procedure"
    },
    {
      step: "3",
      title: "Tooth Removal",
      description: "Careful extraction using appropriate techniques for your situation"
    },
    {
      step: "4",
      title: "Socket Care",
      description: "Cleaning and preparation of extraction site for optimal healing"
    },
    {
      step: "5",
      title: "Post-Op Instructions",
      description: "Detailed care instructions and follow-up scheduling"
    }
  ];

  const afterCare = [
    {
      title: "First 24 Hours",
      instructions: [
        "Bite on gauze for 30-45 minutes",
        "Apply ice pack for swelling",
        "Avoid spitting or rinsing",
        "Take prescribed medications",
        "Rest and avoid strenuous activity"
      ]
    },
    {
      title: "Days 2-7",
      instructions: [
        "Gentle salt water rinses",
        "Soft food diet",
        "Avoid smoking and alcohol",
        "Continue medications as directed",
        "Keep extraction site clean"
      ]
    },
    {
      title: "Week 2+",
      instructions: [
        "Gradually return to normal diet",
        "Continue good oral hygiene",
        "Attend follow-up appointment",
        "Discuss replacement options",
        "Monitor healing progress"
      ]
    }
  ];

  const replacementOptions = [
    {
      title: "Dental Implants",
      description: "Permanent replacement that preserves jawbone",
      advantages: ["Most natural option", "Preserves bone", "No impact on adjacent teeth", "Long-lasting"]
    },
    {
      title: "Fixed Bridge",
      description: "Permanent restoration attached to adjacent teeth",
      advantages: ["Fixed in place", "Good function", "Natural appearance", "Proven solution"]
    },
    {
      title: "Partial Denture",
      description: "Removable replacement for one or more teeth",
      advantages: ["Cost-effective", "Non-invasive", "Easily adjustable", "Quick solution"]
    }
  ];

  const faqs = [
    {
      question: "Is tooth extraction painful?",
      answer: "The extraction procedure itself is not painful as we use effective local anesthesia. You may feel pressure but not pain. Post-operative discomfort is normal and manageable with prescribed medications."
    },
    {
      question: "How long does it take to heal after an extraction?",
      answer: "Initial healing takes 1-2 weeks, with complete healing of the extraction site taking 3-4 weeks. Bone remodeling continues for several months after extraction."
    },
    {
      question: "What should I eat after tooth extraction?",
      answer: "Stick to soft foods for the first few days: yogurt, soup, smoothies, mashed potatoes. Gradually introduce firmer foods as healing progresses. Avoid hot, spicy, or crunchy foods initially."
    },
    {
      question: "When should I replace an extracted tooth?",
      answer: "It's best to discuss replacement options before extraction. Immediate replacement prevents bone loss and maintains facial structure. We can often place implants immediately or soon after extraction."
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
              <img src="/tooth-extraction.png" alt="Tooth Extraction" className="w-20 h-20 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Tooth Extraction
              </h1>
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                Gentle, comfortable tooth removal when necessary to preserve your oral health.
                Modern techniques and sedation options ensure a pain-free experience.
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

        {/* Types of Extractions */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Tooth Extractions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {extractionTypes.map((type, index) => {
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <img src={type.imageSrc} alt={type.title} className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {type.title}
                      </CardTitle>
                      <p className="text-neutral-800 leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center text-primary font-medium">
                          <Clock className="w-4 h-4 mr-2" />
                          {type.duration}
                        </div>
                        <div className="flex items-center text-green-600 font-medium">
                          <Heart className="w-4 h-4 mr-2" />
                          {type.recovery}
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

        {/* FAQ Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-neutral-800">
                  Get answers to common questions about tooth extraction.
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
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Gentle, Professional Extractions
              </h2>
              <p className="text-lg text-neutral-800 mb-8">
                When tooth extraction is necessary, trust our experienced team to provide
                comfortable, professional care with comprehensive aftercare support.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  BOOK ONLINE
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

export default ToothExtraction;