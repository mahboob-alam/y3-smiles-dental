import React from 'react';
import { TriangleAlert } from "lucide-react";

const Disclaimer = () => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                            <TriangleAlert className="w-5 h-5 mr-2" />
                            Disclaimer
                        </h3>
                        <p className="text-yellow-700 text-sm leading-relaxed">
                            Please note that any outcome shown in images is only relevant for that patient and does not necessarily reflect the results other patients may experience. Results, risks, complications, and recovery times vary by person and procedure. Treatment suitability can only be determined after an in-person consultation with a dentist, where your individual needs and circumstances can be assessed. Nothing on this website constitutes medical or financial advice. Please talk to your dental practitioner before acting on any information found on this website.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disclaimer;