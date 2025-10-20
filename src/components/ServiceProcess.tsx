const ServiceProcess = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                        Our Process
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                        Your Journey to Better Oral Health
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            step: "1",
                            title: "Initial Consultation",
                            description: "Comprehensive examination and discussion of your dental health goals"
                        },
                        {
                            step: "2",
                            title: "Treatment Planning",
                            description: "Customised treatment plan tailored to your specific needs and budget"
                        },
                        {
                            step: "3",
                            title: "Professional Treatment",
                            description: "Gentle, expert care using the latest techniques and technology"
                        },
                        {
                            step: "4",
                            title: "Ongoing Care",
                            description: "Regular maintenance and preventive care to keep your smile healthy"
                        }
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                {item.step}
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