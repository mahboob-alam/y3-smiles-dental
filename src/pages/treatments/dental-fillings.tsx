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
  Bluetooth as Tooth,
  Palette,
  Shield,
  Clock,
  CheckCircle,
  Users,
  Star,
  Award,
  Heart,
  Zap,
  ArrowRight
} from "lucide-react";

const DentalFillings = () => {
  useScrollAnimation();

  const benefits = [
    "Natural tooth appearance",
    "Mercury-free options",
    "Durable restoration",
    "Same-day treatment"
  ];

  const fillingTypes = [
    {
      title: "Composite (Tooth-Coloured) Fillings",
      description: "Modern, aesthetic fillings that blend seamlessly with natural teeth",
      icon: Palette,
      features: ["Natural appearance", "Mercury-free", "Bonds to tooth", "Immediate use"],
      lifespan: "7-10 years",
      suitableFor: "Front and back teeth, visible areas"
    },
    {
      title: "Ceramic Fillings",
      description: "Premium porcelain fillings for superior aesthetics and durability",
      icon: Award,
      features: ["Excellent aesthetics", "Highly durable", "Stain resistant", "Biocompatible"],
      lifespan: "10-15 years",
      suitableFor: "Large restorations, high-stress areas"
    },
    {
      title: "Glass Ionomer Fillings",
      description: "Fluoride-releasing fillings ideal for specific situations",
      icon: Shield,
      features: ["Releases fluoride", "Good for root surfaces", "Chemical bond", "Gentle on teeth"],
      lifespan: "5-7 years",
      suitableFor: "Root cavities, children's teeth"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Diagnosis & Planning",
      description: "Thorough examination and X-rays to assess the extent of decay"
    },
    {
      step: "2",
      title: "Local Anesthesia",
      description: "Comfortable numbing of the area for pain-free treatment"
    },
    {
      step: "3",
      title: "Decay Removal",
      description: "Careful removal of all decayed tooth material"
    },
    {
      step: "4",
      title: "Tooth Preparation",
      description: "Cleaning and preparing the cavity for filling placement"
    },
    {
      step: "5",
      title: "Filling Placement",
      description: "Precise placement and shaping of the filling material"
    },
    {
      step: "6",
      title: "Final Adjustments",
      description: "Bite adjustment and polishing for comfort and function"
    }
  ];

  const signs = [
    {
      title: "Tooth Pain",
      description: "Persistent or sharp pain when biting or chewing",
      icon: Heart
    },
    {
      title: "Sensitivity",
      description: "Sensitivity to hot, cold, or sweet foods and drinks",
      icon: Zap
    },
    {
      title: "Visible Holes",
      description: "Dark spots or visible holes in teeth",
      icon: Tooth
    },
    {
      title: "Food Trapping",
      description: "Food consistently getting stuck in the same spot",
      icon: Clock
    }
  ];

  const afterCare = [
    "Avoid hard foods for 24 hours",
    "Use sensitivity toothpaste if needed",
    "Maintain good oral hygiene",
    "Avoid sticky or chewy foods initially",
    "Contact us if pain persists",
    "Schedule regular checkups"
  ];

  const prevention = [
    "Brush twice daily with fluoride toothpaste",
    "Floss daily to remove plaque between teeth",
    "Limit sugary and acidic foods and drinks",
    "Use mouthwash for additional protection",
    "Regular dental checkups every 6 months",
    "Consider dental sealants for back teeth"
  ];

  const faqs = [
    {
      question: "How long do dental fillings last?",
      answer: "Composite fillings typically last 7-10 years, ceramic fillings 10-15 years, and glass ionomer fillings 5-7 years. Lifespan depends on size, location, and oral hygiene habits."
    },
    {
      question: "Are tooth-coloured fillings as strong as silver fillings?",
      answer: "Modern composite fillings are very strong and suitable for most situations. For very large restorations or high-stress areas, we may recommend ceramic fillings or crowns."
    },
    {
      question: "Is the filling procedure painful?",
      answer: "No, the procedure is performed under local anesthesia, so you won't feel pain. Some mild sensitivity may occur after treatment but typically resolves within a few days."
    },
    {
      question: "Can I eat immediately after getting a filling?",
      answer: "With composite fillings, you can eat immediately as they harden instantly. However, we recommend avoiding very hard foods for 24 hours to allow complete setting."
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
              <Tooth className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Dental Fillings
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Modern, tooth-coloured fillings that restore your teeth's function and appearance.
                Mercury-free options that blend seamlessly with your natural smile.
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
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK APPOINTMENT</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Types of Fillings */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Dental Fillings
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer various filling materials to meet your specific needs and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fillingTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {type.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        Lifespan: {type.lifespan}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <ul className="space-y-2 mb-4">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Best for:</h4>
                        <p className="text-sm text-neutral-600">{type.suitableFor}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Signs You Need a Filling */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Signs You May Need a Filling
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

        {/* After Care & Prevention */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section">
                  <CardHeader className="text-center">
                    <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-neutral-800">
                      After Care Instructions
                    </CardTitle>
                    <p className="text-neutral-600">
                      Follow these guidelines for optimal healing
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {afterCare.map((instruction, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section">
                  <CardHeader className="text-center">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-neutral-800">
                      Prevention Tips
                    </CardTitle>
                    <p className="text-neutral-600">
                      Prevent future cavities with these habits
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {prevention.map((tip, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
                <p className="text-lg text-neutral-600">
                  Get answers to common questions about dental fillings.
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
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Don't Let Cavities Get Worse
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Early treatment of cavities prevents more extensive and expensive procedures.
                Schedule your appointment today for comfortable, effective treatment.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  BOOK FILLING APPOINTMENT
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default DentalFillings;