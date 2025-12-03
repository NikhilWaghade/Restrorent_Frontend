import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* Logo and Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.h2 
            className="text-xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05, color: '#EF4444' }}
            transition={{ duration: 0.3 }}
          >
            Swaad Nation
          </motion.h2>
          <p className="mb-4">Delivering delicious meals with care and quality, crafted to satisfy every craving.</p>
          <motion.div 
            className="flex items-center gap-2 mb-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>Ward No. 12, Main Market Road, Balaghat, Madhya Pradesh 481001, India</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 mb-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Mail className="w-5 h-5 text-yellow-500" />
            <span>info@exmple.com</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Phone className="w-5 h-5 text-yellow-500" />
            <span>Emergency: +88 0123 654 99</span>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {[
              { to: '/about', label: 'About Us' },
              { to: '/gallery', label: 'Our Gallery' },
              { to: '#', label: "FAQ'S" },
              { to: '/contact', label: 'Contact Us' },
              { to: '/admin/panel', label: 'Admin' }
            ].map((link, idx) => (
              <motion.li 
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <Link to={link.to} className="hover:text-yellow-500 transition">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Our Menu */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-white mb-4">Our Menu</h2>
          <ul className="space-y-2">
            {['Burger King', 'Pizza King', 'Fresh Food', 'Vegetable', 'Desserts'].map((item, idx) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.05, duration: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <Link to="#" className="hover:text-yellow-500 transition">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p className="mb-2">Monday – Friday: 8am – 4pm</p>
          <p className="mb-4">Saturday: 8am – 12am</p>
          <motion.input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 rounded mb-3 text-black"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(234, 179, 8, 0.5)" }}
            transition={{ duration: 0.2 }}
          />
          <div className="flex items-start gap-2 mb-3">
            <input type="checkbox" className="mt-1" />
            <span>I agree to the <a href="#" className="text-yellow-500 underline">Privacy Policy</a>.</span>
          </div>
          <motion.button 
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Subscribe
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div 
        className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          © All Copyright 2024 by FreshEat
        </motion.p>
        <motion.div 
          className="flex gap-4 mt-2 md:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div whileHover={{ y: -2 }}>
            <Link to="#" className="hover:text-yellow-500 transition">Terms & Condition</Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link to="#" className="hover:text-yellow-500 transition">Privacy Policy</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
