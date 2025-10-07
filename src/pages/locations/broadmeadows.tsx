import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
    MapPin,
    Phone,
    Clock,
    CheckCircle,
    Users,
    Heart,
    Shield,
    Star,
    Award
} from "lucide-react";

const BroadmeadowsPage = () => {
    useScrollAnimation();

    const services = [
        "Family Dentistry: Fillings, dentures, extractions, root canal treatments",
        "Children's Dentistry: Fluoride applications, oral hygiene education, fissure sealants",
        "Cosmetic Dentistry: Veneers, teeth whitening, crowns, reshaping teeth",
        "Gentle Care Options: Designed for anxious or nervous patients",
        "Emergency Dentistry: Prompt care for unexpected pain and injuries",
        "Preventive Care: Regular check-ups and professional cleanings"
    ];

    const whyChooseUs = [
        {
            icon: Users,
            title: "Personalised Care",
            description: "Our dentists take time to listen, review your history, and tailor treatment to your needs."
        },
        {
            icon: Heart,
            title: "Comfortable Environment",
            description: "A calming clinic and caring team ensure your visits are stress-free."
        },
        {
            icon: Shield,
            title: "Comprehensive Services",
            description: "From check-ups and preventative care to cosmetic dentistry and gentle treatment options."
        },
        {
            icon: Award,
            title: "Experienced Team",
            description: "Our skilled dentists stay updated with the latest techniques and technology."
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
                                    Broadmeadows Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Y3 Smiles Dental serves residents of Broadmeadows with comprehensive,
                                gentle dental care for the whole family.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Local Broadmeadows Clinic</span>
                                </div>
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Experienced Team</span>
                                </div>
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Family Friendly</span>
                                </div>
                            </div>
                            <Button variant="booking" size="xl" asChild>
                                <Link to="/#contact">BOOK APPOINTMENT</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* We Care About Your Smile */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                        We Care About Your Smile
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        At Y3 Smiles in Broadmeadows, we believe good dental care is more than just brushing
                                        and flossing. Regular check-ups are essential for maintaining healthy teeth and gums —
                                        you don't have to wait until you have toothache, cavities, or bleeding gums.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        At Y3 Smiles, we're committed to affordable, gentle, and effective dentistry for the whole family.
                                    </p>
                                    <p className="text-lg text-primary font-semibold mb-8">
                                        Book your appointment today — whether you need a check-up, restorative care, or want to
                                        enhance your smile, we're here to help.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">BOOK CONSULTATION</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Modern dental office in Broadmeadows"
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
                                Why Choose Y3 Smiles?
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                We provide exceptional dental care with a personalised approach for Broadmeadows families.
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
                                Our Dental Services in Broadmeadows
                            </h2>
                            <p className="text-lg text-neutral-600 mb-12">
                                Comprehensive dental care for every member of your family.
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
                                    <Link to="/treatments">View All Treatments</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location Info */}
                <section className="py-24 bg-primary/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-neutral-800 mb-12">
                                Visit Our Broadmeadows Clinic
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Address</h3>
                                    <p className="text-neutral-600 text-sm">
                                        1/34 King William Street<br />
                                        Broadmeadows, VIC 3047
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Phone</h3>
                                    <p className="text-neutral-600 text-sm">
                                        <a href="tel:PLACEHOLDER" className="hover:text-primary transition-gentle">
                                            PLACEHOLDER
                                        </a>
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Hours</h3>
                                    <p className="text-neutral-600 text-sm">
                                        Mon-Fri: 9:00AM-5:00PM<br />
                                        Sat: By appointment
                                    </p>
                                </div>
                            </div>

                            {/* Embedded Map Placeholder */}
                            <div className="bg-neutral-100 rounded-2xl p-12 mb-8">
                                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                <p className="text-neutral-600">
                                    Interactive map showing Broadmeadows location would be embedded here
                                </p>
                            </div>

                            <Button variant="booking" size="xl" asChild>
                                <Link to="/#contact">BOOK YOUR VISIT TODAY</Link>
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

export default BroadmeadowsPage;