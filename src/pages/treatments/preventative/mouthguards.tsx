import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Shield, 
  Moon, 
  Activity, 
  Award,
  CheckCircle,
  Star,
  Clock,
  Heart,
  Users,
  Zap,
  ArrowRight
} from "lucide-react";

const MouthguardsPage = () => {
  const benefits = [
    "Protect teeth from injury",
    "Prevent grinding damage",
    "Custom comfortable fit",
    "Durable, long-lasting"
  ];

  const mouthguardTypes = [
    {
      title: "Sports Mouthguards",
      description: "Protect teeth during athletic activities and contact sports",
      icon: Activity,
      features: ["Impact protection", "Custom fit", "Comfortable wear", "Breathing channels"],
      suitableFor: "All contact sports, high-impact activities",
      protection: "Teeth, jaw, soft tissues"
    },
    {
      title: "Night Guards",
      description: "Prevent damage from teeth grinding and clenching during sleep",
      icon: Moon,
      features: ["Prevents tooth wear", "Reduces jaw strain", "Comfortable sleep", "Durable materials"],
      suitableFor: "Bruxism, teeth grinding, jaw clenching",
      protection: "Teeth, jaw joints, muscles"
    }
  ];

  const sportsRequiring = [
    {
      category: "High-Risk Sports",
      sports: ["Boxing", "Rugby", "Ice hockey", "Martial arts", "Wrestling"],
      riskLevel: "Very High"
    },
    {
      category: "Contact Sports",
      sports: ["Football", "Basketball", "Soccer", "Lacrosse", "Field hockey"],
      riskLevel: "High"
    },
    {
      category: "Limited Contact",
      sports: ["Baseball", "Softball", "Volleyball", "Tennis", "Gymnastics"],
      riskLevel: "Moderate"
    }
  ];

  const customVsStore = [
    {
      feature: "Fit",
      custom: "Perfect individual fit",
      store: "Generic, loose fit"
    },
    {
      feature: "Comfort",
      custom: "Highly comfortable",
      store: "Often uncomfortable"
    },
    {
      feature: "Protection",
      custom: "Maximum protection",
      store: "Limited protection"
    },
    {
      feature: "Durability",
      custom: "2-5 years",
      store: "Few months"
    },
    {
      feature: "Speech",
      custom: "Minimal interference",
      store: "Significant interference"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Assess your needs and determine the best mouthguard type"
    },
    {
      step: "2",
      title: "Impressions",
      description: "Take precise impressions or digital scans of your teeth"
    },
    {
      step: "3",
      title: "Custom Fabrication",
      description: "Laboratory creates your personalized mouthguard"
    },
    {
      step: "4",
      title: "Fitting & Adjustment",
      description: "Ensure perfect fit and make any necessary adjustments"
    },
    {
      step: "5",
      title: "Care Instructions",
      description: "Learn proper cleaning and maintenance techniques"
    }
  ];

  const careInstructions = [
    "Rinse with cool water before and after use",
    "Clean with toothbrush and mild soap",
    "Store in ventilated container",
    "Avoid hot water or direct sunlight",
    "Bring to dental appointments for inspection",
    "Replace when worn or damaged"
  ];

  const injuryPrevention = [
    {
      title: "Tooth Fractures",
      description: "Prevents chips, cracks, and complete tooth breaks",
      statistics: "60x more likely without protection"
    },
    {
      title: "Tooth Loss",
      description: "Avoids complete tooth avulsion from impact",
      statistics: "5x higher risk in contact sports"
    },
    {
      title: "Jaw Injuries",
      description: "Reduces risk of jaw fractures and TMJ problems",
      statistics: "50% reduction in jaw injuries"
    },
    {
      title: "Soft Tissue Damage",
      description: "Protects lips, tongue, and cheek from cuts",
      statistics: "90% reduction in soft tissue injuries"
    }
  ];

  const faqs = [
    {
      question: "Do I really need a custom mouthguard?",
      answer: "Custom mouthguards provide superior protection, comfort, and durability compared to store-bought options. They're especially important for contact sports or severe teeth grinding."
    },
    {
      question: "How long do custom mouthguards last?",
      answer: "Sports mouthguards typically last 1-2 seasons with regular use, while night guards can last 2-5 years depending on the severity of grinding and care."
    },
    {
      question: "Are mouthguards comfortable to wear?",
      answer: "Custom-fitted mouthguards are designed for maximum comfort. There may be a brief adjustment period, but most patients adapt quickly and find them comfortable to wear."
    },
    {
      question: "Can I talk and breathe normally with a mouthguard?",
      answer: "Custom mouthguards are designed to allow normal breathing and speech. Sports guards may slightly affect speech initially, but most athletes adapt quickly."
    },
    {
      question: "How do I clean my mouthguard?",
      answer: "Rinse with cool water, brush gently with a toothbrush and mild soap, and store in a ventilated container. Avoid hot water which can warp the material."
    },
    {
      question: "When should I replace my mouthguard?",
      answer: "Replace when you notice wear, cracks, loose fit, or damage. Sports guards should be replaced each season, while night guards last longer with proper care."
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
                Custom Fitted Mouthguards
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Professional protection for your teeth during sports and sleep. 
                Custom-fitted mouthguards provide superior comfort and protection compared to store-bought alternatives.
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
                <Link to="/#contact">GET CUSTOM MOUTHGUARD</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Types of Mouthguards */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Custom Mouthguards
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {mouthguardTypes.map((type, index) => {
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
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-neutral-50 rounded-lg p-4">
                          <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Best for:</h4>
                          <p className="text-sm text-neutral-600">{type.suitableFor}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-700 mb-2 text-sm">Protects:</h4>
                          <p className="text-sm text-green-600">{type.protection}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sports Risk Levels */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Sports & Injury Risk Levels
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sportsRequiring.map((category, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      category.riskLevel === 'Very High' ? 'bg-red-100 text-red-700' :
                      category.riskLevel === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {category.riskLevel} Risk
                    </div>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-4">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.sports.map((sport, sportIndex) => (
                        <li key={sportIndex} className="flex items-center text-sm text-neutral-600">
                          <Activity className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {sport}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom vs Store-Bought */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Custom vs Store-Bought Mouthguards
                </h2>
                <p className="text-lg text-neutral-600">
                  See why custom mouthguards provide superior protection and comfort.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="grid grid-cols-3 bg-primary/5 p-4">
                  <div className="font-semibold text-neutral-800">Feature</div>
                  <div className="font-semibold text-primary text-center">Custom Made</div>
                  <div className="font-semibold text-neutral-600 text-center">Store-Bought</div>
                </div>
                {customVsStore.map((comparison, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 border-b border-neutral-100 last:border-b-0">
                    <div className="font-medium text-neutral-800">{comparison.feature}</div>
                    <div className="text-center text-primary font-medium">{comparison.custom}</div>
                    <div className="text-center text-neutral-600">{comparison.store}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Injury Prevention */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Injury Prevention Statistics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {injuryPrevention.map((injury, index) => (
                <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-neutral-800 mb-2">
                      {injury.title}
                    </CardTitle>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {injury.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-700 mb-1">
                        {injury.statistics}
                      </div>
                      <div className="text-sm text-green-600">With mouthguard protection</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Custom Mouthguard Process
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

        {/* Care Instructions */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Mouthguard Care & Maintenance
                </h2>
                <p className="text-lg text-neutral-600">
                  Proper care extends the life of your mouthguard and maintains its protective qualities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careInstructions.map((instruction, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-soft">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{instruction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Protection Statistics
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">60x</div>
                  <div className="text-neutral-600">Injury Reduction</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">1-2</div>
                  <div className="text-neutral-600">Weeks Delivery</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">800+</div>
                  <div className="text-neutral-600">Guards Made</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-neutral-600">Years Max Lifespan</div>
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
                  Get answers to common questions about custom mouthguards.
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
                Protect Your Investment
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Your teeth are irreplaceable. Invest in professional protection with a custom-fitted mouthguard 
                designed specifically for your needs and activities.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  ORDER CUSTOM MOUTHGUARD
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

export default MouthguardsPage;