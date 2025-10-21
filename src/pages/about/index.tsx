import React from "react";
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Users,
    Heart,
    Shield,
    Star,
    Phone,
    ArrowRight,
    Smile,
    Award,
    Briefcase,
    CheckCircle,
    BookOpen,
    Building2,
    GraduationCap,
    Clock,
    MapPin
} from "lucide-react";


export const Head = () => (
  <SEO 
    title="Index | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const AboutPage = () => {
    useScrollAnimation();

    const aboutSections = [
        {
            icon: Building2,
            title: "Y3 Smiles Dental",
            description: "Learn about our practice, values, and commitment to exceptional dental care for families in Melbourne's northern suburbs.",
            link: "/about/y3-smiles-dental",
            color: "bg-primary/10 text-primary",
            features: ["Our Story", "Mission & Values", "Modern Facilities"]
        },
        {
            icon: Users,
            title: "Our Team",
            description: "Meet our dedicated dental professionals who are committed to providing compassionate, high-quality care.",
            link: "/about/our-team",
            color: "bg-blue-50 text-blue-600",
            features: ["Experienced Dentists", "Friendly Staff", "Professional Qualifications"]
        },
        {
            icon: Briefcase,
            title: "Join Our Team",
            description: "Explore career opportunities and discover why Y3 Smiles Dental is a great place to build your dental career.",
            link: "/about/join-our-team",
            color: "bg-green-50 text-green-600",
            features: ["Current Openings", "Benefits & Culture", "Application Process"]
        },
        {
            icon: BookOpen,
            title: "Blog",
            description: "Stay informed with dental care tips, oral health advice, and the latest news from Y3 Smiles Dental.",
            link: "/about/blog",
            color: "bg-purple-50 text-purple-600",
            features: ["Health Tips", "Patient Stories", "Dental News"]
        }
    ];

    const quickFacts = [
        {
            icon: Heart,
            title: "Patient-Centered Care",
            description: "We put your comfort and wellbeing first"
        },
        {
            icon: Users,
            title: "Family-Friendly",
            description: "Dental care for all ages and family members"
        },
        {
            icon: Smile,
            title: "Modern Approach",
            description: "Latest technology and gentle techniques"
        }
    ];

    const teamMembers = [
        {
            name: "Dr. Sarah Johnson",
            role: "Principal Dentist",
            image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Dr. Johnson is passionate about providing gentle, comprehensive dental care for the whole family."
        },
        {
            name: "Emma Thompson",
            role: "Oral Health Therapist",
            image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Emma specialises in preventive care and oral health education, helping patients maintain healthy smiles for life."
        },
        {
            name: "Maria Rodriguez",
            role: "Practice Manager & Receptionist",
            image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Maria ensures every patient feels welcome from the moment they walk in, managing appointments and patient care coordination."
        },
        {
            name: "James Wilson",
            role: "Dental Nurse",
            image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "James provides expert chairside assistance and ensures all clinical procedures run smoothly and safely."
        }
    ];

    const careerRoles = [
        {
            title: "Dentists",
            subtitle: "New grads and experienced clinicians",
            description: "Comprehensive family dentistry, treatment planning, preventative focus, and patient education. Opportunities to develop special interests."
        },
        {
            title: "Oral Health Therapists / Hygienists",
            subtitle: "Preventive care specialists",
            description: "Preventive care, perio management, oral health promotion, and collaborative care with dentists."
        },
        {
            title: "Dental Assistants / Receptionists",
            subtitle: "Experienced or entry-level with the right attitude",
            description: "Chairside assisting, sterilisation and stock control, welcoming patients, appointment booking, billing, and smooth day-to-day operations."
        }
    ];

    const careerBenefits = [
        {
            icon: Heart,
            title: "Patient-centred care",
            description: "Deliver ethical, evidence-based dentistry with time to genuinely listen."
        },
        {
            icon: Users,
            title: "Supportive team",
            description: "Work with friendly professionals who mentor, collaborate, and celebrate wins."
        },
        {
            icon: Shield,
            title: "Modern practice",
            description: "Digital workflows and contemporary equipment to help you do your best work."
        },
        {
            icon: GraduationCap,
            title: "Growth & learning",
            description: "CPD support, structured feedback, and clear development pathways."
        },
        {
            icon: Clock,
            title: "Flexible rosters",
            description: "Family-friendly scheduling where possible."
        },
        {
            icon: MapPin,
            title: "Community impact",
            description: "Serve a diverse local community in Melbourne's northern suburbs."
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
                            <Building2 className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                About Y3 Smiles Dental
                            </h1>
                            <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                                Where healthy smiles are the foundation of confidence, wellbeing, and quality of life.
                                Discover our practice, meet our team, and learn about our commitment to exceptional dental care.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {quickFacts.map((fact, index) => (
                                    <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                        <fact.icon className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-sm font-medium text-neutral-700">{fact.description}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant="booking" size="xl" asChild className="group">
                                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                    BOOK APPOINTMENT
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* About Sections */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Explore Our Story
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                Learn more about Y3 Smiles Dental through our comprehensive sections covering our practice,
                                team, career opportunities, and helpful dental information.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {aboutSections.map((section, index) => {
                                const IconComponent = section.icon;
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section group" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardContent className="p-8">
                                            <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors">
                                                {section.title}
                                            </h3>
                                            <p className="text-neutral-800 leading-relaxed mb-6">
                                                {section.description}
                                            </p>
                                            <div className="space-y-2 mb-6">
                                                {section.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center text-sm text-neutral-800">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                            <Button variant="outline" asChild className="w-full group/btn">
                                                <Link to={section.link}>
                                                    Learn More
                                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Quick Overview */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Your Trusted Dental Care Partners
                            </h2>
                            <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                At Y3 Smiles Dental, we believe a healthy smile is the foundation of confidence, wellbeing, and quality of life.
                                Our modern, comfortable clinic in Melbourne's northern suburbs provides comprehensive dental care for the whole family.
                            </p>
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-primary/10">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                                    Why Choose Y3 Smiles Dental?
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                                    <div className="text-center">
                                        <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
                                        <h4 className="font-semibold text-neutral-800 mb-2">Patient-Centered Care</h4>
                                        <p className="text-neutral-800">Your comfort and wellbeing are our top priorities</p>
                                    </div>
                                    <div className="text-center">
                                        <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                                        <h4 className="font-semibold text-neutral-800 mb-2">Experienced Team</h4>
                                        <p className="text-neutral-800">Skilled professionals dedicated to excellence</p>
                                    </div>
                                    <div className="text-center">
                                        <Smile className="w-10 h-10 text-primary mx-auto mb-3" />
                                        <h4 className="font-semibold text-neutral-800 mb-2">Modern Facilities</h4>
                                        <p className="text-neutral-800">Latest technology in a comfortable environment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Ready to Experience Quality Dental Care?
                            </h2>
                            <p className="text-lg text-neutral-800 mb-8">
                                Book your appointment today and discover why families throughout Melbourne's northern suburbs trust Y3 Smiles Dental.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK APPOINTMENT
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/treatments">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        View Our Treatments
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;