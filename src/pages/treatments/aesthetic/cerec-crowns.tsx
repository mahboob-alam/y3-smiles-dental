import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Zap, 
  Award, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Shield,
  Target,
  Camera,
  ArrowRight
} from "lucide-react";

const CERECCrownsPage = () => {
  const benefits = [
    "Same-day treatment",
    "Perfect digital fit",
    "Natural appearance",
    "Durable ceramic material"
  ];

  const advantages = [
    {
      title: "Same-Day Service",
      description: "Complete treatment in a single appointment - no temporary crowns needed",
      icon: Zap
    },
    {
      title: "Perfect Fit",
      description: "CAD/CAM technology ensures precise fit and optimal function",
      icon: Target
    },
    {
      title: "Natural Aesthetics",
      description: "High-quality ceramic matches your natural tooth color perfectly",
      icon: Award
    },
    {
      title: "Durable Materials",
      description: "Strong, biocompatible ceramic that lasts for decades",
      icon: Shield
    }
  ];

  const traditionalVsCerec = [
    {
      feature: "Treatment Time",
      traditional: "2-3 weeks, multiple visits",
      cerec: "Single 2-3 hour appointment"
    },
    {
      feature: "Temporary Crown",
      traditional: "Required for 2-3 weeks",
      cerec: "Not needed"
    },
    {
      feature: "Impressions",
      traditional: "Messy putty impressions",
      cerec: "Digital 3D scanning"
    },
    {
      feature: "Accuracy",
      traditional: "Good fit",
      cerec: "Precise digital fit"
    },
    {
      feature: "Material",
      traditional: "Various options",
      cerec: "High-quality ceramic"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Examination & Preparation",
      description: "Tooth is examined and prepared for crown placement"
    },
    {
      step: "2",
      title: "Digital Scanning",
      description: "3D digital impressions captured using advanced intraoral scanner"
    },
    {
      step: "3",
      title: "Crown Design",
      description: "Computer-aided design creates perfect crown shape and fit"
    },
    {
      step: "4",
      title: "Milling",
      description: "Crown is precisely milled from high-quality ceramic block"
    },
    {
      step: "5",
      title: "Fitting & Bonding",
      description: "Crown is fitted, adjusted, and permanently bonded to tooth"
    }
  ];

  const indications = [
    "Large cavities or fillings",
    "Cracked or broken teeth",
    "Root canal treated teeth",
    "Severely worn teeth",
    "Cosmetic enhancement",
    "Tooth shape correction"
  ];

  const faqs = [
    {
      question: "What is CEREC technology?",
      answer: "CEREC (Chairside Economical Restoration of Esthetic Ceramics) is advanced CAD/CAM technology that designs and mills dental crowns in a single appointment using digital impressions and computer-guided milling."
    },
    {
      question: "How long do CEREC crowns last?",
      answer: "CEREC crowns are highly durable and typically last 15-20 years or longer with proper care. The high-quality ceramic material is strong and biocompatible."
    },
    {
      question: "Are CEREC crowns as strong as traditional crowns?",
      answer: "Yes, CEREC crowns are made from high-quality ceramic that is as strong as or stronger than traditional crown materials. They're designed to withstand normal chewing forces."
    },
    {
      question: "Do CEREC crowns look natural?",
      answer: "Absolutely. CEREC crowns are made from tooth-colored ceramic that can be precisely matched to your natural teeth, providing excellent aesthetics."
    },
    {
      question: "Is the CEREC process comfortable?",
      answer: "Yes, the digital scanning process is comfortable and eliminates the need for messy impression materials. The entire procedure is performed under local anesthesia."
    },
    {
      question: "How much do CEREC crowns cost?",
      answer: "CEREC crowns are competitively priced with traditional crowns. The convenience of same-day treatment often makes them more cost-effective when considering time savings."
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
              <Zap className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                CEREC Crowns
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Revolutionary same-day crown technology that designs, creates, and places 
                your custom ceramic crown in a single appointment. No temporaries, no waiting.
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
                <Link to="/#contact">BOOK SAME-DAY CROWN</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is CEREC */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Advanced CAD/CAM Technology
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Same-Day Crown Excellence
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    CEREC technology revolutionizes crown treatment by combining digital impressions, 
                    computer-aided design, and precision milling to create your custom crown in just 
                    one visit. No more temporary crowns, multiple appointments, or waiting weeks 
                    for your final restoration.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Digital Precision</h4>
                        <p className="text-neutral-600 text-sm">Computer-designed for perfect fit and function</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Time Efficient</h4>
                        <p className="text-neutral-600 text-sm">Complete treatment in 2-3 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Superior Materials</h4>
                        <p className="text-neutral-600 text-sm">High-strength ceramic for durability</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="CEREC same-day crown technology showing digital design and milling process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                CEREC Advantages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {advantage.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Traditional vs CEREC */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  CEREC vs Traditional Crowns
                </h2>
                <p className="text-lg text-neutral-600">
                  See how CEREC technology compares to traditional crown procedures.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="grid grid-cols-3 bg-primary/5 p-4">
                  <div className="font-semibold text-neutral-800">Feature</div>
                  <div className="font-semibold text-neutral-600 text-center">Traditional</div>
                  <div className="font-semibold text-primary text-center">CEREC</div>
                </div>
                {traditionalVsCerec.map((comparison, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 border-b border-neutral-100 last:border-b-0">
                    <div className="font-medium text-neutral-800">{comparison.feature}</div>
                    <div className="text-center text-neutral-600">{comparison.traditional}</div>
                    <div className="text-center text-primary font-medium">{comparison.cerec}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Suitable For */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  When Are CEREC Crowns Recommended?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {indications.map((indication, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-soft">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{indication}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The CEREC Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Experience the convenience of same-day crown treatment with our advanced CEREC technology.
              </p>
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

        {/* Before & After Gallery */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                CEREC Crown Results
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the beautiful, natural-looking results achieved with CEREC same-day crowns.
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
                    alt={`CEREC crown result ${index + 1} - Same-day ceramic crown restoration`}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  CEREC Excellence
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2-3</div>
                  <div className="text-neutral-600">Hours Treatment</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-neutral-600">CEREC Crowns Placed</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-neutral-600">Years Lifespan</div>
                </div>
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
                  Get answers to common questions about CEREC same-day crowns.
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
              <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Get Your Crown Today
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Experience the convenience of same-day crown treatment. 
                Walk in with a damaged tooth, walk out with a beautiful, permanent restoration.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  BOOK SAME-DAY APPOINTMENT
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

export default CERECCrownsPage;