import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import FoodItems from './FoodItems';
import SpecialOffer from './SpecialOffer';
import MenuSection from './MenuSection';
import Testimonials from './Testimonials';
import BlogSection from './BlogSection';
import Footer from './Footer';

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="logo">FRESHEAT</div>
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">AboutUs</a>
        <a href="#shop">Shop</a>
        <a href="#pages">Pages</a>
        <a href="#blog">Blog</a>
        <a href="#contact">ContactUs</a>
      </nav>
    </header>

    <WelcomeBanner />
      <FoodItems />
      <SpecialOffer />
      <MenuSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Header;