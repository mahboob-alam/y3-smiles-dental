import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  AlertTriangle, 
  Phone, 
  Clock, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Award,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";

const EmergencyDentistryPage = () => {
  const benefits = [
    "24/7 emergency line",
    "Same-day appointments",
    "Immediate pain relief",
    "Urgent care protocols"
  ];

  const emergencyTypes = [
    {
      title: "Severe Tooth Pain",
      description: "Intense, persistent pain that interferes with daily activities",
      icon: Heart,
      immediateSteps: ["Take over-the-counter pain medication", "Apply cold compress", "Rinse with warm salt water", "Call our emergency line"],
      urgency: "Immediate"
    },
    {
      title: "Knocked-Out Tooth",
      description: "Tooth completely displaced from its socket due to trauma",
      icon: AlertTriangle,
      immediateSteps: ["Handle tooth by crown only", "Rinse gently if dirty", "Try to reinsert or store in milk", "Seek immediate care"],
      urgency: "Within 30 minutes"
    },
    {
      title: "Broken or Chipped Tooth",
      description: "Fractured tooth causing pain or sharp edges",
      icon: Shield,
      immediateSteps: ["Save any broken pieces", "Rinse mouth with warm water", "Apply cold compress for swelling", "Cover sharp edges with wax"],
      urgency: "Same day"
    },
    {
      title: "Lost Filling or Crown",
      description: "Restoration has fallen out, exposing sensitive tooth structure",
      icon: Award,
      immediateSteps: ["Keep the restoration if possible", "Clean the area gently", "Use temporary dental cement", "Avoid chewing on that side"],
      urgency: "Within 24-48 hours"
    },
    {
      title: "Dental Abscess",
      description: "Serious infection that can spread if left untreated",
      icon: Zap,
      immediateSteps: ["Rinse with salt water", "Take pain medication", "Apply cold compress", "Seek immediate treatment"],
      urgency: "Immediate"
    },
    {
      title: "Soft Tissue Injury",
      description: "Cuts or injuries to lips, gums, tongue, or cheeks",
      icon: Users,
      immediateSteps: ["Clean area with warm water", "Apply pressure to stop bleeding", "Use cold compress for swelling", "Seek care if severe"],
      urgency: "Depends on severity"
    }
  ];

  const preventionTips = [
    {
      title: "Wear Protection",
      description: "Use mouthguards during sports and night guards for grinding",
      icon: Shield
    },
    {
      title: "Avoid Hard Objects",
      description: "Don't chew ice, hard candy, or use teeth as tools",
      icon: AlertTriangle
    },
    {
      title: "Regular Checkups",
      description: "Prevent emergencies with routine dental care",
      icon: Clock
    },
    {
      title: "Good Oral Hygiene",
      description: "Brush and floss daily to prevent infections",
      icon: Heart
    }
  ];

  const whenToCall = [
    "Severe, persistent tooth pain",
    "Facial swelling or fever",
    "Knocked-out or loose tooth",
    "Broken tooth with sharp edges",
    "Lost filling causing pain",
    "Bleeding that won't stop",
    "Signs of infection or abscess",
    "Jaw injury or dislocation"
  ];

  const process = [
    {
      step: "1",
      title: "Emergency Call",
      description: "Call our emergency line for immediate guidance and appointment scheduling"
    },
    {
      step: "2",
      title: "Immediate Care",
      description: "Follow our emergency instructions while traveling to the clinic"
    },
    {
      step: "3",
      title: "Rapid Assessment",
      description: "Quick but thorough examination to determine the problem and urgency"
    },
    {
      step: "4",
      title: "Pain Management",
      description: "Immediate pain relief and stabilization of the emergency"
    },
    {
      step: "5",
      title: "Emergency Treatment",
      description: "Provide necessary treatment to resolve the immediate problem"
    },
    {
      step: "6",
      title: "Follow-Up Plan",
      description: "Schedule any additional treatment needed for complete resolution"
    }
  ];

  const faqs = [
    {
      question: "What constitutes a dental emergency?",
      answer: "Dental emergencies include severe pain, trauma to teeth or mouth, swelling, bleeding that won't stop, knocked-out teeth, or any condition that requires immediate attention to save a tooth or relieve severe pain."
    },
    {
      question: "What should I do if I knock out a tooth?",
      answer: "Handle the tooth by the crown (not the root), rinse gently if dirty, try to reinsert it, or store in milk. Seek immediate dental care within 30 minutes for the best chance of saving the tooth."
    },
    {
      question: "How quickly can you see me for an emergency?",
      answer: "We prioritize dental emergencies and typically see emergency patients the same day. For severe cases, we can often accommodate immediate appointments."
    },
    {
      question: "What if I have a dental emergency after hours?",
      answer: "Call our emergency line for guidance. We provide after-hours emergency care for urgent situations and can direct you to appropriate immediate care if needed."
    },
    {
      question: "Should I go to the hospital for a dental emergency?",
      answer: "Hospital emergency rooms can provide pain medication and antibiotics but cannot perform dental procedures. Contact us first for dental-specific emergency care."
    },
    {
      question: "How can I prevent dental emergencies?",
      answer: "Wear mouthguards during sports, avoid chewing hard objects, maintain good oral hygiene, have regular checkups, and address dental problems early before they become emergencies."
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
              <AlertTriangle className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Emergency Dentistry
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Immediate dental care when you need it most. Our emergency services provide 
                rapid pain relief and urgent treatment to save your teeth and restore your comfort.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-red-600 mr-3" />
                  <span className="text-2xl font-bold text-red-800">Emergency Line: (03) 1234 5678</span>
                </div>
                <p className="text-red-700">Available 24/7 for dental emergencies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Emergencies */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Common Dental Emergencies
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Recognize emergency situations and know what immediate steps to take.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergencyTypes.map((emergency, index) => {
                const IconComponent = emergency.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {emergency.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {emergency.description}
                      </p>
                      <div className="bg-red-50 rounded-lg px-3 py-2 mb-4">
                        <span className="text-sm font-semibold text-red-700">
                          Urgency: {emergency.urgency}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Immediate Steps:</h4>
                      <ul className="space-y-2">
                        {emergency.immediateSteps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start text-sm text-neutral-600">
                            <div className="w-2 h-2 rounded-full bg-red-500 mr-3 mt-2 flex-shrink-0"></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* When to Call */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  When to Call for Emergency Care
                </h2>
                <p className="text-lg text-neutral-600">
                  Don't hesitate to call if you experience any of these emergency situations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whenToCall.map((situation, index) => (
                  <div key={index} className="flex items-center bg-red-50 border border-red-200 rounded-lg p-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-red-800">{situation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Preventing Dental Emergencies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {preventionTips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Process */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Our Emergency Process
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
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

        {/* Statistics */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Emergency Care Excellence
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-neutral-600">Emergency Line</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-neutral-600">Emergencies Treated</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-neutral-600">Same-Day Treatment</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-neutral-600">Minutes Average Response</div>
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
                  Get answers to common questions about dental emergencies.
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

        {/* Emergency Contact */}
        <section className="py-24 bg-red-50">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <Phone className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Dental Emergency? We're Here to Help
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Don't suffer in pain. Our emergency dental services are available when you need them most. 
                Call now for immediate assistance and same-day treatment.
              </p>
              <div className="space-y-4">
                <Button variant="cta" size="xl" className="bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:(03) 1234 5678">
                    CALL EMERGENCY LINE: (03) 1234 5678
                    <Phone className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/#contact">
                    SCHEDULE NON-URGENT APPOINTMENT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyDentistryPage;