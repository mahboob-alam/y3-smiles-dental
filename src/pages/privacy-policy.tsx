import React from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Head = () => (
  <SEO
    title="Privacy Policy | Y3 Smiles Dental"
    description="Y3 Smiles Dental Privacy Policy. Learn how we collect, use, and protect your personal information in accordance with Australian privacy laws."
  />
);

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Privacy Policy</h1>
            <p className="text-neutral-800 max-w-2xl mx-auto">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-sm text-neutral-600 mb-8">
                Last updated: {new Date().toLocaleDateString('en-AU')}
              </p>

              <h2>Introduction</h2>
              <p>
                Y3 Smiles Dental ("we", "us", or "our") is committed to protecting your privacy and complying with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
              </p>

              <h2>What Personal Information Do We Collect?</h2>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>Name, address, phone number, and email address</li>
                <li>Date of birth and gender</li>
                <li>Medical history, including dental records and treatment information</li>
                <li>Health insurance details (including Medicare and private health fund information)</li>
                <li>Payment information for billing purposes</li>
                <li>Emergency contact details</li>
                <li>Photographs of your teeth/mouth (with your consent)</li>
              </ul>

              <h2>How Do We Collect Your Personal Information?</h2>
              <p>We collect personal information in various ways, including:</p>
              <ul>
                <li>Directly from you when you provide information to us</li>
                <li>From your interactions with our website and online forms</li>
                <li>From third parties such as your health fund or referring dentist</li>
                <li>From publicly available sources</li>
              </ul>

              <h2>How Do We Use Your Personal Information?</h2>
              <p>We use your personal information to:</p>
              <ul>
                <li>Provide dental treatment and healthcare services</li>
                <li>Maintain your dental records</li>
                <li>Process payments and health fund claims</li>
                <li>Communicate with you about your treatment</li>
                <li>Send appointment reminders and recall notices</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and patient care</li>
              </ul>

              <h2>Disclosure of Personal Information</h2>
              <p>We may disclose your personal information to:</p>
              <ul>
                <li>Health professionals involved in your care</li>
                <li>Health funds for claiming purposes</li>
                <li>Laboratories and other service providers</li>
                <li>Legal and regulatory authorities as required by law</li>
                <li>Our professional advisors and insurers</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorized access, modification, or disclosure. This includes:
              </p>
              <ul>
                <li>Secure storage of physical and electronic records</li>
                <li>Access controls and password protection</li>
                <li>Regular security updates and backups</li>
                <li>Staff training on privacy and security</li>
              </ul>

              <h2>Cookies and Website Analytics</h2>
              <p>
                Our website uses cookies and similar technologies to enhance your browsing experience and analyze website traffic. We use this information to improve our website and services. You can control cookie settings through your browser preferences.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Withdraw consent for certain uses</li>
                <li>Complain about privacy breaches</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p><strong>Y3 Smiles Dental</strong></p>
                <p>1/34 King William Street, Broadmeadows VIC 3047</p>
                <p>Phone: 03 9022 4442</p>
                <p>Email: smile@y3smilesdental.com.au</p>
              </div>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on our website and will take effect immediately upon posting.
              </p>

              <h2>Complaints</h2>
              <p>
                If you believe we have breached your privacy rights, you can lodge a complaint with us directly. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;