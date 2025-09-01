import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Star, 
  Zap, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Award,
  Shield,
  Home,
  Smile,
  ArrowRight
} from "lucide-react";

const TeethWhiteningPage = () => {
  const benefits = [
    "Up to 8 shades whiter",
    "Safe, effective treatment",
    "Immediate results",
    "Boosts confidence"
  ];

  const whiteningOptions = [
    {
      title: "In-Office Whitening",
      description: "Professional treatment completed in a single appointment",
      icon: Zap,
      features: ["Immediate results", "Professional supervision", "Strongest whitening agents", "Protective measures"],
      duration: "1-2 hours",
      results: "Up to 8 shades whiter",
      suitableFor: "Quick results, special events"
    },
    {
      title: "Take-Home Whitening",
      description: "Custom trays and professional gel for gradual whitening at home",
      icon: Home,
      features: ["Convenient timing", "Gradual whitening", "Custom-fitted trays", "Professional strength gel"],
      duration: "2-4 weeks",
      results: "Up to 6 shades whiter",
      suitableFor: "Gradual improvement, convenience"
    }
  ];

  const causes = [
    {
      title: "Food & Beverages",
      description: "Coffee, tea, wine, and dark-colored foods",
      icon: Heart
    },
    {
      title: "Tobacco Use",
      description: "Smoking and chewing tobacco cause deep stains",
      icon: Shield
    },
    {
      title: "Aging",
      description: "Natural yellowing occurs as enamel thins with age",
      icon: Clock
    },
    {
      title: "Medications",
      description: "Certain medications can cause tooth discoloration",
      icon: Award
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Evaluate your teeth and discuss whitening goals and expectations"
    },
    {
      step: "2",
      title: "Shade Assessment",
      description: "Record current tooth shade and determine realistic whitening goals"
    },
    {
      step: "3",
      title: "Preparation",
      description: "Protect gums and soft tissues before applying whitening agent"
    },
    {
      step: "4",
      title: "Whitening Application",
      description: "Apply professional-strength whitening gel to teeth"
    },
    {
      step: "5",
      title: "Activation",
      description: "Use special light or heat to activate whitening process (if applicable)"
    },
    {
      step: "6",
      title: "Results & Maintenance",
      description: "Assess results and provide maintenance instructions"
    }
  ];

  const maintenance = [
    "Avoid staining foods/drinks for 48 hours",
    "Use whitening toothpaste regularly",
    "Rinse mouth after consuming dark beverages",
    "Regular dental cleanings every 6 months",
    "Touch-up treatments as needed",
    "Good oral hygiene habits"
  ];

  const candidateFactors = [
    "Healthy teeth and gums",
    "Realistic expectations",
    "No active dental problems",
    "Not pregnant or nursing",
    "Age 16 or older",
    "Committed to maintenance"
  ];

  const faqs = [
    {
      question: "How white can my teeth get?",
      answer: "Most patients achieve 3-8 shades whiter teeth. Results depend on the original tooth color, type of staining, and chosen whitening method. We'll discuss realistic expectations during consultation."
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Yes, professional teeth whitening is safe when performed by qualified dental professionals. We use proven methods and protective measures to ensure your safety and comfort."
    },
    {
      question: "How long do whitening results last?",
      answer: "Results typically last 1-3 years, depending on your diet, lifestyle, and oral hygiene. Touch-up treatments can help maintain your bright smile."
    },
    {
      question: "Will whitening cause sensitivity?",
      answer: "Some patients experience temporary sensitivity during or after treatment. We use desensitizing agents and can adjust treatment intensity to minimize discomfort."
    },
    {
      question: "Can all teeth be whitened?",
      answer: "Natural teeth respond well to whitening, but crowns, veneers, and fillings won't change color. We'll evaluate your specific situation during consultation."
    },
    {
      question: "What should I avoid after whitening?",
      answer: "Avoid staining substances like coffee, tea, wine, and tobacco for 48 hours after treatment. This allows the enamel to reharden and helps maintain results."
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
              <Star className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Teeth Whitening
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Professional teeth whitening for a brighter, more confident smile. 
                Safe, effective treatment that can lighten your teeth up to 8 shades.
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
                <Link to="/#contact">BOOK WHITENING</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Teeth Whitening */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Professional Whitening
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Brighten Your Smile Safely
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Professional teeth whitening uses safe, effective bleaching agents to remove 
                    stains and discoloration from your teeth. Our advanced techniques can achieve 
                    dramatic results while protecting your tooth enamel and gum health.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Professional Strength</h4>
                        <p className="text-neutral-600 text-sm">Stronger than over-the-counter products</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Safe Application</h4>
                        <p className="text-neutral-600 text-sm">Protective measures prevent gum irritation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Dramatic Results</h4>
                        <p className="text-neutral-600 text-sm">Achieve significant whitening in one session</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Professional teeth whitening treatment showing bright, white smile results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Whitening Options */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Whitening Options
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Choose the whitening method that best fits your lifestyle and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {whiteningOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {option.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {option.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-primary font-medium">
                          <Clock className="w-4 h-4 mr-2" />
                          {option.duration}
                        </div>
                        <div className="flex items-center text-green-600 font-medium">
                          <Star className="w-4 h-4 mr-2" />
                          {option.results}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <ul className="space-y-2 mb-4">
                          {option.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Best for:</h4>
                        <p className="text-sm text-neutral-600">{option.suitableFor}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Causes of Discoloration */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                What Causes Tooth Discoloration?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {causes.map((cause, index) => {
                const IconComponent = cause.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {cause.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {cause.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ideal Candidates */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Are You a Good Candidate?
                </h2>
                <p className="text-lg text-neutral-600">
                  Most people are candidates for teeth whitening, but certain factors ensure the best results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {candidateFactors.map((factor, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-soft">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{factor}</span>
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
                The Whitening Process
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((step, index) => (
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
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Maintaining Your White Smile
                </h2>
                <p className="text-lg text-neutral-600">
                  Follow these tips to keep your teeth white and bright for longer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {maintenance.map((tip, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-soft">
                    <Star className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Whitening Transformations
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the dramatic improvements achieved with professional teeth whitening.
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
                    alt={`Teeth whitening result ${index + 1} - Before and after professional whitening`}
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
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-neutral-600">Shades Whiter</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">1-2</div>
                  <div className="text-neutral-600">Hours Treatment</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-neutral-600">Patients Whitened</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">97%</div>
                  <div className="text-neutral-600">Satisfaction Rate</div>
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
                  Get answers to common questions about professional teeth whitening.
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
                Ready for a Brighter Smile?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Transform your smile with professional teeth whitening. 
                Safe, effective treatment that delivers dramatic results you'll love.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  BOOK WHITENING APPOINTMENT
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

export default TeethWhiteningPage;