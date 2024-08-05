import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 border-t-4 border-t-purple-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          {/* Logo and Copyright Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12 flex flex-col justify-between">
            <div className="flex items-center mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-300">
              &copy; 2024 Anshul. All Rights Reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="text-lg font-semibold mb-4">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-200 transition duration-300" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
