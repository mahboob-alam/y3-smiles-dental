import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Briefcase,
    Phone,
    ArrowRight,
    Heart,
    Users,
    Shield,
    GraduationCap,
    Clock,
    MapPin,
    Mail,
    Star,
    CheckCircle
} from "lucide-react";

const JoinOurTeamPage = () => {
    useScrollAnimation();

    const careerRoles = [
        {
            title: "Dentists",
            subtitle: "New grads and experienced clinicians",
            description: "Join our team to provide comprehensive family dentistry with a focus on preventative care, treatment planning, and patient education. Opportunities available to develop special interests and advance your career.",
            requirements: ["Bachelor of Dental Science", "AHPRA Registration", "Passion for patient care"],
            benefits: ["Competitive salary", "Professional development", "Supportive environment"]
        },
        {
            title: "Oral Health Therapists / Hygienists",
            subtitle: "Preventive care specialists",
            description: "Focus on preventive care, periodontal management, and oral health promotion while working collaboratively with our dental team to provide comprehensive patient care.",
            requirements: ["Bachelor of Oral Health", "AHPRA Registration", "Experience preferred"],
            benefits: ["Flexible hours", "Ongoing training", "Modern equipment"]
        },
        {
            title: "Dental Assistants / Receptionists",
            subtitle: "Experienced or entry-level with the right attitude",
            description: "Support our clinical team with chairside assisting, sterilisation, stock control, patient welcoming, appointment booking, and ensuring smooth day-to-day operations.",
            requirements: ["Certificate IV in Dental Assisting", "Customer service skills", "Team player"],
            benefits: ["Training provided", "Career progression", "Friendly team"]
        }
    ];

    const careerBenefits = [
        {
            icon: Heart,
            title: "Patient-centred care",
            description: "Deliver ethical, evidence-based dentistry with time to genuinely listen and connect with patients."
        },
        {
            icon: Users,
            title: "Supportive team",
            description: "Work with friendly professionals who mentor, collaborate, and celebrate wins together."
        },
        {
            icon: Shield,
            title: "Modern practice",
            description: "Access to digital workflows and contemporary equipment to help you do your best work."
        },
        {
            icon: GraduationCap,
            title: "Growth & learning",
            description: "CPD support, structured feedback, and clear development pathways for career advancement."
        },
        {
            icon: Clock,
            title: "Flexible rosters",
            description: "Family-friendly scheduling where possible to support work-life balance."
        },
        {
            icon: MapPin,
            title: "Community impact",
            description: "Serve a diverse local community in Melbourne's northern suburbs and make a real difference."
        }
    ];

    const applicationProcess = [
        {
            step: "1",
            title: "Submit Application",
            description: "Send your CV, cover letter, and AHPRA details (for clinical roles) to our email."
        },
        {
            step: "2",
            title: "Initial Review",
            description: "We'll review your application and contact suitable candidates within 5 business days."
        },
        {
            step: "3",
            title: "Interview Process",
            description: "Participate in a friendly interview to discuss your experience and career goals."
        },
        {
            step: "4",
            title: "Trial Period",
            description: "Successful candidates may be invited for a trial period to ensure mutual fit."
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
                            <Briefcase className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Join Our Team
                            </h1>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                At Y3 Smiles Dental, we put patients—and people—at the heart of every smile.
                                If you're compassionate, curious, and committed to great care, we'd love to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href="mailto:smile@y3smilesdental.com.au?subject=EOI - [Your Role] - [Your Name]">
                                        <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                        APPLY TODAY
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/about">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        Back to About
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Join Us */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Why Y3 Smiles Dental?
                                </h2>
                                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                    Join a practice that values both exceptional patient care and a supportive, growth-oriented work environment
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {careerBenefits.map((benefit, index) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border border-primary/5 hover:border-primary/20 fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                            <CardContent className="p-8 text-center">
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                                    <IconComponent className="w-8 h-8 text-primary" />
                                                </div>
                                                <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-neutral-600 leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Current Opportunities */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Current Opportunities
                                </h2>
                                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                    Explore our open positions and find the perfect role to advance your dental career
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {careerRoles.map((role, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section" style={{ transitionDelay: `${index * 200}ms` }}>
                                        <CardContent className="p-8">
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                                {/* Role Info */}
                                                <div className="lg:col-span-2">
                                                    <div className="flex items-start space-x-4 mb-6">
                                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                                            <Briefcase className="w-8 h-8 text-primary" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                                                                {role.title}
                                                            </h3>
                                                            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
                                                                <span className="text-primary font-semibold text-sm">
                                                                    {role.subtitle}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p className="text-neutral-600 leading-relaxed mb-6">
                                                        {role.description}
                                                    </p>
                                                </div>

                                                {/* Requirements & Benefits */}
                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                                                            <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                                                            Requirements
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {role.requirements.map((req, reqIndex) => (
                                                                <li key={reqIndex} className="text-sm text-neutral-600 flex items-center">
                                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                                                    {req}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                                                            <Star className="w-4 h-4 mr-2 text-primary" />
                                                            Benefits
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {role.benefits.map((benefit, benIndex) => (
                                                                <li key={benIndex} className="text-sm text-neutral-600 flex items-center">
                                                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                                                                    {benefit}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Process */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    How to Apply
                                </h2>
                                <p className="text-lg text-neutral-600">
                                    Our straightforward application process makes it easy to join our team
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {applicationProcess.map((process, index) => (
                                    <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                                                {process.step}
                                            </div>
                                            <h3 className="text-lg font-bold text-neutral-800 mb-3">
                                                {process.title}
                                            </h3>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                {process.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Apply Section */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <Card className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 border border-primary/20">
                                <CardContent className="p-12">
                                    <Mail className="w-20 h-20 text-primary mx-auto mb-8" />
                                    <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Ready to Apply?
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-8">
                                        Send your Expression of Interest and let's start a conversation about your future with Y3 Smiles Dental
                                    </p>

                                    <div className="bg-white p-6 rounded-2xl border border-primary/20 mb-8 max-w-2xl mx-auto">
                                        <h3 className="text-xl font-semibold text-neutral-800 mb-4">Application Requirements</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div className="text-center">
                                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <Mail className="w-4 h-4 text-primary" />
                                                </div>
                                                <p className="font-medium text-neutral-800">CV & Cover Letter</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <GraduationCap className="w-4 h-4 text-primary" />
                                                </div>
                                                <p className="font-medium text-neutral-800">AHPRA Details</p>
                                                <p className="text-neutral-600">(Clinical roles)</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <CheckCircle className="w-4 h-4 text-primary" />
                                                </div>
                                                <p className="font-medium text-neutral-800">References</p>
                                                <p className="text-neutral-600">(If available)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-primary/5 p-4 rounded-lg mb-8 max-w-md mx-auto">
                                        <h4 className="font-semibold text-neutral-800 mb-2">Email Address</h4>
                                        <p className="text-primary font-semibold">smile@y3smilesdental.com.au</p>
                                        <p className="text-sm text-neutral-600 mt-2">Subject: EOI - [Your Role] - [Your Name]</p>
                                    </div>

                                    <Button variant="booking" size="xl" asChild className="group">
                                        <a href="mailto:smile@y3smilesdental.com.au?subject=EOI - [Your Role] - [Your Name]">
                                            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                            Send Your Application
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Questions About Working With Us?
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8">
                                We'd love to hear from you! Contact us to learn more about career opportunities
                                or to discuss how you can contribute to our team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href="tel:0390224442">
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        CALL US
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/about/our-team">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        Meet Our Team
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

export default JoinOurTeamPage;