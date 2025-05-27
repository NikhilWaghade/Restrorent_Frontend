// src/pages/MenuSection.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/menu');
        if (Array.isArray(data)) {
          setMenuItems(data);
        } else {
          setMenuItems([]);
        }
      } catch (err) {
        console.error('Failed to fetch menu items', err);
        setMenuItems([]);
      }
    };
    fetchMenu();
  }, []);

  return (
    <section className="bg-gray-200">
      {/* menu bg image section */}
      <section className="relative py-16 px-6 md:px-20 w-full h-96">
        <div className="absolute inset-0 w-full">
          <img
            src="https://img.freepik.com/premium-photo/surprising-cooking-food-concept_779468-1466.jpg"
            alt="About background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Menu</h2>
          <p className="text-lg font-bold text-white">
            At Fresheat, we pride ourselves on delivering freshly prepared, wholesome meals every day — crafted with the finest ingredients, bursting with vibrant flavors, and made to nourish both body and soul. Our commitment is to serve you culinary creations that are as delicious as they are nutritious, ensuring every bite feels like home-cooked goodness.
          </p>
        </div>
      </section>

      {/* menu image section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Swaad Nation Foods Menu</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:bg-black hover:text-white"
              >
                <Link to={`/product/${item._id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-52 object-contain"
                  />
                </Link>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="font-semibold text-red-500">${item.price}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/product/${item._id}`)}
                    className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No menu items found.</p>
          )}
        </div>
      </section>
    </section>
  );
};

export default MenuSection;
