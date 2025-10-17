import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    ShieldCheck,
    Activity,
    Moon,
    Star,
    ArrowLeft,
    Phone,
    CheckCircle,
    Shield,
    TriangleAlert
} from "lucide-react";

const Mouthguards = () => {
    useScrollAnimation();

    const benefits = [
        "Superior protection",
        "Maximum comfort",
        "Custom fit",
        "Durable materials"
    ];

    const mouthguardTypes = [
        {
            title: "Sports Mouthguards",
            description: "Ideal for athletes in contact sports such as football, basketball, or rugby. They help absorb impact, reducing the risk of chipped or broken teeth and injuries to the lips, tongue, or jaw.",
            icon: Activity,
            features: ["Impact protection", "Custom fit", "Comfortable wear", "Injury prevention"]
        },
        {
            title: "Nightguards",
            description: "For patients who grind their teeth during sleep, a custom nightguard helps reduce wear, protect enamel, and ease jaw discomfort.",
            icon: Moon,
            features: ["Prevents teeth grinding", "Protects enamel", "Reduces jaw pain", "Improves sleep quality"]
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
                            <img src="/mouthguard.png" alt="Custom Mouthguards" className="w-20 h-20 mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Custom Mouthguards
                            </h1>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Whether you're active on the field or grind your teeth while you sleep, a custom mouthguard can make all the difference in protecting your teeth. At Y3 Smiles Dental, we design mouthguards that fit comfortably and provide maximum protection, tailored to your unique dental structure.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant="booking" size="xl" asChild>
                                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK CONSULTATION</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What Are Mouthguards */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Protection & Prevention
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        What Are Mouthguards?
                                    </h3>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Mouthguards are protective devices that shield your teeth and gums from injury. They are especially helpful during sports or if you suffer from teeth grinding (bruxism). Unlike over-the-counter options, our custom-fitted mouthguards are designed for comfort, durability, and effectiveness.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Superior Protection</h4>
                                                <p className="text-neutral-600 text-sm">Custom fit provides better protection than over-the-counter options</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Maximum Comfort</h4>
                                                <p className="text-neutral-600 text-sm">Designed specifically for your mouth for comfortable wear</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Durable Materials</h4>
                                                <p className="text-neutral-600 text-sm">High-quality materials ensure long-lasting protection</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/6529121/pexels-photo-6529121.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Custom mouthguard protection for sports and sleep"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Mouthguards */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Types of Mouthguards
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                We offer custom mouthguards designed for different needs and activities.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {mouthguardTypes.map((type, index) => {
                                const IconComponent = type.icon;
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardHeader>
                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                                                {type.title}
                                            </CardTitle>
                                            <p className="text-neutral-600 leading-relaxed mb-4">
                                                {type.description}
                                            </p>
                                            <div className="space-y-2">
                                                {type.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                                                        <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </CardHeader>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                                    <TriangleAlert className="w-5 h-5 mr-2" />
                                    Disclaimer
                                </h3>
                                <p className="text-yellow-700 text-sm leading-relaxed">
                                    All dental devices and treatments carry potential risks. Please consult with your treating dentist to assess suitability and understand any risks or recovery considerations before proceeding.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-primary/10 via-white to-secondary/10">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Protect Your Smile Today
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                                Don't wait for an injury or damage to occur. Get a custom mouthguard designed specifically for your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK CONSULTATION
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/treatments">View All Treatments</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default Mouthguards;