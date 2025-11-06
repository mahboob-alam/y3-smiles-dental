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
  AlertTriangle,
  Phone,
  Clock,
  Heart,
  CheckCircle,
  Users,
  Star,
  Award,
  Shield,
  Zap,
  ArrowRight,
  TriangleAlert
} from "lucide-react";

const EmergencyDentistry = () => {
  useScrollAnimation();

  const benefits = [
    "Same-day appointments",
    "Immediate pain relief",
    "Urgent care protocols"
  ];

  const emergencyTypes = [
    {
      title: "Severe Tooth Pain",
      description: "Intense, persistent pain that interferes with daily activities",
      imageSrc: "/toothache.png",
      immediateSteps: ["Take over-the-counter pain medication", "Apply cold compress", "Rinse with warm salt water", "Call Us Immediately"],
      urgency: "Immediate"
    },
    {
      title: "Knocked-Out Tooth",
      description: "Tooth completely displaced from its socket due to trauma",
      imageSrc: "/broken-teeth.png",
      immediateSteps: ["Handle tooth by crown only", "Rinse gently if dirty", "Try to reinsert or store in milk", "Seek immediate care"],
      urgency: "Within 30 minutes"
    },
    {
      title: "Broken or Chipped Tooth",
      description: "Fractured tooth causing pain or sharp edges",
      imageSrc: "/broken-teeth.png",
      immediateSteps: ["Save any broken pieces", "Rinse mouth with warm water", "Apply cold compress for swelling", "Cover sharp edges with wax"],
      urgency: "Same day"
    },
    {
      title: "Lost Filling or Crown",
      description: "Restoration has fallen out, exposing sensitive tooth structure",
      imageSrc: "/dental-fillings.png",
      immediateSteps: ["Keep the restoration if possible", "Clean the area gently", "Use temporary dental cement", "Avoid chewing on that side"],
      urgency: "Within 24-48 hours"
    },
    {
      title: "Dental Abscess",
      description: "Serious infection that can spread if left untreated",
      imageSrc: "/dental-abscess.png",
      immediateSteps: ["Rinse with salt water", "Take pain medication", "Apply cold compress", "Seek immediate treatment"],
      urgency: "Immediate"
    },
    {
      title: "Soft Tissue Injury",
      description: "Cuts or injuries to lips, gums, tongue, or cheeks",
      imageSrc: "/toothache.png",
      immediateSteps: ["Clean area with warm water", "Apply pressure to stop bleeding", "Use cold compress for swelling", "Seek care if severe"],
      urgency: "Depends on severity"
    }
  ];

  const preventionTips = [
    {
      title: "Wear Protection",
      description: "Use mouthguards during sports and night guards for grinding",
      icon: Shield
    },
    {
      title: "Avoid Hard Objects",
      description: "Don't chew ice, hard candy, or use teeth as tools",
      icon: AlertTriangle
    },
    {
      title: "Regular Checkups",
      description: "Prevent emergencies with routine dental care",
      icon: Clock
    },
    {
      title: "Good Oral Hygiene",
      description: "Brush and floss daily to prevent infections",
      icon: Heart
    }
  ];

  const whenToCall = [
    "Severe, persistent tooth pain",
    "Facial swelling or fever",
    "Knocked-out or loose tooth",
    "Broken tooth with sharp edges",
    "Lost filling causing pain",
    "Bleeding that won't stop",
    "Signs of infection or abscess",
    "Jaw injury or dislocation"
  ];

  const faqs = [
    {
      question: "What constitutes a dental emergency?",
      answer: "Dental emergencies include severe pain, trauma to teeth or mouth, swelling, bleeding that won't stop, knocked-out teeth, or any condition that requires immediate attention to save a tooth or relieve severe pain."
    },
    {
      question: "What should I do if I knock out a tooth?",
      answer: "Handle the tooth by the crown (not the root), rinse gently if dirty, try to reinsert it, or store in milk. Seek immediate dental care within 30 minutes for the best chance of saving the tooth."
    },
    {
      question: "How quickly can you see me for an emergency?",
      answer: "We prioritize dental emergencies and typically see emergency patients the same day. For severe cases, we can often accommodate immediate appointments."
    },
    {
      question: "What if I have a dental emergency after hours?",
      answer: "Please contact the emergency department at your nearest hospital or an after-hours emergency clinic  for afterhours and emergencies requiring attention to non-dental areas."
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
                Emergency Dentistry
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-6">
                Here When You Need Us Most
              </h1>
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                Dental emergencies often happen when you least expect them — whether it's a toothache that won't ease, a chipped tooth from sport, or an unexpected injury that leaves your smile vulnerable. At Y3 Smiles Dental, our caring team is here to provide fast, professional support in a calm and welcoming environment. Our focus is on relieving pain, protecting your teeth, and helping you feel at ease.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-red-600 mr-3" />
                  <a href="tel:03 9022 4442" className="text-2xl font-bold text-red-800 hover:text-red-900 transition-colors">03 9022 4442</a>
                </div>
                <p className="text-red-700">Same day emergency appointments available</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Emergency Dentistry */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Urgent Dental Care
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    What Is Emergency Dentistry?
                  </h3>
                  <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                    Emergency dentistry provides urgent care when dental problems arise suddenly and require immediate attention. This may include severe pain, dental injuries, or infections that need prompt treatment to protect both your smile and overall health.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Heart className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Pain Relief</h4>
                        <p className="text-neutral-800 text-sm">We understand how overwhelming dental pain can be. Our priority is to assess the situation quickly and provide treatment that brings relief.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Injury Care</h4>
                        <p className="text-neutral-800 text-sm">From broken, chipped, or knocked-out teeth, our team acts fast to repair damage and prevent further complications.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Infection Management</h4>
                        <p className="text-neutral-800 text-sm">In cases of abscess or infection, urgent treatment helps stop the spread and safeguards your health.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-primary mt-8 italic">
                    In short, emergency dentistry is about giving you the care you need, when you need it most.
                  </p>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img
                    src="/emergency-dentistry.jpg"
                    alt="Emergency dental care and pain relief"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Emergencies */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Common Dental Emergencies
              </h2>
              <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                Recognise emergency situations and know what immediate steps to take.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergencyTypes.map((emergency, index) => {
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section flex flex-col h-full" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader className="flex-grow">
                      <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                        <img src={emergency.imageSrc} alt={emergency.title} className="w-8 h-8" />
                      </div>
                      <div className="h-14 flex items-center mb-2">
                        <CardTitle className="text-xl font-bold text-neutral-800">
                          {emergency.title}
                        </CardTitle>
                      </div>
                      <div className="h-20 flex items-start mb-4">
                        <p className="text-neutral-800 leading-relaxed text-sm">
                          {emergency.description}
                        </p>
                      </div>
                      <div className="bg-red-50 rounded-lg px-3 py-2 mb-4">
                        <span className="text-sm font-semibold text-red-700">
                          Urgency: {emergency.urgency}
                        </span>
                      </div>
                    </CardHeader>
                    {/* <CardContent className="mt-auto">
                      <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Immediate Steps:</h4>
                      <ul className="space-y-2">
                        {emergency.immediateSteps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start text-sm text-neutral-800">
                            <div className="w-2 h-2 rounded-full bg-red-500 mr-3 mt-2 flex-shrink-0"></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </CardContent> */}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* When to Call */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  When to Call for Emergency Care
                </h2>
                <p className="text-lg text-neutral-800">
                  Don't hesitate to call if you experience any of these emergency situations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whenToCall.map((situation, index) => (
                  <div key={index} className="flex items-center bg-red-50 border border-red-200 rounded-lg p-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-red-800">{situation}</span>
                  </div>
                ))}
              </div>
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
                  Get answers to common questions about dental emergencies.
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
                  All dental treatments carry potential risks. Please consult with your treating dentist to assess suitability, discuss risks, and understand recovery considerations before proceeding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-24 bg-red-50">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                <a href="tel:03 9022 4442" className="hover:text-primary transition-colors">03 9022 4442</a>
              </h2>
              <p className="text-lg text-neutral-800 mb-8">
                Don't suffer in pain. Our emergency dental services are available when you need them most.
                Call now for immediate assistance and same-day treatment.
              </p>
              <div className="space-y-4">
                <div>
                  <Button variant="cta" size="xl" className="bg-red-600 hover:bg-red-700" asChild>
                    <a href="tel:03 9022 4442">
                      CALL US: 03 9022 4442
                      <Phone className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
                <Button variant="outline" size="lg" asChild>
                  <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                    SCHEDULE NON-URGENT APPOINTMENT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
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

export default EmergencyDentistry;