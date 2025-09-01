import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Moon, 
  Shield, 
  Activity, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Award,
  Clock,
  AlertTriangle,
  Stethoscope,
  ArrowRight
} from "lucide-react";

const TMDBruxismPage = () => {
  const benefits = [
    "Reduce jaw pain",
    "Protect teeth from wear",
    "Improve sleep quality",
    "Prevent headaches"
  ];

  const conditions = [
    {
      title: "TMD (Temporomandibular Disorder)",
      description: "Dysfunction of the jaw joint and surrounding muscles",
      icon: Activity,
      symptoms: ["Jaw pain or tenderness", "Clicking or popping sounds", "Difficulty opening mouth", "Locking jaw"],
      causes: ["Jaw injury", "Arthritis", "Stress", "Teeth grinding"]
    },
    {
      title: "Bruxism (Teeth Grinding)",
      description: "Involuntary grinding or clenching of teeth, often during sleep",
      icon: Moon,
      symptoms: ["Worn tooth surfaces", "Tooth sensitivity", "Jaw muscle pain", "Morning headaches"],
      causes: ["Stress and anxiety", "Sleep disorders", "Medications", "Lifestyle factors"]
    }
  ];

  const treatmentOptions = [
    {
      title: "Custom Night Guards",
      description: "Protective appliances worn during sleep to prevent grinding damage",
      icon: Shield,
      features: ["Custom fit", "Comfortable wear", "Durable materials", "Easy maintenance"],
      suitableFor: "Nighttime grinding, tooth protection"
    },
    {
      title: "Bite Adjustment",
      description: "Precise adjustment of tooth contacts to improve jaw function",
      icon: Activity,
      features: ["Improved bite balance", "Reduced muscle strain", "Better jaw function", "Pain relief"],
      suitableFor: "Bite problems, TMJ dysfunction"
    },
    {
      title: "Stress Management",
      description: "Techniques and therapies to reduce stress-related grinding",
      icon: Heart,
      features: ["Relaxation techniques", "Lifestyle counseling", "Stress reduction", "Behavioral therapy"],
      suitableFor: "Stress-related bruxism, anxiety"
    },
    {
      title: "Physical Therapy",
      description: "Exercises and treatments to improve jaw muscle function",
      icon: Stethoscope,
      features: ["Muscle exercises", "Pain relief", "Improved mobility", "Strengthening"],
      suitableFor: "TMJ pain, muscle dysfunction"
    }
  ];

  const symptoms = [
    {
      category: "Jaw Symptoms",
      signs: ["Jaw pain or soreness", "Clicking or popping sounds", "Difficulty opening mouth", "Jaw locking"]
    },
    {
      category: "Dental Symptoms", 
      signs: ["Worn tooth surfaces", "Chipped or cracked teeth", "Loose teeth", "Tooth sensitivity"]
    },
    {
      category: "Head & Neck Symptoms",
      signs: ["Morning headaches", "Earaches", "Neck and shoulder pain", "Facial pain"]
    },
    {
      category: "Sleep Symptoms",
      signs: ["Grinding sounds at night", "Poor sleep quality", "Partner complaints", "Daytime fatigue"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Evaluation",
      description: "Detailed examination of jaw function, bite, and muscle activity"
    },
    {
      step: "2",
      title: "Diagnostic Testing",
      description: "X-rays and possibly MRI to assess joint structure and function"
    },
    {
      step: "3",
      title: "Treatment Planning",
      description: "Develop customized treatment plan based on specific diagnosis"
    },
    {
      step: "4",
      title: "Conservative Treatment",
      description: "Start with non-invasive treatments like night guards or therapy"
    },
    {
      step: "5",
      title: "Progress Monitoring",
      description: "Regular follow-ups to assess improvement and adjust treatment"
    },
    {
      step: "6",
      title: "Maintenance Phase",
      description: "Ongoing care to prevent recurrence and maintain results"
    }
  ];

  const prevention = [
    "Manage stress through relaxation techniques",
    "Avoid chewing gum and hard foods",
    "Practice good posture",
    "Limit caffeine and alcohol",
    "Use a night guard if recommended",
    "Perform jaw exercises as directed",
    "Get adequate sleep",
    "Address underlying sleep disorders"
  ];

  const faqs = [
    {
      question: "What is TMD?",
      answer: "TMD (Temporomandibular Disorder) refers to problems with the jaw joint and surrounding muscles. It can cause pain, clicking sounds, and difficulty opening the mouth."
    },
    {
      question: "What causes teeth grinding?",
      answer: "Bruxism can be caused by stress, anxiety, sleep disorders, medications, caffeine, or an abnormal bite. Many people grind their teeth unconsciously during sleep."
    },
    {
      question: "How do I know if I grind my teeth?",
      answer: "Signs include worn tooth surfaces, jaw pain, morning headaches, tooth sensitivity, and your partner hearing grinding sounds at night. A dental examination can confirm grinding damage."
    },
    {
      question: "Are night guards comfortable to wear?",
      answer: "Custom-made night guards are designed for comfort and proper fit. There may be a brief adjustment period, but most patients adapt quickly and sleep better with protection."
    },
    {
      question: "Can TMD be cured?",
      answer: "Many TMD cases can be successfully managed or resolved with appropriate treatment. Conservative treatments are often very effective, and surgery is rarely needed."
    },
    {
      question: "How long does treatment take?",
      answer: "Treatment duration varies by condition severity. Some patients see improvement within weeks, while others may need several months of treatment for optimal results."
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
              <Activity className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                TMD & Bruxism Treatment
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Comprehensive treatment for jaw disorders and teeth grinding. 
                Relieve pain, protect your teeth, and improve your quality of life with our specialized care.
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
                <Link to="/#contact">BOOK TMD CONSULTATION</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Understanding TMD & Bruxism */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Understanding TMD & Bruxism
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                These related conditions can significantly impact your daily life and oral health.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {condition.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-6">
                        {condition.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Symptoms:</h4>
                          <ul className="space-y-2">
                            {condition.symptoms.map((symptom, symptomIndex) => (
                              <li key={symptomIndex} className="flex items-center text-sm text-neutral-600">
                                <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Common Causes:</h4>
                          <ul className="space-y-2">
                            {condition.causes.map((cause, causeIndex) => (
                              <li key={causeIndex} className="flex items-center text-sm text-neutral-600">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                {cause}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Symptoms Checklist */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Symptom Checklist
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Do you experience any of these symptoms? You may benefit from TMD/Bruxism treatment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {symptoms.map((category, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-neutral-800 mb-4">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.signs.map((sign, signIndex) => (
                        <li key={signIndex} className="flex items-start text-sm text-neutral-600">
                          <div className="w-2 h-2 rounded-full bg-red-500 mr-3 mt-2 flex-shrink-0"></div>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatmentOptions.map((treatment, index) => {
                const IconComponent = treatment.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {treatment.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {treatment.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <ul className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Best for:</h4>
                        <p className="text-sm text-neutral-600">{treatment.suitableFor}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-neutral-50">
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

        {/* Prevention & Management */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Prevention & Self-Care
                </h2>
                <p className="text-lg text-neutral-600">
                  These lifestyle changes can help prevent and manage TMD and bruxism.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevention.map((tip, index) => (
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
                  Treatment Success
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">10%</div>
                  <div className="text-neutral-600">Population Affected</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2-6</div>
                  <div className="text-neutral-600">Weeks Improvement</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-neutral-600">Patients Treated</div>
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
                  Get answers to common questions about TMD and bruxism treatment.
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
                Stop Suffering from Jaw Pain
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Don't let TMD or bruxism control your life. Our comprehensive treatment approach 
                can provide relief and protect your teeth from further damage.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE TMD EVALUATION
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

export default TMDBruxismPage;