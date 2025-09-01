import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Shield, 
  Heart, 
  Clock, 
  Users,
  CheckCircle,
  Moon,
  Zap,
  Stethoscope,
  Award
} from "lucide-react";

const SedationDentistryPage = () => {
  const sedationOptions = [
    {
      title: "General Anaesthesia",
      description: "Complete unconsciousness for complex procedures and anxious patients",
      icon: Moon,
      features: [
        "In-house anaesthetist",
        "Complete comfort",
        "Complex procedures",
        "Memory-free experience"
      ],
      suitableFor: "Major surgeries, extreme anxiety, multiple procedures"
    },
    {
      title: "IV Sedation",
      description: "Conscious sedation through intravenous medication for deep relaxation",
      icon: Zap,
      features: [
        "Conscious but relaxed",
        "Quick onset",
        "Adjustable levels",
        "Fast recovery"
      ],
      suitableFor: "Moderate anxiety, longer procedures, oral surgery"
    },
    {
      title: "Oral Sedation",
      description: "Medication taken by mouth to reduce anxiety and promote relaxation",
      icon: Heart,
      features: [
        "Easy administration",
        "Mild to moderate sedation",
        "No needles required",
        "Cost-effective"
      ],
      suitableFor: "Mild anxiety, routine procedures, needle phobia"
    }
  ];

  const benefits = [
    "Anxiety-free dental care",
    "In-house anaesthetist",
    "Safe, monitored procedures",
    "Comfortable recovery area"
  ];

  const conditions = [
    {
      title: "Dental Anxiety",
      description: "Fear or nervousness about dental procedures",
      icon: Shield
    },
    {
      title: "Gag Reflex",
      description: "Strong gag reflex that interferes with treatment",
      icon: Stethoscope
    },
    {
      title: "Complex Procedures",
      description: "Multiple or lengthy dental treatments",
      icon: Clock
    },
    {
      title: "Special Needs",
      description: "Patients with disabilities or medical conditions",
      icon: Users
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive assessment of your medical history and anxiety levels"
    },
    {
      step: "2",
      title: "Pre-operative",
      description: "Detailed instructions and preparation for your sedation appointment"
    },
    {
      step: "3",
      title: "Sedation",
      description: "Safe administration of sedation by our qualified anaesthetist"
    },
    {
      step: "4",
      title: "Treatment",
      description: "Comfortable dental treatment while you're relaxed and pain-free"
    },
    {
      step: "5",
      title: "Recovery",
      description: "Monitored recovery in our comfortable post-operative area"
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
              <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Sedation Dentistry
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Experience completely anxiety-free dental care with our advanced sedation options. 
                Our in-house anaesthetist ensures your comfort and safety throughout every procedure.
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

        {/* Sedation Options */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Sedation Options
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Choose Your Comfort Level
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer various sedation options to ensure your complete comfort during dental treatment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sedationOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {option.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {option.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow">
                      <div className="mb-6">
                        <h4 className="font-semibold text-neutral-800 mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {option.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2 text-sm">Suitable for:</h4>
                        <p className="text-sm text-neutral-600">{option.suitableFor}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Who Benefits
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Conditions We Address
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-800 mb-3">
                      {condition.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Our Process
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Your Sedation Journey
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
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

        {/* Safety & Expertise */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Award className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                    Safety & Expertise You Can Trust
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Our sedation dentistry services are provided by qualified professionals 
                    with extensive training in anaesthesia and patient monitoring. We maintain 
                    the highest safety standards and use state-of-the-art monitoring equipment.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Qualified Anaesthetist</h4>
                        <p className="text-neutral-600 text-sm">In-house specialist anaesthetist for all sedation procedures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Advanced Monitoring</h4>
                        <p className="text-neutral-600 text-sm">Continuous vital sign monitoring throughout procedures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Emergency Protocols</h4>
                        <p className="text-neutral-600 text-sm">Comprehensive emergency procedures and equipment on-site</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                      Why Choose Our Sedation Services?
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">40+</div>
                        <div className="text-neutral-600">Years of Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">100%</div>
                        <div className="text-neutral-600">Safety Record</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-neutral-600">Emergency Support</div>
                      </div>
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

export default SedationDentistryPage;