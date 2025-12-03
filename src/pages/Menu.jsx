import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MenuItemSkeleton from "../components/MenuItemSkeleton";

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:5000/api/menu");
        if (Array.isArray(data)) {
          setMenuItems(data);
        } else {
          setMenuItems([]);
        }
      } catch (err) {
        console.error("Failed to fetch menu items", err);
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <section className="bg-gray-200">
      {/* menu bg image section */}
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
            Menu
          </motion.h2>
          <motion.p 
            className="text-lg font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Fresheat, we pride ourselves on delivering freshly prepared,
            wholesome meals every day — crafted with the finest ingredients,
            bursting with vibrant flavors, and made to nourish both body and
            soul. Our commitment is to serve you culinary creations that are as
            delicious as they are nutritious, ensuring every bite feels like
            home-cooked goodness.
          </motion.p>
        </div>
      </section>

      {/* menu image section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2 
          className="text-3xl font-bold text-red-600 text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Swaad Nation Foods Menu
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <MenuItemSkeleton count={6} />
          ) : menuItems.length > 0 ? (
            menuItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover-lift"
                initial={{ opacity: 0, y: 80, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <Link to={`/product/${item.id}`}>
                  <motion.img
                    src={item.image_url}
                    alt={item.name}
                    className="w-96 h-72 object-cover transition-transform duration-300 transform-origin-center mx-auto"
                    whileHover={{ scale: 1.1 }}
                  />
                </Link>

                <motion.div 
                  className="p-4 flex flex-col flex-grow justify-between hover:bg-black hover:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="font-semibold text-red-500">${item.price}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                  <motion.button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now
                  </motion.button>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No menu items found.
            </p>
          )}
        </div>
      </section>
    </section>
  );
};

export default MenuSection;
