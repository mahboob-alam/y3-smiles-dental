import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Puzzle, 
  Award, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Shield,
  Target,
  Zap,
  ArrowRight
} from "lucide-react";

const InlaysOnlaysPage = () => {
  const benefits = [
    "Conservative treatment",
    "Superior durability",
    "Natural appearance",
    "Precise fit"
  ];

  const inlayVsOnlay = [
    {
      title: "Inlays",
      description: "Fit within the cusps (bumps) of the tooth, replacing the center portion",
      icon: Target,
      features: ["Fits between tooth cusps", "Replaces large fillings", "Conservative approach", "Preserves tooth structure"],
      suitableFor: "Decay or damage within tooth cusps"
    },
    {
      title: "Onlays",
      description: "Cover one or more cusps of the tooth, providing more extensive coverage",
      icon: Shield,
      features: ["Covers tooth cusps", "Protects weakened teeth", "Strengthens tooth", "Prevents fractures"],
      suitableFor: "Damage extending to tooth cusps"
    }
  ];

  const materials = [
    {
      title: "Porcelain",
      description: "Most popular choice for natural appearance and durability",
      advantages: ["Excellent aesthetics", "Stain resistant", "Biocompatible", "Long-lasting"],
      lifespan: "15-20 years"
    },
    {
      title: "Composite Resin",
      description: "Tooth-colored material that can be completed in one visit",
      advantages: ["Same-day treatment", "Cost-effective", "Good aesthetics", "Easily repairable"],
      lifespan: "5-10 years"
    },
    {
      title: "Gold",
      description: "Traditional material known for exceptional durability",
      advantages: ["Extremely durable", "Gentle on opposing teeth", "Precise fit", "Biocompatible"],
      lifespan: "20+ years"
    }
  ];

  const vsFillings = [
    {
      feature: "Durability",
      fillings: "5-10 years average",
      inlaysOnlays: "15-20+ years"
    },
    {
      feature: "Strength",
      fillings: "Can weaken tooth",
      inlaysOnlays: "Strengthens tooth"
    },
    {
      feature: "Fit",
      fillings: "Direct placement",
      inlaysOnlays: "Precise laboratory fit"
    },
    {
      feature: "Aesthetics",
      fillings: "Good color match",
      inlaysOnlays: "Excellent natural look"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Examination & Planning",
      description: "Comprehensive evaluation to determine if inlays/onlays are the best option"
    },
    {
      step: "2",
      title: "Tooth Preparation",
      description: "Remove decay and shape tooth to receive the restoration"
    },
    {
      step: "3",
      title: "Impressions",
      description: "Take precise impressions or digital scans for laboratory fabrication"
    },
    {
      step: "4",
      title: "Temporary Restoration",
      description: "Place temporary filling to protect tooth during fabrication"
    },
    {
      step: "5",
      title: "Laboratory Fabrication",
      description: "Custom inlay/onlay created in dental laboratory (1-2 weeks)"
    },
    {
      step: "6",
      title: "Final Placement",
      description: "Remove temporary and bond permanent restoration to tooth"
    }
  ];

  const faqs = [
    {
      question: "What's the difference between inlays and onlays?",
      answer: "Inlays fit within the cusps of the tooth (like a puzzle piece), while onlays cover one or more cusps. Onlays provide more coverage and protection for weakened teeth."
    },
    {
      question: "How long do inlays and onlays last?",
      answer: "Porcelain inlays and onlays typically last 15-20 years, while gold restorations can last 20+ years. Composite versions last 5-10 years."
    },
    {
      question: "Are inlays and onlays better than fillings?",
      answer: "For larger restorations, yes. They're stronger, more durable, and provide better fit than large fillings. They also strengthen the tooth rather than weakening it."
    },
    {
      question: "Is the procedure painful?",
      answer: "The procedure is performed under local anesthesia, so you won't feel pain. Some mild sensitivity may occur after treatment but resolves quickly."
    },
    {
      question: "How much do inlays and onlays cost?",
      answer: "Costs vary based on material and size. While more expensive than fillings initially, their longevity often makes them more cost-effective long-term."
    },
    {
      question: "Can inlays and onlays be whitened?",
      answer: "Porcelain and composite inlays/onlays cannot be whitened, but they're highly stain-resistant. We'll match them to your desired tooth shade during placement."
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
              <Puzzle className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Inlays & Onlays
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Conservative, durable alternatives to large fillings and crowns. 
                Custom-made restorations that preserve your natural tooth structure while providing superior strength.
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

        {/* What are Inlays and Onlays */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Conservative Restorations
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    The Perfect Middle Ground
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Inlays and onlays are custom-made restorations that fit between fillings and crowns 
                    in terms of coverage. They're ideal when a tooth has too much damage for a filling 
                    but not enough to require a full crown, preserving more of your natural tooth structure.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Preserve Tooth Structure</h4>
                        <p className="text-neutral-600 text-sm">Conservative approach saves healthy tooth</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Superior Strength</h4>
                        <p className="text-neutral-600 text-sm">Stronger than large fillings</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Custom Made</h4>
                        <p className="text-neutral-600 text-sm">Precisely crafted for perfect fit</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Inlays and onlays showing custom-fitted dental restorations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inlay vs Onlay */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Inlays vs Onlays
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Understanding the difference helps determine the best treatment for your tooth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {inlayVsOnlay.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
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

        {/* Material Options */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Material Options
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Choose from various high-quality materials based on your needs and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {materials.map((material, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {material.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {material.description}
                    </p>
                    <div className="flex items-center text-sm text-primary font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      Lifespan: {material.lifespan}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {material.advantages.map((advantage, advantageIndex) => (
                        <li key={advantageIndex} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inlays/Onlays vs Fillings */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Inlays/Onlays vs Large Fillings
                </h2>
                <p className="text-lg text-neutral-600">
                  See why inlays and onlays are superior to large fillings for extensive tooth damage.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="grid grid-cols-3 bg-primary/5 p-4">
                  <div className="font-semibold text-neutral-800">Feature</div>
                  <div className="font-semibold text-neutral-600 text-center">Large Fillings</div>
                  <div className="font-semibold text-primary text-center">Inlays/Onlays</div>
                </div>
                {vsFillings.map((comparison, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 border-b border-neutral-100 last:border-b-0">
                    <div className="font-medium text-neutral-800">{comparison.feature}</div>
                    <div className="text-center text-neutral-600">{comparison.fillings}</div>
                    <div className="text-center text-primary font-medium">{comparison.inlaysOnlays}</div>
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
                The Inlay/Onlay Process
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

        {/* Before & After Gallery */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Inlay & Onlay Results
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the natural-looking, durable results achieved with custom inlays and onlays.
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
                    alt={`Inlay onlay result ${index + 1} - Custom dental restoration`}
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
                  Proven Durability
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-neutral-600">Years Lifespan</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">800+</div>
                  <div className="text-neutral-600">Restorations Placed</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">96%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-neutral-600">Years Experience</div>
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
                  Get answers to common questions about inlays and onlays.
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
                Preserve Your Natural Teeth
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Choose the conservative approach that saves your tooth structure while providing 
                superior strength and aesthetics. Schedule your consultation today.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  BOOK CONSULTATION
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

export default InlaysOnlaysPage;