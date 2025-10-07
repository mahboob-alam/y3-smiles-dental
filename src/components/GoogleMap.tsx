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

const GoogleMap = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "PLACEHOLDER",
      action: "Call Now",
      link: "tel:PLACEHOLDER"
    },
    {
      icon: Mail,
      title: "Email",
      details: "PLACEHOLDER",
      action: "Send Email",
      link: "mailto:PLACEHOLDER"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "1/34 King William St, Broadmeadows, VIC 3047",
      action: "Get Directions",
      link: "https://maps.google.com/?q=1/34+King+William+St,+Broadmeadows,+VIC+3047"
    }
  ];

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available on-site",
      details: "Easy access from major roads"
    },
    {
      icon: Train,
      title: "By Train",
      description: "Broadmeadows Station nearby",
      details: "Short walk from station"
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Multiple bus routes available",
      details: "Convenient public transport"
    }
  ];

  const openingHours = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "By appointment only" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section className="py-24 bg-background fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
              Visit Our Clinic
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
              Conveniently Located in Broadmeadows
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.123456789!2d144.9123456!3d-37.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1%2F34+King+William+St%2C+Broadmeadows+VIC+3047!5e0!3m2!1sen!2sau!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Y3 Smiles Dental Location"
                      className="rounded-lg"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-soft hover:shadow-medium transition-gentle">
                      <div className="flex items-center text-sm font-medium text-neutral-800">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        Y3 Smiles Dental
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
                    <Card key={index} className="border-0 shadow-soft text-center hover-lift transition-gentle" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-4">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 hover:gradient-primary hover:text-primary-foreground transition-gentle">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h5 className="font-semibold text-neutral-800 mb-1 text-sm">
                          {transport.title}
                        </h5>
                        <p className="text-xs text-neutral-600 mb-1">
                          {transport.description}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {transport.details}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 slide-in-right">
              {/* Contact Details */}
              {/* <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-neutral-800 flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <h5 className="font-semibold text-neutral-800 mb-1">
                            {info.title}
                          </h5>
                          <p className="text-neutral-600 mb-2">
                            {info.details}
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <a href={info.link} target="_blank" rel="noopener noreferrer">
                              {info.action}
                            </a>
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card> */}

              {/* Opening Hours */}
              <Card className="border-0 shadow-soft hover-lift transition-gentle">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-neutral-800 flex items-center">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {openingHours.map((schedule, index) => (
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

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="cta" className="w-full" asChild>
                  <a href="tel:PLACEHOLDER">
                    <Phone className="w-4 h-4 mr-2" />
                    CALL NOW
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://maps.google.com/?q=1/34+King+William+St,+Broadmeadows,+VIC+3047"
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