import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Contact from "@/components/Contact";
import {
    CreditCard,
    DollarSign,
    Shield,
    Calendar,
    FileText,
    CheckCircle,
    AlertCircle
} from "lucide-react";

export default function PaymentOptionsPage() {
    useScrollAnimation();

    const paymentMethods = [
        {
            icon: <CreditCard className="h-8 w-8 text-blue-600" />,
            title: "Credit & Debit Cards",
            description: "We accept all major credit and debit cards including Visa, Mastercard, and AMEX",
            details: ["Secure payment processing", "Instant confirmation", "Receipt provided"]
        },
        {
            icon: <DollarSign className="h-8 w-8 text-green-600" />,
            title: "Cash Payments",
            description: "Traditional cash payments accepted at all our locations",
            details: ["Immediate payment", "No processing fees", "Receipt provided"]
        },
        {
            icon: <FileText className="h-8 w-8 text-purple-600" />,
            title: "EFTPOS",
            description: "Electronic funds transfer at point of sale available",
            details: ["Direct from bank account", "Secure transactions", "Immediate processing"]
        }
    ];

    const financingOptions = [
        {
            title: "Payment Plans",
            description: "Interest-free payment plans available for treatments over $300",
            features: [
                "No interest charges",
                "Flexible payment terms",
                "Quick approval process",
                "Minimum deposit required"
            ],
            note: "Ask our team about available payment plan options"
        },
        {
            title: "Zip Pay & Afterpay",
            description: "Buy now, pay later options for your convenience",
            features: [
                "Split payments into installments",
                "Instant approval",
                "No interest if paid on time",
                "Easy online application"
            ],
            note: "Subject to approval and terms and conditions"
        }
    ];

    const insuranceInfo = [
        {
            title: "Private Health Insurance",
            description: "We accept all major private health insurance providers",
            details: [
                "Direct claiming available (HICAPS)",
                "On-the-spot rebates",
                "No waiting for reimbursement",
                "Gap payments explained upfront"
            ]
        },
        {
            title: "Medicare & DVA",
            description: "Government benefit schemes we participate in",
            details: [
                "Child Dental Benefits Schedule (CDBS)",
                "Department of Veterans' Affairs (DVA)",
                "Eligible patients receive subsidized care",
                "Bulk billing available for qualifying treatments"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-green-600">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Payment Options
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Flexible payment solutions to make quality dental care accessible and affordable for everyone
                    </p>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Methods</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We offer various convenient payment methods to suit your preferences
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {paymentMethods.map((method, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                                    <p className="text-gray-600 mb-4">{method.description}</p>
                                    <ul className="space-y-2">
                                        {method.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center justify-center text-sm text-gray-500">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Financing Options */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Financing Options</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't let cost be a barrier to your dental health. We offer flexible financing solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {financingOptions.map((option, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                                        {option.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{option.description}</p>
                                    <ul className="space-y-2 mb-4">
                                        {option.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <p className="text-sm text-blue-700 flex items-start">
                                            <AlertCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                            {option.note}
                                        </p>
                                    </div>
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
                            Maximize your dental benefits with our comprehensive insurance support
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {insuranceInfo.map((info, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                                        {info.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{info.description}</p>
                                    <ul className="space-y-2">
                                        {info.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Information */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <Card className="max-w-4xl mx-auto">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-center">Important Payment Information</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-3 text-blue-600">Before Your Appointment</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Bring your health insurance card and any referrals</li>
                                        <li>• Treatment estimates provided before procedures</li>
                                        <li>• Payment options discussed during consultation</li>
                                        <li>• No surprises - all costs explained upfront</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-green-600">Financial Assistance</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Payment plan consultations available</li>
                                        <li>• Senior and student discounts may apply</li>
                                        <li>• Family payment plans for multiple treatments</li>
                                        <li>• Emergency treatment payment options</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 fade-in-section">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Questions About Payment Options?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our friendly team is here to help you understand your payment options and find the best solution for your needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            Call Us Today
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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