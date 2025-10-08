import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Contact from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Users,
  CalendarCheck,
  CreditCard,
  FileText,
  Camera,
  FolderOpen,
  ArrowRight,
  Clock,
  Heart,
  Shield
} from "lucide-react";

export default function PatientsPage() {
  useScrollAnimation();

  const patientServices = [
    {
      icon: <CalendarCheck className="h-8 w-8 text-blue-600" />,
      title: "Your First Visit",
      description: "Everything you need to know for your first appointment with us",
      link: "/patients/your-first-visit",
      features: [
        "What to bring and expect",
        "Comprehensive examination process",
        "Anxiety management tips",
        "New patient special offers"
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: "Payment Options",
      description: "Flexible payment solutions to make dental care affordable",
      link: "/patients/payment-options",
      features: [
        "Interest-free payment plans",
        "Private health insurance",
        "Medicare & CDBS support",
        "Multiple payment methods"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Price Guide",
      description: "Transparent pricing for all our dental treatments and services",
      link: "/patients/price-guide",
      features: [
        "Comprehensive treatment costs",
        "No hidden fees policy",
        "Insurance claim estimates",
        "Payment plan options"
      ]
    }
  ];

  const additionalResources = [
    {
      icon: <Camera className="h-6 w-6 text-pink-600" />,
      title: "Smile Gallery",
      description: "See real before and after transformations from our patients",
      link: "/patients/smile-gallery"
    },
    {
      icon: <FolderOpen className="h-6 w-6 text-orange-600" />,
      title: "Case Studies",
      description: "Detailed treatment journeys and success stories",
      link: "/patients/case-studies"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "40+ Years Experience",
      description: "Decades of expertise in comprehensive dental care"
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Patient-Centered Care",
      description: "Your comfort and satisfaction are our top priorities"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Modern Technology",
      description: "Latest dental equipment and treatment techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            For Patients
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Everything you need to know about your dental care journey at Y3 Smiles Dental.
            From your first visit to ongoing care, we're here to support you every step of the way.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <CalendarCheck className="mr-2 h-5 w-5" />
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* Main Patient Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Patient Information</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential information to help you navigate your dental care experience with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {patientServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Patient Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore real patient stories and see the amazing results we achieve every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {resource.icon}
                    <h3 className="text-lg font-semibold ml-3">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={resource.link}>
                      View {resource.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Y3 Smiles?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the trusted choice for families across Melbourne's northern suburbs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      {reason.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our patient outcomes and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">40+</div>
              <div className="text-blue-200 text-sm">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-blue-200 text-sm">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 fade-in-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Dental Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust Y3 Smiles for their dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <CalendarCheck className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}