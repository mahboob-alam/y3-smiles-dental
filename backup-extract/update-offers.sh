#!/bin/bash

# Update OfferBanner.tsx
echo "Updating OfferBanner.tsx..."
cat > /Users/mahboobalam/Dev/y3-dental/src/components/OfferBanner-temp.tsx << 'EOF'
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import { specialOffers } from "@/data/specialsData";

const OfferBanner = () => {
    const offers = specialOffers;

    return (
        <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                    Special Offers
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                    Limited Time Promotions
                </h3>
                <p className="text-lg text-neutral-800 max-w-2xl mx-auto">
                    Take advantage of our current promotions designed to make quality dental care more accessible for you and your family.
                </p>
            </div>                {/* Offer Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {offers.map((offer) => {
                        const IconComponent = offer.icon;
                        return (
                            <div
                                key={offer.id}
                                className={\`relative bg-gradient-to-br \${offer.bgGradient} rounded-2xl border \${offer.borderColor} shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full\`}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: \`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")\`,
                                    }} />
                                </div>

                                <div className="relative p-6 md:p-8 flex flex-col flex-grow">
                                    {/* Badge & Limited Time */}
                                    <div className="flex items-center justify-between mb-6 h-10">
                                        <span className={\`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold text-white \${offer.badgeColor}\`}>
                                            <IconComponent className="w-4 h-4 mr-2" />
                                            {offer.badge}
                                        </span>
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <Clock className="w-4 h-4 mr-1" />
                                            Limited Time
                                        </div>
                                    </div>

                                    {/* Price Section */}
                                    <div className="text-center mb-6 h-48">
                                        {/* Savings Badge */}
                                        <div className="inline-block mb-4">
                                            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                                                {offer.savings}
                                            </span>
                                        </div>

                                        {/* Price Display */}
                                        <div className="space-y-2 mb-4">
                                            <div className="h-8">
                                                {offer.originalPrice && (
                                                    <p className="text-xl text-neutral-500 line-through">
                                                        {offer.originalPrice}
                                                    </p>
                                                )}
                                            </div>
                                            <p className={\`font-bold text-primary \${offer.id === 2 ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}\`}>
                                                {offer.price}
                                            </p>
                                        </div>

                                        {/* Visual Icon */}
                                        <div className={\`w-20 h-20 mx-auto rounded-full bg-white/50 flex items-center justify-center \${offer.iconColor}\`}>
                                            <IconComponent className="w-10 h-10" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="h-16 flex items-center justify-center mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 text-center leading-tight">
                                            {offer.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <div className="h-20 flex items-center justify-center mb-6">
                                        <p className="text-neutral-800 text-center leading-relaxed text-sm">
                                            {offer.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {offer.features?.slice(0, 6).map((feat, idx) => (
                                            <div key={idx} className="flex items-start text-neutral-800">
                                                <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-left">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Eligibility */}
                                    <div className="h-8 flex items-center justify-center mb-6">
                                        <p className="text-xs text-neutral-600 italic text-center">
                                            * {offer.eligibility}
                                        </p>
                                    </div>

                                    {/* CTA Buttons */}
                                    {/* <div className="mt-auto space-y-3">
                                        <Button variant="booking" size="lg" className="w-full" asChild>
                                            <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                                BOOK NOW
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full" asChild>
                                            <a href="tel:0390224442">
                                                Call 03 9022 4442
                                            </a>
                                        </Button>
                                    </div> */}

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-neutral-600">
                        Offers valid for new and existing patients. Terms and conditions apply.
                        Contact us for full details and to check your eligibility.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OfferBanner;
EOF

mv /Users/mahboobalam/Dev/y3-dental/src/components/OfferBanner-temp.tsx /Users/mahboobalam/Dev/y3-dental/src/components/OfferBanner.tsx

echo "OfferBanner.tsx updated successfully!"
echo ""
echo "Note: You'll need to manually update specials/index.tsx due to its complexity."
echo "Replace the offers array (lines 44-93) with: const offers = specialOffers;"
echo "And add this import at the top: import { specialOffers } from '@/data/specialsData';"
