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
    MapPin,
    Briefcase,
    BookOpen,
    Navigation
} from "lucide-react";
import { locationConfigs } from "@/data/locationData";
import GoogleMap from "@/components/GoogleMap";


export const Head = () => (
  <SEO 
    title="Y3 smiles dental | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

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

    const treatments = [
        "Comprehensive dental examinations",
        "Preventive care and hygiene treatments",
        "Restorative dentistry and fillings",
        "Emergency dental treatments",
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
                            <img src="/dental-care.png" alt="Dental Care" className="w-20 h-20 mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Y3 Smiles Dental
                            </h1>
                            <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
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
                                    <Link to="/treatments">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        View Our Treatments
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
                            {/* <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Our Story
                                </h2>
                                <p className="text-lg text-neutral-800">
                                    Building a practice focused on quality care, patient comfort, and community health
                                </p>
                            </div> */}

                            <div className="space-y-8 text-lg leading-relaxed text-center">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    About
                                </h2>
                                <p className="text-lg text-neutral-800 leading-relaxed max-w-6xl mx-auto">
                                    At Y3 Smiles Dental, we believe a healthy smile is the foundation of confidence, wellbeing, and quality of life. Located in Melbourne’s northern suburbs, our family-focused clinic provides high-quality dental care in a welcoming and modern environment. We also recognise that a healthy mouth supports a healthy body — which is why we say: healthy smiles, healthy lives — it begins with you.

                                    Our services cover all stages of dental care, including routine check-ups, preventative treatments, children’s dentistry, aesthetic options such as teeth whitening, veneers, and clear aligners, as well as emergency and surgical procedures. Whatever your needs, our experienced team is here to support you and your family.

                                    What makes us different is our patient-centred approach. We take the time to listen, explain, and personalise every treatment plan. Patient comfort is our priority — we create a calm, supportive environment so every visit feels comfortable and positive. At Y3 Smiles Dental, your health and your smile always come first.
                                </p>


                            </div>
                        </div>
                    </div>
                </section>

                {/* Learn More About Us */}
                {/* commented for FUTURE implementation */}
                {/* <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Learn More About Us
                                </h2>
                                <p className="text-xl text-neutral-800 max-w-3xl mx-auto">
                                    Discover more about our team, career opportunities, and helpful dental information
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                <Card className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section h-full flex flex-col" style={{ transitionDelay: '0ms' }}>
                                    <CardContent className="p-8 text-center flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <Users className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors">
                                            Our Team
                                        </h3>
                                        <p className="text-neutral-800 leading-relaxed mb-6 flex-grow">
                                            Meet our dedicated dental professionals who are committed to providing compassionate,
                                            high-quality care with years of experience and ongoing professional development.
                                        </p>
                                        <Button variant="outline" asChild className="group/btn mt-auto">
                                            <Link to="/about/our-team">
                                                Meet Our Team
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>


                                <Card className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section h-full flex flex-col" style={{ transitionDelay: '150ms' }}>
                                    <CardContent className="p-8 text-center flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <Briefcase className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors">
                                            Join Our Team
                                        </h3>
                                        <p className="text-neutral-800 leading-relaxed mb-6 flex-grow">
                                            Explore career opportunities and discover why Y3 Smiles Dental is a great place to build
                                            your dental career with competitive benefits and a supportive work environment.
                                        </p>
                                        <Button variant="outline" asChild className="group/btn mt-auto">
                                            <Link to="/about/join-our-team">
                                                View Careers
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>


                                <Card className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section h-full flex flex-col" style={{ transitionDelay: '300ms' }}>
                                    <CardContent className="p-8 text-center flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <BookOpen className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors">
                                            Blog & Resources
                                        </h3>
                                        <p className="text-neutral-800 leading-relaxed mb-6 flex-grow">
                                            Stay informed with dental care tips, oral health advice, patient stories, and the latest news
                                            from Y3 Smiles Dental to help maintain your family's oral health.
                                        </p>
                                        <Button variant="outline" asChild className="group/btn mt-auto">
                                            <Link to="/about/blog">
                                                Read Our Blog
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Our Values */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Our Core Values
                                </h2>
                                <p className="text-xl text-neutral-800 max-w-3xl mx-auto">
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
                                                        <p className="text-neutral-800 leading-relaxed">
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
                                    Comprehensive Dental Treatments
                                </h2>
                                <p className="text-lg text-neutral-800">
                                    We offer a full range of dental treatments to meet all your family's oral health needs
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {treatments.map((service, index) => (
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
                                <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
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
                                            <p className="text-neutral-800 leading-relaxed">
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
                <GoogleMap
                    locationName="Broadmeadows"
                    locationData={locationConfigs.broadmeadows.locationData}
                    openingHours={locationConfigs.broadmeadows.openingHours}
                />
            </main>
            <Footer />
        </div>
    );
};

export default Y3SmilesDentalPage;