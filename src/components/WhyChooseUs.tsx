import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  Heart,
  Shield,
  Users,
  Award,
  Stethoscope,
  CheckCircle,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "40+ Years of Experience",
      description: "Four decades of trusted dental care serving the Melbourne community with expertise and compassion.",
      icon: Award,
      stats: "40+ Years"
    },
    {
      title: "In-House General Anaesthesia",
      description: "Unique facility offering in-house general anaesthesia for complex treatments and anxious patients.",
      icon: Shield,
      stats: "Specialist Care"
    },
    {
      title: "Comprehensive Family Care",
      description: "Complete dental services for patients of all ages, from children to seniors, all under one roof.",
      icon: Users,
      stats: "All Ages"
    },
    {
      title: "Latest Technology",
      description: "State-of-the-art equipment and modern techniques for comfortable, effective treatments.",
      icon: Stethoscope,
      stats: "Advanced Tech"
    },
    {
      title: "Gentle, Caring Approach",
      description: "Patient comfort is our priority. We create a calming, sanctuary-like environment for all treatments.",
      icon: Heart,
      stats: "Comfort First"
    },
    {
      title: "Flexible Scheduling",
      description: "Convenient appointment times including Saturday availability to fit your busy lifestyle.",
      icon: Clock,
      stats: "6 Days/Week"
    }
  ];

  const achievements = [
    {
      number: "40+",
      label: "Years of Excellence",
      icon: Award
    },
    {
      number: "10,000+",
      label: "Happy Patients",
      icon: Users
    },
    {
      number: "13",
      label: "Specialised Services",
      icon: Stethoscope
    },
    {
      number: "5★",
      label: "Patient Reviews",
      icon: Star
    }
  ];

  return (
    <section className="py-24 bg-background fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
              Experience the Y3 Smiles Difference
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Formerly located within St. Vincent's Hospital, we now offer a calming,
              sanctuary-like clinic experience with the same trusted expertise you've come to expect.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="group border-0 shadow-soft hover:shadow-hover transition-gentle hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:gradient-accent group-hover:text-primary-foreground transition-gentle">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="mb-2">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:gradient-accent group-hover:text-primary-foreground transition-gentle">
                        {reason.stats}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-neutral-800 mb-3">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <p className="text-neutral-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Achievements Stats */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 hover-scale transition-gentle">
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Trusted by the Community
              </h4>
              <p className="text-lg text-neutral-600">
                Our commitment to excellence is reflected in our achievements and patient satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 hover:gradient-primary hover:text-primary-foreground transition-gentle">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-neutral-600 font-medium">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;