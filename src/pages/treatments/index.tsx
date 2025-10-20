import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceProcess from "@/components/ServiceProcess";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
  Baby,
  Stethoscope,
  Bluetooth as Tooth,
  Smile,
  AlertTriangle,
  Shield,
  Wind,
  Heart,
  Scissors,
  Moon,
  Activity,
  CheckCircle,
  Users,
  Award,
  Star,
  Clock,
  Crown,
  Zap,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const TreatmentsPage = () => {
  useScrollAnimation();

  const allTreatments = [
    {
      title: "Children's Dentistry (CDBS)",
      description: "Gentle, specialised care for children of all ages in a fun, comfortable environment",
      imageSrc: "/cdbs.png",
      path: "/treatments/childrens-dentistry",
      category: "Family Care",
      features: ["Child-friendly approach", "Preventive focus", "Early intervention", "Parent education"]
    },
    {
      title: "Comprehensive Examination & Dental Hygiene",
      description: "Thorough checkups and professional cleanings to maintain optimal oral health",
      imageSrc: "/dental-care.png",
      path: "/treatments/examination-hygiene",
      category: "Preventive Care",
      features: ["Complete oral examination", "Professional cleaning", "Oral cancer screening", "Personalized care plan"]
    },
    {
      title: "Dental Fillings",
      description: "Modern, tooth-coloured fillings that restore function and appearance",
      imageSrc: "/dental-fillings.png",
      path: "/treatments/dental-fillings",
      category: "Restorative Care",
      features: ["Natural appearance", "Mercury-free options", "Durable materials", "Same-day treatment"]
    },
    {
      title: "Dentures",
      description: "Custom-made dentures that restore your smile and chewing function",
      imageSrc: "/dentures.png",
      path: "/treatments/dentures",
      category: "Restorative Care",
      features: ["Complete or partial", "Natural appearance", "Comfortable fit", "Improved function"]
    },
    {
      title: "Emergency Dentistry",
      description: "Same day emergency appointments available",
      imageSrc: "/emergency.png",
      path: "/treatments/emergency",
      category: "Emergency Care",
      features: ["Same-day appointments", "Pain relief", "Urgent protocols"]
    },
    {
      title: "Fluoride Treatments",
      description: "Professional fluoride applications for superior cavity protection",
      imageSrc: "/fluoride-treatments.png",
      path: "/treatments/fluoride",
      category: "Preventive Care",
      features: ["Strengthens enamel", "Prevents decay", "Safe for all ages", "Quick application"]
    },
    {
      title: "Periodontal Therapy",
      description: "Expert gum disease treatment and prevention to save your teeth",
      imageSrc: "/periodontal-therapy.png",
      path: "/treatments/periodontal",
      category: "Specialised Care",
      features: ["Gum disease treatment", "Prevent tooth loss", "Improve overall health", "Advanced techniques"]
    },
    {
      title: "Pits & Fissure Sealants",
      description: "Protective coatings that prevent 80% of cavities in back teeth",
      imageSrc: "/sealant.png",
      path: "/treatments/sealants",
      category: "Preventive Care",
      features: ["80% cavity prevention", "Painless application", "Long-lasting protection", "Cost-effective"]
    },
    {
      title: "Root Canal Therapy",
      description: "Advanced treatment to save infected teeth and eliminate pain",
      imageSrc: "/root-canal.png",
      path: "/treatments/root-canal",
      category: "Specialised Care",
      features: ["Save natural teeth", "Pain elimination", "High success rate", "Modern techniques"]
    },
    {
      title: "TMD & Bruxism Treatment",
      description: "Comprehensive care for jaw disorders and teeth grinding",
      imageSrc: "/bruxism.png",
      path: "/treatments/tmd-bruxism",
      category: "Specialised Care",
      features: ["Jaw pain relief", "Protect teeth", "Custom night guards", "Sleep improvement"]
    },
    {
      title: "Tooth Extraction",
      description: "Gentle tooth removal when necessary with comprehensive aftercare",
      imageSrc: "/tooth-extraction.png",
      path: "/treatments/extraction",
      category: "Surgical Care",
      features: ["Gentle techniques", "Pain management", "Sedation options", "Replacement planning"]
    },
    {
      title: "Wisdom Teeth Removal",
      description: "Expert wisdom tooth extraction to prevent complications",
      imageSrc: "/wisdom-tooth-removal.png",
      path: "/treatments/wisdom-teeth",
      category: "Surgical Care",
      features: ["Prevent complications", "Comfortable procedures", "Sedation available", "Expert care"]
    },
    {
      title: "Crown and Bridge",
      description: "Repair or replace damaged teeth with natural-looking crowns and bridges",
      imageSrc: "/crown-and-bridge.png",
      path: "/treatments/crown-bridge",
      category: "Restorative Care",
      features: ["Natural appearance", "Strengthens teeth", "Long-lasting", "Custom-made"]
    },
    {
      title: "Dental Implants",
      description: "Modern titanium implants for secure, permanent tooth replacement",
      imageSrc: "/dental-implants.png",
      path: "/treatments/dental-implants",
      category: "Restorative Care",
      features: ["Permanent solution", "Natural feel", "Bone preservation", "High success rate"]
    },
    {
      title: "Sedation Dentistry",
      description: "Comfortable, stress-free dental care for anxious patients",
      imageSrc: "/sedation.png",
      path: "/treatments/sedation-dentistry",
      category: "Specialised Care",
      features: ["Reduce anxiety", "Pain-free procedures", "Various options", "Safe monitoring"]
    },
    {
      title: "Mouthguards",
      description: "Custom-fitted protection for sports and teeth grinding",
      imageSrc: "/mouthguard.png",
      path: "/treatments/mouthguards",
      category: "Preventive Care",
      features: ["Custom fit", "Sports protection", "Bruxism relief", "Comfortable wear"]
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, confident smile",
      imageSrc: "/teeth-whitening.png",
      path: "/treatments/teeth-whitening",
      category: "Cosmetic Care",
      features: ["Professional results", "Safe procedures", "In-office or take-home", "Long-lasting"]
    }
  ];

  const treatmentCategories = [
    {
      name: "Family Care",
      description: "Dental care for patients of all ages",
      color: "bg-blue-50 text-blue-600"
    },
    {
      name: "Preventive Care",
      description: "Proactive treatments to maintain oral health",
      color: "bg-green-50 text-green-600"
    },
    {
      name: "Restorative Care",
      description: "Restore function and appearance of damaged teeth",
      color: "bg-purple-50 text-purple-600"
    },
    {
      name: "Specialised Care",
      description: "Advanced treatments for specific conditions",
      color: "bg-orange-50 text-orange-600"
    },
    {
      name: "Emergency Care",
      description: "Urgent dental care when you need it most",
      color: "bg-red-50 text-red-600"
    },
    {
      name: "Surgical Care",
      description: "Advanced surgical procedures",
      color: "bg-gray-50 text-gray-600"
    },
    {
      name: "Cosmetic Care",
      description: "Enhance your smile's appearance",
      color: "bg-pink-50 text-pink-600"
    }
  ];

  const benefits = [
    // "Professional Dental Expertise",
    "Comprehensive Family Care",
    "Latest Technology & Equipment",
    "Comfortable, Anxiety-Free Environment"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6 mt-6">
                Our Dental Treatments
              </h1>
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                Comprehensive dental care for you and your family. From routine checkups
                to specialised treatments, we provide gentle, professional care in a comfortable environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Categories Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Treatment Categories
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Specialised Care for Every Need
              </h3>
              <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                Our comprehensive range of dental treatments covers every aspect of oral health care.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {treatmentCategories.map((category, index) => (
                <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] text-center p-6 rounded-2xl bg-white shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <div className="w-6 h-6 rounded-full bg-current"></div>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-2">{category.name}</h4>
                  <p className="text-sm text-neutral-800">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Complete Treatment Directory
              </h2>
              <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                Explore our full range of dental services, each designed to meet your specific oral health needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allTreatments.map((treatment, index) => {
                // const IconComponent = treatment.icon;
                const categoryInfo = treatmentCategories.find(cat => cat.name === treatment.category);

                return (
                  <Card key={index} className="group hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth border-0 shadow-soft h-full fade-in-section flex flex-col" style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                          <img src={treatment.imageSrc} alt={treatment.title} className="w-8 h-8" />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${categoryInfo?.color || 'bg-gray-50 text-gray-600'}`}>
                          {treatment.category}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-800 mb-3">
                        {treatment.title}
                      </CardTitle>
                      <p className="text-neutral-800 leading-relaxed text-sm">
                        {treatment.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 flex-1 flex flex-col justify-between">
                      <ul className="space-y-2 mb-6">
                        {treatment.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-neutral-800">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={treatment.path}>
                          LEARN MORE
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        {/* <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                    Why Choose Y3 Smiles Dental
                  </h2>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                    Experience You Can Trust
                  </h3>
                  <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                    Y3 Smiles Dental East Melbourne provides exceptional dental services to families throughout Melbourne. Our commitment
                    to gentle, comprehensive care ensures every patient feels comfortable and
                    confident in their treatment.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Comprehensive Care</h4>
                        <p className="text-neutral-800 text-sm">Full range of services for all your dental needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Convenient Scheduling</h4>
                        <p className="text-neutral-800 text-sm">Flexible appointment times to fit your busy lifestyle</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Comfort-First Approach</h4>
                        <p className="text-neutral-800 text-sm">Gentle techniques and anxiety management for all patients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">40+</div>
                    <div className="text-neutral-800 mb-6">Years of Excellence</div>
                    <div className="text-4xl font-bold text-primary mb-2">13</div>
                    <div className="text-neutral-800 mb-6">Specialised Treatments</div>
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-neutral-800 mb-6">Happy Families</div>
                    <div className="text-4xl font-bold text-primary mb-2">5★</div>
                    <div className="text-neutral-800">Patient Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Emergency Services Highlight */}
        <section className="py-24 bg-red-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" /> */}
              <img src="/emergency.png" alt="Emergency Dental Care" className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Dental Emergency?
              </h2>
              <p className="text-lg text-neutral-800 mb-8">
                Don't suffer in pain. Our emergency dental treatments are available when you need them most. Call us ASAP, we will try to accommodate a same day appointment.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl font-bold text-red-600 mr-4">03 9022 4442</div>
                </div>
                <p className="text-red-700 font-medium">Please contact the emergency department at your nearest hospital for afterhours and emergencies requiring attention to non-dental areas.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="booking" size="lg" asChild>
                  <a href="tel:0390224442">CALL EMERGENCY LINE</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/treatments/emergency">LEARN MORE</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <ServiceProcess />

        {/* CTA Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              {/* <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Ready to Experience the Y3 Smiles Dental Difference?
              </h2> */}
              <p className="text-lg text-neutral-800 mb-8">
                Our experienced team is here to help you achieve the healthy, beautiful smile you deserve.
                Book your consultation today and discover personalized dental treatments.
              </p>
              <Button variant="booking" size="xl" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK CONSULTATION</a>
              </Button>
            </div>
          </div>
        </section>

        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default TreatmentsPage;