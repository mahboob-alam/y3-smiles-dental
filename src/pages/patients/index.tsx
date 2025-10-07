import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Users,
  Camera,
  FileText,
  Heart,
  CheckCircle,
  Star,
  Award,
  Smile,
  Clock,
  Shield
} from "lucide-react";

const PatientsPage = () => {
  const patientResources = [
    {
      title: "Smile Gallery",
      description: "View real patient transformations and see the amazing results we achieve",
      icon: Camera,
      link: "/patients/smile-gallery",
      features: ["Before & after photos", "Real patient stories", "Treatment outcomes", "Inspiration gallery"]
    },
    {
      title: "Case Studies",
      description: "Detailed treatment journeys showing comprehensive dental care",
      icon: FileText,
      link: "/patients/case-studies",
      features: ["Complete treatment plans", "Step-by-step process", "Patient testimonials", "Clinical outcomes"]
    }
  ];

  const patientCare = [
    {
      title: "Comfort First",
      description: "Your comfort and peace of mind are our top priorities",
      icon: Heart,
      details: [
        "Anxiety management techniques",
        "Sedation options available",
        "Gentle, caring approach",
        "Comfortable treatment rooms"
      ]
    },
    {
      title: "Quality Assurance",
      description: "We maintain the highest standards of dental care",
      icon: Award,
      details: [
        "Latest technology and techniques",
        "Continuing education",
        "Quality materials only",
        "Proven treatment protocols"
      ]
    },
    {
      title: "Patient Safety",
      description: "Comprehensive safety protocols for your protection",
      icon: Shield,
      details: [
        "Strict sterilization procedures",
        "Medical-grade equipment",
        "Emergency protocols in place",
        "Qualified, experienced team"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      treatment: "Smile Makeover",
      rating: 5,
      text: "The team at DENTL transformed my smile beyond my expectations. I finally have the confidence to smile freely!"
    },
    {
      name: "Michael R.",
      treatment: "Dental Implants",
      rating: 5,
      text: "Professional, caring, and expert treatment. My implants feel completely natural and the process was surprisingly comfortable."
    },
    {
      name: "Emma L.",
      treatment: "General Dentistry",
      rating: 5,
      text: "As someone with dental anxiety, I was amazed at how comfortable and relaxed I felt throughout my treatment."
    }
  ];

  const benefits = [
    "40+ years of experience",
    "Comprehensive patient care",
    "Latest dental technology",
    "Comfortable, modern facility"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Patient Resources
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Discover real patient stories, treatment outcomes, and comprehensive case studies.
                See how DENTL has transformed smiles and lives for over 40 years.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        {/* Patient Resources */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Patient Resources
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Real Stories, Real Results
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Explore our patient gallery and case studies to see the life-changing results
                we achieve every day.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {patientResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft h-full">
                    <CardHeader className="text-center pb-6">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                        <IconComponent className="w-10 h-10" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-neutral-800 mb-4">
                        {resource.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed text-lg">
                        {resource.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-8">
                        {resource.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-neutral-600">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="learn" className="w-full" asChild>
                        <Link to={resource.link}>
                          EXPLORE {resource.title.toUpperCase()}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patient Care Philosophy */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Our Commitment
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Exceptional Patient Care
              </h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Every aspect of your experience is designed around your comfort, safety, and satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {patientCare.map((care, index) => {
                const IconComponent = care.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {care.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed">
                        {care.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {care.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-neutral-600">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {detail}
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

        {/* Patient Testimonials */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Smile className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                What Our Patients Say
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Read genuine testimonials from patients who have experienced the DENTL difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardTitle className="text-lg font-bold text-neutral-800">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.treatment}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
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
                  Trusted by Thousands
                </h2>
                <p className="text-lg text-neutral-600">
                  Our commitment to excellence is reflected in our patient outcomes and satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-neutral-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-neutral-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-neutral-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-neutral-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Ready to Join Our Family of Happy Patients?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Experience the same exceptional care and outstanding results that our patients
                have enjoyed for over 40 years.
              </p>
              <Button variant="booking" size="xl" asChild>
                <Link to="/#contact">BOOK YOUR CONSULTATION</Link>
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

export default PatientsPage;