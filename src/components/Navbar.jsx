import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-600">
            Swaad Nation
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-600 transition">
              About
            </Link>
            <Link to="/menu" className="hover:text-red-600 transition">
              Menu
            </Link>
            <Link to="/gallery" className="hover:text-red-600 transition">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-red-600 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-max-height duration-300 overflow-hidden ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <Link
          to="/"
          className="block px-4 py-3 hover:bg-gray-100 transition"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-3 hover:bg-gray-100 transition"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          to="/menu"
          className="block px-4 py-3 hover:bg-gray-100 transition"
          onClick={() => setOpen(false)}
        >
          Menu
        </Link>
        <Link
          to="/gallery"
          className="block px-4 py-3 hover:bg-gray-100 transition"
          onClick={() => setOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-3 hover:bg-gray-100 transition"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
