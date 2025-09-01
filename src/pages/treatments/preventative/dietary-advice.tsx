import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Apple, 
  AlertTriangle, 
  Heart, 
  Droplets,
  CheckCircle,
  Star,
  Clock,
  Award,
  Users,
  Shield,
  ArrowRight
} from "lucide-react";

const DietaryAdvicePage = () => {
  const benefits = [
    "Prevent tooth decay",
    "Strengthen enamel",
    "Reduce gum inflammation",
    "Improve overall health"
  ];

  const goodFoods = [
    {
      title: "Calcium-Rich Foods",
      description: "Strengthen teeth and bones with essential minerals",
      icon: Heart,
      examples: ["Dairy products", "Leafy greens", "Almonds", "Sardines"],
      benefits: ["Strengthens enamel", "Rebuilds minerals", "Supports jaw bone", "Prevents decay"]
    },
    {
      title: "Vitamin C Foods",
      description: "Support gum health and tissue repair",
      icon: Apple,
      examples: ["Citrus fruits", "Berries", "Bell peppers", "Broccoli"],
      benefits: ["Healthy gums", "Tissue repair", "Immune support", "Antioxidant protection"]
    },
    {
      title: "Fibrous Foods",
      description: "Natural cleaning action and saliva stimulation",
      icon: Star,
      examples: ["Raw vegetables", "Fruits", "Whole grains", "Nuts"],
      benefits: ["Natural cleaning", "Stimulates saliva", "Removes plaque", "Exercises gums"]
    },
    {
      title: "Water & Sugar-Free Drinks",
      description: "Hydration and oral health maintenance",
      icon: Droplets,
      examples: ["Water", "Unsweetened tea", "Sugar-free beverages", "Milk"],
      benefits: ["Rinses mouth", "Prevents dry mouth", "Dilutes acids", "Maintains pH balance"]
    }
  ];

  const harmfulFoods = [
    {
      title: "Sugary Foods & Drinks",
      description: "Feed harmful bacteria that produce acid",
      icon: AlertTriangle,
      examples: ["Candy", "Soda", "Pastries", "Fruit juices"],
      damage: ["Acid production", "Enamel erosion", "Cavity formation", "Bacterial growth"]
    },
    {
      title: "Acidic Foods",
      description: "Directly erode tooth enamel",
      icon: AlertTriangle,
      examples: ["Citrus fruits", "Vinegar", "Wine", "Sports drinks"],
      damage: ["Enamel softening", "Tooth sensitivity", "Erosion", "Weakened teeth"]
    },
    {
      title: "Sticky Foods",
      description: "Cling to teeth and feed bacteria",
      icon: AlertTriangle,
      examples: ["Dried fruits", "Caramel", "Gummy candy", "Honey"],
      damage: ["Prolonged exposure", "Hard to remove", "Bacterial feeding", "Increased decay risk"]
    },
    {
      title: "Hard Foods",
      description: "Can crack or chip teeth",
      icon: AlertTriangle,
      examples: ["Ice", "Hard candy", "Popcorn kernels", "Nuts"],
      damage: ["Tooth fractures", "Enamel chips", "Filling damage", "Crown problems"]
    }
  ];

  const mealTiming = [
    {
      title: "Limit Snacking",
      description: "Reduce frequency of acid attacks on teeth",
      tips: ["Eat meals instead of frequent snacks", "Choose tooth-friendly snacks", "Rinse with water after eating", "Wait 30-60 minutes before brushing"]
    },
    {
      title: "Smart Snacking",
      description: "Choose snacks that promote oral health",
      tips: ["Raw vegetables and fruits", "Cheese and yogurt", "Nuts and seeds", "Sugar-free gum"]
    },
    {
      title: "Meal Planning",
      description: "Structure eating for optimal oral health",
      tips: ["Regular meal times", "Balanced nutrition", "End meals with cheese", "Drink water throughout day"]
    }
  ];

  const ageSpecificAdvice = [
    {
      title: "Children (2-12 years)",
      description: "Building healthy eating habits early",
      recommendations: [
        "Limit sugary drinks and snacks",
        "Encourage water over juice",
        "Healthy lunch box choices",
        "Teach moderation with treats",
        "Make healthy foods fun and appealing"
      ]
    },
    {
      title: "Teenagers (13-18 years)",
      description: "Navigating independence and peer pressure",
      recommendations: [
        "Education about diet impact on teeth",
        "Healthy alternatives to popular snacks",
        "Sports drink awareness",
        "Energy drink risks",
        "Orthodontic diet considerations"
      ]
    },
    {
      title: "Adults (18+ years)",
      description: "Maintaining oral health through life changes",
      recommendations: [
        "Workplace snacking strategies",
        "Alcohol and oral health",
        "Medication effects on diet",
        "Pregnancy nutrition needs",
        "Age-related dietary changes"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Dietary Assessment",
      description: "Review current eating habits and identify risk factors"
    },
    {
      step: "2",
      title: "Oral Health Evaluation",
      description: "Examine teeth and gums for diet-related damage"
    },
    {
      step: "3",
      title: "Personalized Plan",
      description: "Create customized dietary recommendations for your lifestyle"
    },
    {
      step: "4",
      title: "Education & Resources",
      description: "Provide tools and knowledge for making better choices"
    },
    {
      step: "5",
      title: "Follow-Up Support",
      description: "Monitor progress and adjust recommendations as needed"
    }
  ];

  const faqs = [
    {
      question: "How does diet affect my oral health?",
      answer: "Diet directly impacts oral health through sugar feeding harmful bacteria, acids eroding enamel, and nutrients supporting tooth and gum health. What you eat and when you eat it can significantly influence your risk of cavities and gum disease."
    },
    {
      question: "Are natural sugars better for my teeth?",
      answer: "While natural sugars may have some nutritional benefits, bacteria in your mouth can't distinguish between natural and added sugars. Both can contribute to tooth decay, so moderation and proper oral hygiene are important regardless of sugar source."
    },
    {
      question: "How long should I wait to brush after eating?",
      answer: "Wait 30-60 minutes after eating, especially after consuming acidic foods or drinks. Brushing immediately after can damage softened enamel. Rinse with water instead, then brush later."
    },
    {
      question: "Can I reverse tooth damage with diet changes?",
      answer: "Early enamel demineralization can be reversed with proper diet, fluoride use, and good oral hygiene. However, established cavities require professional treatment. Diet changes can prevent further damage and support overall oral health."
    },
    {
      question: "What's the best drink for my teeth?",
      answer: "Water is the best choice for oral health. It rinses away food particles, dilutes acids, prevents dry mouth, and doesn't contribute to tooth decay. Fluoridated water provides additional cavity protection."
    },
    {
      question: "How often can I have sugary treats?",
      answer: "Occasional treats are fine as part of a balanced diet. The key is moderation and timing - it's better to have sweets with meals rather than as frequent snacks throughout the day."
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
              <Apple className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Dietary Advice
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Professional nutrition guidance for optimal oral health. Learn how your diet affects 
                your teeth and gums, and discover foods that promote a healthy, beautiful smile.
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
                <Link to="/#contact">GET DIETARY CONSULTATION</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Foods for Healthy Teeth */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Foods That Promote Oral Health
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Incorporate these tooth-friendly foods into your diet for stronger teeth and healthier gums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goodFoods.map((food, index) => {
                const IconComponent = food.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {food.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {food.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Examples:</h4>
                          <ul className="space-y-2">
                            {food.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-center text-sm text-neutral-600">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Benefits:</h4>
                          <ul className="space-y-2">
                            {food.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-neutral-600">
                                <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
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

        {/* Foods to Limit */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Foods to Limit or Avoid
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Understanding which foods can harm your teeth helps you make better choices for oral health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {harmfulFoods.map((food, index) => {
                const IconComponent = food.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {food.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {food.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Examples:</h4>
                          <ul className="space-y-2">
                            {food.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-center text-sm text-neutral-600">
                                <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3 text-sm">Potential Damage:</h4>
                          <ul className="space-y-2">
                            {food.damage.map((damage, damageIndex) => (
                              <li key={damageIndex} className="flex items-center text-sm text-neutral-600">
                                <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                                {damage}
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

        {/* Meal Timing & Habits */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Meal Timing & Eating Habits
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                When and how you eat is just as important as what you eat for oral health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mealTiming.map((timing, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                      {timing.title}
                    </CardTitle>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {timing.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {timing.tips.map((tip, tipIndex) => (
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

        {/* Age-Specific Advice */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Age-Specific Dietary Guidance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ageSpecificAdvice.map((age, index) => (
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
                      {age.recommendations.map((recommendation, recIndex) => (
                        <li key={recIndex} className="flex items-start text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {recommendation}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Our Dietary Consultation Process
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
                  Diet & Oral Health Impact
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Apple className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <div className="text-neutral-600">Cavity Reduction</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">20</div>
                  <div className="text-neutral-600">Minutes Acid Attack</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-neutral-600">Patients Counseled</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
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
                  Get answers to common questions about diet and oral health.
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
                Nourish Your Smile
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Take control of your oral health through smart dietary choices. 
                Our personalized nutrition guidance can help you achieve and maintain optimal dental health.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">
                  SCHEDULE DIETARY CONSULTATION
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

export default DietaryAdvicePage;