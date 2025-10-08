import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
    Users,
    Heart,
    Shield,
    Star,
    Clock,
    Phone,
    MapPin,
    ArrowRight,
    Smile,
    Award,
    GraduationCap,
    Briefcase,
    CheckCircle,
    Mail
} from "lucide-react";

const AboutPage = () => {
    useScrollAnimation();

    const values = [
        {
            icon: Heart,
            title: "Patient-Centered Care",
            description: "We put your comfort and wellbeing at the heart of everything we do."
        },
        {
            icon: Shield,
            title: "Quality & Safety",
            description: "High clinical standards and infection control are our foundation."
        },
        {
            icon: Users,
            title: "Family-Friendly",
            description: "Dental care tailored for every family member, from children to seniors."
        },
        {
            icon: Star,
            title: "Excellence",
            description: "Delivering exceptional results with modern techniques and technology."
        }
    ];

    const teamMembers = [
        {
            name: "Dr. Sarah Johnson",
            role: "Principal Dentist",
            image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "With over 10 years of experience, Dr. Johnson is passionate about providing gentle, comprehensive dental care for the whole family."
        },
        {
            name: "Emma Thompson",
            role: "Oral Health Therapist",
            image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Emma specializes in preventive care and oral health education, helping patients maintain healthy smiles for life."
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
                <section className="relative bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100 py-32 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary"></div>
                        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-secondary"></div>
                        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary"></div>
                        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-secondary"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                                About
                                <span className="block text-primary">Y3 Smiles</span>
                            </h1>
                            <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                                Where healthy smiles are the foundation of confidence, wellbeing, and quality of life.
                            </p>
                            <Button variant="booking" size="xl" asChild className="group">
                                <Link to="/#contact">
                                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                    BOOK APPOINTMENT
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8 text-lg leading-relaxed">
                                <p className="text-neutral-700">
                                    At Y3 Smiles, we believe a healthy smile is the foundation of confidence, wellbeing, and quality of life.
                                    Our modern, comfortable clinic in Melbourne's northern suburbs is designed to be welcoming, accessible,
                                    and relaxing for every patient — whether it's your child's first visit or your own regular check-up.
                                </p>

                                <p className="text-neutral-700">
                                    We provide a complete range of dental services tailored to families, from gentle early-age care and
                                    preventative treatments to restorative solutions, cosmetic enhancements, and emergency dentistry.
                                    Our focus goes beyond treating teeth; we create positive experiences that build trust, reduce anxiety,
                                    and encourage lifelong oral health habits.
                                </p>

                                <p className="text-neutral-700">
                                    At Y3 Smiles, your comfort is our priority. Our team takes the time to listen, explain, and
                                    personalise care so every treatment feels clear and stress-free. Whether repairing damage,
                                    protecting against future problems, or helping you achieve the smile you've always wanted,
                                    we are committed to delivering high-quality dentistry with a compassionate approach.
                                </p>

                                <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-8 rounded-2xl border border-primary/20">
                                    <p className="text-lg text-neutral-700 mb-4">
                                        <strong>Booking your appointment is easy</strong> — simply call our friendly team, book online
                                        through our website, or visit us in person. At Y3 Smiles, every smile matters, and we look
                                        forward to welcoming you soon.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="booking" size="lg" asChild className="group">
                                            <Link to="/#contact">
                                                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                Call Us Today
                                            </Link>
                                        </Button>
                                        <Button variant="booking" size="lg" asChild>
                                            <Link to="/treatments">
                                                View Our Treatments
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Our Values
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    What Makes Y3 Smiles Different
                                </h3>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    Our commitment to exceptional care is built on these core principles
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {values.map((value, index) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <Card key={index} className="group bg-white hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20">
                                            <CardContent className="p-8">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <IconComponent className="w-8 h-8 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                                                            {value.title}
                                                        </h4>
                                                        <p className="text-neutral-600 leading-relaxed">
                                                            {value.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Our Team
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Meet Our Dedicated Professionals
                                </h3>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    Our experienced team is committed to providing exceptional dental care in a comfortable, welcoming environment.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {teamMembers.map((member, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-500 border border-primary/5 hover:border-primary/20">
                                        <CardContent className="p-8">
                                            <div className="flex flex-col items-center text-center">
                                                <div className="relative mb-6">
                                                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                                        <Smile className="w-5 h-5 text-white" />
                                                    </div>
                                                </div>

                                                <h4 className="text-2xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                                                    {member.name}
                                                </h4>

                                                <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
                                                    <span className="text-primary font-semibold text-sm">
                                                        {member.role}
                                                    </span>
                                                </div>

                                                <p className="text-neutral-600 leading-relaxed">
                                                    {member.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="text-center">
                                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-2xl border border-secondary/20 inline-block">
                                    <Award className="w-8 h-8 text-secondary mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                                        Team Profiles Coming Soon
                                    </h3>
                                    <p className="text-neutral-600">
                                        Detailed team profiles will be available in 1-2 months with more comprehensive information about our amazing team!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Our Team Section */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Careers
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Join Our Team
                                </h3>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    At Y3 Smiles Dental, we put patients—and people—at the heart of every smile.
                                    If you're compassionate, curious, and committed to great care, we'd love to hear from you.
                                </p>
                            </div>

                            {/* Open Positions */}
                            <div className="mb-16">
                                <h4 className="text-2xl font-bold text-neutral-800 mb-8 text-center">Current Opportunities</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {careerRoles.map((role, index) => (
                                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 h-full">
                                            <CardContent className="p-6 h-full flex flex-col">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <Briefcase className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="text-xl font-bold text-neutral-700 group-hover:text-primary transition-colors leading-tight">
                                                            {role.title}
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                                                        {role.subtitle}
                                                    </p>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-neutral-600 leading-relaxed text-sm">
                                                        {role.description}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Why Join Us */}
                            <div className="mb-16">
                                <h4 className="text-2xl font-bold text-neutral-800 mb-8 text-center">Why Y3 Smiles Dental?</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {careerBenefits.map((benefit, index) => {
                                        const IconComponent = benefit.icon;
                                        return (
                                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white border border-primary/5 hover:border-primary/20">
                                                <CardContent className="p-6 text-center">
                                                    <IconComponent className="w-10 h-10 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                                                    <h5 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                                                        {benefit.title}
                                                    </h5>
                                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                                        {benefit.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Apply Section */}
                            <div className="text-center">
                                <Card className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 border border-primary/20 max-w-2xl mx-auto">
                                    <CardContent className="p-8">
                                        <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                                        <h4 className="text-2xl font-bold text-neutral-800 mb-4">
                                            Ready to Apply?
                                        </h4>
                                        <p className="text-neutral-600 mb-6">
                                            Send your Expression of Interest to join our team
                                        </p>
                                        <div className="bg-white p-4 rounded-lg border border-primary/20 mb-6">
                                            <h5 className="font-semibold text-neutral-800 mb-2">careers@y3smiles.com.au</h5>
                                            <p className="text-sm text-neutral-600">Include your CV, cover note, and AHPRA details (for clinical roles)</p>
                                        </div>
                                        <Button variant="booking" size="lg" asChild className="group">
                                            <a href="mailto:careers@y3smiles.com.au?subject=EOI - [Your Role] - [Your Name]">
                                                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                                Send Your Application
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Link Section */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <Card className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20">
                                <CardContent className="p-8">
                                    <Star className="w-16 h-16 text-primary mb-6 mx-auto group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors">
                                        Y3 Smiles Blog
                                    </h3>
                                    <p className="text-neutral-600 mb-6 text-lg">
                                        Stay informed with dental care tips, news, and patient stories
                                    </p>
                                    <Button variant="booking" size="lg" asChild className="group/btn">
                                        <Link to="/about/blog">
                                            Visit Our Blog
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;