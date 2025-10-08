import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    FileText,
    CheckCircle,
    Info,
    Phone,
    Calendar
} from "lucide-react";

export default function PriceGuidePage() {
    useScrollAnimation();

    const treatmentCategories = [
        {
            category: "General Dentistry",
            icon: <FileText className="h-6 w-6 text-blue-600" />,
            treatments: [
                { name: "Comprehensive Examination", price: "From $89" },
                { name: "Standard Check-up", price: "From $65" },
                { name: "Emergency Consultation", price: "From $120" },
                { name: "Scale & Clean", price: "From $150" },
                { name: "Fluoride Treatment", price: "From $45" },
                { name: "X-rays (per image)", price: "From $35" }
            ]
        },
        {
            category: "Restorative Dentistry",
            icon: <FileText className="h-6 w-6 text-green-600" />,
            treatments: [
                { name: "Simple Filling (per surface)", price: "From $180" },
                { name: "Complex Filling", price: "From $250" },
                { name: "Root Canal Therapy", price: "From $850" },
                { name: "Dental Crown", price: "From $1,200" },
                { name: "Dental Bridge (per unit)", price: "From $1,300" },
                { name: "Inlay/Onlay", price: "From $950" }
            ]
        },
        {
            category: "Cosmetic Dentistry",
            icon: <FileText className="h-6 w-6 text-purple-600" />,
            treatments: [
                { name: "Teeth Whitening (in-office)", price: "From $450" },
                { name: "Take-home Whitening Kit", price: "From $350" },
                { name: "Porcelain Veneer", price: "From $1,200" },
                { name: "Composite Bonding", price: "From $280" },
                { name: "Smile Makeover", price: "Custom Quote" }
            ]
        },
        {
            category: "Preventive Care",
            icon: <FileText className="h-6 w-6 text-teal-600" />,
            treatments: [
                { name: "Dental Sealants (per tooth)", price: "From $65" },
                { name: "Sports Mouthguard", price: "From $250" },
                { name: "Night Guard (bruxism)", price: "From $350" },
                { name: "Periodontal Maintenance", price: "From $180" },
                { name: "Deep Cleaning (per quadrant)", price: "From $220" }
            ]
        },
        {
            category: "Oral Surgery",
            icon: <FileText className="h-6 w-6 text-red-600" />,
            treatments: [
                { name: "Simple Extraction", price: "From $220" },
                { name: "Surgical Extraction", price: "From $350" },
                { name: "Wisdom Tooth Removal", price: "From $280" },
                { name: "Complex Surgical Extraction", price: "From $450" },
                { name: "Dental Implant", price: "From $2,500" }
            ]
        },
        {
            category: "Dentures & Prosthodontics",
            icon: <FileText className="h-6 w-6 text-orange-600" />,
            treatments: [
                { name: "Complete Denture (upper or lower)", price: "From $1,200" },
                { name: "Partial Denture", price: "From $850" },
                { name: "Denture Reline", price: "From $380" },
                { name: "Denture Repair", price: "From $120" },
                { name: "Implant-Supported Denture", price: "From $5,000" }
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-20">
                <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 fade-in-section">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Price Guide
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Transparent pricing for quality dental care. No hidden fees, no surprises.
                            </p>
                        </div>

                        <div className="mb-12 fade-in-section">
                            <Card className="border-blue-200 bg-blue-50">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-3">
                                        <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">Important Pricing Information</h3>
                                            <p className="text-blue-800 text-sm leading-relaxed">
                                                Prices listed are starting prices and may vary based on individual treatment needs,
                                                complexity, and materials used. A comprehensive examination is required to provide
                                                accurate treatment estimates. All prices include GST and are subject to change without notice.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mb-12 fade-in-section">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                                Treatment Prices
                            </h2>
                            <div className="grid lg:grid-cols-2 gap-8">
                                {treatmentCategories.map((category, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-4">
                                                {category.icon}
                                                <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
                                            </div>
                                            <div className="space-y-3">
                                                {category.treatments.map((treatment, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                                                    >
                                                        <span className="text-gray-700 text-sm md:text-base">{treatment.name}</span>
                                                        <span className="font-semibold text-blue-600 text-sm md:text-base whitespace-nowrap ml-4">
                                                            {treatment.price}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12 fade-in-section">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                                Health Insurance & Benefits
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <Card className="hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6 text-center">
                                        <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold mb-3">Private Health Insurance</h3>
                                        <p className="text-gray-600 text-sm">
                                            We accept all major private health insurance funds with HICAPS for instant rebates
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6 text-center">
                                        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold mb-3">Medicare & CDBS</h3>
                                        <p className="text-gray-600 text-sm">
                                            Child Dental Benefits Schedule accepted with bulk billing available for eligible patients
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6 text-center">
                                        <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold mb-3">DVA Patients</h3>
                                        <p className="text-gray-600 text-sm">
                                            Department of Veterans' Affairs patients welcome with special rates available
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="mb-12 fade-in-section">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                                Flexible Payment Options
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-3">Payment Plans</h3>
                                        <p className="text-gray-600 mb-4">
                                            Interest-free payment plans available for treatments over $300
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span>No interest charges</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span>Flexible payment terms</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span>Quick approval process</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-3">Afterpay & Humm</h3>
                                        <p className="text-gray-600 mb-4">
                                            Buy now, pay later options for your convenience
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span>Split payments into installments</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span>Instant approval</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span>Interest-free options available</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="mb-12 fade-in-section">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                                Frequently Asked Questions
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-2 text-gray-900">Why do prices vary?</h3>
                                        <p className="text-gray-600 text-sm">
                                            Treatment complexity, materials used, and individual patient needs affect pricing.
                                            We provide detailed estimates after your examination to ensure transparency.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-2 text-gray-900">Are payment plans available?</h3>
                                        <p className="text-gray-600 text-sm">
                                            Yes, payment plans are available for treatments over $300. Terms and conditions apply,
                                            and approval is subject to assessment by our payment partners.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-2 text-gray-900">Do you offer bulk billing?</h3>
                                        <p className="text-gray-600 text-sm">
                                            We offer bulk billing for eligible patients under the Child Dental Benefits Schedule
                                            and certain DVA treatments. Contact us to check your eligibility.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-2 text-gray-900">How do I get an accurate quote?</h3>
                                        <p className="text-gray-600 text-sm">
                                            Book a consultation for a comprehensive examination. We'll provide a detailed
                                            treatment plan with accurate pricing before any work begins.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="text-center fade-in-section">
                            <Card className="bg-gradient-to-r from-blue-600 to-green-600 border-none">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Ready to Get Started?
                                    </h3>
                                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                        Book your consultation today for a detailed treatment plan and accurate pricing
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button
                                            size="lg"
                                            className="bg-white text-blue-600 hover:bg-gray-100"
                                        >
                                            <Phone className="mr-2 h-5 w-5" />
                                            Call for Quote
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-white text-white hover:bg-white hover:text-blue-600"
                                        >
                                            <Calendar className="mr-2 h-5 w-5" />
                                            Book Consultation
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            <Footer />
        </div>
    );
}
