import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold text-white">Gizmora</h2>
            <p className="text-sm mt-2">
              Your one-stop shop for the latest gadgets and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>

              <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>

              <li><Link to="/faq" className="hover:text-yellow-400">FAQs</Link></li>
              <li>
                <Link to="/privacy-policy" className="hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-md font-semibold text-white">Customer Support</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link to="/shipping-returns" className="hover:text-yellow-400">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/help-support" className="hover:text-yellow-400">
                  Help & Support
                </Link>
              </li>

              <li>
                <Link to="/track-order" className="hover:text-yellow-400">
                  Track Order
                </Link>
              </li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-md font-semibold text-white">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gizmora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
