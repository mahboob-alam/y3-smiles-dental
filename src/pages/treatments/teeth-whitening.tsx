import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Sparkles,
    Star,
    Shield,
    Clock,
    CheckCircle,
    ArrowLeft,
    Phone,
    TriangleAlert
} from "lucide-react";

const TeethWhitening = () => {
    useScrollAnimation();

    const heroBenefits = [
        "Brighter appearance",
        "Convenient options",
        "Personalised care",
        "Safe & monitored"
    ];

    const benefits = [
        {
            title: "Brighter Appearance",
            description: "A lighter smile can enhance your overall look and confidence.",
            icon: Sparkles
        },
        {
            title: "Convenient Options",
            description: "Choose in-clinic treatments for faster results or take-home kits for flexibility.",
            icon: Clock
        },
        {
            title: "Personalised Care",
            description: "Treatments are customised to your preferences, from subtle brightening to more noticeable whitening.",
            icon: Star
        },
        {
            title: "Safe & Monitored",
            description: "Professional supervision helps manage sensitivity and ensure comfort.",
            icon: Shield
        },
        {
            title: "Lasting Results",
            description: "Longevity varies between individuals as diet, lifestyle, and oral hygiene all play a role. With proper care and aftercare, results can often last for several months.",
            icon: CheckCircle
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
                            <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Teeth Whitening
                            </h1>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                At Y3 Smiles Dental, we believe every smile deserves to shine. Over time, coffee, tea, and natural ageing can leave your smile looking dull, dark, and discoloured. Professional teeth whitening is a safe way to refresh your smile and restore brightness.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {heroBenefits.map((benefit, index) => (
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

                {/* What is Teeth Whitening */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Professional Whitening
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        What Is Teeth Whitening?
                                    </h3>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Teeth whitening is a cosmetic dental treatment that lightens tooth colour by reducing stains and discolouration. At Y3 Smiles Dental, we use regulated, high-grade materials and techniques that differ from over-the-counter kits, providing professional care tailored to your needs.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Professional Materials</h4>
                                                <p className="text-neutral-600 text-sm">Regulated, high-grade whitening materials for safe and effective results</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Tailored Treatment</h4>
                                                <p className="text-neutral-600 text-sm">Customised approach based on your individual needs and preferences</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Multiple Options</h4>
                                                <p className="text-neutral-600 text-sm">Choose between in-clinic treatment or custom take-home options</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Professional teeth whitening process"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits of Teeth Whitening */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Benefits of Teeth Whitening
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                Discover how professional teeth whitening can enhance your smile and confidence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardHeader>
                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                                                {benefit.title}
                                            </CardTitle>
                                            <p className="text-neutral-600 leading-relaxed text-sm">
                                                {benefit.description}
                                            </p>
                                        </CardHeader>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Treatment Options */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Treatment Options
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                Choose the teeth whitening option that best fits your lifestyle and preferences.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <Card className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth">
                                <CardHeader className="text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
                                        <Sparkles className="w-10 h-10" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-neutral-800 mb-4">
                                        In-Clinic Treatment
                                    </CardTitle>
                                    <p className="text-neutral-600 leading-relaxed mb-6">
                                        Professional whitening treatment performed in our clinic for faster, more dramatic results in a single visit.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                            <span className="text-sm text-neutral-600">Immediate results</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                            <span className="text-sm text-neutral-600">Professional supervision</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                            <span className="text-sm text-neutral-600">Single appointment</span>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <Card className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth">
                                <CardHeader className="text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
                                        <Star className="w-10 h-10" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-neutral-800 mb-4">
                                        Take-Home Kit
                                    </CardTitle>
                                    <p className="text-neutral-600 leading-relaxed mb-6">
                                        Custom-fitted trays and professional-grade whitening gel for convenient whitening at your own pace.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                            <span className="text-sm text-neutral-600">Flexible timing</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                            <span className="text-sm text-neutral-600">Custom-fitted trays</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                            <span className="text-sm text-neutral-600">Gradual whitening</span>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-16 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                                    <TriangleAlert className="w-5 h-5 mr-2" />
                                    Disclaimer
                                </h3>
                                <p className="text-yellow-700 text-sm leading-relaxed">
                                    Teeth whitening is a cosmetic dental procedure and may not be suitable for everyone. All treatments carry potential risks. Please consult with your treating dentist to assess suitability, discuss risks, and understand recovery considerations before proceeding.
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
                                Ready to Brighten Your Smile?
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                                Discover the difference professional teeth whitening can make for your confidence and smile.
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

export default TeethWhitening;