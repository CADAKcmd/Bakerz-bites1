import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12">
        
        {/* Description & Socials */}
        <div>
          <p className="text-gray-300 mb-4">
            Cakecious is a WordPress theme for <br />
            Bakery and related businesses.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaGooglePlusG />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-2 pb-1 border-b-2 border-yellow-400 inline-block">Quick links</h3>
          <ul className="text-gray-300 space-y-2 mt-4">
            <li><a href="#" className="hover:text-white">Your Account</a></li>
            <li><a href="#" className="hover:text-white">View Order</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Work Times */}
        <div>
          <h3 className="text-white font-semibold mb-2 pb-1 border-b-2 border-yellow-400 inline-block">Work Times</h3>
          <ul className="text-gray-300 space-y-2 mt-4">
            <li>Mon. - Thu.: 8 am - 8 pm</li>
            <li>Fri.: 8 am - 8 pm</li>
            <li>Sat.: 9am - 4pm</li>
            <li>Sun. : Closed</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-2 pb-1 border-b-2 border-yellow-400 inline-block">Contact Info</h3>
          <ul className="text-gray-300 space-y-2 mt-4">
            <li className="text-lg font-semibold text-white">(1800) 574 9687</li>
            <li>Cakecious Store</li>
            <li>256, Baker Street, New York, 5245</li>
            <li>cakeciousdemo@email.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <span>Cakecious Demo 3 © 2024 All Rights Reserved.</span>
        <span>
          Developed by <a href="https://bolvo.com" className="text-yellow-400 hover:underline">bolvo.com</a>
        </span>
      </div>
    </footer>
  );
}
