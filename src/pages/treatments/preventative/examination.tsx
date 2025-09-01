import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Stethoscope, 
  Eye, 
  Shield, 
  Heart,
  CheckCircle,
  Users,
  Star,
  Award,
  Clock,
  Search,
  Camera,
  Target,
  ArrowRight
} from "lucide-react";

const RegularExaminationPage = () => {
  const benefits = [
    "Early problem detection",
    "Prevent serious conditions",
    "Maintain optimal health",
    "Cost-effective care"
  ];

  const examinationComponents = [
    {
      title: "Visual Examination",
      description: "Comprehensive inspection of all oral structures",
      icon: Eye,
      includes: ["Tooth condition assessment", "Gum health evaluation", "Bite analysis", "Oral tissue inspection"],
      detects: ["Cavities", "Gum disease", "Oral lesions", "Bite problems"]
    },
    {
      title: "Digital X-Rays",
      description: "Advanced imaging to see what's not visible to the naked eye",
      icon: Camera,
      includes: ["Bitewing X-rays", "Panoramic imaging", "Periapical films", "3D imaging when needed"],
      detects: ["Hidden cavities", "Bone loss", "Impacted teeth", "Infections"]
    },
    {
      title: "Oral Cancer Screening",
      description: "Systematic screening for early detection of oral cancer",
      icon: Search,
      includes: ["Tissue examination", "Lymph node palpation", "Risk factor assessment", "Suspicious lesion evaluation"],
      detects: ["Precancerous changes", "Early cancer signs", "Abnormal tissues", "Risk factors"]
    },
    {
      title: "Periodontal Assessment",
      description: "Detailed evaluation of gum and bone health",
      icon: Heart,
      includes: ["Pocket depth measurement", "Bleeding assessment", "Mobility testing", "Bone level evaluation"],
      detects: ["Gum disease", "Bone loss", "Infection", "Tooth mobility"]
    }
  ];

  const frequency = [
    {
      title: "Every 6 Months",
      description: "Standard recommendation for healthy patients",
      icon: Clock,
      suitableFor: ["Good oral hygiene", "No active disease", "Low risk factors", "Healthy lifestyle"],
      benefits: ["Routine monitoring", "Early detection", "Professional cleaning", "Preventive care"]
    },
    {
      title: "Every 3-4 Months",
      description: "More frequent visits for higher risk patients",
      icon: Shield,
      suitableFor: ["Gum disease history", "Diabetes", "Smoking", "Family history"],
      benefits: ["Close monitoring", "Disease management", "Intensive prevention", "Risk reduction"]
    },
    {
      title: "As Needed",
      description: "Customized schedule based on individual needs",
      icon: Target,
      suitableFor: ["Active treatment", "Special conditions", "Post-surgical care", "Specific monitoring"],
      benefits: ["Personalized care", "Treatment monitoring", "Optimal outcomes", "Flexible scheduling"]
    }
  ];

  const earlyDetection = [
    {
      title: "Cavities",
      description: "Small cavities are easier and less expensive to treat",
      earlyTreatment: "Simple filling",
      lateTreatment: "Root canal or extraction"
    },
    {
      title: "Gum Disease",
      description: "Early gum disease is completely reversible",
      earlyTreatment: "Professional cleaning",
      lateTreatment: "Surgery and ongoing therapy"
    },
    {
      title: "Oral Cancer",
      description: "Early detection dramatically improves survival rates",
      earlyTreatment: "Minor surgery",
      lateTreatment: "Extensive surgery and therapy"
    },
    {
      title: "Bite Problems",
      description: "Early intervention prevents complex issues",
      earlyTreatment: "Simple orthodontics",
      lateTreatment: "Jaw surgery"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Medical History Update",
      description: "Review health changes, medications, and concerns since last visit"
    },
    {
      step: "2",
      title: "Clinical Examination",
      description: "Thorough visual and tactile examination of teeth, gums, and oral tissues"
    },
    {
      step: "3",
      title: "Diagnostic Imaging",
      description: "Digital X-rays and other imaging as needed for complete assessment"
    },
    {
      step: "4",
      title: "Risk Assessment",
      description: "Evaluate individual risk factors for dental disease"
    },
    {
      step: "5",
      title: "Treatment Planning",
      description: "Discuss findings and develop personalized care plan"
    },
    {
      step: "6",
      title: "Preventive Care",
      description: "Professional cleaning and preventive treatments"
    }
  ];

  const preparation = [
    "List current medications and supplements",
    "Note any changes in health status",
    "Prepare questions about oral health",
    "Bring insurance information",
    "Arrive 15 minutes early",
    "Brush teeth before appointment"
  ];

  const faqs = [
    {
      question: "How often should I have dental examinations?",
      answer: "Most patients should have examinations every 6 months. However, patients with gum disease, diabetes, or other risk factors may need more frequent visits every 3-4 months."
    },
    {
      question: "What happens during a regular dental examination?",
      answer: "A comprehensive exam includes visual inspection of teeth and gums, digital X-rays, oral cancer screening, bite evaluation, and assessment of existing restorations. We also review your medical history and discuss any concerns."
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, dental X-rays are very safe. We use digital X-rays that emit 80% less radiation than traditional film X-rays. The amount of radiation is minimal and comparable to natural background exposure."
    },
    {
      question: "Why do I need X-rays if my teeth feel fine?",
      answer: "X-rays reveal problems not visible during visual examination, such as cavities between teeth, bone loss, infections, and developing issues. Many dental problems don't cause pain until they're advanced."
    },
    {
      question: "What if problems are found during my exam?",
      answer: "We'll discuss any findings with you, explain treatment options, and develop a personalized treatment plan. We prioritize treatments based on urgency and your preferences."
    },
    {
      question: "How can I prepare for my dental examination?",
      answer: "Brush your teeth before your appointment, bring a list of medications, note any health changes, and prepare questions about your oral health. Arrive a few minutes early to complete any paperwork."
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
              <Stethoscope className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Regular Dental Examination
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Comprehensive preventive examinations to maintain optimal oral health. 
                Early detection and prevention are your best defense against dental problems.
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
                <Link to="/#contact">SCHEDULE EXAMINATION</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Examination Components */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Comprehensive Examination Components
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Our thorough examination covers every aspect of your oral health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {examinationComponents.map((component, index) => {
                const IconComponent = component.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {component.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {component.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Includes:</h4>
                          <ul className="space-y-2">
                            {component.includes.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center text-sm text-neutral-600">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Detects:</h4>
                          <ul className="space-y-2">
                            {component.detects.map((detection, detectionIndex) => (
                              <li key={detectionIndex} className="flex items-center text-sm text-neutral-600">
                                <Search className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                {detection}
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

        {/* Visit Frequency */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                How Often Should You Visit?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {frequency.map((freq, index) => {
                const IconComponent = freq.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {freq.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {freq.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Suitable for:</h4>
                          <ul className="space-y-2 mb-4">
                            {freq.suitableFor.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center text-sm text-neutral-600">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Benefits:</h4>
                          <ul className="space-y-2">
                            {freq.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-neutral-600">
                                <Star className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                {benefit}
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

        {/* Early Detection Benefits */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                The Power of Early Detection
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Catching problems early makes treatment simpler, more comfortable, and more affordable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {earlyDetection.map((condition, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {condition.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {condition.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Early Treatment:</h4>
                        <p className="text-sm text-green-600">{condition.earlyTreatment}</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">Late Treatment:</h4>
                        <p className="text-sm text-red-600">{condition.lateTreatment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                What to Expect During Your Examination
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

        {/* Preparation Tips */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  How to Prepare for Your Examination
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {preparation.map((tip, index) => (
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
                  Prevention Works
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-neutral-600">Annual Exams</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-neutral-600">Problems Prevented</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-neutral-600">Patient Satisfaction</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
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
                  Get answers to common questions about regular dental examinations.
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
                Prevention is the Best Medicine
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Regular dental examinations are your best investment in long-term oral health. 
                Schedule your preventive examination today.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  BOOK PREVENTIVE EXAMINATION
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

export default RegularExaminationPage;