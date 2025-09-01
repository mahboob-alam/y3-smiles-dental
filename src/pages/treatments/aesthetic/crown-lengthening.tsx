import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Scissors, 
  Smile, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Award,
  Shield,
  Eye,
  ArrowRight
} from "lucide-react";

const CrownLengtheningPage = () => {
  const benefits = [
    "Improved smile aesthetics",
    "Better crown fit",
    "Enhanced gum health",
    "Permanent results"
  ];

  const types = [
    {
      title: "Aesthetic Crown Lengthening",
      description: "Improves the appearance of a 'gummy smile' by exposing more tooth structure",
      icon: Smile,
      features: ["Reduces gum display", "Creates balanced proportions", "Enhances smile aesthetics", "Boosts confidence"],
      suitableFor: "Gummy smile, short-looking teeth"
    },
    {
      title: "Functional Crown Lengthening",
      description: "Creates adequate tooth structure for proper crown or filling placement",
      icon: Award,
      features: ["Exposes healthy tooth", "Enables restoration", "Prevents gum irritation", "Improves oral health"],
      suitableFor: "Broken teeth, inadequate tooth structure"
    }
  ];

  const conditions = [
    {
      title: "Gummy Smile",
      description: "Excessive gum tissue covering the teeth",
      icon: Eye
    },
    {
      title: "Short Teeth",
      description: "Teeth that appear too short due to excess gum",
      icon: Scissors
    },
    {
      title: "Uneven Gum Line",
      description: "Irregular gum contours affecting smile symmetry",
      icon: Heart
    },
    {
      title: "Crown Preparation",
      description: "Insufficient tooth structure for restorations",
      icon: Shield
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Evaluation",
      description: "Detailed examination and smile analysis to determine treatment needs"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Digital smile design to preview your new gum line and tooth proportions"
    },
    {
      step: "3",
      title: "Local Anesthesia",
      description: "Comfortable numbing of the treatment area for pain-free procedure"
    },
    {
      step: "4",
      title: "Tissue Removal",
      description: "Precise removal of excess gum tissue and sometimes bone"
    },
    {
      step: "5",
      title: "Contouring",
      description: "Careful shaping of gum line for optimal aesthetics"
    },
    {
      step: "6",
      title: "Healing & Recovery",
      description: "2-3 weeks healing period with follow-up care"
    }
  ];

  const beforeAfter = [
    {
      title: "Smile Confidence",
      before: "Hiding smile due to gummy appearance",
      after: "Confident, beautiful smile display"
    },
    {
      title: "Tooth Proportions",
      before: "Teeth appear short and stubby",
      after: "Well-proportioned, attractive teeth"
    },
    {
      title: "Gum Health",
      before: "Difficulty cleaning around excess tissue",
      after: "Easier maintenance and better health"
    }
  ];

  const faqs = [
    {
      question: "Is crown lengthening painful?",
      answer: "The procedure is performed under local anesthesia, so you won't feel pain during treatment. Post-operative discomfort is typically mild and manageable with over-the-counter pain medication."
    },
    {
      question: "How long does the procedure take?",
      answer: "Crown lengthening typically takes 1-2 hours, depending on the number of teeth being treated and the complexity of the case."
    },
    {
      question: "What is the recovery time?",
      answer: "Initial healing takes 1-2 weeks, with complete healing occurring over 2-3 months. You can return to normal activities within a few days."
    },
    {
      question: "Are the results permanent?",
      answer: "Yes, crown lengthening results are permanent. The removed gum tissue and bone do not grow back, providing lasting improvement to your smile."
    },
    {
      question: "Will I need follow-up treatments?",
      answer: "Most patients achieve their desired results with a single procedure. Occasionally, minor touch-ups may be needed for optimal aesthetics."
    },
    {
      question: "Can crown lengthening be combined with other treatments?",
      answer: "Yes, crown lengthening is often combined with veneers, crowns, or other cosmetic treatments as part of a comprehensive smile makeover."
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
              <Scissors className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Crown Lengthening
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Enhance your smile by reshaping your gum line to expose more of your natural teeth. 
                Perfect for treating gummy smiles and creating better tooth proportions.
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

        {/* What is Crown Lengthening */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Gum Reshaping Procedure
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Reveal Your Beautiful Teeth
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Crown lengthening is a periodontal procedure that removes excess gum tissue 
                    and sometimes bone to expose more of the tooth's crown. This creates better 
                    tooth proportions, improves smile aesthetics, and can provide adequate tooth 
                    structure for restorative treatments.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Precise Technique</h4>
                        <p className="text-neutral-600 text-sm">Careful removal of tissue for optimal results</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Immediate Improvement</h4>
                        <p className="text-neutral-600 text-sm">See results immediately after healing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Permanent Results</h4>
                        <p className="text-neutral-600 text-sm">Long-lasting improvement to your smile</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Crown lengthening procedure showing gum reshaping for better tooth proportions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Crown Lengthening */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Types of Crown Lengthening
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer different approaches based on your specific needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {types.map((type, index) => {
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

        {/* Conditions Treated */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Conditions We Treat
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {condition.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {condition.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before & After Impact */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Transformation Results
                </h2>
                <p className="text-lg text-neutral-600">
                  See how crown lengthening can dramatically improve your smile and confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {beforeAfter.map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-4">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold text-red-700 mb-2">Before</h4>
                          <p className="text-sm text-red-600">{item.before}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-700 mb-2">After</h4>
                          <p className="text-sm text-green-600">{item.after}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                The Crown Lengthening Process
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
                Crown Lengthening Results
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the dramatic improvements achieved with crown lengthening procedures.
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
                    alt={`Crown lengthening result ${index + 1} - Gum reshaping transformation`}
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
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-neutral-600">Procedures Completed</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">1-2</div>
                  <div className="text-neutral-600">Hours Treatment</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-neutral-600">Satisfaction Rate</div>
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
                  Get answers to common questions about crown lengthening procedures.
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
                Ready to Enhance Your Smile?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Transform your gummy smile into a confident, beautiful smile with crown lengthening. 
                Schedule your consultation to see how we can improve your tooth proportions.
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

export default CrownLengtheningPage;