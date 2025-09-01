import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Sparkles, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  Palette,
  Heart,
  ArrowRight
} from "lucide-react";

const DentalVeneersPage = () => {
  const benefits = [
    "Natural appearance",
    "Stain resistant",
    "Minimal tooth preparation",
    "Long-lasting results"
  ];

  const veneerTypes = [
    {
      title: "Porcelain Veneers",
      description: "Premium, ultra-thin ceramic shells for the most natural look",
      features: ["Most natural appearance", "Highly stain resistant", "15-20 year lifespan", "Custom color matching"],
      duration: "2-3 visits"
    },
    {
      title: "Composite Veneers",
      description: "Direct application resin veneers completed in one visit",
      features: ["Same-day treatment", "More affordable option", "Easily repairable", "Conservative approach"],
      duration: "Single visit"
    }
  ];

  const suitableFor = [
    {
      title: "Discolored Teeth",
      description: "Teeth that don't respond to whitening treatments",
      icon: Palette
    },
    {
      title: "Chipped or Worn Teeth",
      description: "Minor chips, cracks, or worn enamel",
      icon: Shield
    },
    {
      title: "Gaps Between Teeth",
      description: "Small spaces or gaps between front teeth",
      icon: Star
    },
    {
      title: "Misshapen Teeth",
      description: "Irregularly shaped or sized teeth",
      icon: Award
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive examination and smile design planning"
    },
    {
      step: "2",
      title: "Preparation",
      description: "Minimal tooth preparation (0.5mm of enamel removal)"
    },
    {
      step: "3",
      title: "Impressions",
      description: "Digital impressions taken for custom veneer fabrication"
    },
    {
      step: "4",
      title: "Temporary Veneers",
      description: "Temporary veneers placed while permanent ones are made"
    },
    {
      step: "5",
      title: "Final Placement",
      description: "Permanent veneers bonded for your new smile"
    }
  ];

  const faqs = [
    {
      question: "How long do dental veneers last?",
      answer: "Porcelain veneers typically last 15-20 years with proper care, while composite veneers last 5-7 years. Regular dental checkups help maintain their longevity."
    },
    {
      question: "Do veneers damage your natural teeth?",
      answer: "Veneers require minimal tooth preparation (about 0.5mm of enamel). This is a conservative treatment that preserves most of your natural tooth structure."
    },
    {
      question: "Can veneers be whitened?",
      answer: "Veneers cannot be whitened, but they are highly stain-resistant. We'll match them to your desired shade during the initial placement."
    },
    {
      question: "Are veneers painful to get?",
      answer: "The procedure is typically comfortable with local anesthesia. Most patients experience minimal discomfort during and after the treatment."
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
              <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Dental Veneers
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Transform your smile with ultra-thin porcelain or composite veneers. 
                Achieve a perfect, natural-looking smile that's stain-resistant and long-lasting.
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

        {/* What are Veneers */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    What are Veneers?
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Your Path to a Perfect Smile
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Dental veneers are ultra-thin shells of porcelain or composite resin that are 
                    custom-made to fit over the front surface of your teeth. They're designed to 
                    improve the appearance of teeth that are discolored, worn, chipped, or misaligned, 
                    creating a beautiful, natural-looking smile.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Instant Transformation</h4>
                        <p className="text-neutral-600 text-sm">Dramatically improve your smile in just a few visits</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Conservative Treatment</h4>
                        <p className="text-neutral-600 text-sm">Minimal tooth preparation required</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Natural Results</h4>
                        <p className="text-neutral-600 text-sm">Custom-made to match your facial features</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Beautiful smile with dental veneers showing natural-looking results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Veneers */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Veneers
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Choose the veneer option that best fits your needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {veneerTypes.map((type, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-neutral-800 mb-4">
                      {type.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <div className="flex items-center text-sm text-primary font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      {type.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Suitable For */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Are Veneers Right for You?
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Veneers can address a variety of cosmetic dental concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {suitableFor.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Veneer Transformations
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the incredible smile transformations achieved with dental veneers.
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
                    alt={`Dental veneer transformation ${index + 1} - Before and after results`}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The Veneer Process
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
        <section className="py-24 bg-neutral-50">
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

export default DentalVeneersPage;