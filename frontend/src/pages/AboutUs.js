import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">About Gizmora</h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          Your one-stop shop for the latest gadgets and accessories.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Our Story */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-gray-700 mt-2">
              Gizmora was founded with a passion for technology. Our mission is to provide high-quality gadgets at competitive prices while ensuring customer satisfaction.
            </p>
          </div>
          
          {/* Why Choose Us */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Why Choose Gizmora?</h2>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>Wide range of latest electronics</li>
              <li>Quality assurance & best pricing</li>
              <li>Fast & reliable shipping</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        {/* Our Products */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Televisions",
              "Smartwatches",
              "Mobile Phones",
              "Processors",
              "Printers",
              "AirPods & Earphones",
              "Cameras",
              "Speakers",
              "Mice & Accessories"
            ].map((product, index) => (
              <div key={index} className="bg-white shadow-lg p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900">{product}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

