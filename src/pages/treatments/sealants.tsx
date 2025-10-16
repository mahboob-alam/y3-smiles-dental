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
  Shield,
  Baby,
  Users,
  Award,
  CheckCircle,
  Star,
  Clock,
  Heart,
  Target,
  Zap,
  ArrowRight
} from "lucide-react";

const PitsAndFissureSealants = () => {
  useScrollAnimation();

  const benefits = [
    "Prevents 80% of cavities",
    "Painless application",
    "Long-lasting protection",
    "Cost-effective prevention"
  ];

  const sealantTypes = [
    {
      title: "Resin-Based Sealants",
      description: "Most common type, providing excellent cavity protection",
      icon: Shield,
      features: ["Excellent adhesion", "Durable protection", "Clear or tooth-coloured", "Easy application"],
      lifespan: "5-10 years",
      suitableFor: "Most patients, especially children"
    },
    {
      title: "Glass Ionomer Sealants",
      description: "Fluoride-releasing sealants for additional protection",
      icon: Star,
      features: ["Releases fluoride", "Good for high-risk patients", "Chemical bond", "Remineralizing effect"],
      lifespan: "3-5 years",
      suitableFor: "High cavity risk, younger children"
    }
  ];

  const idealCandidates = [
    {
      title: "Children & Teens",
      description: "Ages 6-14 when permanent molars erupt",
      icon: Baby,
      details: ["First molars (age 6)", "Second molars (age 12)", "Premolars if needed", "High cavity risk children"]
    },
    {
      title: "Adults at Risk",
      description: "Adults with deep grooves and cavity history",
      icon: Users,
      details: ["Deep tooth grooves", "Previous cavities", "Difficulty cleaning", "High sugar diet"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Tooth Assessment",
      description: "Evaluate which teeth would benefit most from sealant protection"
    },
    {
      step: "2",
      title: "Cleaning",
      description: "Thoroughly clean the tooth surface to ensure proper adhesion"
    },
    {
      step: "3",
      title: "Preparation",
      description: "Etch the tooth surface to create optimal bonding conditions"
    },
    {
      step: "4",
      title: "Sealant Application",
      description: "Apply liquid sealant material into the grooves and pits"
    },
    {
      step: "5",
      title: "Curing",
      description: "Use special light to harden the sealant material"
    },
    {
      step: "6",
      title: "Final Check",
      description: "Ensure proper fit and make any necessary adjustments"
    }
  ];

  const maintenance = [
    "Regular dental checkups every 6 months",
    "Good oral hygiene with brushing and flossing",
    "Avoid chewing ice or hard objects",
    "Professional monitoring of sealant condition",
    "Replacement when worn or damaged",
    "Fluoride use for additional protection"
  ];

  const effectiveness = [
    {
      title: "Cavity Prevention",
      percentage: "80%",
      description: "Reduction in cavities on sealed teeth",
      timeframe: "First 2 years"
    },
    {
      title: "Long-term Protection",
      percentage: "60%",
      description: "Continued protection after 4 years",
      timeframe: "4+ years"
    },
    {
      title: "Cost Savings",
      percentage: "70%",
      description: "Reduction in future dental costs",
      timeframe: "Over lifetime"
    }
  ];

  const faqs = [
    {
      question: "What are dental sealants?",
      answer: "Dental sealants are thin, protective coatings applied to the chewing surfaces of back teeth. They fill in the deep grooves and pits where cavities commonly form, creating a smooth surface that's easier to clean."
    },
    {
      question: "At what age should children get sealants?",
      answer: "Sealants are typically applied when the permanent molars erupt - around age 6 for first molars and age 12 for second molars. The earlier they're applied, the better the protection."
    },
    {
      question: "Are sealants safe?",
      answer: "Yes, dental sealants are completely safe. They've been used successfully for decades and are recommended by the American Dental Association for cavity prevention."
    },
    {
      question: "How long do sealants last?",
      answer: "Sealants typically last 5-10 years, but can last longer with proper care. We check them during regular dental visits and can reapply them if needed."
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
              <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Pits & Fissure Sealants
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Protective coatings for back teeth that prevent 80% of cavities in the most vulnerable areas.
                Simple, painless prevention that saves teeth and money.
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
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK SEALANT APPOINTMENT</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What are Sealants */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Preventive Protection
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Shield Your Teeth from Cavities
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Dental sealants are thin, protective coatings that cover the chewing surfaces
                    of back teeth. They fill in the deep grooves and pits where food particles
                    and bacteria can hide, creating a smooth surface that's much easier to clean
                    and significantly more resistant to decay.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Proven Prevention</h4>
                        <p className="text-neutral-600 text-sm">Reduces cavities by up to 80% in sealed teeth</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Quick Application</h4>
                        <p className="text-neutral-600 text-sm">Painless procedure takes just minutes per tooth</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Cost Effective</h4>
                        <p className="text-neutral-600 text-sm">Prevents expensive restorative treatments</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6812542/pexels-photo-6812542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Dental sealant application showing protective coating on back teeth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Sealants */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Sealants
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {sealantTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
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

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-neutral-600">
                  Get answers to common questions about dental sealants.
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
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Protect Your Family's Smiles
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Give your children (and yourself) the best protection against cavities.
                Sealants are a simple, effective way to prevent dental problems before they start.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  SCHEDULE SEALANT CONSULTATION
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

export default PitsAndFissureSealants;