import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Smile, 
  Users, 
  Award, 
  Heart,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Zap,
  Target,
  ArrowRight
} from "lucide-react";

const Dentures = () => {
  useScrollAnimation();

  const benefits = [
    "Restore chewing function",
    "Improve speech clarity",
    "Enhanced facial support",
    "Boost confidence"
  ];

  const dentureTypes = [
    {
      title: "Complete Dentures",
      description: "Full replacement of all upper or lower teeth",
      icon: Smile,
      features: ["Replace all teeth", "Custom fit", "Natural appearance", "Functional restoration"],
      suitableFor: "Complete tooth loss in upper or lower arch",
      timeline: "4-6 weeks"
    },
    {
      title: "Partial Dentures",
      description: "Replace multiple missing teeth while preserving remaining natural teeth",
      icon: Target,
      features: ["Preserve natural teeth", "Removable option", "Cost-effective", "Prevents shifting"],
      suitableFor: "Multiple missing teeth with healthy remaining teeth",
      timeline: "3-4 weeks"
    },
    {
      title: "Implant-Supported Dentures",
      description: "Dentures secured by dental implants for superior stability",
      icon: Award,
      features: ["Superior stability", "Better chewing", "Prevents bone loss", "More comfortable"],
      suitableFor: "Patients wanting maximum stability and function",
      timeline: "3-6 months"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive examination and discussion of denture options"
    },
    {
      step: "2",
      title: "Impressions & Measurements",
      description: "Precise impressions and bite measurements for custom fabrication"
    },
    {
      step: "3",
      title: "Try-In Appointment",
      description: "Test fit of dentures and make necessary adjustments"
    },
    {
      step: "4",
      title: "Final Delivery",
      description: "Delivery of completed dentures with care instructions"
    },
    {
      step: "5",
      title: "Follow-Up Adjustments",
      description: "Fine-tuning adjustments for optimal comfort and fit"
    }
  ];

  const careInstructions = [
    {
      title: "Daily Cleaning",
      description: "Clean dentures daily with special denture cleanser",
      tips: ["Remove and rinse after eating", "Brush with soft-bristled brush", "Soak overnight in cleanser", "Clean your mouth and gums"]
    },
    {
      title: "Proper Storage",
      description: "Store dentures properly when not wearing them",
      tips: ["Keep moist when not wearing", "Use denture solution or water", "Avoid hot water", "Handle carefully to prevent dropping"]
    },
    {
      title: "Regular Maintenance",
      description: "Professional maintenance for optimal function",
      tips: ["Regular dental checkups", "Professional cleaning", "Adjustment as needed", "Reline when necessary"]
    }
  ];

  const adjustmentPeriod = [
    {
      title: "First Week",
      description: "Initial adjustment period with some discomfort",
      expectations: ["Mild soreness", "Increased saliva", "Speech changes", "Eating soft foods"]
    },
    {
      title: "2-4 Weeks",
      description: "Gradual improvement in comfort and function",
      expectations: ["Reduced discomfort", "Better speech", "Improved chewing", "Increased confidence"]
    },
    {
      title: "1-3 Months",
      description: "Full adaptation to new dentures",
      expectations: ["Natural feel", "Normal speech", "Comfortable eating", "Confident smile"]
    }
  ];

  const faqs = [
    {
      question: "How long do dentures last?",
      answer: "Well-maintained dentures typically last 5-10 years. However, they may need adjustments, relines, or replacement sooner due to normal wear or changes in your mouth."
    },
    {
      question: "Will dentures affect my speech?",
      answer: "Initially, you may experience some speech changes as you adjust to dentures. With practice and time, most patients return to normal speech patterns within a few weeks."
    },
    {
      question: "What can I eat with dentures?",
      answer: "Start with soft foods and gradually introduce firmer foods as you adjust. Avoid very hard, sticky, or chewy foods that could dislodge or damage dentures."
    },
    {
      question: "Are dentures comfortable?",
      answer: "Modern dentures are much more comfortable than in the past. There's an adjustment period, but most patients adapt well. Proper fit and regular adjustments ensure comfort."
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
              <Smile className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Dentures
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Custom-made dentures that restore your smile, speech, and chewing function. 
                Modern, comfortable solutions for missing teeth that look and feel natural.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">BOOK CONSULTATION</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Types of Dentures */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Dentures
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer various denture options to meet your specific needs and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dentureTypes.map((type, index) => {
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
                        Timeline: {type.timeline}
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
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-neutral-600">
                  Get answers to common questions about dentures.
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
                Restore Your Smile & Confidence
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Don't let missing teeth hold you back. Modern dentures can restore your 
                ability to eat, speak, and smile with confidence.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE DENTURE CONSULTATION
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
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

export default Dentures;