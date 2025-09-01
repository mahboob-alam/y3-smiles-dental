import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Wind, 
  Award, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Zap,
  Target,
  ArrowRight,
  Activity,
  Shield
} from "lucide-react";

const SinusGraftPage = () => {
  const benefits = [
    "Enables upper implants",
    "Minimally invasive options",
    "High success rates",
    "Preserves sinus health"
  ];

  const sinusGraftTypes = [
    {
      title: "Lateral Window Technique",
      description: "Traditional approach through the side wall of the sinus",
      icon: Wind,
      features: ["Direct visualization", "Precise placement", "Suitable for large grafts", "Predictable results"],
      suitableFor: "Severe bone loss, multiple implants",
      healingTime: "6-9 months"
    },
    {
      title: "Osteotome Technique",
      description: "Less invasive approach through the implant site",
      icon: Target,
      features: ["Minimally invasive", "Simultaneous implant placement", "Faster healing", "Less discomfort"],
      suitableFor: "Mild to moderate bone loss",
      healingTime: "4-6 months"
    }
  ];

  const candidateFactors = [
    {
      title: "Insufficient Bone Height",
      description: "Less than 4-5mm of bone below the sinus floor",
      icon: Activity
    },
    {
      title: "Tooth Loss in Upper Jaw",
      description: "Missing premolars or molars in the upper back teeth",
      icon: Heart
    },
    {
      title: "Sinus Pneumatization",
      description: "Natural enlargement of sinus cavity with age",
      icon: Wind
    },
    {
      title: "Healthy Sinus Cavity",
      description: "No active sinus infections or chronic sinusitis",
      icon: Shield
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Evaluation",
      description: "3D CT scan to assess bone height, sinus anatomy, and overall health"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Determine the best approach and graft material for your specific case"
    },
    {
      step: "3",
      title: "Sinus Lift Procedure",
      description: "Carefully lift the sinus membrane and place bone graft material"
    },
    {
      step: "4",
      title: "Healing Period",
      description: "4-9 months for bone integration and new bone formation"
    },
    {
      step: "5",
      title: "Implant Placement",
      description: "Place dental implants once adequate bone height is achieved"
    }
  ];

  const graftMaterials = [
    {
      title: "Autogenous Bone",
      description: "Your own bone from another area",
      advantages: ["Best biocompatibility", "Fastest healing", "No rejection risk"]
    },
    {
      title: "Allograft",
      description: "Processed human donor bone",
      advantages: ["No second surgical site", "Proven safety", "Readily available"]
    },
    {
      title: "Xenograft",
      description: "Processed animal bone (bovine)",
      advantages: ["Excellent scaffold", "Maintains volume", "Cost-effective"]
    },
    {
      title: "Synthetic Materials",
      description: "Artificial bone substitutes",
      advantages: ["No disease risk", "Consistent quality", "Various options"]
    }
  ];

  const faqs = [
    {
      question: "What is a sinus lift or sinus graft?",
      answer: "A sinus lift is a surgical procedure that adds bone to the upper jaw in the area of the molars and premolars by lifting the sinus floor and placing bone graft material beneath it."
    },
    {
      question: "How long does a sinus graft take to heal?",
      answer: "Healing typically takes 4-9 months depending on the technique used and individual healing factors. The lateral window technique usually requires 6-9 months, while the osteotome technique may heal in 4-6 months."
    },
    {
      question: "Is sinus grafting painful?",
      answer: "The procedure is performed under local anesthesia or sedation, so you won't feel pain during surgery. Post-operative discomfort is usually mild to moderate and well-controlled with medication."
    },
    {
      question: "What are the risks of sinus grafting?",
      answer: "Risks are minimal but may include sinus membrane perforation, infection, or graft failure. These complications are rare when performed by experienced surgeons."
    },
    {
      question: "Can implants be placed at the same time as sinus grafting?",
      answer: "Sometimes implants can be placed simultaneously if there's adequate initial bone height (usually 4-5mm). Otherwise, implants are placed after the graft has healed."
    },
    {
      question: "How successful are sinus grafts?",
      answer: "Sinus grafts have a very high success rate of 90-95% when performed by experienced surgeons. Success depends on factors like graft material, surgical technique, and patient health."
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
              <Wind className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Sinus Graft
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Advanced sinus lift procedures to create adequate bone height for upper jaw dental implants. 
                Restore your ability to chew and smile with confidence using proven sinus augmentation techniques.
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

        {/* What is Sinus Grafting */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Understanding Sinus Grafting
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Creating Space for Upper Implants
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    A sinus graft, also known as a sinus lift, is a specialized procedure that increases 
                    the amount of bone in the upper jaw by lifting the sinus floor and placing bone graft 
                    material beneath it. This creates adequate bone height for successful dental implant 
                    placement in the upper back teeth area.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Increases Bone Height</h4>
                        <p className="text-neutral-600 text-sm">Creates adequate space for implant placement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Preserves Sinus Function</h4>
                        <p className="text-neutral-600 text-sm">Maintains normal sinus drainage and health</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">High Success Rate</h4>
                        <p className="text-neutral-600 text-sm">Proven technique with excellent long-term outcomes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812541/pexels-photo-6812541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Sinus lift procedure diagram showing bone graft placement"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Sinus Grafts */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Sinus Graft Techniques
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer two main approaches to sinus grafting, each suited to different clinical situations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {sinusGraftTypes.map((type, index) => {
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
                        Healing: {type.healingTime}
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

        {/* Candidate Assessment */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Are You a Candidate?
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Several factors determine if you're a good candidate for sinus grafting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {candidateFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {factor.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {factor.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Graft Materials */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Bone Graft Materials
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Various graft materials can be used, each with specific advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {graftMaterials.map((material, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {material.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {material.description}
                    </p>
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

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The Sinus Graft Process
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
                  Proven Success
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">6-9</div>
                  <div className="text-neutral-600">Months Healing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
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
                  Get answers to common questions about sinus graft procedures.
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
                Ready to Restore Your Upper Teeth?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Don't let insufficient bone height prevent you from getting upper dental implants. 
                Our sinus graft procedures can create the foundation you need for a successful restoration.
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

export default SinusGraftPage;