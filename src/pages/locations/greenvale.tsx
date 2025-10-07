import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
                {/* Hero Section */}
                <section className="bg-gradient-hero py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex items-center justify-center mb-6">
                                <MapPin className="w-8 h-8 text-primary mr-3" />
                                <h1 className="text-5xl md:text-6xl font-bold text-neutral-800">
                                    Greenvale Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Y3 Smiles Dental serves residents of Greenvale with exceptional dental care
                                focused on your family's oral health and wellbeing.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Serving Greenvale</span>
                                </div>
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Modern Facility</span>
                                </div>
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Gentle Care</span>
                                </div>
                            </div>
                            <Button variant="booking" size="xl" asChild>
                                <Link to="/#contact">BOOK APPOINTMENT</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Your Trusted Dental Care in Greenvale
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        At Y3 Smiles, we understand that good oral health is essential for your overall wellbeing.
                                        Our experienced team provides comprehensive dental care for Greenvale families, focusing on
                                        prevention, comfort, and personalised treatment plans.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        From routine check-ups to advanced treatments, we're committed to helping you achieve and
                                        maintain a healthy, confident smile. Our modern clinic and caring approach ensure every
                                        visit is comfortable and stress-free.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE YOUR VISIT</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3779715/pexels-photo-3779715.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Professional dental care for Greenvale residents"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Y3 Smiles */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Why Greenvale Residents Choose Y3 Smiles
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

                {/* Services */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Comprehensive Dental Care for Greenvale
                            </h2>
                            <p className="text-lg text-neutral-600 mb-12">
                                Complete oral health solutions for your entire family.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-neutral-600">{service}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Button variant="outline" size="lg" asChild>
                                    <Link to="/treatments">Explore All Treatments</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap showTitle={false} className="bg-primary/5" />

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default GreenvalePage;