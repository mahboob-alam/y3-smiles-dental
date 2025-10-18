import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { locationConfigs } from "@/data/locationData";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    MapPin,
    CheckCircle,
    Users,
    Heart,
    Shield,
    Star,
    Award
} from "lucide-react"; const GreenvalePage = () => {
    useScrollAnimation();

    const services = [
        "Comprehensive dental examinations and hygiene",
        "Family dentistry for all ages",
        "Children's dental care and education",
        "Cosmetic dentistry and smile enhancement",
        "Emergency dental treatments",
        "Preventive care and oral health maintenance"
    ];

    const whyChooseUs = [
        {
            icon: Users,
            title: "Family-Focused Care",
            description: "Comprehensive dental services tailored for every family member, from children to seniors."
        },
        {
            icon: Heart,
            title: "Gentle Approach",
            description: "We prioritise patient comfort with gentle techniques and a caring, understanding team."
        },
        {
            icon: Shield,
            title: "Preventive Focus",
            description: "Early detection and prevention to maintain optimal oral health for life."
        },
        {
            icon: Award,
            title: "Quality Care",
            description: "Modern techniques and equipment ensuring the highest standard of dental treatment."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Enhanced Hero Section */}
                <section className="relative bg-gradient-to-br from-neutral-50 via-secondary/5 to-neutral-100 py-32 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-secondary"></div>
                        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-primary"></div>
                        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-secondary"></div>
                        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-primary"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center mb-8 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-soft">
                                    <img src="/location.png" alt="Location" className="w-10 h-10 mr-4" />
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-primary uppercase tracking-wider">Greenvale Dentists</p>
                                        <p className="text-lg font-bold text-neutral-800">Greenvale</p>
                                    </div>
                                </div>

                                <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                                    Excellence in
                                    <span className="block text-primary">
                                        Dental Care
                                    </span>
                                </h1>

                                <p className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                                    Discover exceptional dental care at Greenvale Dental Clinic focused on your family's oral health
                                    and wellbeing. Modern technology meets compassionate treatment.
                                </p>
                            </div>

                            {/* Enhanced Feature Pills */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Shield className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Serving Greenvale</span>
                                </div>
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Star className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Modern Facility</span>
                                </div>
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Heart className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Gentle Care</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK APPOINTMENT
                                    </a>
                                </Button>
                                <Button variant="booking" size="xl" asChild>
                                    <Link to="/treatments">
                                        View Our Treatments
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced About Section */}
                <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl"></div>
                        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-secondary/5 to-primary/5 blur-3xl"></div>
                        <div className="absolute bottom-10 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 blur-xl"></div>
                    </div>

                    <div className="container mx-auto px-6 relative">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                            About Y3 Smiles Dental
                                        </h3>
                                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                                            Your Trusted Dental Care in
                                            <span className="text-primary"> Greenvale</span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        <p className="text-lg text-neutral-600 leading-relaxed">
                                            At Y3 Smiles Dental, we understand that good oral health is essential for your overall wellbeing.
                                            Our experienced team provides comprehensive dental care for Greenvale families, focusing on
                                            prevention, comfort, and personalised treatment plans.
                                        </p>
                                        <p className="text-lg text-neutral-600 leading-relaxed">
                                            From routine check-ups to advanced treatments, we're committed to helping you achieve and
                                            maintain a healthy, confident smile. Our modern clinic and caring approach ensure every
                                            visit is comfortable and stress-free.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-gradient-to-br from-white to-secondary/5 p-6 rounded-2xl shadow-soft border border-secondary/10">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                                                <Star className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="text-lg font-bold text-neutral-800 mb-2">5-Star Care</h4>
                                            <p className="text-neutral-600 text-sm">Excellence in every treatment</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-white to-secondary/5 p-6 rounded-2xl shadow-soft border border-secondary/10">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                                                <Heart className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="text-lg font-bold text-neutral-800 mb-2">Family Focus</h4>
                                            <p className="text-neutral-600 text-sm">Care for all ages</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="booking" size="lg" asChild className="group">
                                            <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                                <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                SCHEDULE YOUR VISIT
                                            </a>
                                        </Button>
                                        <Button variant="booking" size="lg" asChild>
                                            <Link to="/treatments">
                                                View All Treatments
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <div className="relative">
                                        {/* Decorative Frame */}
                                        <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl"></div>
                                        <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                                            <div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden">
                                                <img
                                                    src="/westmeadows.png"
                                                    alt="Professional dental care for Greenvale residents"
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Y3 Smiles Dental */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Why Greenvale Residents Choose Y3 Smiles Dental
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                We're committed to providing exceptional dental care with a personalised approach.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {whyChooseUs.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={index} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                            <IconComponent className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-800 mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Enhanced Services Section */}
                <section className="py-24 bg-gradient-to-br from-neutral-50 via-secondary/3 to-neutral-50 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/5 to-secondary/10 blur-2xl"></div>
                        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/5 to-primary/10 blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-6 relative">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <h3 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Our Services
                                </h3>
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                                    Comprehensive Dental Care for
                                    <span className="text-primary"> Greenvale</span>
                                </h2>
                                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                    Complete oral health solutions for your entire family with modern techniques and compassionate care.
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {services.map((service, index) => (
                                    <div key={index} className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 relative overflow-hidden">
                                        {/* Background Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300"></div>

                                        <div className="relative z-10">
                                            <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                            </div>

                                            <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-300">
                                                {service.split(' ').slice(0, 2).join(' ')}
                                            </h3>

                                            <p className="text-neutral-600 leading-relaxed">
                                                {service}
                                            </p>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced CTA Section */}
                            <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-12 rounded-3xl border border-primary/20 text-center">
                                <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                                    Ready to Transform Your Smile?
                                </h3>
                                <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                                    Discover our complete range of dental treatments designed to give you
                                    the healthy, beautiful smile you deserve.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button variant="booking" size="xl" asChild className="group">
                                        <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                            <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                            BOOK YOUR CONSULTATION
                                        </a>
                                    </Button>
                                    <Button variant="booking" size="xl" asChild>
                                        <Link to="/treatments">
                                            <Shield className="w-5 h-5 mr-2" />
                                            VIEW ALL TREATMENTS
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap
                    locationName="Greenvale"
                    locationData={locationConfigs.greenvale.locationData}
                    openingHours={locationConfigs.greenvale.openingHours}
                    className="bg-primary/5"
                />

                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default GreenvalePage;