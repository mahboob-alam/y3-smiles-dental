import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Wind, 
  Heart, 
  Users, 
  Stethoscope,
  CheckCircle,
  Star,
  Award,
  Clock,
  AlertTriangle,
  Smile,
  ArrowRight
} from "lucide-react";

const FreshBreathPage = () => {
  const benefits = [
    "Identify root causes",
    "Effective treatment plans",
    "Long-lasting results",
    "Improved confidence"
  ];

  const causes = [
    {
      title: "Poor Oral Hygiene",
      description: "Inadequate brushing and flossing allows bacteria buildup",
      icon: AlertTriangle,
      treatment: "Professional cleaning and hygiene education"
    },
    {
      title: "Gum Disease",
      description: "Bacterial infection in gums produces sulfur compounds",
      icon: Heart,
      treatment: "Periodontal therapy and deep cleaning"
    },
    {
      title: "Dry Mouth",
      description: "Reduced saliva allows bacteria to flourish",
      icon: Wind,
      treatment: "Saliva stimulation and artificial saliva products"
    },
    {
      title: "Medical Conditions",
      description: "Diabetes, sinus infections, or digestive issues",
      icon: Stethoscope,
      treatment: "Coordinate with medical providers for comprehensive care"
    },
    {
      title: "Diet & Lifestyle",
      description: "Certain foods, smoking, or medications",
      icon: Users,
      treatment: "Dietary counseling and lifestyle modifications"
    },
    {
      title: "Dental Problems",
      description: "Cavities, old fillings, or oral infections",
      icon: Smile,
      treatment: "Restorative dentistry and infection control"
    }
  ];

  const treatmentOptions = [
    {
      title: "Professional Deep Cleaning",
      description: "Remove bacteria and tartar buildup causing bad breath",
      features: ["Scaling and root planing", "Bacterial reduction", "Gum health improvement", "Immediate freshness"]
    },
    {
      title: "Periodontal Therapy",
      description: "Treat gum disease that's often the root cause of halitosis",
      features: ["Infection elimination", "Gum healing", "Pocket reduction", "Long-term freshness"]
    },
    {
      title: "Oral Hygiene Education",
      description: "Learn proper techniques for maintaining fresh breath",
      features: ["Brushing techniques", "Flossing methods", "Tongue cleaning", "Product recommendations"]
    },
    {
      title: "Saliva Therapy",
      description: "Address dry mouth conditions that contribute to bad breath",
      features: ["Saliva stimulation", "Artificial saliva", "Medication review", "Hydration guidance"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Assessment",
      description: "Thorough examination to identify the source of bad breath"
    },
    {
      step: "2",
      title: "Bacterial Testing",
      description: "Specialized tests to measure bacteria levels and types"
    },
    {
      step: "3",
      title: "Medical History Review",
      description: "Evaluate medications and health conditions affecting breath"
    },
    {
      step: "4",
      title: "Customized Treatment Plan",
      description: "Develop targeted approach based on identified causes"
    },
    {
      step: "5",
      title: "Active Treatment",
      description: "Implement professional treatments and therapies"
    },
    {
      step: "6",
      title: "Ongoing Maintenance",
      description: "Regular monitoring and maintenance for lasting results"
    }
  ];

  const homeCareTips = [
    "Brush teeth twice daily for 2 minutes",
    "Floss daily to remove food particles",
    "Clean your tongue with scraper or brush",
    "Use antibacterial mouthwash",
    "Stay hydrated throughout the day",
    "Avoid tobacco and limit alcohol",
    "Chew sugar-free gum after meals",
    "Regular dental checkups every 6 months"
  ];

  const warningSignsToWatch = [
    "Persistent bad breath despite good hygiene",
    "Metallic or unusual taste in mouth",
    "Dry mouth or thick saliva",
    "White coating on tongue",
    "Bleeding or swollen gums",
    "Loose teeth or gum recession"
  ];

  const faqs = [
    {
      question: "What causes chronic bad breath?",
      answer: "Chronic bad breath (halitosis) is usually caused by bacteria in the mouth, particularly from gum disease, poor oral hygiene, dry mouth, or underlying medical conditions. A professional evaluation can identify the specific cause."
    },
    {
      question: "Can mouthwash cure bad breath?",
      answer: "Mouthwash can temporarily mask bad breath, but it won't cure the underlying cause. Professional treatment is needed to address the root cause for lasting results."
    },
    {
      question: "How long does fresh breath treatment take?",
      answer: "Treatment duration depends on the underlying cause. Simple cases may improve within days, while complex cases involving gum disease may take several weeks to months for complete resolution."
    },
    {
      question: "Is bad breath always a dental problem?",
      answer: "While 85-90% of bad breath originates in the mouth, it can also be caused by medical conditions like diabetes, sinus infections, or digestive issues. We'll help determine if referral to a physician is needed."
    },
    {
      question: "Can certain foods cause permanent bad breath?",
      answer: "Foods like garlic and onions cause temporary bad breath. However, a diet high in sugar and processed foods can contribute to bacterial overgrowth and chronic bad breath."
    },
    {
      question: "How can I test if I have bad breath?",
      answer: "It's difficult to smell your own breath. Ask a trusted friend or family member, or schedule a consultation where we can professionally assess and measure breath odor."
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
                Fresh Breath Treatment
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Comprehensive halitosis treatment to identify and eliminate the root causes of bad breath. 
                Regain your confidence with professional fresh breath solutions.
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

        {/* Understanding Bad Breath */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Understanding Halitosis
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Get to the Root of the Problem
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Bad breath affects millions of people and can significantly impact confidence 
                    and social interactions. Our comprehensive approach identifies the underlying 
                    causes and provides effective, long-lasting solutions tailored to your specific situation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Professional Diagnosis</h4>
                        <p className="text-neutral-600 text-sm">Identify specific causes through comprehensive evaluation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Targeted Treatment</h4>
                        <p className="text-neutral-600 text-sm">Customized solutions based on root causes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Long-term Success</h4>
                        <p className="text-neutral-600 text-sm">Sustainable solutions for lasting fresh breath</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Fresh breath treatment consultation showing professional dental care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes and Treatments */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Common Causes & Treatments
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Understanding the cause is key to effective treatment. We address each underlying factor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {causes.map((cause, index) => {
                const IconComponent = cause.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {cause.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {cause.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Treatment:</h4>
                        <p className="text-sm text-green-600">{cause.treatment}</p>
                      </div>
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
                Professional Treatment Options
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Warning Signs */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <AlertTriangle className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  When to Seek Professional Help
                </h2>
                <p className="text-lg text-neutral-600">
                  Contact us if you experience any of these persistent symptoms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warningSignsToWatch.map((sign, index) => (
                  <div key={index} className="flex items-center bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-amber-800">{sign}</span>
                  </div>
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
                Our Treatment Process
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

        {/* Home Care Tips */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Daily Fresh Breath Habits
                </h2>
                <p className="text-lg text-neutral-600">
                  Maintain fresh breath between professional treatments with these daily habits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {homeCareTips.map((tip, index) => (
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
                  Effective Treatment Results
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-neutral-600">Oral Origin Cases</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2-4</div>
                  <div className="text-neutral-600">Weeks Improvement</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">92%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-neutral-600">Patients Helped</div>
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
                  Get answers to common questions about fresh breath treatment.
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
                Regain Your Confidence
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Don't let bad breath hold you back from social interactions and professional opportunities. 
                Our comprehensive treatment approach can help you achieve lasting fresh breath.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE FRESH BREATH CONSULTATION
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

export default FreshBreathPage;