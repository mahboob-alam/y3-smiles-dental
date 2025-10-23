import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
  Car,
  Train,
  Bus
} from "lucide-react";

interface OpeningHours {
  day: string;
  hours: string;
}

interface LocationData {
  name: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  directionsUrl: string;
}

interface GoogleMapProps {
  locationData?: LocationData;
  locationName?: string;
  openingHours?: OpeningHours[];
  className?: string;
}

const GoogleMap = ({
  locationData,
  locationName,
  openingHours,
  className = ""
}: GoogleMapProps) => {
  // Default location data (Broadmeadows clinic)
  const defaultLocation = {
    name: "Broadmeadows",
    address: "1/34 King William St, Broadmeadows VIC 3047",
    phone: "03 9022 4442",
    email: "smile@y3smilesdental.com.au",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
    directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
  };

  const defaultOpeningHours = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const location = locationData || defaultLocation;
  const hours = openingHours || defaultOpeningHours;

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "",
      details: "Easy access from major roads",
      mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}&travelmode=driving`
    },
    {
      icon: Train,
      title: "By Train",
      description: "Broadmeadows Station nearby",
      details: "Short walk from station",
      mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}&travelmode=transit`
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Multiple bus routes available",
      details: "Convenient public transport",
      mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}&travelmode=walking`
    }
  ];

  return (
    <section className={`py-24 bg-background fade-in-section ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
              Visit Our Clinic
            </h2>
            {/* <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
              {locationName
                ? `Y3 Smiles Dental serves residents of ${locationName}`
                : "Conveniently Located in Broadmeadows"}
            </h3> */}
            <p className="text-xl text-neutral-800 leading-relaxed max-w-3xl mx-auto">
              Our modern, comfortable clinic is easily accessible and thoughtfully designed to create a calming and relaxing experience for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="space-y-6 slide-in-left">
              <Card className="border-0 shadow-soft overflow-hidden hover-lift transition-gentle">
                <CardContent className="p-0">
                  <div className="aspect-video bg-neutral-100 relative">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.name} Location`}
                      className="rounded-lg"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-soft hover:shadow-medium transition-gentle">
                      <div className="flex items-center text-sm font-medium text-neutral-800">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        {location.name}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transport Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {transportOptions.map((transport, index) => {
                  const IconComponent = transport.icon;
                  return (
                    <a
                      key={index}
                      href={transport.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="border-0 shadow-soft text-center hover-lift transition-gentle cursor-pointer hover:shadow-lg h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 hover:gradient-primary hover:text-primary-foreground transition-gentle">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h5 className="font-semibold text-neutral-800 mb-2 text-sm">
                            {transport.title}
                          </h5>
                          <p className="text-xs text-neutral-800 mb-1">
                            {transport.description}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {transport.details}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 slide-in-right">
              {/* Opening Hours - Clickable */}
              <a
                href="https://www.google.com/maps/place/Y3+Smiles+Dental/@-37.6790611,144.8419854,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="border-0 shadow-soft hover-lift transition-gentle cursor-pointer hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-neutral-800 flex items-center">
                      <Clock className="w-6 h-6 text-primary mr-3" />
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0 hover:bg-primary/5 px-2 rounded transition-gentle">
                          <span className="font-medium text-neutral-800">
                            {schedule.day}
                          </span>
                          <span className={`text-sm ${schedule.hours === "Closed"
                            ? "text-red-600"
                            : schedule.hours.includes("appointment")
                              ? "text-amber-600"
                              : "text-green-600"
                            } font-medium`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-green-50 rounded-lg hover-scale transition-gentle">
                      <div className="flex items-center text-green-700">
                        <Clock className="w-5 h-5 mr-2" />
                        <span className="font-medium text-sm">
                          Same day emergency appointments available
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="booking" className="w-full" asChild>
                  <a href={`tel:${location.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    CALL NOW
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    GET DIRECTIONS
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;