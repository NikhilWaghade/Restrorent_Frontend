import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaUserTie } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FoodItemSkeleton from '../components/FoodItemSkeleton';
import MenuItemSkeleton from '../components/MenuItemSkeleton';

const Home = () => {
  const navigate = useNavigate();
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [popularItems, setPopularItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(true);
  const [loadingMenu, setLoadingMenu] = useState(true);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50;
    setHoverPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPos({ x: 0, y: 0 });
  };

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoadingPopular(true);
        setLoadingMenu(true);
        
        const { data } = await axios.get("http://localhost:5000/api/menu");
        
        if (Array.isArray(data) && data.length > 0) {
          // Sort by price (descending) and get top 5 for popular items
          const sortedByPrice = [...data].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          setPopularItems(sortedByPrice.slice(0, 5));
          
          // Get all items for menu section (limit to 8 for display)
          setMenuItems(data.slice(0, 8));
        } else {
          setPopularItems([]);
          setMenuItems([]);
        }
      } catch (err) {
        console.error("Failed to fetch menu items", err);
        setPopularItems([]);
        setMenuItems([]);
      } finally {
        setLoadingPopular(false);
        setLoadingMenu(false);
      }
    };

    fetchMenuData();
  }, []);

  // offer timer 
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 2); // 2-hour limited offer

    const updateTimer = () => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);


  // Static data arrays for sections without API


  const categoryItems = [
    {
      name: "Spicy BBQ Chicken",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png"
    },
    {
      name: "Today's Special",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png"
    },
    {
      name: "Special Chicken Roll",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png"
    }
  ];

  const bestSellingDishes = [
    {
      name: "Chicken Fried Rice",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
      price: "$19.9"
    },
    {
      name: "Chinese Noodles",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
      price: "$19.9"
    },
    {
      name: "Chicken Pizza",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png",
      price: "$19.9"
    },
    {
      name: "Grilled Chicken",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png",
      price: "$19.9"
    },
    {
      name: "Veggie Noodles",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
      price: "$19.9"
    },
    {
      name: "Grilled Chicken",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png",
      price: "$19.9"
    },
    {
      name: "Chinese Noodles",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
      price: "$19.9"
    },
    {
      name: "Chicken Pizza",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png",
      price: "$19.9"
    },
  ];


  const chefs = [
    {
      name: 'Chef Antonio Russo',
      specialty: 'Italian Pasta Specialist',
      image: 'https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_1.jpg',
      description: 'Known for his signature handmade fettuccine and truffle ravioli.',
    },
    {
      name: 'Chef Mei Ling',
      specialty: 'Asian Fusion Expert',
      image: 'https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_2.jpg',
      description: 'Fuses traditional Asian flavors with modern techniques.',
    },
    {
      name: 'Chef Carlos Fernandez',
      specialty: 'Grill Master',
      image: 'https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_3.jpg',
      description: 'Loves crafting gourmet burgers and perfectly seared steaks.',
    },
  ];

  const blogPosts = [
    {
      title: 'Research On Smooth And Salty Reactions',
      img: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    },
    {
      title: 'Quick Cooking & Tantalizing Fast Food Delights',
      img: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_1.jpg',
    },
    {
      title: 'Fresheat Food Brings A Taste Of Culture And Art',
      img: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    },
    {
      title: 'Quick Cooking & Tantalizing Fast Food Delights',
      img: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_1.jpg',
    },
    {
      title: 'Research On Smooth And Salty Reactions',
      img: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    },
    {
      title: 'Fresheat Food Brings A Taste Of Culture And Art',
      img: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    },
  ];

  return (
    <>
    <section className='bg-gray-200'>
    <div className=" text-black">
      {/* Hero Section */}
 <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white px-6 py-20 md:px-20 overflow-hidden"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}>
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.5, 1, 1.5], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
    <motion.div 
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="inline-block mb-4 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className="text-yellow-400 font-semibold">🔥 Limited Time Offer</span>
      </motion.div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        <Typewriter
          words={['Authentic Indian Cuisine', 'Fresh & Delicious', 'Premium Quality', 'Swaad Nation Special']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      
      <motion.p 
        className="mt-4 text-lg text-gray-300 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Experience the rich flavors of India
      </motion.p>

      <motion.p 
        className="text-2xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Welcome Special - Get 50% OFF! 🎉
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.button 
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition px-8 py-3 rounded-full font-semibold shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/menu')}
        >
          View Menu
        </motion.button>
        
        <motion.button 
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 transition px-8 py-3 rounded-full font-semibold"
          whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-3 gap-6 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400">{menuItems.length}+</div>
          <div className="text-sm text-gray-400">Menu Items</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400">100%</div>
          <div className="text-sm text-gray-400">Fresh Food</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400">24/7</div>
          <div className="text-sm text-gray-400">Service</div>
        </div>
      </motion.div>
    </motion.div>

    <motion.div
      className="w-full md:w-1/2 transition-transform duration-200 ease-out mt-10 md:mt-0"
      style={{
        transform: `translate(${hoverPos.x}px, ${hoverPos.y}px)`,
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative"
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png"
          alt="Delicious Food"
          className="w-96 mx-auto select-none pointer-events-none drop-shadow-2xl"
        />
        
        {/* Floating Price Tag */}
        <motion.div
          className="absolute top-10 right-10 bg-yellow-400 text-black px-4 py-3 rounded-full shadow-xl font-bold"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="text-xs">Starting at</div>
          <div className="text-2xl">$9.99</div>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
</section>


      {/* Popular Food Items - Top 5 by Price */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
      <motion.h2 
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Popular Food Items
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Top 5 Premium Dishes - Sorted by Price
      </motion.p>

      {loadingPopular ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          <FoodItemSkeleton count={5} />
        </div>
      ) : popularItems.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="!pb-10"
        >
          {popularItems.map((item, i) => (
            <SwiperSlide key={item.id}>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition h-full flex flex-col items-center hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <motion.div
                  className="relative w-24 h-24 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full border-dotted border-4 border-red-500"
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, type: "spring" }}
                  >
                    #{i + 1}
                  </motion.div>
                </motion.div>
                <h4 className="mt-2 font-semibold text-gray-800">{item.name}</h4>
                <p className="text-red-500 font-bold text-lg">${item.price}</p>
                <motion.button
                  className="mt-3 text-sm text-white bg-red-500 px-4 py-1 rounded-full hover:bg-red-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-600">No items available at the moment.</p>
      )}
    </section>
    
      {/* Category Buttons */}
      <section className="bg-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categoryItems.map((item, i) => (
            <motion.div 
              key={i} 
              className="bg-black text-white py-6 px-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 animate-spin-slow border-dotted border-4 border-red-500 rounded-full"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.5 }}
                />
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
              <motion.button 
                className="mt-2 bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* American Cuisine Variety */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-3 items-center gap-10 max-w-6xl mx-auto">
          <motion.img
            src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_3.png"
            alt="Variety 1"
            className="w-full rounded-lg animate-spin-slow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Variety Of Flavours From American Cuisine</h2>
            <p className="mt-4">
              We deliver the best taste and authentic flavors right to your doorstep.
            </p>
          </motion.div>

          <motion.img
            src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_6.png"
            alt="Variety 2"
            className="w-full rounded-lg animate-spin-slow"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* Best Selling Dishes */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Best Selling Dishes
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {bestSellingDishes.map((dish, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer hover-lift"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.08, y: -5 }}
            >
              <motion.img
                src={dish.img}
                alt={dish.name}
                className="mx-auto w-24 h-24 object-contain border-dotted border-4 border-red-500 rounded-full"
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 1, ease: "easeInOut" }}
                whileHover={{ rotate: 0, scale: 1.2 }}
              />
              <h4 className="mt-2 font-semibold">{dish.name}</h4>
              <p className="text-red-500 group-hover:text-white">{dish.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

        {/* Discount Offer */}
       <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold tracking-wide text-red-500 mb-4">
          TODAY'S SPECIAL Offer
        </h2>
        <p className="text-xl text-gray-300 mb-10">🔥 Grab your deal before time runs out!</p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-8 mb-12">
          {[
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-24 shadow-lg"
            >
              <div className="text-3xl font-bold text-yellow-400">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-300 mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        <button className="bg-gradient-to-r from-red-500 to-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
          Order Now
        </button>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-red-500/10 via-black/50 to-black/90 opacity-20 z-0" />
    </section>

      {/* Swaad Nation Foods Menu */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-3 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Swaad Nation Foods Menu
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover our delicious collection of authentic dishes
          </motion.p>
        </motion.div>

        {loadingMenu ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <MenuItemSkeleton count={8} />
          </div>
        ) : menuItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="bg-white hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 group transition-all duration-500 p-6 rounded-xl shadow-lg text-center hover-lift cursor-pointer overflow-hidden relative"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotateZ: -5 }}
                whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.08, rotateZ: 2 }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.5 }}
                />

                {/* Image Container */}
                <motion.div
                  className="relative z-10 mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.8, type: "spring", stiffness: 150 }}
                >
                  <motion.img
                    src={item.image_url}
                    alt={item.name}
                    className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-dotted border-red-500 group-hover:border-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                >
                  <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">
                    {item.name}
                  </h4>
                  <motion.p 
                    className="text-red-500 group-hover:text-yellow-300 font-bold text-xl mb-2 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    ${item.price}
                  </motion.p>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 line-clamp-2 transition-colors">
                    {item.description}
                  </p>
                  
                  {/* View Details Button */}
                  <motion.button
                    className="mt-4 px-4 py-2 bg-red-500 group-hover:bg-white text-white group-hover:text-red-500 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now
                  </motion.button>
                </motion.div>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 rounded-bl-full opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No menu items available.</p>
        )}

        {/* View Full Menu Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/menu')}
          >
            View Full Menu →
          </motion.button>
        </motion.div>
      </section>

      {/* Meet Our Expert Chefs */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex items-center justify-center gap-2 text-2xl  font-semibold text-red-600 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaUserTie className="text-xl" />
            <h3>Meet Our Expert Chefs</h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 text-center hover:shadow-2xl transition duration-300 hover-lift"
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <motion.img
                  src={chef.image}
                  alt={chef.name}
                  className="w-32 h-32 object-cover mx-auto rounded-full mb-4 border-dotted border-4 border-red-500"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <h4 className="text-xl font-bold text-gray-800">{chef.name}</h4>
                <p className="text-red-500 italic">{chef.specialty}</p>
                <p className="text-gray-600 mt-2 text-sm">{chef.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black text-white py-20 px-6 md:px-20 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <FaQuoteLeft className="text-5xl mx-auto mb-6 text-red-500" />
          </motion.div>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            "Fresheat brings a perfect blend of nutrition, warmth, and delicious taste. I love their service and the vibe it brings."
          </motion.p>
          <motion.h4 
            className="mt-4 font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Robert Hosak
          </motion.h4>
        </motion.div>
      </section>

      {/* Latest Food News */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Latest Foods News
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogPosts.map((post, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-full">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{post.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  </section>
    </>
  );
};

export default Home;