import React from 'react';

const ServiceProcess = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                        Our Process
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
                        Your Journey to Better Oral Health
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            imageSrc: "/dental-consultation.png",
                            title: "Initial Consultation",
                            description: "Comprehensive examination and discussion of your dental health goals"
                        },
                        {
                            imageSrc: "/dental-care.png",
                            title: "Treatment Planning",
                            description: "Customised treatment plan tailored to your specific needs and budget"
                        },
                        {
                            imageSrc: "/dental-clinic.png",
                            title: "Professional Treatment",
                            description: "Gentle, expert care using the latest techniques and technology"
                        },
                        {
                            imageSrc: "/dental-home.png",
                            title: "Ongoing Care",
                            description: "Regular maintenance and preventive care to keep your smile healthy"
                        }
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 shadow-md border border-white/50">
                                <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-800 mb-3">
                                {item.title}
                            </h4>
                            <p className="text-neutral-800 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;