import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Heart, 
  Shield, 
  Users, 
  Stethoscope,
  CheckCircle,
  Star,
  Award,
  Clock,
  AlertTriangle,
  Activity,
  ArrowRight
} from "lucide-react";

const PeriodontalPage = () => {
  const benefits = [
    "Prevent tooth loss",
    "Reduce inflammation",
    "Improve overall health",
    "Fresh breath"
  ];

  const stages = [
    {
      title: "Gingivitis",
      description: "Early stage gum inflammation that's completely reversible",
      icon: Heart,
      symptoms: ["Red, swollen gums", "Bleeding when brushing", "Bad breath", "Tender gums"],
      treatment: "Professional cleaning and improved home care",
      reversible: true
    },
    {
      title: "Mild Periodontitis",
      description: "Early bone and tissue loss around teeth",
      icon: AlertTriangle,
      symptoms: ["Persistent bad breath", "Gum recession", "Deeper pockets", "Slight tooth mobility"],
      treatment: "Scaling and root planing (deep cleaning)",
      reversible: false
    },
    {
      title: "Advanced Periodontitis",
      description: "Severe bone loss and potential tooth loss",
      icon: Shield,
      symptoms: ["Severe gum recession", "Loose teeth", "Pus formation", "Pain when chewing"],
      treatment: "Surgical intervention and ongoing maintenance",
      reversible: false
    }
  ];

  const treatmentOptions = [
    {
      title: "Scaling & Root Planing",
      description: "Deep cleaning below the gum line to remove bacteria and tartar",
      features: ["Non-surgical treatment", "Local anesthesia", "Bacterial removal", "Root smoothing"],
      duration: "1-4 appointments",
      recovery: "1-2 weeks"
    },
    {
      title: "Periodontal Surgery",
      description: "Surgical procedures to regenerate lost tissue and bone",
      features: ["Tissue regeneration", "Bone grafting", "Pocket reduction", "Advanced techniques"],
      duration: "1-2 hours per area",
      recovery: "2-4 weeks"
    },
    {
      title: "Maintenance Therapy",
      description: "Ongoing care to prevent disease recurrence",
      features: ["Regular cleanings", "Monitoring", "Home care education", "Early intervention"],
      duration: "1 hour",
      recovery: "None required"
    }
  ];

  const riskFactors = [
    {
      title: "Smoking & Tobacco",
      description: "Significantly increases risk and reduces healing",
      icon: AlertTriangle
    },
    {
      title: "Diabetes",
      description: "Poor blood sugar control worsens gum disease",
      icon: Stethoscope
    },
    {
      title: "Genetics",
      description: "Family history increases susceptibility",
      icon: Users
    },
    {
      title: "Stress",
      description: "Weakens immune system's ability to fight infection",
      icon: Activity
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Evaluation",
      description: "Thorough examination including X-rays and pocket measurements"
    },
    {
      step: "2",
      title: "Disease Staging",
      description: "Determine the extent and severity of periodontal disease"
    },
    {
      step: "3",
      title: "Treatment Planning",
      description: "Develop customized treatment plan based on your specific needs"
    },
    {
      step: "4",
      title: "Active Treatment",
      description: "Implement non-surgical or surgical treatments as needed"
    },
    {
      step: "5",
      title: "Healing Period",
      description: "Allow tissues to heal and respond to treatment"
    },
    {
      step: "6",
      title: "Maintenance Phase",
      description: "Ongoing care to prevent disease recurrence"
    }
  ];

  const prevention = [
    "Brush twice daily with soft-bristled toothbrush",
    "Floss daily to remove plaque between teeth",
    "Use antimicrobial mouthwash",
    "Regular professional cleanings",
    "Don't smoke or use tobacco products",
    "Manage diabetes and other health conditions",
    "Eat a balanced, nutritious diet",
    "Manage stress levels"
  ];

  const faqs = [
    {
      question: "What is periodontal disease?",
      answer: "Periodontal disease is a bacterial infection of the gums and supporting structures of teeth. It starts as gingivitis and can progress to periodontitis, potentially leading to tooth loss if untreated."
    },
    {
      question: "Is gum disease reversible?",
      answer: "Gingivitis (early stage) is completely reversible with proper treatment and home care. However, periodontitis causes permanent damage to bone and tissues, though it can be controlled and stabilized."
    },
    {
      question: "How is periodontal disease treated?",
      answer: "Treatment depends on the severity. Early stages may only need professional cleaning and improved home care, while advanced cases may require scaling and root planing or surgical intervention."
    },
    {
      question: "Is periodontal treatment painful?",
      answer: "We use local anesthesia and sedation options to ensure comfort during treatment. Some mild discomfort may occur after treatment, but this is manageable with medication."
    },
    {
      question: "How long does periodontal treatment take?",
      answer: "Treatment duration varies by severity. Non-surgical treatment typically takes 1-4 appointments over several weeks, while surgical cases may require additional time for healing."
    },
    {
      question: "Can gum disease affect my overall health?",
      answer: "Yes, research links periodontal disease to heart disease, diabetes, stroke, and other systemic conditions. Treating gum disease can improve both oral and overall health."
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
              <Heart className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Periodontal Care
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Comprehensive gum disease treatment and prevention to save your teeth and improve your overall health. 
                Expert care for all stages of periodontal disease.
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
                <Link to="/#contact">BOOK GUM HEALTH ASSESSMENT</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Understanding Gum Disease */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Understanding Gum Disease
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Protect Your Gums, Save Your Teeth
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Periodontal disease is a bacterial infection that affects the gums and supporting 
                    structures of your teeth. Left untreated, it can lead to tooth loss and has been 
                    linked to serious health conditions including heart disease and diabetes.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Early Detection</h4>
                        <p className="text-neutral-600 text-sm">Regular screenings catch problems early</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Comprehensive Treatment</h4>
                        <p className="text-neutral-600 text-sm">Non-surgical and surgical options available</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Ongoing Support</h4>
                        <p className="text-neutral-600 text-sm">Maintenance programs for long-term success</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6812541/pexels-photo-6812541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Periodontal care showing healthy gums and professional treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stages of Gum Disease */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Stages of Gum Disease
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Understanding the progression helps with early intervention and treatment planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                        index === 0 ? 'bg-green-50 text-green-600' :
                        index === 1 ? 'bg-yellow-50 text-yellow-600' : 'bg-red-50 text-red-600'
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {stage.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {stage.description}
                      </p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        stage.reversible ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {stage.reversible ? 'Reversible' : 'Not Reversible'}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Symptoms:</h4>
                        <ul className="space-y-2 mb-4">
                          {stage.symptoms.map((symptom, symptomIndex) => (
                            <li key={symptomIndex} className="flex items-center text-sm text-neutral-600">
                              <div className="w-2 h-2 rounded-full bg-red-500 mr-3 flex-shrink-0"></div>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Treatment:</h4>
                        <p className="text-sm text-neutral-600">{stage.treatment}</p>
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
                Treatment Options
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatmentOptions.map((treatment, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {treatment.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center text-primary font-medium">
                        <Clock className="w-4 h-4 mr-2" />
                        {treatment.duration}
                      </div>
                      <div className="flex items-center text-green-600 font-medium">
                        <Heart className="w-4 h-4 mr-2" />
                        {treatment.recovery}
                      </div>
                    </div>
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

        {/* Risk Factors */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Risk Factors for Gum Disease
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {riskFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
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

        {/* Prevention Tips */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Prevention is Key
                </h2>
                <p className="text-lg text-neutral-600">
                  Follow these guidelines to prevent gum disease and maintain healthy gums.
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
                  <div className="text-4xl font-bold text-primary mb-2">47%</div>
                  <div className="text-neutral-600">Adults Affected</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2-4</div>
                  <div className="text-neutral-600">Weeks Treatment</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">90%</div>
                  <div className="text-neutral-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
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
                  Get answers to common questions about periodontal care.
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
                Don't Ignore the Warning Signs
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Early treatment of gum disease can save your teeth and improve your overall health. 
                Schedule a comprehensive periodontal evaluation today.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE PERIODONTAL EVALUATION
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

export default PeriodontalPage;