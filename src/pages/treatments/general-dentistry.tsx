import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Stethoscope, Users, Heart, Shield, Clock, CheckCircle, Baby, Bluetooth as Tooth, AlertCircle, Smile } from "lucide-react";

const GeneralDentistryPage = () => {
  const services = [
    {
      title: "Children's Dentistry",
      description: "Gentle, specialized care for your little ones in a fun, comfortable environment",
      icon: Baby,
      features: ["Child-friendly approach", "Preventive care", "Early intervention", "Parental guidance"]
    },
    {
      title: "Comprehensive Examination",
      description: "Thorough dental checkups and professional hygiene treatments",
      icon: Stethoscope,
      features: ["Digital X-rays", "Oral cancer screening", "Gum health assessment", "Professional cleaning"]
    },
    {
      title: "Dental Fillings",
      description: "Modern, tooth-colored fillings that restore function and appearance",
      icon: Tooth,
      features: ["Mercury-free options", "Natural appearance", "Durable materials", "Same-day treatment"]
    },
    {
      title: "Emergency Dentistry",
      description: "Immediate care for dental emergencies and urgent oral health issues",
      icon: AlertCircle,
      features: ["24/7 emergency line", "Same-day appointments", "Pain relief", "Urgent care protocols"]
    },
    {
      title: "Root Canal Therapy",
      description: "Advanced endodontic treatment to save infected or damaged teeth",
      icon: Heart,
      features: ["Pain-free procedures", "High success rates", "Tooth preservation", "Modern techniques"]
    },
    {
      title: "Periodontal Care",
      description: "Comprehensive gum disease treatment and prevention",
      icon: Shield,
      features: ["Deep cleaning", "Gum disease treatment", "Maintenance programs", "Surgical options"]
    }
  ];

  const benefits = [
    "Comprehensive family care",
    "Latest dental technology",
    "Gentle, pain-free procedures",
    "Flexible appointment scheduling"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive examination and discussion of your dental health goals"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Customized treatment plan tailored to your specific needs and budget"
    },
    {
      step: "3",
      title: "Treatment Delivery",
      description: "Professional, comfortable treatment using the latest techniques"
    },
    {
      step: "4",
      title: "Ongoing Care",
      description: "Regular maintenance and preventive care to keep your smile healthy"
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
                General Dentistry
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Comprehensive dental care for you and your family. From routine checkups 
                to complex treatments, we provide gentle, professional care in a comfortable environment.
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
                <Link to="/#contact">BOOK APPOINTMENT</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Our Services
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Complete General Dental Care
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We offer a full range of general dentistry services to keep your smile healthy and beautiful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
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
                Your Journey to Better Oral Health
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Why Choose DENTL
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Experience You Can Trust
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    With over 40 years of experience, DENTL East Melbourne has been providing 
                    exceptional general dentistry services to families throughout Melbourne. 
                    Our commitment to gentle, comprehensive care ensures every patient feels 
                    comfortable and confident in their treatment.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Family-Focused Care</h4>
                        <p className="text-neutral-600 text-sm">Comprehensive dental services for patients of all ages</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Convenient Scheduling</h4>
                        <p className="text-neutral-600 text-sm">Flexible appointment times to fit your busy lifestyle</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Smile className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Comfort-First Approach</h4>
                        <p className="text-neutral-600 text-sm">Gentle techniques and anxiety management for all patients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">40+</div>
                    <div className="text-neutral-600 mb-6">Years of Excellence</div>
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-neutral-600 mb-6">Happy Families</div>
                    <div className="text-4xl font-bold text-primary mb-2">5★</div>
                    <div className="text-neutral-600">Patient Reviews</div>
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

export default GeneralDentistryPage;