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

const GladstoneParkPage = () => {
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
                                    Gladstone Park Dental
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Premium dental care for Gladstone Park families.
                                Where your smile meets our expertise.
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
                                        Gladstone Park's Dental Excellence
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        Y3 Smiles Dental brings premium dental care to the Gladstone Park community.
                                        Our modern practice combines advanced technology with a warm, family-friendly
                                        atmosphere to deliver exceptional results.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        From routine check-ups to complex procedures, our experienced team provides
                                        comprehensive care tailored to your individual needs. We're committed to
                                        helping you achieve optimal oral health and a confident smile.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE VISIT</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Premium dental care for Gladstone Park"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Treatment Excellence */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-4">
                                Complete Dental Solutions for Gladstone Park
                            </h2>
                            <p className="text-xl text-neutral-600 text-center mb-12">
                                Advanced treatments delivered with care and precision
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <CheckCircle className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-3">Preventive Dentistry</h3>
                                    <p className="text-neutral-600 text-sm mb-3">Comprehensive preventive care to keep your teeth healthy</p>
                                    <ul className="text-xs text-neutral-500 space-y-1">
                                        <li>• Regular check-ups and cleanings</li>
                                        <li>• Fluoride treatments and sealants</li>
                                        <li>• Oral health education</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Shield className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-3">Restorative Care</h3>
                                    <p className="text-neutral-600 text-sm mb-3">Restore damaged teeth to full function and beauty</p>
                                    <ul className="text-xs text-neutral-500 space-y-1">
                                        <li>• Dental fillings and crowns</li>
                                        <li>• Root canal therapy</li>
                                        <li>• Tooth replacement options</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Star className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-3">Cosmetic Dentistry</h3>
                                    <p className="text-neutral-600 text-sm mb-3">Enhance your smile's appearance and boost confidence</p>
                                    <ul className="text-xs text-neutral-500 space-y-1">
                                        <li>• Teeth whitening treatments</li>
                                        <li>• Veneers and bonding</li>
                                        <li>• Smile makeovers</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Users className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-3">Family Dentistry</h3>
                                    <p className="text-neutral-600 text-sm mb-3">Gentle care for patients of all ages</p>
                                    <ul className="text-xs text-neutral-500 space-y-1">
                                        <li>• Children's dental care</li>
                                        <li>• Adult and senior services</li>
                                        <li>• Family treatment planning</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Award className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-3">Emergency Care</h3>
                                    <p className="text-neutral-600 text-sm mb-3">Prompt treatment for urgent dental problems</p>
                                    <ul className="text-xs text-neutral-500 space-y-1">
                                        <li>• Same-day emergency appointments</li>
                                        <li>• Pain relief and infection control</li>
                                        <li>• Trauma and injury treatment</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Heart className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-3">Specialised Services</h3>
                                    <p className="text-neutral-600 text-sm mb-3">Advanced treatments for complex needs</p>
                                    <ul className="text-xs text-neutral-500 space-y-1">
                                        <li>• Periodontal therapy</li>
                                        <li>• Oral surgery procedures</li>
                                        <li>• Orthodontic consultations</li>
                                    </ul>
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
                                Serving Gladstone Park Community
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Address</h3>
                                    <p className="text-neutral-600 text-sm">
                                        1/34 King William Street<br />
                                        Broadmeadows, VIC 3047<br />
                                        <span className="text-primary font-medium">Serving Gladstone Park</span>
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

export default GladstoneParkPage;