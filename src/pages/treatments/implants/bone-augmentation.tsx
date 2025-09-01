import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Shield, 
  Award, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Zap,
  Target,
  ArrowRight,
  Activity
} from "lucide-react";

const BoneAugmentationPage = () => {
  const benefits = [
    "Enables implant placement",
    "Restores facial structure",
    "Long-term stability",
    "Natural bone regeneration"
  ];

  const augmentationTypes = [
    {
      title: "Autogenous Bone Graft",
      description: "Using your own bone from another area of your mouth or body",
      icon: Heart,
      features: ["Best compatibility", "Natural healing", "No rejection risk", "Gold standard treatment"],
      suitableFor: "Major bone defects, multiple implants"
    },
    {
      title: "Allograft Bone",
      description: "Processed donor bone from tissue banks",
      icon: Shield,
      features: ["No second surgical site", "Readily available", "Proven safety record", "Cost-effective"],
      suitableFor: "Moderate bone loss, single implants"
    },
    {
      title: "Xenograft Bone",
      description: "Processed bone from animal sources (typically bovine)",
      icon: Award,
      features: ["Excellent scaffold", "Slow resorption", "Maintains volume", "Widely used"],
      suitableFor: "Socket preservation, ridge augmentation"
    },
    {
      title: "Synthetic Bone",
      description: "Artificial bone substitute materials",
      icon: Zap,
      features: ["No disease transmission", "Consistent quality", "Various formulations", "Biocompatible"],
      suitableFor: "Minor defects, combination grafting"
    }
  ];

  const indications = [
    {
      title: "Insufficient Bone Height",
      description: "When the jawbone is too short to support an implant",
      icon: Target
    },
    {
      title: "Inadequate Bone Width",
      description: "When the ridge is too narrow for proper implant placement",
      icon: Activity
    },
    {
      title: "Bone Loss After Extraction",
      description: "Natural bone resorption following tooth removal",
      icon: Clock
    },
    {
      title: "Periodontal Disease Damage",
      description: "Bone loss caused by advanced gum disease",
      icon: Shield
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Evaluation",
      description: "3D imaging and assessment to determine bone deficiency and treatment plan"
    },
    {
      step: "2",
      title: "Graft Material Selection",
      description: "Choose the most appropriate bone graft material for your specific needs"
    },
    {
      step: "3",
      title: "Surgical Placement",
      description: "Precise placement of bone graft material in the deficient area"
    },
    {
      step: "4",
      title: "Healing Period",
      description: "4-6 months for bone integration and new bone formation"
    },
    {
      step: "5",
      title: "Implant Placement",
      description: "Once adequate bone is formed, dental implants can be placed"
    }
  ];

  const techniques = [
    {
      title: "Ridge Augmentation",
      description: "Building up the width and height of the jawbone ridge"
    },
    {
      title: "Socket Preservation",
      description: "Preventing bone loss immediately after tooth extraction"
    },
    {
      title: "Block Bone Grafting",
      description: "Using larger pieces of bone for major reconstructions"
    },
    {
      title: "Guided Bone Regeneration",
      description: "Using membranes to direct new bone growth"
    }
  ];

  const faqs = [
    {
      question: "How long does bone augmentation take to heal?",
      answer: "Healing typically takes 4-6 months for the graft to integrate and new bone to form. This varies based on the size of the graft and individual healing factors."
    },
    {
      question: "Is bone augmentation painful?",
      answer: "The procedure is performed under anesthesia, so you won't feel pain during surgery. Post-operative discomfort is manageable with prescribed medications and typically resolves within a few days."
    },
    {
      question: "What is the success rate of bone augmentation?",
      answer: "Bone augmentation has a high success rate of 85-95% when performed by experienced surgeons. Success depends on factors like graft type, location, and patient health."
    },
    {
      question: "Can I get implants immediately after bone grafting?",
      answer: "In some cases, implants can be placed simultaneously with bone grafting. However, most cases require a healing period of 4-6 months before implant placement."
    },
    {
      question: "Are there any risks with bone augmentation?",
      answer: "As with any surgery, there are minimal risks including infection, bleeding, or graft failure. These complications are rare when proper protocols are followed."
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
                Bone Augmentation
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Advanced bone grafting procedures to restore adequate bone volume for successful 
                dental implant placement. Rebuild your jawbone foundation for optimal implant success.
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

        {/* What is Bone Augmentation */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Understanding Bone Augmentation
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Rebuilding Your Foundation
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Bone augmentation is a specialized procedure that rebuilds and strengthens the 
                    jawbone to provide adequate support for dental implants. When natural bone is 
                    insufficient due to tooth loss, trauma, or disease, bone grafting creates the 
                    necessary foundation for successful implant placement.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Restores Bone Volume</h4>
                        <p className="text-neutral-600 text-sm">Rebuilds lost bone height and width for implant placement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Improves Success Rates</h4>
                        <p className="text-neutral-600 text-sm">Ensures optimal conditions for long-term implant stability</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Preserves Facial Structure</h4>
                        <p className="text-neutral-600 text-sm">Maintains proper facial support and aesthetics</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Dental bone augmentation procedure showing jawbone reconstruction"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Bone Augmentation */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Bone Graft Materials
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We use various bone graft materials, each with specific advantages for different situations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {augmentationTypes.map((type, index) => {
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

        {/* Indications */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                When is Bone Augmentation Needed?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {indications.map((indication, index) => {
                const IconComponent = indication.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {indication.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {indication.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Bone Augmentation Techniques
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {techniques.map((technique, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {technique.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 leading-relaxed">
                      {technique.description}
                    </p>
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
                The Bone Augmentation Process
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
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4-6</div>
                  <div className="text-neutral-600">Months Healing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-neutral-600">Procedures Completed</div>
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
                  Get answers to common questions about bone augmentation procedures.
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
                Ready to Rebuild Your Foundation?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Don't let insufficient bone prevent you from getting dental implants. 
                Our bone augmentation procedures can create the foundation you need for a successful smile restoration.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE CONSULTATION
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

export default BoneAugmentationPage;