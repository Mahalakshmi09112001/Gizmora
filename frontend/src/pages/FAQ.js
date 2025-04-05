import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    category: "Order & Shipping",
    questions: [
      { question: "How can I track my order?", answer: "You can track your order from the 'My Orders' section in your account. You'll also receive an email with a tracking link." },
      { question: "What is the estimated delivery time?", answer: "Delivery times vary based on your location, typically within 3-7 business days." },
      { question: "Do you offer international shipping?", answer: "Currently, we only ship within [your country]. International shipping will be available soon." },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      { question: "What is your return policy?", answer: "We offer a 7-day return policy for unused items in original packaging. Visit our Returns & Refunds page for details." },
      { question: "How do I request a refund?", answer: "Go to 'My Orders,' select the order, and click 'Request Refund.' Refunds are processed within 5-7 business days." },
    ],
  },
  {
    category: "Product & Warranty",
    questions: [
      { question: "Do your products come with a warranty?", answer: "Yes, all products come with a manufacturer warranty. Warranty duration varies per product." },
      { question: "What should I do if I receive a defective item?", answer: "Contact our support team within 24 hours for a replacement or refund." },
    ],
  },
  {
    category: "Payments",
    questions: [
      { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, UPI, and Cash on Delivery (COD) for eligible locations." },
      { question: "Is it safe to make payments on Gizmora?", answer: "Yes, we use encrypted payment gateways to ensure that all transactions are safe and secure." },
    ],
  },
  {
    category: "Customer Support",
    questions: [
      { question: "How can I contact customer support?", answer: "Email us at support@gizmora.com or call our helpline at 9994747301." },
    ],
  },
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Frequently Asked Questions</h1>

      {faqData.map((section, catIndex) => (
        <div key={catIndex} className="mb-6 bg-black text-white p-4 rounded-lg shadow-md">
          <button
            onClick={() => toggleCategory(catIndex)}
            className="w-full text-left font-semibold text-xl flex justify-between items-center py-3 px-4 bg-gray-900 text-yellow-400 rounded-md hover:bg-gray-800 transition"
          >
            {section.category}
            {openCategory === catIndex ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openCategory === catIndex && (
            <div className="mt-3 p-3 bg-gray-800 rounded-lg">
              {section.questions.map((faq, qIndex) => (
                <div key={qIndex} className="mb-3">
                  <button
                    onClick={() => toggleQuestion(qIndex)}
                    className="w-full text-left font-medium text-lg flex justify-between items-center p-3 border-b border-gray-700 text-yellow-300 hover:text-yellow-500 transition"
                  >
                    {faq.question}
                    {openQuestion === qIndex ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openQuestion === qIndex && <p className="mt-2 text-gray-300 p-3">{faq.answer}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
