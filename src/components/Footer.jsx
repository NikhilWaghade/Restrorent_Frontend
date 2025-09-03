import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Swaad Nation</h2>
          <p className="mb-4">Delivering delicious meals with care and quality, crafted to satisfy every craving.</p>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>Ward No. 12, Main Market Road, Balaghat, Madhya Pradesh 481001, India</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-yellow-500" />
            <span>info@exmple.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-yellow-500" />
            <span>Emergency: +88 0123 654 99</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-500">Our Gallery</Link></li>
            <li><Link to="#" className="hover:text-yellow-500">FAQ’S</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
            <li><Link to="/admin/panel" className="hover:text-yellow-500">Admin</Link></li>
          </ul>
        </div>

        {/* Our Menu */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Our Menu</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Burger King</a></li>
            <li><a href="#" className="hover:text-yellow-500">Pizza King</a></li>
            <li><a href="#" className="hover:text-yellow-500">Fresh Food</a></li>
            <li><a href="#" className="hover:text-yellow-500">Vegetable</a></li>
            <li><a href="#" className="hover:text-yellow-500">Desserts</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p className="mb-2">Monday – Friday: 8am – 4pm</p>
          <p className="mb-4">Saturday: 8am – 12am</p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 rounded mb-3 text-black"
          />
          <div className="flex items-start gap-2 mb-3">
            <input type="checkbox" className="mt-1" />
            <span>I agree to the <a href="#" className="text-yellow-500 underline">Privacy Policy</a>.</span>
          </div>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm">
        <p>© All Copyright 2024 by FreshEat</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-500">Terms & Condition</a>
          <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
