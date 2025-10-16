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
    Phone
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
            icon: CreditCard,
            features: ["Visa", "Mastercard", "American Express", "EFTPOS"],
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Private Health Insurance",
            description: "Maximize your benefits with HICAPS instant rebates",
            icon: Shield,
            features: ["Instant rebates", "All major funds", "Gap payments", "Claim processing"],
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Afterpay",
            description: "Buy now, pay later with Afterpay's flexible payment solution",
            icon: Clock,
            features: ["4 interest-free payments", "Instant approval", "No hidden fees", "Easy setup"],
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Humm",
            description: "Longer payment terms with Humm for larger treatments",
            icon: DollarSign,
            features: ["Up to 60 months", "Low interest rates", "Quick approval", "Flexible terms"],
            color: "bg-orange-50 text-orange-600"
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
                            <CreditCard className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Payment Options
                            </h1>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
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
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                Choose from our range of convenient payment options designed to make your dental care affordable and accessible.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {paymentMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardHeader>
                                            <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mb-4`}>
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                                                {method.title}
                                            </CardTitle>
                                            <p className="text-neutral-600 leading-relaxed mb-4">
                                                {method.description}
                                            </p>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {method.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
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
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Maximize your dental benefits with our comprehensive insurance support. We work with all major health funds and provide instant HICAPS claims processing for immediate rebates.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">HICAPS Available</h4>
                                                <p className="text-neutral-600 text-sm">Instant rebates and claim processing on the spot</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">All Major Health Funds</h4>
                                                <p className="text-neutral-600 text-sm">We work with Bupa, Medibank, HCF, and many more</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Gap Payment Options</h4>
                                                <p className="text-neutral-600 text-sm">Flexible payment plans for any remaining gap amounts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                                        <div className="text-center">
                                            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                                            <p className="text-neutral-600 font-medium">Insurance Provider Logos</p>
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
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Split your dental treatment cost into 4 equal, interest-free payments with Afterpay. Perfect for treatments up to $2,000 with instant approval and no hidden fees.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Star className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">4 Interest-Free Payments</h4>
                                                <p className="text-neutral-600 text-sm">Pay 25% today, then every 2 weeks for 6 weeks</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Star className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Instant Approval</h4>
                                                <p className="text-neutral-600 text-sm">Quick and easy approval process, start treatment today</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Star className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">No Hidden Fees</h4>
                                                <p className="text-neutral-600 text-sm">Transparent pricing with no establishment or monthly fees</p>
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
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        For larger treatments, Humm offers extended payment plans up to 60 months with competitive interest rates. Perfect for comprehensive dental work and major treatments.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Flexible Terms</h4>
                                                <p className="text-neutral-600 text-sm">Choose from 6 to 60 months to suit your budget</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Competitive Rates</h4>
                                                <p className="text-neutral-600 text-sm">Low interest rates with transparent fee structure</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Quick Application</h4>
                                                <p className="text-neutral-600 text-sm">Simple online application with fast approval decisions</p>
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

                {/* Disclaimer */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                                    <Shield className="w-5 h-5 mr-2" />
                                    Important Information
                                </h3>
                                <p className="text-yellow-700 text-sm leading-relaxed">
                                    Payment plan eligibility is subject to approval. Terms and conditions apply for all payment options. Interest rates and fees may apply for extended payment plans. Please speak to our team for detailed information about payment options suitable for your treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <CreditCard className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8">
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
