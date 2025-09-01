import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Zap, 
  Eye, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Award,
  Shield,
  Smile,
  ArrowRight
} from "lucide-react";

const InvisalignPage = () => {
  const benefits = [
    "Nearly invisible aligners",
    "Removable for eating",
    "Comfortable treatment",
    "Predictable results"
  ];

  const advantages = [
    {
      title: "Nearly Invisible",
      description: "Clear aligners are virtually undetectable when worn",
      icon: Eye
    },
    {
      title: "Removable",
      description: "Take out for eating, drinking, and special occasions",
      icon: Zap
    },
    {
      title: "Comfortable",
      description: "Smooth plastic with no metal brackets or wires",
      icon: Heart
    },
    {
      title: "Predictable",
      description: "See your final result before treatment begins",
      icon: Award
    }
  ];

  const suitableFor = [
    "Crowded teeth",
    "Gaps between teeth",
    "Overbite or underbite",
    "Crossbite issues",
    "Open bite problems",
    "Mild to moderate misalignment"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive examination to determine if Invisalign is right for you"
    },
    {
      step: "2",
      title: "Digital Impressions",
      description: "3D digital scans create precise models of your teeth"
    },
    {
      step: "3",
      title: "Treatment Planning",
      description: "Custom treatment plan with virtual preview of your new smile"
    },
    {
      step: "4",
      title: "Aligner Fabrication",
      description: "Series of custom aligners manufactured specifically for you"
    },
    {
      step: "5",
      title: "Treatment Begins",
      description: "Wear aligners 20-22 hours daily, changing every 1-2 weeks"
    },
    {
      step: "6",
      title: "Regular Checkups",
      description: "Monitor progress with periodic appointments every 6-8 weeks"
    },
    {
      step: "7",
      title: "Retention Phase",
      description: "Wear retainers to maintain your new smile"
    }
  ];

  const vsTraditionalBraces = [
    {
      feature: "Appearance",
      invisalign: "Nearly invisible",
      braces: "Metal brackets visible"
    },
    {
      feature: "Comfort",
      invisalign: "Smooth plastic",
      braces: "Metal can irritate"
    },
    {
      feature: "Eating",
      invisalign: "Remove for meals",
      braces: "Food restrictions"
    },
    {
      feature: "Hygiene",
      invisalign: "Easy cleaning",
      braces: "Difficult to clean"
    },
    {
      feature: "Treatment Time",
      invisalign: "12-18 months average",
      braces: "18-24 months average"
    }
  ];

  const faqs = [
    {
      question: "How long does Invisalign treatment take?",
      answer: "Treatment typically takes 12-18 months for most cases, though simple cases may be completed in 6-12 months. Complex cases might take up to 24 months."
    },
    {
      question: "How often do I need to wear the aligners?",
      answer: "Aligners should be worn 20-22 hours per day, removing them only for eating, drinking (except water), and oral hygiene."
    },
    {
      question: "Is Invisalign painful?",
      answer: "You may experience mild discomfort when starting new aligners, but this is normal and indicates the treatment is working. Most patients find it much more comfortable than traditional braces."
    },
    {
      question: "Can I eat and drink with Invisalign?",
      answer: "You should remove aligners when eating or drinking anything except water. This prevents staining and damage to the aligners."
    },
    {
      question: "How much does Invisalign cost?",
      answer: "Invisalign costs are comparable to traditional braces. We offer flexible payment plans and will provide a detailed estimate during your consultation."
    },
    {
      question: "What happens if I lose an aligner?",
      answer: "Contact us immediately. Depending on your treatment stage, you may move to the next aligner or we may need to order a replacement."
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
                Invisalign
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Straighten your teeth discreetly with clear, removable aligners. 
                Achieve a beautiful, straight smile without the hassle of traditional metal braces.
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

        {/* What is Invisalign */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Clear Aligner Technology
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    The Invisible Way to Straighten Teeth
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Invisalign uses a series of custom-made, clear plastic aligners to gradually 
                    move your teeth into the desired position. Each aligner is worn for about 
                    1-2 weeks before moving to the next in the series, progressively straightening 
                    your teeth without anyone knowing you're undergoing treatment.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Custom Made</h4>
                        <p className="text-neutral-600 text-sm">Each aligner is precisely crafted for your teeth</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Gradual Movement</h4>
                        <p className="text-neutral-600 text-sm">Gentle, controlled tooth movement for comfort</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Digital Planning</h4>
                        <p className="text-neutral-600 text-sm">See your final result before treatment starts</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Invisalign clear aligners showing nearly invisible orthodontic treatment"
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
                Why Choose Invisalign?
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

        {/* Suitable For */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Conditions Invisalign Can Treat
                </h2>
                <p className="text-lg text-neutral-600">
                  Invisalign effectively treats a wide range of orthodontic issues.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suitableFor.map((condition, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-soft">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Invisalign vs Traditional Braces */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Invisalign vs Traditional Braces
                </h2>
                <p className="text-lg text-neutral-600">
                  See how Invisalign compares to traditional metal braces.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="grid grid-cols-3 bg-primary/5 p-4">
                  <div className="font-semibold text-neutral-800">Feature</div>
                  <div className="font-semibold text-primary text-center">Invisalign</div>
                  <div className="font-semibold text-neutral-600 text-center">Traditional Braces</div>
                </div>
                {vsTraditionalBraces.map((comparison, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 border-b border-neutral-100 last:border-b-0">
                    <div className="font-medium text-neutral-800">{comparison.feature}</div>
                    <div className="text-center text-primary">{comparison.invisalign}</div>
                    <div className="text-center text-neutral-600">{comparison.braces}</div>
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
                The Invisalign Process
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.slice(0, 6).map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-neutral-800 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    7
                  </div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-3">
                    {process[6].title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {process[6].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Invisalign Transformations
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the amazing smile transformations achieved with Invisalign treatment.
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
                    alt={`Invisalign transformation ${index + 1} - Before and after clear aligner treatment`}
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
                  Proven Results
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">12M+</div>
                  <div className="text-neutral-600">Patients Treated</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-neutral-600">Months Average</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">96%</div>
                  <div className="text-neutral-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-neutral-600">Years Innovation</div>
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
                  Get answers to common questions about Invisalign treatment.
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
              <Smile className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Ready for Your Invisalign Journey?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Start your journey to a straighter smile with a consultation. 
                We'll determine if Invisalign is right for you and show you what your new smile could look like.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  BOOK INVISALIGN CONSULTATION
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

export default InvisalignPage;