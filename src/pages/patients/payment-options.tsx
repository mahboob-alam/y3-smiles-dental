import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    CreditCard,
    CheckCircle,
    Info,
    Calendar
} from "lucide-react";

export default function PaymentOptionsPage() {
    useScrollAnimation();

    const insuranceProviders = [
        "HCF", "Bupa", "Medibank", "NIB", "CBHS", "Australian Unity",
        "HBF", "Teachers Health", "Defence Health", "Peoplecare",
        "Westfund", "Health Partners", "Phoenix Health", "Navy Health",
        "Doctors' Health Fund", "GMHBA", "AHM", "UniHealth"
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-20">
                <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 fade-in-section">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Payment Options
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Flexible payment solutions to make quality dental care accessible and affordable for everyone
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16 fade-in-section">
                            <Card className="hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        <CreditCard className="h-12 w-12 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Major Cards</h3>
                                    <p className="text-gray-600 mb-4">
                                        We accept all major credit and debit cards including Visa, Mastercard, and American Express
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            Secure payment processing
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            Instant confirmation
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        <Calendar className="h-12 w-12 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Afterpay</h3>
                                    <p className="text-gray-600 mb-4">
                                        Buy now, pay later in 4 interest-free installments
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            Split into 4 payments
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            No interest if paid on time
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            Instant approval online
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        <Calendar className="h-12 w-12 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Humm</h3>
                                    <p className="text-gray-600 mb-4">
                                        Flexible payment plans for larger treatments
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            Up to 60 months to pay
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            Interest-free options available
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            Easy online application
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mb-16 fade-in-section">
                            <Card>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                        Health Insurance Accepted
                                    </h2>
                                    <p className="text-gray-600 text-center mb-6">
                                        We accept all major health insurance funds with HICAPS for instant on-the-spot rebates
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                        {insuranceProviders.map((provider, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
                                            >
                                                <span className="text-sm font-medium text-gray-700">{provider}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16 fade-in-section">
                            <Card className="hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">About Afterpay</h3>
                                    <p className="text-gray-600 mb-4">
                                        Afterpay allows you to receive your dental treatment now and pay for it in 4 equal installments,
                                        due every 2 weeks. There are no interest charges when you pay on time.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">Available for treatments up to $2,000</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">First payment due at time of treatment</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">Remaining 3 payments deducted automatically</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">Late fees apply for missed payments</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">About Humm</h3>
                                    <p className="text-gray-600 mb-4">
                                        Humm offers flexible payment plans that let you spread the cost of your dental treatment
                                        over a longer period, making expensive procedures more manageable.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">Interest-free options for shorter terms</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">Competitive interest rates for extended plans</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">No early repayment penalties</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">Minimum monthly repayments apply</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="fade-in-section">
                            <Card className="border-blue-200 bg-blue-50">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-3">
                                        <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
                                            <p className="text-blue-800 text-sm leading-relaxed mb-3">
                                                Payment plans are subject to approval and terms and conditions apply.
                                                Please ask our friendly team about which payment option would work best for your situation.
                                            </p>
                                            <p className="text-blue-800 text-sm leading-relaxed">
                                                We provide detailed treatment estimates before any work begins, so you'll always
                                                know the cost upfront with no surprises.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-12 text-center fade-in-section">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Questions About Payment Options?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Our team is here to help you understand your payment options and find the best solution for your needs
                            </p>
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                                Contact Us Today
                            </Button>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            <Footer />
        </div>
    );
}
