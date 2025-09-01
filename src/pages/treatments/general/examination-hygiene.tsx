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
  ArrowRight
} from "lucide-react";

const ExaminationHygienePage = () => {
  const benefits = [
    "Early problem detection",
    "Professional deep cleaning",
    "Oral cancer screening",
    "Personalized care plan"
  ];

  const examinationComponents = [
    {
      title: "Visual Examination",
      description: "Thorough inspection of teeth, gums, and oral tissues",
      icon: Eye,
      includes: ["Cavity detection", "Gum health assessment", "Bite evaluation", "Oral tissue check"]
    },
    {
      title: "Digital X-Rays",
      description: "Advanced imaging to detect problems not visible to the naked eye",
      icon: Search,
      includes: ["Cavity detection", "Bone level assessment", "Root evaluation", "Wisdom tooth monitoring"]
    },
    {
      title: "Oral Cancer Screening",
      description: "Comprehensive screening for early detection of oral cancer",
      icon: Shield,
      includes: ["Tissue examination", "Lymph node check", "Risk assessment", "Early detection"]
    },
    {
      title: "Periodontal Assessment",
      description: "Detailed evaluation of gum health and supporting structures",
      icon: Heart,
      includes: ["Gum pocket measurement", "Bleeding assessment", "Bone evaluation", "Risk factors"]
    }
  ];

  const hygieneServices = [
    {
      title: "Professional Cleaning",
      description: "Removal of plaque and tartar buildup above and below the gum line",
      features: ["Ultrasonic scaling", "Hand instrument cleaning", "Polishing", "Fluoride treatment"]
    },
    {
      title: "Deep Cleaning (Scaling & Root Planing)",
      description: "Intensive cleaning for patients with gum disease",
      features: ["Subgingival cleaning", "Root surface smoothing", "Bacterial removal", "Healing promotion"]
    },
    {
      title: "Preventive Treatments",
      description: "Additional treatments to prevent future dental problems",
      features: ["Fluoride applications", "Dental sealants", "Oral hygiene education", "Home care recommendations"]
    }
  ];

  const frequency = [
    {
      title: "Every 6 Months",
      description: "Standard recommendation for most patients",
      suitableFor: "Healthy patients with good oral hygiene"
    },
    {
      title: "Every 3-4 Months",
      description: "More frequent visits for higher risk patients",
      suitableFor: "Gum disease, diabetes, smoking, family history"
    },
    {
      title: "As Needed",
      description: "Customized schedule based on individual needs",
      suitableFor: "Specific conditions or treatment requirements"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Medical History Review",
      description: "Discussion of health changes, medications, and concerns since last visit"
    },
    {
      step: "2",
      title: "Clinical Examination",
      description: "Comprehensive visual and tactile examination of all oral structures"
    },
    {
      step: "3",
      title: "Diagnostic Imaging",
      description: "Digital X-rays taken as needed for complete assessment"
    },
    {
      step: "4",
      title: "Professional Cleaning",
      description: "Thorough removal of plaque, tartar, and stains"
    },
    {
      step: "5",
      title: "Treatment Planning",
      description: "Discussion of findings and recommendations for optimal oral health"
    }
  ];

  const warningSignsToWatch = [
    "Bleeding gums during brushing",
    "Persistent bad breath",
    "Tooth sensitivity or pain",
    "Loose or shifting teeth",
    "Receding gums",
    "White or red patches in mouth"
  ];

  const faqs = [
    {
      question: "How often should I have a dental examination and cleaning?",
      answer: "Most patients should visit every 6 months for optimal oral health. However, some patients with gum disease, diabetes, or other risk factors may need more frequent visits every 3-4 months."
    },
    {
      question: "Is the cleaning procedure painful?",
      answer: "Professional cleanings are generally comfortable. Some patients may experience mild sensitivity, especially if it's been a while since their last cleaning. We can use topical anesthetics if needed."
    },
    {
      question: "What's included in a comprehensive dental examination?",
      answer: "A comprehensive exam includes visual inspection of teeth and gums, digital X-rays, oral cancer screening, bite evaluation, and assessment of existing restorations. We also review your medical history and discuss any concerns."
    },
    {
      question: "Why are dental X-rays necessary?",
      answer: "X-rays reveal problems not visible during visual examination, such as cavities between teeth, bone loss, infections, and developing issues. We use digital X-rays with minimal radiation exposure."
    },
    {
      question: "What happens if problems are found during my exam?",
      answer: "We'll discuss any findings with you, explain treatment options, and develop a personalized treatment plan. We prioritize treatments based on urgency and your preferences."
    },
    {
      question: "How can I maintain good oral health between visits?",
      answer: "Brush twice daily with fluoride toothpaste, floss daily, use mouthwash, eat a balanced diet, avoid tobacco, and limit sugary snacks and drinks. We'll provide personalized recommendations."
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
                Comprehensive Examination & Dental Hygiene
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Thorough dental examinations and professional cleanings to maintain optimal oral health. 
                Early detection and prevention are the keys to a lifetime of healthy smiles.
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
                <Link to="/#contact">BOOK CHECKUP</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included */}
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
                      <ul className="space-y-2">
                        {component.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm text-neutral-600">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {item}
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

        {/* Hygiene Services */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Professional Hygiene Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hygieneServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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

        {/* Visit Frequency */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                How Often Should You Visit?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {frequency.map((freq, index) => (
                <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      <Clock className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                      {freq.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {freq.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Best for:</h4>
                      <p className="text-sm text-neutral-600">{freq.suitableFor}</p>
                    </div>
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
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Warning Signs to Watch For
                </h2>
                <p className="text-lg text-neutral-600">
                  Contact us if you experience any of these symptoms between visits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warningSignsToWatch.map((sign, index) => (
                  <div key={index} className="flex items-center bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium text-red-800">{sign}</span>
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
                What to Expect During Your Visit
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
                  <div className="text-neutral-600">Annual Checkups</div>
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
                  Get answers to common questions about dental examinations and hygiene.
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
                Regular examinations and professional cleanings are your best defense against 
                dental problems. Schedule your appointment today for optimal oral health.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE EXAMINATION
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

export default ExaminationHygienePage;