import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
  Heart,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Users,
  Star,
  Stethoscope,
  AlertTriangle,
  Zap,
  ArrowRight
} from "lucide-react";

const RootCanalTherapy = () => {
  useScrollAnimation();

  const benefits = [
    "Save your natural tooth",
    "Eliminate pain and infection",
    "Avoid tooth extraction",
    "Restore normal function"
  ];

  const signs = [
    {
      title: "Severe Tooth Pain",
      description: "Intense pain when biting down or applying pressure",
      icon: AlertTriangle
    },
    {
      title: "Temperature Sensitivity",
      description: "Prolonged sensitivity to hot or cold temperatures",
      icon: Zap
    },
    {
      title: "Swelling & Tenderness",
      description: "Swelling in nearby gums or facial areas",
      icon: Heart
    },
    {
      title: "Tooth Discolouration",
      description: "Darkening or discolouration of the affected tooth",
      icon: Stethoscope
    }
  ];

  const process = [
    {
      step: "1",
      title: "Diagnosis & X-Rays",
      description: "Comprehensive examination and imaging to confirm the need for root canal treatment"
    },
    {
      step: "2",
      title: "Local Anesthesia",
      description: "Comfortable numbing of the area to ensure a pain-free procedure"
    },
    {
      step: "3",
      title: "Access Opening",
      description: "Small opening made in the crown of the tooth to access the pulp chamber"
    },
    {
      step: "4",
      title: "Cleaning & Shaping",
      description: "Remove infected pulp and bacteria, then clean and shape the root canals"
    },
    {
      step: "5",
      title: "Filling & Sealing",
      description: "Fill the cleaned canals with biocompatible material and seal the opening"
    },
    {
      step: "6",
      title: "Crown Placement",
      description: "Place a crown to protect and restore the tooth's full function"
    }
  ];

  const myths = [
    {
      myth: "Root canals are extremely painful",
      reality: "Modern techniques make root canals comfortable, often less painful than the toothache itself"
    },
    {
      myth: "It's better to extract the tooth",
      reality: "Saving your natural tooth is almost always the best option for long-term oral health"
    },
    {
      myth: "Root canal treatment causes illness",
      reality: "Root canals are safe and effective, with no scientific evidence linking them to illness"
    },
    {
      myth: "Root canals require many appointments",
      reality: "Most root canals can be completed in 1-2 appointments with modern techniques"
    }
  ];

  const afterCare = [
    "Take prescribed antibiotics if given",
    "Use over-the-counter pain medication as needed",
    "Avoid chewing on treated tooth until crown is placed",
    "Maintain good oral hygiene",
    "Attend follow-up appointments",
    "Get permanent crown placed promptly"
  ];

  const faqs = [
    {
      question: "Is root canal treatment painful?",
      answer: "Modern root canal treatment is typically no more uncomfortable than getting a large filling. We use effective anesthesia and sedation options to ensure your comfort throughout the procedure."
    },
    {
      question: "How long does a root canal take?",
      answer: "Most root canals can be completed in 1-2 appointments, each lasting 60-90 minutes. Complex cases may require additional visits."
    },
    {
      question: "What is the success rate of root canal treatment?",
      answer: "Root canal treatment has a success rate of 85-97%. Most treated teeth can last a lifetime with proper care and a protective crown."
    },
    {
      question: "Do I need a crown after root canal treatment?",
      answer: "Yes, most teeth need a crown after root canal treatment to protect against fracture and restore full function. Back teeth especially require crowns due to chewing forces."
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
              <Heart className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Root Canal Therapy
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Advanced endodontic treatment to save infected or severely damaged teeth.
                Modern, comfortable procedures that eliminate pain and preserve your natural smile.
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
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK ROOT CANAL CONSULTATION</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Signs You Need Root Canal */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Signs You May Need Root Canal Treatment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {signs.map((sign, index) => {
                const IconComponent = sign.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {sign.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {sign.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Myths vs Reality */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Root Canal Myths vs Reality
                </h2>
                <p className="text-lg text-neutral-600">
                  Let's dispel common misconceptions about root canal treatment.
                </p>
              </div>

              <div className="space-y-6">
                {myths.map((item, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Myth
                          </h4>
                          <p className="text-red-600 text-sm">{item.myth}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Reality
                          </h4>
                          <p className="text-green-600 text-sm">{item.reality}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                <p className="text-lg text-neutral-600">
                  Get answers to common questions about root canal therapy.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-soft border-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-lg font-semibold text-neutral-800">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
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
                Don't Let Tooth Pain Control Your Life
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Root canal therapy can eliminate your pain and save your natural tooth.
                Modern techniques make the procedure comfortable and highly successful.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  BOOK NOW
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

export default RootCanalTherapy;