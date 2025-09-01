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
  Heart,
  CheckCircle,
  Star,
  Award,
  Clock,
  Droplets,
  Zap,
  ArrowRight
} from "lucide-react";

const FluoridePage = () => {
  const benefits = [
    "Prevents tooth decay",
    "Strengthens enamel",
    "Reverses early decay",
    "Safe and effective"
  ];

  const fluorideTypes = [
    {
      title: "Professional Fluoride Varnish",
      description: "High-concentration fluoride applied directly to teeth",
      icon: Shield,
      features: ["Long-lasting protection", "Easy application", "Pleasant taste", "Immediate effect"],
      duration: "5 minutes",
      frequency: "Every 3-6 months",
      suitableFor: "All ages, high cavity risk"
    },
    {
      title: "Fluoride Foam Treatment",
      description: "Foam application using custom trays for complete coverage",
      icon: Droplets,
      features: ["Complete tooth coverage", "Comfortable application", "Various flavors", "Professional strength"],
      duration: "4 minutes",
      frequency: "Every 6 months",
      suitableFor: "Children and adults"
    },
    {
      title: "Prescription Fluoride",
      description: "High-strength fluoride for home use in severe cases",
      icon: Heart,
      features: ["Daily home use", "Maximum protection", "Prescription strength", "Targeted treatment"],
      duration: "Daily use",
      frequency: "As prescribed",
      suitableFor: "High cavity risk, dry mouth"
    }
  ];

  const whoNeedsFluoride = [
    {
      title: "Children & Teens",
      description: "Developing teeth benefit most from fluoride protection",
      icon: Baby
    },
    {
      title: "High Cavity Risk",
      description: "Patients with frequent cavities or poor oral hygiene",
      icon: Zap
    },
    {
      title: "Dry Mouth Patients",
      description: "Reduced saliva increases cavity risk",
      icon: Droplets
    },
    {
      title: "Orthodontic Patients",
      description: "Braces make cleaning difficult, increasing decay risk",
      icon: Users
    }
  ];

  const process = [
    {
      step: "1",
      title: "Assessment",
      description: "Evaluate cavity risk and determine appropriate fluoride treatment"
    },
    {
      step: "2",
      title: "Preparation",
      description: "Clean teeth thoroughly before fluoride application"
    },
    {
      step: "3",
      title: "Application",
      description: "Apply fluoride varnish, foam, or gel to all tooth surfaces"
    },
    {
      step: "4",
      title: "Setting Time",
      description: "Allow fluoride to remain on teeth for optimal absorption"
    },
    {
      step: "5",
      title: "Post-Treatment Care",
      description: "Provide instructions for maximizing fluoride benefits"
    }
  ];

  const afterCare = [
    "Avoid eating for 30 minutes",
    "No brushing for 4-6 hours",
    "Avoid hot beverages initially",
    "Drink through a straw if needed",
    "Continue regular oral hygiene",
    "Schedule follow-up treatments"
  ];

  const prevention = [
    "Use fluoride toothpaste daily",
    "Drink fluoridated water",
    "Limit sugary snacks and drinks",
    "Regular dental checkups",
    "Professional fluoride treatments",
    "Good oral hygiene habits"
  ];

  const faqs = [
    {
      question: "Is fluoride treatment safe?",
      answer: "Yes, professional fluoride treatments are completely safe when applied by dental professionals. The amount used is carefully controlled and much less than what would cause any harm."
    },
    {
      question: "How often should I get fluoride treatments?",
      answer: "Most patients benefit from fluoride treatments every 6 months during regular checkups. High-risk patients may need treatments every 3 months."
    },
    {
      question: "Can adults benefit from fluoride treatments?",
      answer: "Absolutely! Adults with high cavity risk, dry mouth, gum recession, or frequent cavities can significantly benefit from professional fluoride treatments."
    },
    {
      question: "What should I avoid after fluoride treatment?",
      answer: "Avoid eating, drinking (except water), and brushing for 30 minutes to 4 hours depending on the type of fluoride used. This allows maximum absorption."
    },
    {
      question: "Does fluoride treatment hurt?",
      answer: "No, fluoride treatment is completely painless. The application is quick and comfortable, with many patients enjoying the pleasant flavors available."
    },
    {
      question: "How effective is fluoride in preventing cavities?",
      answer: "Fluoride treatments can reduce cavities by 20-40% when combined with good oral hygiene. They're one of the most effective preventive treatments available."
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
                Fluoride Treatments
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Professional fluoride treatments provide superior cavity protection by strengthening 
                tooth enamel and reversing early stages of tooth decay. Safe, effective prevention for all ages.
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
                <Link to="/#contact">BOOK FLUORIDE TREATMENT</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Fluoride Treatment */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Preventive Protection
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Strengthen Your Teeth Naturally
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Fluoride treatments use a natural mineral to strengthen tooth enamel and 
                    prevent cavities. Professional applications provide concentrated fluoride 
                    that penetrates deep into tooth structure, offering superior protection 
                    compared to over-the-counter products.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Remineralizes Enamel</h4>
                        <p className="text-neutral-600 text-sm">Repairs early stages of tooth decay</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Prevents Cavities</h4>
                        <p className="text-neutral-600 text-sm">Reduces cavity formation by 20-40%</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Safe for All Ages</h4>
                        <p className="text-neutral-600 text-sm">Proven safe and effective for children and adults</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Professional fluoride treatment application for cavity prevention"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Fluoride Treatments */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Fluoride Treatments
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer various fluoride treatment options to meet different needs and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fluorideTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
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
                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div className="flex items-center text-primary font-medium">
                          <Clock className="w-4 h-4 mr-1" />
                          {type.duration}
                        </div>
                        <div className="flex items-center text-green-600 font-medium">
                          <Star className="w-4 h-4 mr-1" />
                          {type.frequency}
                        </div>
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

        {/* Who Needs Fluoride */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Who Benefits from Fluoride Treatments?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whoNeedsFluoride.map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {group.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {group.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The Fluoride Treatment Process
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

        {/* After Care & Prevention */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="border-0 shadow-soft">
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-neutral-800">
                      After Treatment Care
                    </CardTitle>
                    <p className="text-neutral-600">
                      Follow these guidelines for maximum benefit
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {afterCare.map((instruction, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardHeader className="text-center">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-neutral-800">
                      Daily Prevention
                    </CardTitle>
                    <p className="text-neutral-600">
                      Maintain protection between treatments
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {prevention.map((tip, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
                  Proven Prevention
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-neutral-600">Cavity Reduction</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-neutral-600">Minutes Treatment</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-neutral-600">Patients Protected</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">70+</div>
                  <div className="text-neutral-600">Years of Use</div>
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
                  Get answers to common questions about fluoride treatments.
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
                Protect Your Smile Today
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Give your teeth the extra protection they deserve with professional fluoride treatments. 
                Safe, effective, and proven to prevent cavities.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE FLUORIDE TREATMENT
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

export default FluoridePage;