import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-gray-600 text-center mb-8">
        Last Updated: 2nd january 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="text-gray-700">
          Welcome to Gizmora! Your privacy and security are important to us. 
          This Privacy Policy explains how we collect, use, and protect your 
          personal information when you use our website, mobile applications, 
          and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
        <p className="text-gray-700 mb-3">
          We collect various types of information to provide and improve our services:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Personal Information:</strong> Name, email, phone number, address, and payment details.</li>
          <li><strong>Account Information:</strong> Username, password, and order history.</li>
          <li><strong>Device Information:</strong> IP address, browser type, and operating system.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, and interactions on our website.</li>
          <li><strong>Cookies & Tracking Technologies:</strong> We use cookies to enhance user experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
        <p className="text-gray-700">
          Your data is used to:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Process and fulfill your orders.</li>
          <li>Provide customer support.</li>
          <li>Improve website performance and user experience.</li>
          <li>Send promotional emails and offers (you can opt out anytime).</li>
          <li>Ensure security and prevent fraud.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Sharing Your Information</h2>
        <p className="text-gray-700">
          We do not sell your personal data. However, we may share your 
          information with:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Trusted third-party service providers (e.g., payment processors, delivery partners).</li>
          <li>Law enforcement or regulatory authorities if required by law.</li>
          <li>Business partners for personalized marketing (with your consent).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Security of Your Data</h2>
        <p className="text-gray-700">
          We implement strict security measures to protect your data, including 
          encryption, firewalls, and secure payment gateways. However, no online 
          system is 100% secure, and we encourage you to use strong passwords 
          and keep your credentials confidential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Your Rights & Choices</h2>
        <p className="text-gray-700">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt out of marketing emails by clicking "Unsubscribe."</li>
          <li>Disable cookies via your browser settings.</li>
          <li>Request a copy of the data we have on you.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Cookies & Tracking Technologies</h2>
        <p className="text-gray-700">
          We use cookies to improve functionality, analyze traffic, and provide 
          personalized ads. You can manage your cookie preferences through your 
          browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy periodically. We encourage you to 
          review this page regularly for any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700 font-semibold">Email: privacy@gizmora.com</p>
        <p className="text-gray-700 font-semibold">Phone: 9994747301</p>
      </section>

      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Gizmora. All Rights Reserved.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
