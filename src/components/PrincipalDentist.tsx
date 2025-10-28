import React from "react";
import { Link } from "gatsby";
import { Phone, GraduationCap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import { principalDentist } from "@/data/principalDentist";

type Props = {
  variant?: "full" | "summary";
  className?: string;
};

const PrincipalDentist: React.FC<Props> = ({ variant = "summary", className }) => {
  const p = principalDentist;

  if (variant === "full") {
    return (
      <section className={"py-24 bg-background " + (className || "")}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
                Principal Dentist
              </h2>
              <p className="text-neutral-800 max-w-3xl mx-auto">
                Meet our lead clinician and practice principal
              </p>
            </div>

            <Card className="border border-primary/10 shadow-soft">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-64 flex-shrink-0">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-neutral-800 mb-1">
                      {p.name}
                    </h3>
                    <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-6">
                      <span className="text-primary font-semibold text-sm">{p.role}</span>
                    </div>

                    <p className="text-neutral-800 leading-relaxed mb-6">{p.bio}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2 flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                          Qualifications
                        </h4>
                        <ul className="space-y-1">
                          {p.qualifications.map((q, i) => (
                            <li key={i} className="text-sm text-neutral-800 flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-primary" />
                          Clinical Interests
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {p.specialties.map((s, i) => (
                            <span key={i} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button variant="booking" asChild className="group">
                        <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                          <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          {p.bookingCta || "Book Appointment"}
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/about/our-team">
                          Meet the team
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  // summary variant
  return (
    <section className={"py-16 bg-neutral-50 " + (className || "")}> 
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border border-primary/10 shadow-soft">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-1">
                    {p.role}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-neutral-800 mb-4">{p.shortBio}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button variant="booking" size="lg" asChild className="group">
                      <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                        <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        {p.bookingCta || "Book Appointment"}
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/about/our-team">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrincipalDentist;
