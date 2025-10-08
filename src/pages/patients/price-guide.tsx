import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Contact from "@/components/Contact";
import {
    DollarSign,
    FileText,
    Calendar,
    Phone,
    CheckCircle,
    AlertTriangle,
    Info
} from "lucide-react";

export default function PriceGuidePage() {
    useScrollAnimation();

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-green-600">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Price Guide
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Transparent pricing for quality dental care. No hidden fees, no surprises.
                    </p>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-8 bg-blue-50">
                <div className="container mx-auto px-4">
                    <Card className="max-w-4xl mx-auto border-blue-200">
                        <CardContent className="p-6">
                            <div className="flex items-start space-x-3">
                                <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-blue-800 mb-2">Important Pricing Information</h3>
                                    <p className="text-blue-700 text-sm leading-relaxed">
                                        Prices listed are starting prices and may vary based on individual treatment needs,
                                        complexity, and materials used. A comprehensive examination is required to provide
                                        accurate treatment estimates. All prices include GST and are subject to change without notice.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Treatment Prices */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Treatment Prices</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our transparent pricing ensures you know what to expect before your treatment
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {treatmentPrices.map((category, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {category.icon}
                                        <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {category.treatments.map((treatment, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                                <span className="text-gray-700">{treatment.name}</span>
                                                <span className="font-semibold text-blue-600">{treatment.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Plans */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Plans Available</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't let cost be a barrier to your dental health. We offer flexible payment options
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {paymentPlans.map((plan, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>
                                    <p className="text-gray-600 mb-4">{plan.description}</p>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center justify-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Insurance & Benefits</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Maximize your dental benefits with our insurance support
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Private Health Insurance</h3>
                                <p className="text-gray-600 text-sm">
                                    We accept all major private health insurers with HICAPS for instant rebates
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Medicare Benefits</h3>
                                <p className="text-gray-600 text-sm">
                                    Child Dental Benefits Schedule (CDBS) and bulk billing available for eligible patients
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">DVA Patients</h3>
                                <p className="text-gray-600 text-sm">
                                    Department of Veterans' Affairs patients welcome with special rates available
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing FAQ</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-2">Why do prices vary?</h3>
                                <p className="text-gray-600 text-sm">
                                    Treatment complexity, materials used, and individual patient needs affect pricing.
                                    We provide detailed estimates after your examination.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-2">Are payment plans available for all treatments?</h3>
                                <p className="text-gray-600 text-sm">
                                    Payment plans are available for treatments over $300. Terms and conditions apply,
                                    and approval is subject to assessment.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-2">Do you bulk bill?</h3>
                                <p className="text-gray-600 text-sm">
                                    We offer bulk billing for eligible patients under the Child Dental Benefits Schedule
                                    and certain DVA treatments.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-2">How do I get an accurate quote?</h3>
                                <p className="text-gray-600 text-sm">
                                    Book a consultation for a comprehensive examination. We'll provide a detailed
                                    treatment plan with accurate pricing before any work begins.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 fade-in-section">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Book your consultation today for a detailed treatment plan and accurate pricing
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            <Phone className="mr-2 h-5 w-5" />
                            Call for Quote
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                            <Calendar className="mr-2 h-5 w-5" />
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
}