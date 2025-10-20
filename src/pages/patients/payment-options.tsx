import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    CreditCard,
    Shield,
    CheckCircle,
    Clock,
    DollarSign,
    Users,
    Star,
    ArrowRight,
    Phone,
    Heart,
    Banknote,
    AlertTriangle
} from "lucide-react";

const PaymentOptions = () => {
    useScrollAnimation();

    const benefits = [
        "All major cards accepted",
        "Insurance supported",
        "Flexible payment plans",
        "Instant rebates available"
    ];

    const paymentMethods = [
        {
            title: "Major Credit & Debit Cards",
            description: "We accept all major credit and debit cards for your convenience",
            imageSrc: "/atm-card.png",
            features: ["Visa", "Mastercard", "American Express", "EFTPOS"],
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Private Health Insurance",
            description: "Maximize your benefits with HICAPS instant rebates",
            imageSrc: "/health-insurance.png",
            features: ["Instant rebates", "All major funds", "Gap payments", "Claim processing"],
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Afterpay",
            description: "Buy now, pay later with Afterpay's flexible payment solution",
            imageSrc: "/afterpay-logo.png",
            features: ["4 interest-free payments", "Instant approval", "No hidden fees", "Easy setup"],
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Humm",
            description: "Longer payment terms with Humm for larger treatments",
            imageSrc: "/humm-logo.svg",
            features: ["Up to 72 months", "Interest-free", "Quick approval", "Flexible terms"],
            color: "bg-orange-50 text-orange-600"
        },
        {
            title: "Child Dental Benefits Schedule",
            description: "Australian Government program covering dental care for eligible children",
            imageSrc: "/medicare-logo.svg",
            features: ["Ages 0-17 years", "Medicare eligible", "Government funded", "Basic dental services"],
            color: "bg-pink-50 text-pink-600"
        },
        {
            title: "Superannuation - Early Release",
            description: "Access your super early on compassionate grounds for medical expenses",
            imageSrc: "/health-insurance.png",
            features: ["Medical treatment", "Compassionate grounds", "ATO approved", "Government regulated"],
            color: "bg-indigo-50 text-indigo-600"
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
                            <img src="/atm-card.png" alt="Payment Options" className="w-24 h-24 mx-auto mb-10" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Payment Options
                            </h1>
                            <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                                We believe quality dental care should be accessible to everyone. That's why we offer a variety of convenient payment options to suit your budget and financial needs.
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

                {/* Payment Methods */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                How You Can Pay
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                Choose from our range of convenient payment options designed to make your dental care affordable and accessible.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {paymentMethods.map((method, index) => {
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardHeader>
                                            <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mb-4`}>
                                                <img src={method.imageSrc} alt={method.title} className="w-8 h-8" />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                                                {method.title}
                                            </CardTitle>
                                            <p className="text-neutral-800 leading-relaxed mb-4">
                                                {method.description}
                                            </p>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {method.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-neutral-800">
                                                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Insurance Support */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Insurance & Benefits
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        We Accept All Major Cards and Insurance
                                    </h3>
                                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                        Maximize your dental benefits with our comprehensive insurance support. We work with all major health funds and provide instant HICAPS claims processing for immediate rebates.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">HICAPS Available</h4>
                                                <p className="text-neutral-800 text-sm">Instant rebates and claim processing on the spot</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">All Major Health Funds</h4>
                                                <p className="text-neutral-800 text-sm">We work with Bupa, Medibank, HCF, and many more</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Gap Payment Options</h4>
                                                <p className="text-neutral-800 text-sm">Flexible payment plans for any remaining gap amounts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                                        <div className="text-center">
                                            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                                            <p className="text-neutral-800 font-medium">Insurance Provider Logos</p>
                                            <p className="text-sm text-neutral-500 mt-2">Image of insurer list to be added</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Afterpay Details */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="aspect-video bg-purple-50 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <Clock className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                                            <p className="text-purple-700 font-medium">Afterpay Integration</p>
                                            <p className="text-sm text-purple-600 mt-2">Afterpay details to be added</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Buy Now, Pay Later
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Afterpay Available
                                    </h3>
                                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                        Split your dental treatment cost into 4 equal, interest-free payments with Afterpay. Perfect for treatments up to $2,000 with instant approval and no hidden fees.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Star className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">4 Interest-Free Payments</h4>
                                                <p className="text-neutral-800 text-sm">Pay 25% today, then every 2 weeks for 6 weeks</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Star className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Instant Approval</h4>
                                                <p className="text-neutral-800 text-sm">Quick and easy approval process, start treatment today</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Star className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">No Hidden Fees</h4>
                                                <p className="text-neutral-800 text-sm">Transparent pricing with no establishment or monthly fees</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Humm Details */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Extended Payment Terms
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Humm Payment Plans
                                    </h3>
                                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                        For larger treatments, Humm offers extended payment plans up to 60 months with competitive interest rates. Perfect for comprehensive dental work and major treatments.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Flexible Terms</h4>
                                                <p className="text-neutral-800 text-sm">Choose from 6 to 60 months to suit your budget</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Competitive Rates</h4>
                                                <p className="text-neutral-800 text-sm">Interest Free</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Quick Application</h4>
                                                <p className="text-neutral-800 text-sm">Simple online application with fast approval decisions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-orange-50 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <DollarSign className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                                            <p className="text-orange-700 font-medium">Humm Integration</p>
                                            <p className="text-sm text-orange-600 mt-2">Humm details to be added</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CDBS Details */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="aspect-video bg-pink-50 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <Heart className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                                            <p className="text-pink-700 font-medium">Australian Government</p>
                                            <p className="text-sm text-pink-600 mt-2">Child Dental Benefits Schedule</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Australian Government Program
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Child Dental Benefits Schedule
                                    </h3>
                                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                        The Child Dental Benefits Schedule (CDBS) is an Australian Government initiative that covers part or the full cost of basic dental services for eligible children aged 0-17 years.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Age Eligibility</h4>
                                                <p className="text-neutral-800 text-sm">Children aged 0-17 years for at least one day in the calendar year</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Medicare Eligible</h4>
                                                <p className="text-neutral-800 text-sm">Child must be eligible for Medicare benefits</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Government Payments</h4>
                                                <p className="text-neutral-800 text-sm">Child or guardian receives eligible government payments</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Basic Dental Services</h4>
                                                <p className="text-neutral-800 text-sm">Covers examinations, cleaning, fillings, and extractions</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Eligibility Criteria Applies</h4>
                                                <p className="text-neutral-800 text-sm">Call us to confirm if you are eligible for CDBS benefits</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Superannuation Details */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Australian Taxation Office
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Superannuation Early Release
                                    </h3>
                                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                        Access your superannuation early on compassionate grounds to pay for essential medical treatment and related expenses when facing financial hardship.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Medical Treatment</h4>
                                                <p className="text-neutral-800 text-sm">Dental, medical, or surgical treatment for you or your dependant</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Medical Transport</h4>
                                                <p className="text-neutral-800 text-sm">Transport costs for essential medical treatment</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Home Modifications</h4>
                                                <p className="text-neutral-800 text-sm">Modifications to accommodate severe disability</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Palliative Care</h4>
                                                <p className="text-neutral-800 text-sm">Care for terminal illness and related expenses</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Preventing Foreclosure</h4>
                                                <p className="text-neutral-800 text-sm">Prevent forced sale of your primary residence</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-indigo-50 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <Banknote className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                                            <p className="text-indigo-700 font-medium">Australian Taxation Office</p>
                                            <p className="text-sm text-indigo-600 mt-2">Compassionate Release Program</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                                    <AlertTriangle className="w-5 h-5 mr-2" />
                                    Disclaimer
                                </h3>
                                <p className="text-yellow-700 text-sm leading-relaxed">
                                    This page is for informational purposes only and is not intended to provide legal or financial advice or recommendations. Please consult a financial or superannuation professional or the ATO before making any decisions to withdraw from superannuation. The information provided is based on the ATO's guidelines on early access to superannuation as published on its website as of 20 August 2025. For the most up-to-date and comprehensive details, please refer to the ATO website. Y3 Smiles Dental will not be liable for any errors, omissions, or inaccuracies in this page.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <img src="/atm-card.png" alt="Ready to Get Started?" className="w-24 h-24 mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-lg text-neutral-800 mb-8">
                                Don't let cost be a barrier to your dental health. Contact us to discuss the best payment option for your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK CONSULTATION
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/patients">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        Back to Patient Info
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default PaymentOptions;
