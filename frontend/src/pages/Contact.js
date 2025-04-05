import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          We'd love to hear from you! Reach out to us for any inquiries or support.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input type="text" className="w-full border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" className="w-full border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400" placeholder="Your Email" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea className="w-full border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
