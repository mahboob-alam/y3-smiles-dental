import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

const SealantsPage = () => {
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
      features: ["Excellent adhesion", "Durable protection", "Clear or tooth-colored", "Easy application"],
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
      answer: "Yes, dental sealants are completely safe. They've been used successfully for over 40 years and are recommended by the American Dental Association for cavity prevention."
    },
    {
      question: "How long do sealants last?",
      answer: "Sealants typically last 5-10 years, but can last longer with proper care. We check them during regular dental visits and can reapply them if needed."
    },
    {
      question: "Do sealants hurt to apply?",
      answer: "No, sealant application is completely painless and requires no drilling or anesthesia. The process is quick and comfortable for patients of all ages."
    },
    {
      question: "Can adults get sealants?",
      answer: "Yes, adults with deep grooves in their teeth or high cavity risk can benefit from sealants. They're especially helpful for adults who have difficulty keeping their back teeth clean."
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
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">BOOK SEALANT APPOINTMENT</Link>
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

        {/* Ideal Candidates */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Who Benefits from Sealants?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {idealCandidates.map((candidate, index) => {
                const IconComponent = candidate.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {candidate.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {candidate.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {candidate.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-neutral-600">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Effectiveness Data */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Proven Effectiveness
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {effectiveness.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary mb-4">
                      {stat.percentage}
                    </div>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {stat.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-2">
                      {stat.description}
                    </p>
                    <div className="text-sm text-primary font-medium">
                      {stat.timeframe}
                    </div>
                  </CardHeader>
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
                The Sealant Application Process
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

        {/* Maintenance */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Maintaining Your Sealants
                </h2>
                <p className="text-lg text-neutral-600">
                  Follow these guidelines to maximize the lifespan and effectiveness of your sealants.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {maintenance.map((tip, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-soft">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{tip}</span>
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
                  Sealant Success
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">80%</div>
                  <div className="text-neutral-600">Cavity Prevention</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-neutral-600">Minutes Application</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-neutral-600">Sealants Applied</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">10</div>
                  <div className="text-neutral-600">Years Average Lifespan</div>
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
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE SEALANT CONSULTATION
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

export default SealantsPage;