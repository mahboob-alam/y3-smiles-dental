import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote, Users, Heart, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Broadmeadows",
      service: "Children's Dentistry",
      rating: 5,
      text: "Y3 Smiles Dental has been amazing with my kids. The staff is so gentle and patient, and my children actually look forward to their dental visits now. The CDBS program has been a lifesaver for our family.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      location: "Glenroy", 
      service: "Emergency Dentistry",
      rating: 5,
      text: "I had a dental emergency on a weekend and Y3 Smiles was there for me. The emergency service was prompt, professional, and they completely eliminated my pain. I can't thank them enough.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      location: "Craigieburn",
      service: "Comprehensive Examination",
      rating: 5,
      text: "The thorough examination and cleaning at Y3 Smiles caught several issues early. Their preventive approach has saved me from major dental problems. The team is incredibly professional and caring.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Thompson",
      location: "Campbellfield",
      service: "Root Canal Therapy",
      rating: 5,
      text: "I was terrified about getting a root canal, but the team at Y3 Smiles made it completely painless. The sedation options and gentle approach made all the difference. Highly recommended!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Lisa Park",
      location: "Greenvale",
      service: "Periodontal Care",
      rating: 5,
      text: "The periodontal treatment I received has completely transformed my oral health. The staff explained everything clearly and the results have been outstanding. My gums are healthier than ever.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Robert Wilson",
      location: "Meadow Heights",
      service: "Dentures",
      rating: 5,
      text: "My new dentures from Y3 Smiles fit perfectly and look so natural. The team took great care to ensure comfort and function. I can eat all my favorite foods again with confidence.",
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: Star
    },
    {
      number: "98%",
      label: "Satisfaction Rate", 
      icon: Heart
    },
    {
      number: "1000+",
      label: "Happy Families",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
              Patient Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
              What Our Patients Say About Us
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Real stories from real patients who have experienced the exceptional care 
              and outstanding results at Y3 Smiles Dental.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-soft hover-lift transition-gentle" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 hover:gradient-primary hover:text-primary-foreground transition-gentle">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-neutral-200 hover:border-primary hover:gradient-primary hover:text-primary-foreground transition-gentle disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 shadow-soft"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="w-5 h-5 hover:text-primary-foreground" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-neutral-200 hover:border-primary hover:gradient-primary hover:text-primary-foreground transition-gentle disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 shadow-soft"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="w-5 h-5 hover:text-primary-foreground" />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                  >
                    <Card className="group border-0 shadow-soft hover:shadow-hover transition-gentle h-full hover-lift">
                      <CardHeader className="pb-4">
                        {/* Quote Icon */}
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:gradient-primary group-hover:text-primary-foreground transition-gentle">
                          <Quote className="w-5 h-5" />
                        </div>
                        
                        {/* Rating Stars */}
                       {/*  <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, starIndex) => (
                            <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-gentle" />
                          ))}
                        </div> */}

                        {/* Patient Info */}
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img 
                              src={testimonial.image}
                              alt={`${testimonial.name} - Happy patient`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-gentle"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
                            <p className="text-sm text-neutral-500">{testimonial.location}</p>
                            <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-neutral-600 italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className="w-2 h-2 rounded-full bg-neutral-300 hover:gradient-primary transition-gentle transform hover:scale-150"
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-2xl p-8 hover-scale transition-gentle">
              <h4 className="text-2xl font-bold text-neutral-800 mb-4">
                Join Our Family of Happy Patients
              </h4>
              <p className="text-neutral-600 mb-6">
                Experience the same exceptional care that our patients rave about. 
                Book your appointment today and discover the Y3 Smiles difference.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500">
                <CheckCircle className="w-4 h-4 text-primary animate-pulse" />
                <span>Over 1000 five-star reviews from satisfied patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;