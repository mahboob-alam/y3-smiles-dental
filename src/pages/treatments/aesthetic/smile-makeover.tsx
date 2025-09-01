import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Sparkles, 
  Star, 
  Palette, 
  Camera,
  CheckCircle,
  Users,
  Clock,
  Award,
  Heart,
  Zap,
  ArrowRight
} from "lucide-react";

const SmileMakeoverPage = () => {
  const benefits = [
    "Complete smile transformation",
    "Customized treatment plan",
    "Multiple procedures combined",
    "Life-changing results"
  ];

  const treatments = [
    {
      title: "Dental Veneers",
      description: "Ultra-thin porcelain shells for perfect teeth",
      icon: Sparkles
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for brighter smiles",
      icon: Star
    },
    {
      title: "Invisalign",
      description: "Clear aligners to straighten teeth",
      icon: Zap
    },
    {
      title: "Gum Contouring",
      description: "Reshape gums for better proportions",
      icon: Palette
    },
    {
      title: "Dental Crowns",
      description: "Restore damaged or misshapen teeth",
      icon: Award
    },
    {
      title: "Dental Implants",
      description: "Replace missing teeth permanently",
      icon: Heart
    }
  ];

  const process = [
    {
      step: "1",
      title: "Smile Analysis",
      description: "Comprehensive evaluation of your current smile and facial features"
    },
    {
      step: "2",
      title: "Digital Design",
      description: "Create a digital preview of your new smile using advanced software"
    },
    {
      step: "3",
      title: "Treatment Planning",
      description: "Develop a customized plan combining multiple procedures"
    },
    {
      step: "4",
      title: "Phased Treatment",
      description: "Execute treatments in optimal sequence for best results"
    },
    {
      step: "5",
      title: "Final Reveal",
      description: "Complete your transformation and reveal your new smile"
    }
  ];

  const beforeAfter = [
    {
      title: "Confidence Boost",
      before: "Hiding smile in photos",
      after: "Smiling proudly everywhere"
    },
    {
      title: "Professional Impact",
      before: "Self-conscious at work",
      after: "Confident in presentations"
    },
    {
      title: "Social Life",
      before: "Avoiding social situations",
      after: "Enjoying social interactions"
    }
  ];

  const faqs = [
    {
      question: "How long does a smile makeover take?",
      answer: "A complete smile makeover typically takes 2-6 months, depending on the treatments involved. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Is a smile makeover painful?",
      answer: "Most procedures are comfortable with local anesthesia. We also offer sedation options for anxious patients to ensure a pain-free experience."
    },
    {
      question: "How much does a smile makeover cost?",
      answer: "Costs vary based on the treatments included. We offer flexible payment plans and will provide a detailed estimate after your consultation."
    },
    {
      question: "How long do the results last?",
      answer: "With proper care, most smile makeover results last 10-20 years. Some treatments like veneers may need replacement after 15-20 years."
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
              <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Smile Makeover
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Transform your entire smile with our comprehensive makeover approach. 
                Combining multiple treatments for dramatic, life-changing results that boost your confidence.
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
                <Link to="/#contact">START YOUR TRANSFORMATION</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is a Smile Makeover */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Complete Transformation
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Your Dream Smile Awaits
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    A smile makeover is a comprehensive approach to improving your smile's appearance 
                    through one or more cosmetic dentistry procedures. We analyze your facial features, 
                    skin tone, and personal preferences to create a customized treatment plan that 
                    delivers stunning, natural-looking results.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Personalized Design</h4>
                        <p className="text-neutral-600 text-sm">Tailored to your unique facial features and preferences</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Multiple Treatments</h4>
                        <p className="text-neutral-600 text-sm">Combine various procedures for comprehensive results</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Digital Preview</h4>
                        <p className="text-neutral-600 text-sm">See your new smile before treatment begins</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Beautiful smile transformation showing before and after results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Makeover Treatment Options
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We combine the best cosmetic treatments to create your perfect smile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => {
                const IconComponent = treatment.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {treatment.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {treatment.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before & After Impact */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Life-Changing Results
                </h2>
                <p className="text-lg text-neutral-600">
                  See how a smile makeover can transform not just your appearance, but your entire life.
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
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Your Makeover Journey
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

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
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

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SmileMakeoverPage;