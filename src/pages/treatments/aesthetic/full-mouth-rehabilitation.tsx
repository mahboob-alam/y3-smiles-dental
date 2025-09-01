import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  RefreshCw, 
  Award, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Zap,
  Target,
  ArrowRight,
  Smile,
  Shield
} from "lucide-react";

const FullMouthRehabilitationPage = () => {
  const benefits = [
    "Complete oral health restoration",
    "Improved function and aesthetics",
    "Long-term stability",
    "Enhanced quality of life"
  ];

  const conditions = [
    {
      title: "Severe Tooth Wear",
      description: "Extensive wear from grinding, acid erosion, or aging",
      icon: Shield
    },
    {
      title: "Multiple Missing Teeth",
      description: "Significant tooth loss affecting function and appearance",
      icon: Target
    },
    {
      title: "Bite Problems",
      description: "Malocclusion causing jaw pain and functional issues",
      icon: Zap
    },
    {
      title: "Gum Disease Damage",
      description: "Advanced periodontal disease affecting multiple teeth",
      icon: Heart
    }
  ];

  const treatmentOptions = [
    {
      title: "Dental Implants",
      description: "Replace missing teeth with permanent implant solutions",
      features: ["Permanent solution", "Preserves jawbone", "Natural function", "Long-lasting"]
    },
    {
      title: "Crowns & Bridges",
      description: "Restore damaged teeth and replace missing ones",
      features: ["Natural appearance", "Durable materials", "Quick treatment", "Cost-effective"]
    },
    {
      title: "Dental Veneers",
      description: "Transform the appearance of front teeth",
      features: ["Dramatic improvement", "Stain resistant", "Minimal preparation", "Beautiful results"]
    },
    {
      title: "Orthodontics",
      description: "Correct bite and alignment issues",
      features: ["Improved function", "Better aesthetics", "Jaw comfort", "Long-term stability"]
    },
    {
      title: "Periodontal Therapy",
      description: "Treat gum disease and restore gum health",
      features: ["Healthy foundation", "Prevents tooth loss", "Reduces inflammation", "Improves breath"]
    },
    {
      title: "Bite Adjustment",
      description: "Correct occlusion for optimal function",
      features: ["Eliminates jaw pain", "Protects restorations", "Improves chewing", "Reduces wear"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Evaluation",
      description: "Detailed examination including X-rays, photos, and bite analysis to assess your complete oral health"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Create a comprehensive treatment plan addressing all issues in the optimal sequence"
    },
    {
      step: "3",
      title: "Foundation Phase",
      description: "Address periodontal issues and establish a healthy foundation for restorative work"
    },
    {
      step: "4",
      title: "Restorative Phase",
      description: "Implement restorative treatments including implants, crowns, and other procedures"
    },
    {
      step: "5",
      title: "Aesthetic Phase",
      description: "Complete the transformation with cosmetic treatments for optimal appearance"
    },
    {
      step: "6",
      title: "Maintenance Phase",
      description: "Establish ongoing care protocols to maintain your restored oral health"
    }
  ];

  const beforeAfter = [
    {
      title: "Oral Function",
      before: "Difficulty chewing and speaking",
      after: "Complete restoration of function"
    },
    {
      title: "Appearance",
      before: "Embarrassed about smile",
      after: "Confident, beautiful smile"
    },
    {
      title: "Comfort",
      before: "Jaw pain and discomfort",
      after: "Pain-free, comfortable bite"
    },
    {
      title: "Health",
      before: "Ongoing dental problems",
      after: "Stable, healthy oral condition"
    }
  ];

  const faqs = [
    {
      question: "How long does full mouth rehabilitation take?",
      answer: "Full mouth rehabilitation typically takes 6-18 months, depending on the complexity of your case and the treatments involved. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Is full mouth rehabilitation painful?",
      answer: "We use advanced pain management techniques including sedation options to ensure your comfort throughout the process. Most patients report minimal discomfort."
    },
    {
      question: "How much does full mouth rehabilitation cost?",
      answer: "Costs vary significantly based on the treatments needed. We offer flexible payment plans and will provide a detailed estimate after your comprehensive evaluation."
    },
    {
      question: "How long do the results last?",
      answer: "With proper care and maintenance, full mouth rehabilitation results can last 15-25 years or longer. Regular checkups and good oral hygiene are essential."
    },
    {
      question: "Can I eat normally during treatment?",
      answer: "We'll provide temporary solutions to maintain function during treatment. You may need to modify your diet temporarily, but we ensure you can eat comfortably throughout the process."
    },
    {
      question: "Am I a candidate for full mouth rehabilitation?",
      answer: "If you have multiple dental issues affecting function, comfort, or appearance, you may be a candidate. A comprehensive evaluation will determine the best approach for your situation."
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
              <RefreshCw className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Full Mouth Rehabilitation
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Comprehensive restoration of your entire mouth to optimal health, function, and beauty. 
                Transform your oral health with our advanced full mouth rehabilitation approach.
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

        {/* What is Full Mouth Rehabilitation */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Complete Transformation
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Restore Your Entire Mouth
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Full mouth rehabilitation is a comprehensive approach to restoring the health, 
                    function, and appearance of your entire mouth. This treatment addresses multiple 
                    dental issues simultaneously, including missing teeth, damaged teeth, gum disease, 
                    and bite problems to create optimal oral health.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Comprehensive Approach</h4>
                        <p className="text-neutral-600 text-sm">Addresses all oral health issues in coordinated treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Functional Restoration</h4>
                        <p className="text-neutral-600 text-sm">Restores proper chewing, speaking, and jaw function</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Aesthetic Enhancement</h4>
                        <p className="text-neutral-600 text-sm">Creates a beautiful, natural-looking smile</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Full mouth rehabilitation showing complete dental transformation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Conditions We Treat
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Full mouth rehabilitation addresses complex dental conditions that affect multiple teeth and oral structures.
              </p>
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

        {/* Treatment Options */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Treatment Options
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We combine multiple advanced treatments to achieve comprehensive oral rehabilitation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentOptions.map((treatment, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {treatment.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {treatment.features.map((feature, featureIndex) => (
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
                <Smile className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Life-Changing Results
                </h2>
                <p className="text-lg text-neutral-600">
                  See how full mouth rehabilitation can transform every aspect of your oral health and quality of life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {beforeAfter.map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-neutral-800 mb-4">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 mb-1 text-sm">Before</h4>
                          <p className="text-xs text-red-600">{item.before}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 mb-1 text-sm">After</h4>
                          <p className="text-xs text-green-600">{item.after}</p>
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
                The Rehabilitation Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Our systematic approach ensures optimal results through carefully planned phases.
              </p>
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
                Transformation Gallery
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the incredible full mouth rehabilitation transformations we've achieved.
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
                    alt={`Full mouth rehabilitation result ${index + 1} - Complete oral health transformation`}
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
                  Proven Excellence
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-neutral-600">Full Rehabilitations</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-neutral-600">Average Months</div>
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
                  Get answers to common questions about full mouth rehabilitation.
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
                Ready to Transform Your Oral Health?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Take the first step towards complete oral health restoration. Our comprehensive 
                evaluation will determine the best approach for your unique situation.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE COMPREHENSIVE EVALUATION
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

export default FullMouthRehabilitationPage;