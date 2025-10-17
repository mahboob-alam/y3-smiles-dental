import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Heart,
    Shield,
    Users,
    Star,
    Phone,
    ArrowRight,
    Building2,
    CheckCircle,
    Award,
    Clock,
    MapPin
} from "lucide-react";

const Y3SmilesDentalPage = () => {
    useScrollAnimation();

    const values = [
        {
            icon: Heart,
            title: "Patient-Centered Care",
            description: "We put your comfort and wellbeing at the heart of everything we do. Every treatment is personalised to your unique needs."
        },
        {
            icon: Shield,
            title: "Quality & Safety",
            description: "High clinical standards and infection control are our foundation. We maintain the highest levels of sterilisation and safety."
        },
        {
            icon: Users,
            title: "Family-Friendly",
            description: "Dental care tailored for every family member, from children to seniors. We create a welcoming environment for all ages."
        },
        {
            icon: Star,
            title: "Excellence",
            description: "Delivering exceptional results with modern techniques and technology. We stay current with the latest dental innovations."
        }
    ];

    const services = [
        "Comprehensive dental examinations",
        "Preventive care and hygiene treatments",
        "Restorative dentistry and fillings",
        "Emergency dental services",
        "Children's dentistry (CDBS eligible)",
        "Cosmetic dental treatments",
        "Oral surgery and extractions",
        "Periodontal therapy"
    ];

    const facilities = [
        {
            title: "Modern Equipment",
            description: "State-of-the-art dental technology for precise diagnosis and treatment"
        },
        {
            title: "Comfortable Environment",
            description: "Relaxing clinic design to reduce anxiety and promote wellness"
        },
        {
            title: "Digital Systems",
            description: "Streamlined booking, records, and treatment planning systems"
        },
        {
            title: "Accessible Location",
            description: "Convenient location in Broadmeadows with easy parking"
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
                                Y3 Smiles Dental
                            </h1>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Your trusted dental care partner in Melbourne's northern suburbs. We're committed to creating healthy smiles
                                and positive dental experiences for every member of your family.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK APPOINTMENT
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

                {/* Our Story */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Our Story
                                </h2>
                                <p className="text-lg text-neutral-600">
                                    Building a practice focused on quality care, patient comfort, and community health
                                </p>
                            </div>

                            <div className="space-y-8 text-lg leading-relaxed">
                                <p className="text-neutral-700">
                                    At Y3 Smiles Dental, we believe a healthy smile is the foundation of confidence, wellbeing, and quality of life.
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
                                    At Y3 Smiles Dental, your comfort is our priority. Our team takes the time to listen, explain, and
                                    personalise care so every treatment feels clear and stress-free. Whether repairing damage,
                                    protecting against future problems, or helping you achieve the smile you've always wanted,
                                    we are committed to delivering high-quality dentistry with a compassionate approach.
                                </p>

                                <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-8 rounded-2xl border border-primary/20">
                                    <p className="text-lg text-neutral-700 mb-4">
                                        <strong>Booking your appointment is easy</strong> — simply call our friendly team, book online
                                        through our website, or visit us in person. At Y3 Smiles Dental, every smile matters, and we look
                                        forward to welcoming you soon.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="booking" size="lg" asChild className="group">
                                            <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                Call Us Today
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" asChild>
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
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Our Core Values
                                </h2>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    Our commitment to exceptional care is built on these fundamental principles that guide everything we do
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {values.map((value, index) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <Card key={index} className="group bg-white hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                            <CardContent className="p-8">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <IconComponent className="w-8 h-8 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors">
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

                {/* Services Overview */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Comprehensive Dental Services
                                </h2>
                                <p className="text-lg text-neutral-600">
                                    We offer a full range of dental treatments to meet all your family's oral health needs
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-soft hover:shadow-medium transition-smooth">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-neutral-700 font-medium">{service}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <Button variant="booking" size="lg" asChild className="group">
                                    <Link to="/treatments">
                                        View All Treatments
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Modern Facilities
                                </h2>
                                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                    Our clinic is designed with patient comfort and cutting-edge dental care in mind
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {facilities.map((facility, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardContent className="p-8 text-center">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                                <Award className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors">
                                                {facility.title}
                                            </h3>
                                            <p className="text-neutral-600 leading-relaxed">
                                                {facility.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location Info */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Visit Our Clinic
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8">
                                Conveniently located in Broadmeadows with easy access and parking
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-primary/10 mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                                        <h3 className="font-semibold text-neutral-800 mb-2">Address</h3>
                                        <p className="text-neutral-600">1/34 King William St<br />Broadmeadows, VIC 3047</p>
                                    </div>
                                    <div className="text-center">
                                        <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                                        <h3 className="font-semibold text-neutral-800 mb-2">Phone</h3>
                                        <p className="text-neutral-600">03 9022 4442</p>
                                    </div>
                                    <div className="text-center">
                                        <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                                        <h3 className="font-semibold text-neutral-800 mb-2">Hours</h3>
                                        <p className="text-neutral-600">Mon-Fri: 9AM-5PM<br />Sat: 9AM-1PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="lg" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        Book Appointment
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link to="/contact">
                                        Get Directions
                                        <ArrowRight className="w-5 h-5 ml-2" />
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

export default Y3SmilesDentalPage;