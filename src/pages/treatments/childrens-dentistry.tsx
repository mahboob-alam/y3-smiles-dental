import React from 'react';
import { Link } from "gatsby";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Baby,
  Heart,
  Shield,
  CheckCircle,
  Users,
  Star,
  Award,
  Clock,
  Gamepad2,
  ArrowRight,
  Smile,
  ChevronDown
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";

const ChildrensDentistry = () => {
  useScrollAnimation();

  const benefits = [
    "Child-friendly environment",
    "Gentle, caring approach",
    "Preventive focus",
    "Early intervention"
  ];

  const services = [
    {
      title: "First Dental Visit",
      description: "Gentle introduction to dental care for children as young as 12 months",
      icon: Baby,
      features: ["Comfortable introduction", "Parent education", "Oral health assessment", "Future planning"],
      ageRange: "12 months - 3 years"
    },
    {
      title: "Preventive Care",
      description: "Regular checkups, cleanings, and fluoride treatments to prevent cavities",
      icon: Shield,
      features: ["Professional cleanings", "Fluoride applications", "Dental sealants", "Oral hygiene education"],
      ageRange: "All ages"
    },
    {
      title: "Cavity Treatment",
      description: "Gentle, effective treatment for childhood cavities using modern techniques",
      icon: Heart,
      features: ["Pain-free procedures", "Tooth-coloured fillings", "Sedation options", "Comfort measures"],
      ageRange: "3+ years"
    },
    {
      title: "Orthodontic Assessment",
      description: "Early evaluation and intervention for bite and alignment issues",
      icon: Smile,
      features: ["Growth monitoring", "Early intervention", "Space maintenance", "Referral coordination"],
      ageRange: "6+ years"
    }
  ];

  const ageGroups = [
    {
      title: "Infants & Toddlers (12 months - 3 years)",
      description: "First dental visits and establishing healthy habits",
      focus: ["First tooth care", "Teething guidance", "Bottle/sippy cup advice", "Thumb sucking prevention"]
    },
    {
      title: "Preschoolers (3-5 years)",
      description: "Building positive dental experiences and preventing cavities",
      focus: ["Regular cleanings", "Fluoride treatments", "Cavity prevention", "Dietary counselling"]
    },
    {
      title: "School Age (6-12 years)",
      description: "Monitoring development and maintaining oral health",
      focus: ["Permanent tooth eruption", "Sealant application", "Orthodontic evaluation", "Sports mouthguards"]
    },
    {
      title: "Teenagers (13+ years)",
      description: "Transitioning to adult dental care with continued support",
      focus: ["Wisdom tooth monitoring", "Orthodontic treatment", "Cosmetic concerns", "Adult transition"]
    }
  ];

  const tips = [
    {
      title: "Start Early",
      description: "First visit by age 1 or within 6 months of first tooth",
      icon: Clock
    },
    {
      title: "Make it Fun",
      description: "Use positive language and make dental visits enjoyable",
      icon: Gamepad2
    },
    {
      title: "Lead by Example",
      description: "Show good oral hygiene habits at home",
      icon: Users
    },
    {
      title: "Regular Visits",
      description: "Schedule checkups every 6 months for optimal health",
      icon: Star
    }
  ];

  const faqs = [
    {
      question: "When should my child first visit the dentist?",
      answer: "We recommend the first visit by age 1 or within 6 months of the first tooth appearing. Early visits help establish good habits and catch problems early."
    },
    {
      question: "How can I prepare my child for their first dental visit?",
      answer: "Read books about dental visits, play 'dentist' at home, use positive language, and avoid sharing your own dental anxieties. We also provide preparation tips and welcome calls before the visit."
    },
    {
      question: "Are dental X-rays safe for children?",
      answer: "Yes, dental X-rays are very safe for children. We use digital X-rays with minimal radiation and only take them when necessary for diagnosis."
    },
    {
      question: "What if my child has dental anxiety?",
      answer: "We specialise in helping anxious children feel comfortable. We use gentle techniques, explain procedures in child-friendly terms, and offer sedation options when necessary."
    },
    {
      question: "When do children need dental sealants?",
      answer: "Sealants are typically recommended when the permanent molars erupt (around ages 6 and 12). They provide excellent protection against cavities in the deep grooves of back teeth."
    },
    {
      question: "How often should children visit the dentist?",
      answer: "Children should visit every 6 months for regular checkups and cleanings, just like adults. Some children with higher cavity risk may need more frequent visits."
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
                Gentle Care for Growing Smiles
              </h1>
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                At Y3 Smiles Dental, we understand how important your child's smile is. Our Children's Dentistry services focus on creating a positive and reassuring experience so kids feel safe, supported, and even excited about visiting the dentist. From their very first tooth through to teenage years, we're here to help them develop healthy habits for life.
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
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK CHILD'S APPOINTMENT</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Children's Dentistry */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Specialised Paediatric Care
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    What Is Children's Dentistry?
                  </h3>
                  <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                    Children's Dentistry is dental care designed specifically for kids' developing teeth and gums. It's about much more than check-ups — it includes prevention, early diagnosis, and family education to support good oral health from an early age. At Y3 Smiles Dental, we combine gentle treatments with guidance for parents to make dental visits stress-free and beneficial.
                  </p>
                  <h4 className="text-2xl font-bold text-neutral-800 mb-6">Why Children's Dentistry Matters</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Comfort First</h4>
                        <p className="text-neutral-800 text-sm">We focus on gentle care that builds confidence in young patients.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Preventative Focus</h4>
                        <p className="text-neutral-800 text-sm">Services such as fluoride treatments, dental sealants, and routine cleanings help protect teeth.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Building Habits</h4>
                        <p className="text-neutral-800 text-sm">We teach kids and families how to care for teeth every day.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Child-Friendly Care</h4>
                        <p className="text-neutral-800 text-sm">Treatments are tailored to suit children's growth and development stages.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Affordable Access</h4>
                        <p className="text-neutral-800 text-sm">Eligible families may be able to use the Child Dental Benefits Schedule (CDBS) to cover certain dental costs.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-primary mt-8 italic">
                    At Y3 Smiles Dental, we're dedicated to helping every child grow up with a strong, healthy smile.
                  </p>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img
                    src="/cdbs.png"
                    alt="Child receiving gentle dental care in a friendly, comfortable environment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        {/* <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Children's Dental Services
              </h2>
              <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                Comprehensive dental care designed specifically for children's unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-neutral-800 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium">
                        <Users className="w-4 h-4 mr-2" />
                        Age Range: {service.ageRange}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-neutral-800">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* Age Groups */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Care by Age Group
              </h2>
              <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                Dental care tailored to each stage of your child's development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ageGroups.map((group, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {group.title}
                    </CardTitle>
                    <p className="text-neutral-800 leading-relaxed mb-4">
                      {group.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {group.focus.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-neutral-800">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Tips */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Tips for Parents
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-800 text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        {/* <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Trusted by Families
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Baby className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-neutral-800">Children Treated</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-neutral-800">Years Experience</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-neutral-800">Happy Kids</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-neutral-800">Cavity Prevention</div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-neutral-800 mb-8">
                  Get answers to common questions about children's dental care.
                </p>
              </div>

              <Accordion 
                type="single"
                className="w-full space-y-4"
              >
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
                  <Shield className="w-5 h-5 mr-2" />
                  Important Information
                </h3>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  All dental treatments carry potential risks. Please consult with your treating dentist to assess suitability, discuss risks, and understand recovery considerations before proceeding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Give Your Child the Best Start
              </h2>
              <p className="text-lg text-neutral-800 mb-8">
                Start your child's journey to lifelong oral health with gentle,
                professional care in a fun, comfortable environment.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  SCHEDULE FIRST VISIT
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

export default ChildrensDentistry;