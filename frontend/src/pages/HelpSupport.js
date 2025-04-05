import React from "react";
import { Link } from "react-router-dom";

const HelpSupport = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Help & Support</h1>
      <p className="text-gray-600 text-center mb-8">How can we assist you today?</p>

      {/* Common Help Topics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🔍 Common Help Topics</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><Link to="/shipping-returns" className="text-blue-500 hover:underline">Shipping & Delivery</Link></li>
          <li><Link to="/faq" className="text-blue-500 hover:underline">Frequently Asked Questions (FAQs)</Link></li>
          <li><Link to="/orders" className="text-blue-500 hover:underline">Track Your Order</Link></li>
          <li><Link to="/returns" className="text-blue-500 hover:underline">Returns & Refunds</Link></li>
          <li><Link to="/payments" className="text-blue-500 hover:underline">Payment & Billing</Link></li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">❓ Frequently Asked Questions (FAQs)</h2>
        <details className="mb-4 border-b pb-2">
          <summary className="cursor-pointer text-lg font-medium">📦 Where is my order?</summary>
          <p className="text-gray-700 mt-2">You can track your order status by visiting the <Link to="/orders" className="text-blue-500 hover:underline">Order Tracking</Link> page.</p>
        </details>

        <details className="mb-4 border-b pb-2">
          <summary className="cursor-pointer text-lg font-medium">🔄 How do I return an item?</summary>
          <p className="text-gray-700 mt-2">Go to <Link to="/returns" className="text-blue-500 hover:underline">Returns & Refunds</Link>, select your order, and follow the return process.</p>
        </details>

        <details className="mb-4 border-b pb-2">
          <summary className="cursor-pointer text-lg font-medium">💰 What payment methods do you accept?</summary>
          <p className="text-gray-700 mt-2">We accept **credit/debit cards, UPI, net banking, and COD (Cash on Delivery)** for eligible locations.</p>
        </details>
      </section>

      {/* Contact Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">📞 Contact Our Support Team</h2>
        <p className="text-gray-700">Need more help? Reach out to us!</p>
        <ul className="list-disc pl-6 text-gray-700 mt-3">
          <li><strong>📧 Email:</strong> support@gizmora.com</li>
          <li><strong>📞 Phone:</strong> +91-98765-43210 (Available 9 AM - 6 PM IST)</li>
          <li><strong>💬 Live Chat:</strong> Available on our website from 10 AM - 8 PM IST.</li>
        </ul>
      </section>

      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Gizmora. All Rights Reserved.
      </p>
    </div>
  );
};

export default HelpSupport;
