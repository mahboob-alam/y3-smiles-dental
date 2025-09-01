import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Scissors, 
  Zap, 
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

const TeethReshapingPage = () => {
  const benefits = [
    "Immediate results",
    "Pain-free procedure",
    "Conservative approach",
    "Enhanced symmetry"
  ];

  const suitableFor = [
    {
      title: "Uneven Tooth Length",
      description: "Teeth that are slightly different lengths",
      icon: Scissors
    },
    {
      title: "Minor Chips",
      description: "Small chips or rough edges on teeth",
      icon: Shield
    },
    {
      title: "Pointed Canines",
      description: "Overly pointed or sharp canine teeth",
      icon: Star
    },
    {
      title: "Overlapping Teeth",
      description: "Minor overlapping or crowding issues",
      icon: Heart
    }
  ];

  const techniques = [
    {
      title: "Enameloplasty",
      description: "Gentle removal of small amounts of enamel to improve tooth shape",
      features: ["Painless procedure", "No anesthesia needed", "Immediate results", "Permanent improvement"]
    },
    {
      title: "Contouring",
      description: "Reshaping tooth edges and surfaces for better symmetry",
      features: ["Subtle improvements", "Enhanced smile line", "Better proportions", "Quick treatment"]
    },
    {
      title: "Edge Smoothing",
      description: "Smoothing rough or chipped tooth edges",
      features: ["Comfortable feel", "Prevents tongue irritation", "Improved appearance", "Simple procedure"]
    }
  ];

  const beforeAfter = [
    {
      title: "Tooth Symmetry",
      before: "Uneven, irregular tooth shapes",
      after: "Balanced, harmonious tooth contours"
    },
    {
      title: "Smile Line",
      before: "Jagged or uneven smile edge",
      after: "Smooth, attractive smile line"
    },
    {
      title: "Tooth Proportions",
      before: "Disproportionate tooth sizes",
      after: "Well-balanced tooth proportions"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Smile Analysis",
      description: "Comprehensive evaluation of tooth shape, size, and symmetry"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Design the ideal tooth contours for your facial features"
    },
    {
      step: "3",
      title: "Gentle Reshaping",
      description: "Carefully remove small amounts of enamel using specialized tools"
    },
    {
      step: "4",
      title: "Smoothing & Polishing",
      description: "Smooth and polish teeth for comfortable feel and natural shine"
    },
    {
      step: "5",
      title: "Final Assessment",
      description: "Ensure optimal results and patient satisfaction"
    }
  ];

  const limitations = [
    "Only suitable for minor imperfections",
    "Cannot add tooth structure",
    "Limited to enamel layer only",
    "May increase sensitivity slightly",
    "Not reversible procedure"
  ];

  const faqs = [
    {
      question: "Is teeth reshaping painful?",
      answer: "No, teeth reshaping is typically painless since only the outer enamel layer is gently removed. Most patients don't require anesthesia for this procedure."
    },
    {
      question: "How long does teeth reshaping take?",
      answer: "The procedure usually takes 30-60 minutes, depending on how many teeth need reshaping. Results are visible immediately."
    },
    {
      question: "Will reshaping weaken my teeth?",
      answer: "When performed conservatively by an experienced dentist, reshaping removes only minimal enamel and doesn't significantly weaken teeth."
    },
    {
      question: "Can teeth reshaping be combined with other treatments?",
      answer: "Yes, reshaping is often combined with teeth whitening, bonding, or veneers as part of a comprehensive smile makeover."
    },
    {
      question: "Are the results permanent?",
      answer: "Yes, teeth reshaping results are permanent. The removed enamel doesn't grow back, so the improved shape is lasting."
    },
    {
      question: "What are the limitations of teeth reshaping?",
      answer: "Reshaping can only address minor imperfections and cannot add tooth structure. For major changes, veneers or crowns may be better options."
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
                Teeth Reshaping
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Quick, painless procedure to improve tooth shape and symmetry. 
                Achieve a more balanced, attractive smile in just one appointment.
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

        {/* What is Teeth Reshaping */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Cosmetic Contouring
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Subtle Changes, Beautiful Results
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Teeth reshaping, also called dental contouring, is a conservative cosmetic 
                    procedure that removes small amounts of tooth enamel to improve the shape, 
                    length, or surface of teeth. It's perfect for making subtle improvements 
                    that create a more harmonious, attractive smile.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Instant Results</h4>
                        <p className="text-neutral-600 text-sm">See improvements immediately after treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Conservative Approach</h4>
                        <p className="text-neutral-600 text-sm">Minimal enamel removal preserves tooth health</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Cost Effective</h4>
                        <p className="text-neutral-600 text-sm">Affordable way to enhance your smile</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Teeth reshaping procedure showing gentle contouring for improved symmetry"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suitable For */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                What Can Teeth Reshaping Fix?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {suitableFor.map((condition, index) => {
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

        {/* Techniques */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Reshaping Techniques
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techniques.map((technique, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {technique.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {technique.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {technique.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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
                  See how subtle reshaping can create dramatic improvements in smile harmony.
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
                The Reshaping Process
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

        {/* Limitations */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Important Considerations
                </h2>
                <p className="text-lg text-neutral-600">
                  Understanding the limitations helps set realistic expectations.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">
                      Treatment Limitations
                    </h3>
                    <ul className="space-y-3">
                      {limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start text-amber-700">
                          <div className="w-2 h-2 rounded-full bg-amber-600 mr-3 mt-2 flex-shrink-0"></div>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Reshaping Results
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the subtle yet impactful improvements achieved with teeth reshaping.
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
                    alt={`Teeth reshaping result ${index + 1} - Improved tooth symmetry and contours`}
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
                  Quick & Effective
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">30-60</div>
                  <div className="text-neutral-600">Minutes Treatment</div>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">0</div>
                  <div className="text-neutral-600">Recovery Time</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-neutral-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <div className="text-neutral-600">Permanent Results</div>
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
                  Get answers to common questions about teeth reshaping procedures.
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
                Perfect Your Smile Today
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Small changes can make a big difference. Discover how teeth reshaping 
                can enhance your smile's symmetry and beauty in just one appointment.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE RESHAPING CONSULTATION
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

export default TeethReshapingPage;