import React, { useState } from 'react';
import { Link } from "gatsby";
import SEO from "@/components/SEO";
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
  Activity,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";


export const Head = () => (
  <SEO 
    title="Wisdom teeth | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const WisdomTeethRemoval = () => {
  useScrollAnimation();
  const [allExpanded, setAllExpanded] = useState(false);

  const benefits = [
    "Prevent overcrowding",
    "Avoid future complications",
    "Reduce infection risk",
    "Maintain oral health"
  ];

  const removalReasons = [
    {
      title: "Impaction",
      description: "Insufficient space for teeth to erupt properly",
      imageSrc: "/wisdom-tooth-removal.png",
      complications: ["Pain and swelling", "Damage to adjacent teeth", "Cyst formation", "Difficult cleaning"]
    },
    {
      title: "Overcrowding",
      description: "Risk of shifting other teeth out of alignment",
      imageSrc: "/wisdom-tooth-removal.png",
      complications: ["Crooked teeth", "Bite problems", "Orthodontic relapse", "Aesthetic concerns"]
    },
    {
      title: "Decay & Gum Disease",
      description: "Difficulty cleaning leads to dental problems",
      imageSrc: "/wisdom-tooth-removal.png",
      complications: ["Cavities", "Gum inflammation", "Bad breath", "Infection spread"]
    },
    {
      title: "Cysts & Tumors",
      description: "Rare but serious complications from impacted teeth",
      imageSrc: "/wisdom-tooth-removal.png",
      complications: ["Jaw damage", "Nerve damage", "Tooth loss", "Facial deformity"]
    }
  ];

  const extractionTypes = [
    {
      title: "Simple Extraction",
      description: "For fully erupted wisdom teeth that can be easily removed",
      features: ["Local anesthesia", "Quick procedure", "Minimal discomfort", "Fast healing"],
      duration: "15-30 minutes per tooth",
      recovery: "3-7 days"
    },
    {
      title: "Surgical Extraction",
      description: "For impacted or partially erupted wisdom teeth",
      features: ["Sedation options", "Surgical access", "Bone removal if needed", "Sutures placed"],
      duration: "30-60 minutes per tooth",
      recovery: "7-14 days"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & X-Rays",
      description: "Comprehensive examination and 3D imaging to assess wisdom tooth position"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Determine the best approach and timing for wisdom tooth removal"
    },
    {
      step: "3",
      title: "Pre-Operative Instructions",
      description: "Detailed preparation guidelines for the day of surgery"
    },
    {
      step: "4",
      title: "Extraction Procedure",
      description: "Comfortable removal using appropriate anesthesia and techniques"
    },
    {
      step: "5",
      title: "Post-Operative Care",
      description: "Comprehensive aftercare instructions and pain management"
    },
    {
      step: "6",
      title: "Follow-Up",
      description: "Monitor healing and remove sutures if necessary"
    }
  ];

  const recoveryTimeline = [
    {
      title: "First 24 Hours",
      description: "Critical period for clot formation and initial healing",
      care: ["Bite on gauze", "Apply ice packs", "Rest and avoid activity", "Take medications", "No spitting or rinsing"]
    },
    {
      title: "Days 2-7",
      description: "Active healing phase with gradual improvement",
      care: ["Gentle salt water rinses", "Soft food diet", "Continue medications", "Light activity only", "Keep area clean"]
    },
    {
      title: "Week 2-4",
      description: "Continued healing and return to normal activities",
      care: ["Normal diet gradually", "Regular oral hygiene", "Follow-up appointment", "Monitor healing", "Return to activities"]
    }
  ];

  const ageConsiderations = [
    {
      title: "Teens (16-19)",
      description: "Ideal time for removal with easier healing",
      advantages: ["Faster healing", "Less complications", "Roots not fully formed", "Better recovery"]
    },
    {
      title: "Young Adults (20-25)",
      description: "Still good candidates with manageable recovery",
      advantages: ["Good healing", "Manageable procedure", "Prevent future problems", "Maintain oral health"]
    },
    {
      title: "Adults (25+)",
      description: "More complex but still beneficial when needed",
      advantages: ["Resolve current problems", "Prevent complications", "Improve oral health", "Professional expertise"]
    }
  ];

  const faqs = [
    {
      question: "When should wisdom teeth be removed?",
      answer: "Wisdom teeth should be removed if they're impacted, causing crowding, difficult to clean, or causing pain. The ideal time is usually in the late teens or early twenties when roots aren't fully formed."
    },
    {
      question: "Is wisdom tooth removal painful?",
      answer: "The procedure itself is not painful due to anesthesia and sedation options. Post-operative discomfort is normal and manageable with prescribed pain medications and proper care."
    },
    {
      question: "How long does recovery take?",
      answer: "Initial healing takes 3-7 days for simple extractions and 7-14 days for surgical extractions. Complete healing of the extraction sites takes 3-4 weeks."
    },
    {
      question: "Do all wisdom teeth need to be removed?",
      answer: "No, wisdom teeth that are healthy, properly positioned, and can be adequately cleaned may not need removal. Regular monitoring is important to assess their condition."
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
              <img src="/wisdom-tooth-removal.png" alt="Wisdom Teeth Removal" className="w-20 h-20 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Wisdom Teeth Removal
              </h1>
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                Expert wisdom tooth extraction to prevent complications and maintain your oral health.
                Comfortable procedures with sedation options for anxious patients.
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
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK WISDOM TOOTH CONSULTATION</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Reasons for Removal */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Common Reasons for Removal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {removalReasons.map((reason, index) => {
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <img src={reason.imageSrc} alt={reason.title} className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {reason.title}
                      </CardTitle>
                      <p className="text-neutral-800 leading-relaxed mb-4">
                        {reason.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Potential Complications:</h4>
                      <ul className="space-y-2">
                        {reason.complications.map((complication, complicationIndex) => (
                          <li key={complicationIndex} className="flex items-center text-sm text-neutral-800">
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                            {complication}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Recovery Timeline
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recoveryTimeline.map((period, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {period.title}
                    </CardTitle>
                    <p className="text-neutral-800 leading-relaxed mb-4">
                      {period.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {period.care.map((instruction, instructionIndex) => (
                        <li key={instructionIndex} className="flex items-center text-sm text-neutral-800">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-neutral-800 mb-8">
                  Get answers to common questions about wisdom tooth removal.
                </p>
                <button
                  onClick={() => setAllExpanded(!allExpanded)}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {allExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Collapse All
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Expand All
                    </>
                  )}
                </button>
              </div>

              <Accordion 
                type="multiple"
                className="w-full space-y-4"
                defaultValue={allExpanded ? faqs.map((_, idx) => `faq-${idx}`) : []}
                key={`accordion-${allExpanded}`}
              >
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg shadow-soft border-0">
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
              <img src="/wisdom-tooth-removal.png" alt="Wisdom Teeth Removal" className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Don't Wait for Problems to Develop
              </h2>
              <p className="text-lg text-neutral-800 mb-8">
                Early evaluation and timely removal of wisdom teeth can prevent complications
                and ensure easier recovery. Schedule your consultation today.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  SCHEDULE WISDOM TOOTH EVALUATION
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

export default WisdomTeethRemoval;