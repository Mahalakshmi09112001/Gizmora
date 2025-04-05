import React from "react";

const ShippingReturns = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Shipping & Returns</h1>
      <p className="text-gray-600 text-center mb-8">Last Updated: March 2025</p>

      {/* Shipping Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🚚 Shipping Policy</h2>
        <p className="text-gray-700">
          At Gizmora, we aim to deliver your orders quickly and securely. Below are our shipping details:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-3">
          <li><strong>📅 Processing Time:</strong> Orders are processed within 24-48 hours (excluding weekends & holidays).</li>
          <li><strong>🚀 Estimated Delivery:</strong> Standard shipping takes 3-7 business days, depending on your location.</li>
          <li><strong>⚡ Express Shipping:</strong> Available in select locations. Delivery within 1-3 business days.</li>
          <li><strong>💰 Shipping Charges:</strong>  
            <ul className="pl-6">
              <li>Free shipping on orders above ₹4,000.</li>
              <li>Orders below ₹4,000: Standard shipping fee applies.</li>
            </ul>
          </li>
          <li><strong>🌍 International Shipping:</strong> Currently, we ship only within India. Global shipping coming soon!</li>
        </ul>
      </section>

      {/* Returns & Refunds Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🔄 Returns & Refunds Policy</h2>
        <p className="text-gray-700">
          We want you to love your purchase! If you're not satisfied, we offer a 7-day return policy for most products.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-3">
          <li><strong>📅 Return Window:</strong> Returns are accepted within 7 days of delivery.</li>
          <li><strong>📦 Item Condition:</strong> Items must be unused, in original packaging, and include all accessories.</li>
          <li><strong>🚫 Non-Returnable Items:</strong> Personal care items, software, and perishable goods cannot be returned.</li>
          <li><strong>📝 How to Request a Return:</strong>  
            <ul className="pl-6">
              <li>Go to ‘My Orders’ & select ‘Request Return.’</li>
              <li>Follow the return process, and our team will assist you.</li>
            </ul>
          </li>
          <li><strong>💵 Refund Processing:</strong> Refunds are processed within 5-7 business days after item inspection.</li>
        </ul>
      </section>

      {/* Exchange Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🔁 Exchange Policy</h2>
        <p className="text-gray-700">
          If you receive a defective or incorrect item, you can request an exchange instead of a refund. A replacement will be shipped as soon as possible.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">📞 Need Help?</h2>
        <p className="text-gray-700">
          For any queries or assistance, reach out to our customer support team:
        </p>
        <p className="text-gray-700 font-semibold">📧 Email: support@gizmora.com</p>
        <p className="text-gray-700 font-semibold">📞 Phone: +91-98765-43210</p>
      </section>

      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Gizmora. All Rights Reserved.
      </p>
    </div>
  );
};

export default ShippingReturns;
