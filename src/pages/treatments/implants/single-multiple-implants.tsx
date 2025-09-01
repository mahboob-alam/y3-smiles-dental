import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Smile, 
  Users, 
  Award, 
  Heart,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  ArrowRight
} from "lucide-react";

const SingleMultipleImplantsPage = () => {
  const benefits = [
    "Natural look and feel",
    "Permanent solution",
    "Preserves jawbone",
    "No impact on adjacent teeth"
  ];

  const singleImplantBenefits = [
    {
      title: "Preserve Adjacent Teeth",
      description: "Unlike bridges, no need to alter healthy neighboring teeth",
      icon: Shield
    },
    {
      title: "Natural Function",
      description: "Chew and speak naturally with implant-supported teeth",
      icon: Smile
    },
    {
      title: "Long-lasting",
      description: "With proper care, implants can last a lifetime",
      icon: Award
    },
    {
      title: "Bone Preservation",
      description: "Stimulates jawbone to prevent bone loss",
      icon: Heart
    }
  ];

  const multipleOptions = [
    {
      title: "Individual Implants",
      description: "Each missing tooth replaced with its own implant",
      suitable: "2-3 missing teeth in different areas"
    },
    {
      title: "Implant Bridge",
      description: "2-3 implants supporting a bridge of 3-4 teeth",
      suitable: "3-4 consecutive missing teeth"
    },
    {
      title: "Partial Denture",
      description: "Implant-supported removable partial denture",
      suitable: "Multiple missing teeth, budget-conscious"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Planning",
      description: "Comprehensive examination, X-rays, and treatment planning"
    },
    {
      step: "2",
      title: "Implant Placement",
      description: "Surgical placement of titanium implant into jawbone"
    },
    {
      step: "3",
      title: "Healing Period",
      description: "3-6 months for osseointegration (implant-bone fusion)"
    },
    {
      step: "4",
      title: "Abutment Placement",
      description: "Connector piece attached to implant"
    },
    {
      step: "5",
      title: "Crown/Bridge Placement",
      description: "Custom restoration attached for final result"
    }
  ];

  const faqs = [
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last 25+ years or even a lifetime. The crown may need replacement after 10-15 years."
    },
    {
      question: "Are dental implants painful?",
      answer: "The procedure is performed under local anesthesia. Most patients report minimal discomfort, similar to a tooth extraction."
    },
    {
      question: "How much do single/multiple implants cost?",
      answer: "Costs vary based on the number of implants and complexity. We offer flexible payment plans and will provide a detailed estimate during consultation."
    },
    {
      question: "Am I a candidate for dental implants?",
      answer: "Most healthy adults with adequate bone density are candidates. We'll evaluate your specific situation during consultation."
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
                Single & Multiple Dental Implants
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Replace one or more missing teeth with natural-looking, permanent dental implants. 
                Restore your smile, confidence, and ability to eat your favorite foods.
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

        {/* Single Implant Benefits */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Single Implant Benefits
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                When you lose a single tooth, a dental implant is often the best replacement option.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {singleImplantBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Multiple Implant Options */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Multiple Implant Options
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                When replacing multiple teeth, we offer several implant-based solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {multipleOptions.map((option, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-neutral-800 mb-4">
                      {option.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Best for:</h4>
                      <p className="text-sm text-neutral-600">{option.suitable}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Patient Results
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the life-changing results our patients have achieved with dental implants.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                "https://images.pexels.com/photos/6812541/pexels-photo-6812541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                "https://images.pexels.com/photos/6812542/pexels-photo-6812542.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                "https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                "https://images.pexels.com/photos/6812545/pexels-photo-6812545.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                "https://images.pexels.com/photos/6812546/pexels-photo-6812546.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                "https://images.pexels.com/photos/6812547/pexels-photo-6812547.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              ].map((src, index) => (
                <div key={index} className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                  <img 
                    src={src}
                    alt={`Dental implant result ${index + 1} - Before and after transformation`}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The Implant Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-neutral-800 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SingleMultipleImplantsPage;