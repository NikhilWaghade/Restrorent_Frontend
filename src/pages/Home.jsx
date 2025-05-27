import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaUserTie } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50;
    setHoverPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPos({ x: 0, y: 0 });
  };

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


  // Data arrays
  const foodItems = [
    {
      name: "Chicken Pizza",
      price: "$20.5",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png",
    },
    {
      name: "Egg And Cucumber",
      price: "$12.5",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
    },
    {
      name: "Chicken Fried Rice",
      price: "$18.0",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
    },
    {
      name: "Chicken Loly Pop",
      price: "$15.0",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png",
    },
     {
      name: "Egg And Cucumber",
      price: "$12.5",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
    },
     {
      name: "Chicken Fried Rice",
      price: "$18.0",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
    },
  ];

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

  const menuItems = [
    {
      name: "Chinese Pasta",
      price: "$11.0",
      desc: "Delicious noodles with tangy sauces.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png",
    },
    {
      name: "Egg And Cucumber",
      price: "$10.5",
      desc: "Fresh boiled eggs and crispy cucumbers.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
    },
    {
      name: "Chicken Pizza",
      price: "$14.9",
      desc: "Classic pizza topped with spicy chicken.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
    },
    {
      name: "Spaghetti Burger",
      price: "$12.0",
      desc: "Fusion of Italian pasta and juicy burger.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png",
    },
    {
      name: "Chicken Fried Rice",
      price: "$13.5",
      desc: "Authentic fried rice with tender chicken.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png",
    },
    {
      name: "Veggie Noodles",
      price: "$9.9",
      desc: "Healthy and tasty veggie-packed noodles.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
    },
    {
      name: "Magherita Burger",
      price: "$10.0",
      desc: "Cheesy burger with Italian herbs.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
    },
    {
      name: "Grill Chicken",
      price: "$15.0",
      desc: "Juicy grilled chicken with herbs.",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png",
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
 <section className="relative bg-black text-white px-6 py-20 md:px-20 overflow-hidden"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        <Typewriter
          words={['Chicago Deep', 'Burger King', 'Delicious & Juicy', '100% Fresh']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="mt-4 text-lg">Welcome Fresheat - 50% OFF</p>
      <button className="mt-6 bg-red-500 hover:bg-red-600 transition px-6 py-2 rounded-full">
        Order Now
      </button>
    </div>

    <div
      className="w-full md:w-1/2 transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${hoverPos.x}px, ${hoverPos.y}px)`,
      }}
    >
      <img
        src="https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png"
        alt="Burger"
        className="w-96 mx-auto mt-10 md:mt-0 select-none pointer-events-none"
      />
    </div>
    </div>
</section>


      {/* Popular Food Items */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Popular Food Items</h2>

      <Swiper
        // register the autoplay module
        modules={[Autoplay]}
        // autoplay every 3s
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        // default to 1 slide, then ramp up at breakpoints
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!pb-10"      // ensure there's padding below
      >
        {foodItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition h-full flex flex-col items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-contain animate-spin-slow border-dotted border-4 border-red-500 rounded-full"
              />
              <h4 className="mt-4 font-semibold">{item.name}</h4>
              <p className="text-red-500">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
      {/* Category Buttons */}
      <section className="bg-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categoryItems.map((item, i) => (
            <div key={i} className="bg-black text-white py-6 px-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 animate-spin-slow border-dotted border-4 border-red-500 rounded-full"
                />
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
              <button className="mt-2 bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* American Cuisine Variety */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-3 items-center gap-10 max-w-6xl mx-auto">
          <img
            src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_3.png"
            alt="Variety 1"
            className="w-full rounded-lg animate-spin-slow"
          />

          <div className="text-center">
            <h2 className="text-3xl font-bold">Variety Of Flavours From American Cuisine</h2>
            <p className="mt-4">
              We deliver the best taste and authentic flavors right to your doorstep.
            </p>
          </div>

          <img
            src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_6.png"
            alt="Variety 2"
            className="w-full rounded-lg animate-spin-slow"
          />
        </div>
      </section>

      {/* Best Selling Dishes */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Best Selling Dishes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {bestSellingDishes.map((dish, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="mx-auto w-24 h-24 object-contain animate-spin-slow border-dotted border-4 border-red-500 rounded-full"
              />
              <h4 className="mt-2 font-semibold">{dish.name}</h4>
              <p className="text-red-500 group-hover:text-white">{dish.price}</p>
            </div>
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

      {/* Fresheat Menu */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Swaad Nation Foods Menu</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="bg-white hover:bg-black hover:text-white transition duration-300 p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto w-20 h-20 object-contain mb-4 animate-spin-slow border-4 border-dotted border-red-500 rounded-full"
              />
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-red-500 hover:text-white">{item.price}</p>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Expert Chefs */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-2xl  font-semibold text-red-600 mb-6">
            <FaUserTie className="text-xl" />
            <h3>Meet Our Expert Chefs</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 text-center hover:shadow-2xl transition duration-300"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-32 h-32 object-cover mx-auto rounded-full mb-4 hover:animate-spin-slow border-dotted border-4 border-red-500"
                />
                <h4 className="text-xl font-bold text-gray-800">{chef.name}</h4>
                <p className="text-red-500 italic">{chef.specialty}</p>
                <p className="text-gray-600 mt-2 text-sm">{chef.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black text-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <FaQuoteLeft className="text-5xl mx-auto mb-6 text-red-500" />
          <p className="text-lg">
            "Fresheat brings a perfect blend of nutrition, warmth, and delicious taste. I love their service and the vibe it brings."
          </p>
          <h4 className="mt-4 font-bold">Robert Hosak</h4>
        </div>
      </section>

      {/* Latest Food News */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Latest Foods News</h2>
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