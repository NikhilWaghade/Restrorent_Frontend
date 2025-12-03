import { FaUserTie, FaNewspaper, FaStar, FaQuoteLeft, FaUser, FaUtensils } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const news = [
  {
    title: 'Benefits of Health and Safety Measures',
    description: 'How proper food handling keeps you safe and healthy.',
    date: '17 Dec',
    author: 'Admin',
    category: 'Chicken',
    thumb: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    link: '/news/health-safety-measures',
  },
  {
    title: 'Quick Cravings: Unraveling Fast Food Delights',
    description: 'Discover the secret behind your favorite fast foods.',
    date: '25 Dec',
    author: 'Admin',
    category: 'Noodles',
    thumb: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_1.jpg',
    link: '/news/fast-food-delights',
  },
  {
    title: 'Fast Food Frenzy: A Taste of Convenience',
    description: 'Why fast food continues to rule our busy lives.',
    date: '15 Dec',
    author: 'Admin',
    category: 'Noodles',
    thumb: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_3.jpg',
    link: '/news/fast-food-frenzy',
  },
  {
    title: 'Benefits of Health and Safety Measures',
    description: 'How proper food handling keeps you safe and healthy.',
    date: '17 Dec',
    author: 'Admin',
    category: 'Chicken',
    thumb: 'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    link: '/news/health-safety-measures',
  },
];

const testimonials = [
  {
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
           It has roots in a piece of classical Latin literature from 45 BC, 
           making it over 2000 years old.`,
    author: 'Richard McClintock',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    author: 'Jane Doe',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: `There are many variations of passages of Lorem Ipsum available, 
           but the majority have suffered alteration in some form.`,
    author: 'John Smith',
    img: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    text: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
           as opposed to using 'Content here, content here'.`,
    author: 'Emily Johnson',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

function About() {
  return (
    <>
      <section className="bg-gray-200">
        {/* About Us Background Section */}
       <section className="relative py-16 px-6 md:px-20 w-full h-96">
        <div className="absolute inset-0 w-full">
          <motion.img
            src="https://img.freepik.com/premium-photo/surprising-cooking-food-concept_779468-1466.jpg"
            alt="About background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About
          </motion.h2>
          <motion.p 
            className="text-lg font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Swaad Nation serves authentic, flavorful meals made daily with fresh, organic ingredients. We combine traditional recipes and modern cooking to deliver wholesome dishes that warm the heart and satisfy every craving. Experience the true taste of home with us.
          </motion.p>
        </div>
      </section>

        {/* Description Section about Swaad Nation */}
        <motion.section 
          className="max-w-4xl mx-auto px-6 md:px-20 py-12 bg-white rounded-lg shadow-lg mt-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl font-semibold text-red-600 mb-4 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to Swaad Nation
          </motion.h3>
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At Swaad Nation, we celebrate the true flavors of India with a modern twist. Our passion is to bring authentic taste, quality ingredients, and heartfelt hospitality to every guest who walks through our doors. Whether it's traditional favorites or innovative new dishes, every bite is crafted to transport you on a delicious culinary journey. Join us to experience the vibrant spirit of Indian cuisine in a warm and welcoming atmosphere.
          </motion.p>
        </motion.section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Meet Our Chefs Section */}
          <div className="mt-12">
            <motion.div 
              className="flex items-center justify-center gap-2 text-2xl font-semibold text-red-600 mb-6"
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
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
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

          {/* Testimonials Section */}
          <section className="py-16 px-6 md:px-20 bg-white mt-10">
            {/* Heading */}
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center space-x-2 text-red-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              >
                <FaStar size={24} />
                <h2 className="text-3xl font-bold">TESTIMONIALS</h2>
                <FaStar size={24} />
              </motion.div>
              <motion.p 
                className="mt-4 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We have lots of happy customer feedback
              </motion.p>
            </motion.div>

            {/* Swiper */}
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col md:flex-row bg-gray-50 rounded-xl shadow-lg p-6 md:p-8">
                    {/* Text */}
                    <div className="md:w-2/3">
                      <FaQuoteLeft className="text-4xl text-red-500 mb-4" />
                      <p className="text-gray-700 mb-4 leading-relaxed">{t.text}</p>
                      <h4 className="font-semibold">{t.author}</h4>
                    </div>
                    {/* Image */}
                    <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
                      <img
                        src={t.img}
                        alt={t.author}
                        className="w-32 h-32 rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Latest News Section */}
          <section className="mt-16 px-6 md:px-20">
            <motion.div 
              className="flex items-center justify-center gap-2 text-2xl font-semibold text-red-600 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaNewspaper className="text-xl" />
              <h3>Our Latest Food News</h3>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {news.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition hover-lift"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Thumbnail + Date Badge */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <motion.div 
                      className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      {item.date}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    {/* Meta */}
                    <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
                      <span className="flex items-center gap-1">
                        <FaUser /> {item.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUtensils /> {item.category}
                      </span>
                    </div>

                    {/* Read More */}
                    <Link
                      to={item.link}
                      className="inline-block text-red-600 font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
