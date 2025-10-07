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

const WestmeadowsPage = () => {
    useScrollAnimation();

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
                                    Westmeadows Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Professional dental care for Westmeadows families.
                                Experience the difference quality dentistry makes.
                            </p>
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
                                        Excellence in Westmeadows Dental Care
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        At Y3 Smiles Dental, we're dedicated to serving the Westmeadows community with
                                        comprehensive dental care that prioritises your comfort and oral health. Our
                                        experienced team provides gentle, effective treatments for the whole family.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Whether you need preventive care, restorative treatments, or cosmetic enhancements,
                                        we deliver personalised solutions that exceed your expectations. Your satisfaction
                                        is our commitment.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE CONSULTATION</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Expert dental care for Westmeadows residents"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-4">
                                Why Westmeadows Residents Choose Us
                            </h2>
                            <p className="text-xl text-neutral-600 text-center mb-12">
                                Combining modern techniques with compassionate care
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Expert Team</h3>
                                    <p className="text-neutral-600">
                                        Our qualified dentists have years of experience providing quality dental care.
                                        We stay updated with the latest techniques and technology to serve you better.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Patient-Centred Care</h3>
                                    <p className="text-neutral-600">
                                        Your comfort and well-being are our priorities. We take time to understand your
                                        concerns and provide personalised treatment plans that work for you.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Quality Assurance</h3>
                                    <p className="text-neutral-600">
                                        We maintain the highest standards of sterilisation and safety. Our modern
                                        equipment and proven procedures ensure excellent outcomes every time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location Info */}
                <section className="py-24 bg-primary/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-neutral-800 mb-12">
                                Serving Westmeadows Community
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Address</h3>
                                    <p className="text-neutral-600 text-sm">
                                        1/34 King William Street<br />
                                        Broadmeadows, VIC 3047<br />
                                        <span className="text-primary font-medium">Serving Westmeadows</span>
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

                            <Button variant="booking" size="xl" asChild>
                                <Link to="/#contact">BOOK YOUR VISIT</Link>
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

export default WestmeadowsPage;