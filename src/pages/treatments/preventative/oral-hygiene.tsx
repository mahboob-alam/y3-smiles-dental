import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Brush as BrushIcon, 
  Clock, 
  Droplets, 
  Heart,
  CheckCircle,
  Star,
  Award,
  Users,
  Shield,
  Target,
  ArrowRight
} from "lucide-react";

const OralHygieneEducationPage = () => {
  const benefits = [
    "Prevent cavities and gum disease",
    "Maintain fresh breath",
    "Save money on treatments",
    "Boost confidence"
  ];

  const brushingTechnique = [
    {
      step: "1",
      title: "Choose the Right Toothbrush",
      description: "Use a soft-bristled toothbrush that fits comfortably in your mouth",
      tips: ["Replace every 3-4 months", "Electric brushes are highly effective", "Soft bristles prevent gum damage"]
    },
    {
      step: "2", 
      title: "Apply Fluoride Toothpaste",
      description: "Use a pea-sized amount of fluoride toothpaste",
      tips: ["Adults: pea-sized amount", "Children: rice grain size", "Look for ADA seal of approval"]
    },
    {
      step: "3",
      title: "Proper Brushing Motion",
      description: "Gentle circular motions at 45-degree angle to gums",
      tips: ["Don't scrub aggressively", "Cover all tooth surfaces", "Include tongue and roof of mouth"]
    },
    {
      step: "4",
      title: "Brush for 2 Minutes",
      description: "Spend adequate time cleaning all areas thoroughly",
      tips: ["Use timer or electric brush timer", "30 seconds per quadrant", "Don't rush the process"]
    }
  ];

  const flossingSteps = [
    {
      step: "1",
      title: "Use Adequate Floss",
      description: "18 inches of floss wrapped around middle fingers"
    },
    {
      step: "2",
      title: "Gentle Insertion",
      description: "Gently guide floss between teeth using sawing motion"
    },
    {
      step: "3",
      title: "C-Shape Technique",
      description: "Curve floss around each tooth in C-shape"
    },
    {
      step: "4",
      title: "Clean Both Sides",
      description: "Clean both sides of each tooth below gum line"
    },
    {
      step: "5",
      title: "Fresh Section",
      description: "Use clean section of floss for each tooth"
    }
  ];

  const oralHygieneTools = [
    {
      title: "Manual Toothbrush",
      description: "Traditional brushing with proper technique",
      icon: BrushIcon,
      features: ["Soft bristles recommended", "Replace every 3 months", "Proper technique essential", "Cost-effective option"],
      effectiveness: "Good with proper technique"
    },
    {
      title: "Electric Toothbrush",
      description: "Powered brushing for superior plaque removal",
      icon: Target,
      features: ["Superior plaque removal", "Built-in timers", "Pressure sensors", "Multiple brush heads"],
      effectiveness: "Excellent plaque removal"
    },
    {
      title: "Water Flosser",
      description: "Water pressure cleaning between teeth and gums",
      icon: Droplets,
      features: ["Easy to use", "Good for braces", "Massages gums", "Reaches deep pockets"],
      effectiveness: "Excellent for gum health"
    },
    {
      title: "Antimicrobial Mouthwash",
      description: "Additional protection against bacteria and plaque",
      icon: Shield,
      features: ["Kills bacteria", "Freshens breath", "Reaches all areas", "Fluoride options available"],
      effectiveness: "Good supplemental protection"
    }
  ];

  const commonMistakes = [
    {
      title: "Brushing Too Hard",
      description: "Aggressive brushing can damage gums and enamel",
      correction: "Use gentle pressure and soft-bristled brush"
    },
    {
      title: "Rushing the Process",
      description: "Inadequate time doesn't allow proper cleaning",
      correction: "Brush for full 2 minutes, floss takes 2-3 minutes"
    },
    {
      title: "Skipping Flossing",
      description: "Missing 35% of tooth surfaces between teeth",
      correction: "Floss daily to clean between all teeth"
    },
    {
      title: "Wrong Timing",
      description: "Brushing immediately after acidic foods",
      correction: "Wait 30-60 minutes after eating acidic foods"
    },
    {
      title: "Ignoring the Tongue",
      description: "Bacteria accumulate on tongue surface",
      correction: "Brush or scrape tongue daily for fresh breath"
    },
    {
      title: "Using Old Toothbrush",
      description: "Worn bristles are less effective",
      correction: "Replace toothbrush every 3-4 months"
    }
  ];

  const ageSpecificGuidance = [
    {
      title: "Infants & Toddlers (0-3 years)",
      description: "Building foundation for lifelong oral health",
      guidance: [
        "Clean gums with soft cloth before teeth appear",
        "Use rice grain-sized fluoride toothpaste",
        "Parent should brush child's teeth",
        "Avoid bottle at bedtime with milk/juice",
        "First dental visit by age 1"
      ]
    },
    {
      title: "Children (4-12 years)",
      description: "Developing independence with supervision",
      guidance: [
        "Supervise brushing until age 8",
        "Pea-sized amount of fluoride toothpaste",
        "Make brushing fun with songs/timers",
        "Introduce flossing when teeth touch",
        "Regular dental checkups every 6 months"
      ]
    },
    {
      title: "Teenagers (13-18 years)",
      description: "Maintaining habits during busy years",
      guidance: [
        "Emphasize importance of routine",
        "Address orthodontic hygiene needs",
        "Discuss diet and oral health connection",
        "Encourage independence in oral care",
        "Monitor wisdom tooth development"
      ]
    },
    {
      title: "Adults (18+ years)",
      description: "Lifelong maintenance and adaptation",
      guidance: [
        "Maintain twice daily brushing routine",
        "Daily flossing is essential",
        "Regular professional cleanings",
        "Address dry mouth if present",
        "Adapt routine for health changes"
      ]
    }
  ];

  const faqs = [
    {
      question: "How often should I brush my teeth?",
      answer: "Brush at least twice daily - once in the morning and once before bed. If possible, brush after meals, but wait 30-60 minutes after eating acidic foods to avoid enamel damage."
    },
    {
      question: "Is flossing really necessary if I brush well?",
      answer: "Yes, flossing is essential because it cleans the 35% of tooth surfaces that brushing can't reach - between teeth and under the gum line. Even the best brushing can't replace flossing."
    },
    {
      question: "What's the best toothpaste to use?",
      answer: "Use fluoride toothpaste with the ADA seal of approval. The specific brand is less important than the fluoride content and regular use. Special formulations may be recommended for specific needs."
    },
    {
      question: "Should I use mouthwash?",
      answer: "Mouthwash can be a helpful addition to brushing and flossing, but it's not a substitute. Antimicrobial mouthwashes can help reduce bacteria and freshen breath."
    },
    {
      question: "How do I know if I'm brushing correctly?",
      answer: "We can demonstrate proper technique during your visit. Signs of good brushing include clean-feeling teeth, healthy pink gums, and fresh breath. Plaque-disclosing tablets can show missed areas."
    },
    {
      question: "What if I have difficulty with traditional flossing?",
      answer: "Try floss picks, water flossers, or interdental brushes. The key is finding a method you'll use consistently. We can recommend the best option for your specific needs."
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
              <BrushIcon className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Oral Hygiene Education
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Master the fundamentals of oral care with professional guidance. 
                Learn proper techniques and habits that will keep your smile healthy for life.
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
                <Link to="/#contact">BOOK HYGIENE EDUCATION</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Proper Brushing Technique */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Proper Brushing Technique
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Learn the correct way to brush your teeth for maximum effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brushingTechnique.map((step, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {step.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Flossing Technique */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Proper Flossing Technique
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {flossingSteps.map((step, index) => (
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

        {/* Oral Hygiene Tools */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Essential Oral Hygiene Tools
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {oralHygieneTools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {tool.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {tool.description}
                      </p>
                      <div className="bg-green-50 rounded-lg px-3 py-2 mb-4">
                        <span className="text-sm font-semibold text-green-700">
                          Effectiveness: {tool.effectiveness}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
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

        {/* Common Mistakes */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Common Oral Hygiene Mistakes
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Avoid these common errors to maximize your oral hygiene effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonMistakes.map((mistake, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-neutral-800 mb-2">
                      {mistake.title}
                    </CardTitle>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {mistake.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 mb-2 text-sm">Correction:</h4>
                      <p className="text-sm text-green-600">{mistake.correction}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Age-Specific Guidance */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Age-Specific Oral Hygiene Guidance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ageSpecificGuidance.map((age, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {age.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {age.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {age.guidance.map((guide, guideIndex) => (
                        <li key={guideIndex} className="flex items-start text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {guide}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
                  Oral Hygiene Impact
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <BrushIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2x</div>
                  <div className="text-neutral-600">Daily Brushing</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-neutral-600">Minutes Minimum</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-neutral-600">Patients Educated</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">90%</div>
                  <div className="text-neutral-600">Improvement Rate</div>
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
                  Get answers to common questions about oral hygiene.
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
                Master Your Oral Hygiene
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Invest in your oral health education. Our personalized guidance will help you 
                develop effective habits that last a lifetime.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE EDUCATION SESSION
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

export default OralHygieneEducationPage;