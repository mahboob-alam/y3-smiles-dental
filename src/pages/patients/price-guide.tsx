import React from "react";
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    DollarSign,
    FileText,
    Calendar,
    Phone,
    CheckCircle,
    AlertTriangle,
    Info,
    Shield,
    Star,
    Users,
    ArrowRight
} from "lucide-react";


export const Head = () => (
  <SEO 
    title="Price guide | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const PriceGuidePage = () => {
    useScrollAnimation();

    const benefits = [
        "Transparent pricing",
        "No hidden fees",
        "Payment plans available",
        "Insurance accepted"
    ];

    const treatmentPrices = [
        {
            category: "General Dentistry",
            icon: <FileText className="h-6 w-6 text-blue-600" />,
            treatments: [
                { name: "Comprehensive Examination", price: "From $89" },
                { name: "Standard Consultation", price: "From $65" },
                { name: "Emergency Consultation", price: "From $120" },
                { name: "Scale & Clean", price: "From $150" },
                { name: "Fluoride Treatment", price: "From $45" }
            ]
        },
        {
            category: "Restorative Dentistry",
            icon: <DollarSign className="h-6 w-6 text-green-600" />,
            treatments: [
                { name: "Simple Filling (per surface)", price: "From $180" },
                { name: "Complex Filling (per surface)", price: "From $250" },
                { name: "Root Canal Therapy", price: "From $850" },
                { name: "Dental Crown", price: "From $1,200" },
                { name: "Dental Bridge (per unit)", price: "From $1,300" }
            ]
        },
        {
            category: "Preventive Care",
            icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
            treatments: [
                { name: "Sealants (per tooth)", price: "From $65" },
                { name: "Mouthguard (sports)", price: "From $250" },
                { name: "Nightguard (bruxism)", price: "From $350" },
                { name: "Periodontal Maintenance", price: "From $180" },
                { name: "Deep Cleaning (per quadrant)", price: "From $220" }
            ]
        },
        {
            category: "Oral Surgery",
            icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
            treatments: [
                { name: "Simple Extraction", price: "From $220" },
                { name: "Surgical Extraction", price: "From $350" },
                { name: "Wisdom Tooth Removal", price: "From $280" },
                { name: "Complex Surgical Extraction", price: "From $450" }
            ]
        },
        {
            category: "Cosmetic Dentistry",
            icon: <Calendar className="h-6 w-6 text-pink-600" />,
            treatments: [
                { name: "Teeth Whitening (in-office)", price: "From $450" },
                { name: "Take-home Whitening Kit", price: "From $350" },
                { name: "Porcelain Veneer", price: "From $1,200" },
                { name: "Composite Bonding", price: "From $280" }
            ]
        },
        {
            category: "Dentures",
            icon: <FileText className="h-6 w-6 text-orange-600" />,
            treatments: [
                { name: "Complete Denture (upper or lower)", price: "From $1,200" },
                { name: "Partial Denture", price: "From $850" },
                { name: "Denture Reline", price: "From $380" },
                { name: "Denture Repair", price: "From $120" }
            ]
        }
    ];

    const paymentPlans = [
        {
            title: "Interest-Free Plans",
            description: "No interest charges for treatments over $300",
            features: ["Up to 12 months to pay", "No hidden fees", "Quick approval"]
        },
        {
            title: "Extended Payment Plans",
            description: "Longer payment terms available",
            features: ["Up to 24 months", "Low interest rates", "Flexible terms"]
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
                            <img src="/price-guide.png" alt="Price Guide" className="w-20 h-20 mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Price Guide
                            </h1>
                            <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                                Transparent pricing for quality dental care. No hidden fees, no surprises. We believe in honest, upfront pricing so you can make informed decisions about your dental health.
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
                                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>GET PERSONALIZED QUOTE</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Important Notice */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    Important Pricing Information
                                </h3>
                                <p className="text-blue-700 text-sm leading-relaxed">
                                    Prices listed are starting prices and may vary based on individual treatment needs, complexity, and materials used. A comprehensive examination is required to provide accurate treatment estimates. All prices include GST and are subject to change without notice.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Treatment Prices */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Treatment Prices
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                Our transparent pricing ensures you know what to expect before your treatment. Browse by category to find the services you need.
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <Tabs defaultValue="general" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                                    <TabsTrigger value="general">General</TabsTrigger>
                                    <TabsTrigger value="restorative">Restorative</TabsTrigger>
                                    <TabsTrigger value="preventive">Preventive</TabsTrigger>
                                    <TabsTrigger value="surgery">Surgery</TabsTrigger>
                                    <TabsTrigger value="cosmetic">Cosmetic</TabsTrigger>
                                    <TabsTrigger value="dentures">Dentures</TabsTrigger>
                                </TabsList>

                                {treatmentPrices.map((category, index) => (
                                    <TabsContent key={index} value={category.category.toLowerCase().replace(' dentistry', '').replace(' care', '')}>
                                        <Card className="border-0 shadow-soft">
                                            <CardHeader>
                                                <div className="flex items-center">
                                                    {category.icon}
                                                    <CardTitle className="text-2xl font-bold text-neutral-800 ml-3">
                                                        {category.category}
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid gap-4">
                                                    {category.treatments.map((treatment, idx) => (
                                                        <div key={idx} className="flex items-center justify-between py-3 px-4 bg-white rounded-lg border border-neutral-100 hover:border-primary/20 transition-colors">
                                                            <span className="text-neutral-700 font-medium">{treatment.name}</span>
                                                            <span className="font-bold text-primary text-lg">{treatment.price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </section>

                {/* Payment Plans */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Payment Plans Available
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                Don't let cost be a barrier to your dental health. We offer flexible payment options to make quality care accessible.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {paymentPlans.map((plan, index) => (
                                <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth">
                                    <CardHeader className="text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                                            <DollarSign className="w-8 h-8" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                                            {plan.title}
                                        </CardTitle>
                                        <p className="text-neutral-800 leading-relaxed mb-4">{plan.description}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-neutral-800">
                                                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Insurance Information */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Insurance & Benefits
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                Maximize your dental benefits with our comprehensive insurance support and instant rebate processing.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth">
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                                        Private Health Insurance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-neutral-800 text-sm leading-relaxed">
                                        We accept all major private health insurers with HICAPS for instant rebates and seamless claim processing.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth">
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                                        <FileText className="w-8 h-8" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                                        Medicare Benefits
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-neutral-800 text-sm leading-relaxed">
                                        Child Dental Benefits Schedule (CDBS) and bulk billing available for eligible patients and children.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth">
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                                        DVA Patients
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-neutral-800 text-sm leading-relaxed">
                                        Department of Veterans' Affairs patients welcome with special rates and dedicated support available.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Pricing FAQ
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                Common questions about our pricing and payment options.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto grid gap-6">
                            <Card className="border-0 shadow-soft">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-neutral-800">
                                        Why do prices vary?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-800 leading-relaxed">
                                        Treatment complexity, materials used, and individual patient needs affect pricing. We provide detailed estimates after your comprehensive examination to ensure accurate quotes.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-soft">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-neutral-800">
                                        Are payment plans available for all treatments?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-800 leading-relaxed">
                                        Payment plans are available for treatments over $300. Terms and conditions apply, and approval is subject to assessment. We offer both interest-free and extended payment options.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-soft">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-neutral-800">
                                        Do you bulk bill?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-800 leading-relaxed">
                                        We offer bulk billing for eligible patients under the Child Dental Benefits Schedule (CDBS) and certain DVA treatments. Contact us to check your eligibility.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-soft">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-neutral-800">
                                        How do I get an accurate quote?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-800 leading-relaxed">
                                        Book a consultation for a comprehensive examination. We'll provide a detailed treatment plan with accurate pricing before any work begins, so there are no surprises.
                                    </p>
                                </CardContent>
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
                                    <AlertTriangle className="w-5 h-5 mr-2" />
                                    Pricing Disclaimer
                                </h3>
                                <p className="text-yellow-700 text-sm leading-relaxed">
                                    All prices are starting prices and include GST. Final treatment costs may vary based on individual needs, complexity, and materials used. A comprehensive examination is required for accurate pricing. Prices are subject to change without notice.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <Star className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-lg text-neutral-800 mb-8">
                                Book your consultation today for a detailed treatment plan and accurate pricing tailored to your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        CALL FOR QUOTE
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

export default PriceGuidePage;