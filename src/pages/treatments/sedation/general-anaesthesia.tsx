import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Moon, 
  Shield, 
  Heart, 
  Stethoscope,
  CheckCircle,
  Clock,
  Users,
  Award,
  AlertTriangle,
  UserCheck
} from "lucide-react";

const GeneralAnaesthesiaPage = () => {
  const benefits = [
    "Complete unconsciousness",
    "Memory-free experience", 
    "Complex procedures possible",
    "In-house anaesthetist"
  ];

  const suitableFor = [
    {
      title: "Extreme Dental Anxiety",
      description: "Patients with severe fear or phobia of dental procedures",
      icon: Heart
    },
    {
      title: "Complex Surgeries",
      description: "Multiple extractions, implant placement, or extensive oral surgery",
      icon: Stethoscope
    },
    {
      title: "Special Needs Patients",
      description: "Patients with disabilities or medical conditions requiring specialized care",
      icon: Users
    },
    {
      title: "Multiple Procedures",
      description: "Combining several treatments in a single appointment",
      icon: Clock
    }
  ];

  const process = [
    {
      step: "1",
      title: "Pre-Assessment",
      description: "Comprehensive medical evaluation and anaesthetic consultation"
    },
    {
      step: "2", 
      title: "Pre-Operative",
      description: "Detailed preparation instructions and fasting guidelines"
    },
    {
      step: "3",
      title: "Anaesthesia",
      description: "Safe induction of general anaesthesia by qualified anaesthetist"
    },
    {
      step: "4",
      title: "Treatment",
      description: "Dental procedures performed while you're completely unconscious"
    },
    {
      step: "5",
      title: "Recovery",
      description: "Monitored awakening and recovery in our specialized recovery area"
    },
    {
      step: "6",
      title: "Discharge",
      description: "Safe discharge with comprehensive post-operative care instructions"
    }
  ];

  const safetyFeatures = [
    {
      title: "Qualified Anaesthetist",
      description: "Specialist anaesthetist with extensive training and experience",
      icon: UserCheck
    },
    {
      title: "Advanced Monitoring",
      description: "Continuous monitoring of vital signs throughout the procedure",
      icon: Stethoscope
    },
    {
      title: "Emergency Equipment",
      description: "Full resuscitation equipment and emergency protocols on-site",
      icon: Shield
    },
    {
      title: "Recovery Facilities",
      description: "Dedicated recovery area with specialized monitoring equipment",
      icon: Heart
    }
  ];

  const preOperative = [
    "Medical history review",
    "Physical examination", 
    "Blood tests if required",
    "Fasting instructions",
    "Medication guidelines",
    "Transport arrangements"
  ];

  const postOperative = [
    "Gradual awakening process",
    "Vital sign monitoring",
    "Pain management",
    "Nausea prevention",
    "Discharge planning",
    "Follow-up care"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Moon className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                General Anaesthesia
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Experience completely pain-free and memory-free dental treatment with our 
                in-house general anaesthesia services. Perfect for complex procedures and 
                patients with severe dental anxiety.
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

        {/* Who Is It For */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Who Benefits
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Is General Anaesthesia Right for You?
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                General anaesthesia is recommended for specific situations where complete unconsciousness 
                provides the safest and most comfortable treatment experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {suitableFor.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
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
                The Process
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Your General Anaesthesia Journey
              </h3>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Safety Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Your Safety Is Our Priority
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We maintain the highest safety standards with qualified professionals, 
                advanced monitoring equipment, and comprehensive emergency protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-800 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pre & Post Operative Care */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                  Comprehensive Care
                </h2>
                <p className="text-lg text-neutral-600">
                  We provide detailed guidance and support throughout your entire treatment journey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="border-0 shadow-soft">
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-neutral-800">
                      Pre-Operative Care
                    </CardTitle>
                    <p className="text-neutral-600">
                      Thorough preparation ensures your safety and comfort
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {preOperative.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardHeader className="text-center">
                    <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <CardTitle className="text-2xl font-bold text-neutral-800">
                      Post-Operative Care
                    </CardTitle>
                    <p className="text-neutral-600">
                      Careful monitoring and support during recovery
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {postOperative.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">
                      Important Information
                    </h3>
                    <div className="space-y-4 text-amber-700">
                      <p>
                        <strong>Pre-Assessment Required:</strong> All patients must undergo a comprehensive 
                        medical assessment before general anaesthesia can be administered.
                      </p>
                      <p>
                        <strong>Fasting Requirements:</strong> You must fast (no food or drink) for a specified 
                        period before your procedure. Detailed instructions will be provided.
                      </p>
                      <p>
                        <strong>Transport Arrangements:</strong> You will need someone to drive you home after 
                        the procedure as you cannot drive for 24 hours following general anaesthesia.
                      </p>
                      <p>
                        <strong>Recovery Time:</strong> Plan to rest for the remainder of the day following 
                        your procedure. Most patients feel back to normal within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Award className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                    Trusted Expertise
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Our general anaesthesia services are provided by qualified specialist 
                    anaesthetists with extensive experience in dental anaesthesia. We have 
                    safely performed thousands of procedures with an excellent safety record.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Specialist Anaesthetists</h4>
                        <p className="text-neutral-600 text-sm">Qualified medical professionals specializing in anaesthesia</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Proven Safety Record</h4>
                        <p className="text-neutral-600 text-sm">Thousands of successful procedures with excellent outcomes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Continuous Training</h4>
                        <p className="text-neutral-600 text-sm">Regular updates in anaesthetic techniques and safety protocols</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="text-center space-y-8">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">40+</div>
                      <div className="text-neutral-600">Years of Experience</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                      <div className="text-neutral-600">Successful Procedures</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">100%</div>
                      <div className="text-neutral-600">Safety Record</div>
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

export default GeneralAnaesthesiaPage;