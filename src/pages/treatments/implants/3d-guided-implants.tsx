import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Target, 
  Eye, 
  Shield, 
  Award,
  CheckCircle,
  Users,
  Clock,
  Star,
  Zap,
  Heart,
  ArrowRight
} from "lucide-react";

const ThreeDGuidedImplantsPage = () => {
  const benefits = [
    "Precise implant placement",
    "Minimally invasive surgery",
    "Faster healing time",
    "Predictable outcomes"
  ];

  const advantages = [
    {
      title: "Surgical Precision",
      description: "3D imaging allows for exact implant placement with millimeter accuracy",
      icon: Target
    },
    {
      title: "Enhanced Visualization",
      description: "Complete view of bone structure, nerves, and surrounding anatomy",
      icon: Eye
    },
    {
      title: "Reduced Risk",
      description: "Minimizes complications by avoiding vital structures",
      icon: Shield
    },
    {
      title: "Optimal Results",
      description: "Better long-term success rates and aesthetic outcomes",
      icon: Award
    }
  ];

  const process = [
    {
      step: "1",
      title: "3D Imaging",
      description: "Advanced CBCT scan captures detailed 3D images of your jaw and teeth"
    },
    {
      step: "2",
      title: "Digital Planning",
      description: "Computer software plans optimal implant position, angle, and depth"
    },
    {
      step: "3",
      title: "Surgical Guide",
      description: "Custom surgical guide is created for precise implant placement"
    },
    {
      step: "4",
      title: "Guided Surgery",
      description: "Minimally invasive surgery using the 3D guide for accuracy"
    },
    {
      step: "5",
      title: "Crown Placement",
      description: "Custom crown is placed to complete your new tooth"
    }
  ];

  const faqs = [
    {
      question: "What is 3D guided implant surgery?",
      answer: "3D guided implant surgery uses advanced imaging and computer planning to place dental implants with extreme precision, resulting in better outcomes and faster healing."
    },
    {
      question: "How accurate is 3D guided placement?",
      answer: "3D guided implant placement is accurate to within 1-2 millimeters, significantly more precise than traditional freehand placement."
    },
    {
      question: "Is the procedure more expensive?",
      answer: "While there may be additional costs for imaging and planning, the improved outcomes and reduced complications often make it cost-effective long-term."
    },
    {
      question: "How long does the procedure take?",
      answer: "3D guided implant surgery is often faster than traditional methods, typically taking 30-60 minutes per implant depending on complexity."
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
              <Target className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                3D Guided Dental Implants
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Experience the future of dental implant surgery with our advanced 3D guided technology. 
                Precise, predictable, and minimally invasive implant placement for optimal results.
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

        {/* What is 3D Guided Surgery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Advanced Technology
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Precision Meets Innovation
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    3D guided dental implant surgery represents the pinnacle of modern implant dentistry. 
                    Using advanced CBCT imaging and computer-guided planning, we can place implants with 
                    unprecedented accuracy, ensuring optimal positioning for both function and aesthetics.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Millimeter Precision</h4>
                        <p className="text-neutral-600 text-sm">Exact placement within 1-2mm accuracy</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Minimally Invasive</h4>
                        <p className="text-neutral-600 text-sm">Smaller incisions, less trauma, faster healing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Predictable Results</h4>
                        <p className="text-neutral-600 text-sm">Higher success rates and better outcomes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="3D dental imaging technology showing precise implant planning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Why Choose 3D Guided Implants?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {advantage.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The 3D Guided Process
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
        <section className="py-24 bg-neutral-50">
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

export default ThreeDGuidedImplantsPage;