import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Smile, 
  Clock, 
  Award, 
  Heart,
  CheckCircle,
  Users,
  Shield,
  Star,
  Calendar,
  Zap,
  Target,
  ArrowRight
} from "lucide-react";

const AllTeethOnFourPage = () => {
  const benefits = [
    "Same-day teeth replacement",
    "Minimal surgery required",
    "Immediate function",
    "Cost-effective solution"
  ];

  const stepByStepProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive examination, 3D imaging, and treatment planning to determine if you're a suitable candidate for All-on-4."
    },
    {
      step: "2", 
      title: "Treatment Planning",
      description: "Digital treatment planning using advanced software to precisely plan implant placement and prosthetic design."
    },
    {
      step: "3",
      title: "Implant Placement",
      description: "Four strategically placed implants are inserted into the jawbone using minimally invasive techniques."
    },
    {
      step: "4",
      title: "Temporary Prosthetic",
      description: "A temporary full-arch prosthetic is attached immediately, allowing you to leave with teeth the same day."
    },
    {
      step: "5",
      title: "Healing Period",
      description: "3-6 months healing period during which the implants integrate with your jawbone (osseointegration)."
    },
    {
      step: "6",
      title: "Final Prosthetic",
      description: "Your custom-made final prosthetic is fitted, providing you with a beautiful, functional smile."
    }
  ];

  const beforeAfterGallery = [
    {
      title: "Case 1: Complete Upper Restoration",
      description: "Patient with severe tooth loss restored with All-on-4 implants"
    },
    {
      title: "Case 2: Lower Jaw Rehabilitation", 
      description: "Full lower arch replacement with immediate function"
    },
    {
      title: "Case 3: Full Mouth Reconstruction",
      description: "Both upper and lower arches restored with All-on-4 treatment"
    },
    {
      title: "Case 4: Smile Transformation",
      description: "From dentures to fixed teeth with All-on-4 solution"
    }
  ];

  const whyChooseAllOnFour = [
    {
      title: "Fewer Implants Needed",
      description: "Only 4 implants per arch compared to 6-8 with traditional methods",
      icon: Target
    },
    {
      title: "Immediate Results",
      description: "Walk out with teeth the same day as your implant surgery",
      icon: Zap
    },
    {
      title: "Bone Preservation",
      description: "Angled implants utilize available bone, often avoiding bone grafts",
      icon: Shield
    },
    {
      title: "Cost Effective",
      description: "More affordable than individual implants for full arch replacement",
      icon: Award
    }
  ];

  const patientTestimonials = [
    {
      name: "Margaret S.",
      age: "68",
      text: "I can't believe I waited so long! The All-on-4 treatment gave me my confidence back. I can eat anything I want now.",
      rating: 5
    },
    {
      name: "Robert M.",
      age: "72", 
      text: "The whole process was much easier than I expected. Having teeth again the same day was incredible.",
      rating: 5
    },
    {
      name: "Linda K.",
      age: "65",
      text: "Best decision I ever made. My new teeth look and feel completely natural. Thank you DENTL!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Am I a candidate for All-on-4?",
      answer: "Most patients with significant tooth loss or failing teeth are candidates. A consultation with 3D imaging will determine your suitability."
    },
    {
      question: "How long do All-on-4 implants last?",
      answer: "With proper care, All-on-4 implants can last 20+ years. The prosthetic may need replacement after 10-15 years."
    },
    {
      question: "Is the procedure painful?",
      answer: "The procedure is performed under sedation or general anaesthesia. Post-operative discomfort is manageable with medication."
    },
    {
      question: "What can I eat after All-on-4?",
      answer: "Initially soft foods, progressing to normal diet within weeks. You'll be able to eat most foods you enjoyed before."
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
              <Smile className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                All Teeth On Four
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Revolutionary dental implant treatment that replaces a full arch of teeth 
                with just four strategically placed implants. Get your smile back in just one day.
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

        {/* What is All-on-4 */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    What is All-on-4?
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    A Complete Smile in One Day
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    All-on-4 is an innovative dental implant technique that replaces an entire 
                    arch of teeth using just four strategically placed implants. This revolutionary 
                    approach allows patients to receive a full set of fixed teeth in a single day, 
                    eliminating the need for removable dentures.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Immediate Function</h4>
                        <p className="text-neutral-600 text-sm">Leave with teeth the same day as surgery</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Minimal Surgery</h4>
                        <p className="text-neutral-600 text-sm">Less invasive than traditional implant methods</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Cost Effective</h4>
                        <p className="text-neutral-600 text-sm">More affordable than individual implants</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-neutral-800 mb-6">
                      Why Choose All-on-4?
                    </h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">4</div>
                        <div className="text-neutral-600 text-sm">Implants per arch</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">1</div>
                        <div className="text-neutral-600 text-sm">Day treatment</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">20+</div>
                        <div className="text-neutral-600 text-sm">Years lifespan</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">95%</div>
                        <div className="text-neutral-600 text-sm">Success rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Process */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                The Process
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The Step by Step Process
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Our comprehensive All-on-4 treatment process is designed to give you 
                the best possible outcome with minimal discomfort.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {stepByStepProcess.map((step, index) => (
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

        {/* Before & After Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Before & After Gallery
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See the incredible transformations our patients have achieved with All-on-4 treatment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {beforeAfterGallery.map((case_item, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="aspect-video bg-neutral-100 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={`https://images.pexels.com/photos/${
                          index === 0 ? '6812540' : 
                          index === 1 ? '6812541' : 
                          index === 2 ? '6812542' : '6812543'
                        }/pexels-photo-${
                          index === 0 ? '6812540' : 
                          index === 1 ? '6812541' : 
                          index === 2 ? '6812542' : '6812543'
                        }.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop`}
                        alt={`${case_item.title} - Before and after dental implant transformation`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg font-bold text-neutral-800">
                      {case_item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-sm">
                      {case_item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose All-on-4 */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Why Choose All Teeth On Four?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseAllOnFour.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {reason.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                What Our Patients Say
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Real testimonials from patients who have transformed their lives with All-on-4 treatment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {patientTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={`https://images.pexels.com/photos/${
                          index === 0 ? '1239291' : 
                          index === 1 ? '1222271' : '1181686'
                        }/pexels-photo-${
                          index === 0 ? '1239291' : 
                          index === 1 ? '1222271' : '1181686'
                        }.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`}
                        alt={`${testimonial.name} - Happy patient`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardTitle className="text-lg font-bold text-neutral-800">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-neutral-500">Age {testimonial.age}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                <p className="text-lg text-neutral-600">
                  Get answers to common questions about All-on-4 dental implant treatment.
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
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Ready to Get Your Smile Back?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Don't let missing teeth hold you back any longer. Book your All-on-4 
                consultation today and discover how you can have a full set of teeth in just one day.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  BOOK CONSULTATION
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

export default AllTeethOnFourPage;