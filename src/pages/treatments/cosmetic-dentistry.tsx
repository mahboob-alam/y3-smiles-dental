import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Sparkles, 
  Star, 
  Palette, 
  Zap,
  CheckCircle,
  Camera,
  Award,
  Clock,
  Users,
  Smile
} from "lucide-react";

const CosmeticDentistryPage = () => {
  const treatments = [
    {
      title: "Dental Veneers",
      description: "Ultra-thin porcelain shells that transform your smile instantly",
      icon: Sparkles,
      features: [
        "Natural appearance",
        "Stain resistant",
        "Minimal tooth preparation",
        "Long-lasting results"
      ],
      duration: "2-3 visits",
      results: "Immediate transformation"
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter, more confident smile",
      icon: Star,
      features: [
        "Safe, effective treatment",
        "Up to 8 shades whiter",
        "In-office or take-home",
        "Long-lasting results"
      ],
      duration: "1-2 hours",
      results: "Immediate brightening"
    },
    {
      title: "Smile Makeover",
      description: "Complete smile transformation using multiple cosmetic procedures",
      icon: Palette,
      features: [
        "Comprehensive planning",
        "Multiple treatments",
        "Digital smile design",
        "Dramatic results"
      ],
      duration: "4-8 weeks",
      results: "Complete transformation"
    },
    {
      title: "Invisalign",
      description: "Clear, removable aligners for discreet teeth straightening",
      icon: Zap,
      features: [
        "Nearly invisible",
        "Removable aligners",
        "Comfortable treatment",
        "Predictable results"
      ],
      duration: "6-18 months",
      results: "Straighter teeth"
    },
    {
      title: "CEREC Crowns",
      description: "Same-day ceramic crowns using advanced CAD/CAM technology",
      icon: Award,
      features: [
        "Same-day treatment",
        "Perfect fit",
        "Natural appearance",
        "Durable materials"
      ],
      duration: "Single visit",
      results: "Restored tooth"
    },
    {
      title: "Teeth Reshaping",
      description: "Subtle contouring to improve tooth shape and alignment",
      icon: Smile,
      features: [
        "Conservative approach",
        "Immediate results",
        "Pain-free procedure",
        "Enhanced symmetry"
      ],
      duration: "30-60 minutes",
      results: "Improved shape"
    }
  ];

  const benefits = [
    "Digital smile design",
    "Natural-looking results",
    "Advanced materials",
    "Experienced cosmetic dentists"
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive smile analysis and discussion of your goals"
    },
    {
      step: "2",
      title: "Digital Design",
      description: "3D smile design to preview your new smile before treatment"
    },
    {
      step: "3",
      title: "Treatment Plan",
      description: "Customized treatment plan with timeline and investment"
    },
    {
      step: "4",
      title: "Treatment",
      description: "Precise, comfortable treatment using advanced techniques"
    },
    {
      step: "5",
      title: "Reveal",
      description: "Unveil your beautiful new smile and ongoing care plan"
    }
  ];

  const beforeAfter = [
    {
      title: "Smile Confidence",
      before: "Self-conscious about appearance",
      after: "Confident, radiant smile"
    },
    {
      title: "Professional Image",
      before: "Hiding smile in photos",
      after: "Proud to show your smile"
    },
    {
      title: "Social Interactions",
      before: "Covering mouth when speaking",
      after: "Speaking and laughing freely"
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
              <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Cosmetic Dentistry
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Transform your smile with our advanced cosmetic dental treatments. 
                From subtle enhancements to complete smile makeovers, we create beautiful, 
                natural-looking results that boost your confidence.
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

        {/* Treatments Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Our Treatments
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Advanced Cosmetic Solutions
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer a comprehensive range of cosmetic treatments to enhance your smile's beauty and function.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => {
                const IconComponent = treatment.icon;
                return (
                  <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {treatment.title}
                      </CardTitle>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                        {treatment.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow">
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
                      <div className="bg-neutral-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-neutral-700">Duration:</span>
                          <span className="text-sm text-neutral-600">{treatment.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-neutral-700">Results:</span>
                          <span className="text-sm text-neutral-600">{treatment.results}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Our Process
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Your Smile Transformation Journey
              </h3>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {process.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-bold text-neutral-800 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Impact */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Life-Changing Results
                </h2>
                <p className="text-lg text-neutral-600">
                  See how cosmetic dentistry can transform not just your smile, but your entire life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {beforeAfter.map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-4">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold text-red-700 mb-2">Before</h4>
                          <p className="text-sm text-red-600">{item.before}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-700 mb-2">After</h4>
                          <p className="text-sm text-green-600">{item.after}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Expertise */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Award className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                    Advanced Technology & Artistry
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Our cosmetic dentistry combines cutting-edge technology with artistic expertise 
                    to create beautiful, natural-looking results. We use digital smile design, 
                    advanced materials, and proven techniques to ensure your satisfaction.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Digital Smile Design</h4>
                        <p className="text-neutral-600 text-sm">Preview your new smile before treatment begins</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Premium Materials</h4>
                        <p className="text-neutral-600 text-sm">High-quality ceramics and composites for lasting beauty</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Artistic Excellence</h4>
                        <p className="text-neutral-600 text-sm">Skilled cosmetic dentists with an eye for beauty</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="text-center space-y-8">
                    <div>
                      <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-neutral-600">Smile Transformations</div>
                    </div>
                    <div>
                      <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-neutral-600">Years Cosmetic Experience</div>
                    </div>
                    <div>
                      <Star className="w-12 h-12 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary mb-2">98%</div>
                      <div className="text-neutral-600">Patient Satisfaction</div>
                    </div>
                  </div>
                </div>
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

export default CosmeticDentistryPage;