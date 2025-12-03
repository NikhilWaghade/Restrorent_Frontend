import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  'https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_1.jpg',
  'https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_2.jpg',
  'https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_3.jpg',
  'https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_4.jpg',
  'https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_5.jpg',
  'https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_6.jpg',
];

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((idx) =>
      idx === null
        ? null
        : (idx + galleryImages.length - 1) % galleryImages.length
    );
  const nextImage = () =>
    setLightboxIndex((idx) =>
      idx === null ? null : (idx + 1) % galleryImages.length
    );

  return (
    <>
    <section className='bg-gray-200'>
      {/* Hero */}
      <section className="relative py-16 px-6 md:px-20 w-full h-96 overflow-hidden ">
        <motion.img
          src="https://img.freepik.com/premium-photo/surprising-cooking-food-concept_779468-1466.jpg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        <div className="relative max-w-3xl mx-auto text-center top-1/2 transform -translate-y-1/2">
          <motion.h2 
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gallery
          </motion.h2>
          <motion.p 
            className="mb-2 text-lg font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fresheat is a premium restaurant offering a diverse range of meals...
          </motion.p>
          <motion.p 
            className="text-lg font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our chefs bring creativity and passion to every plate.
          </motion.p>
        </div>
      </section>

      {/* Thumbnails */}
      <div className="px-4 py-12 max-w-6xl mx-auto ">
        <motion.h2 
          className="text-3xl font-bold text-center text-red-600 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded shadow-md group cursor-pointer hover-lift"
              onClick={() => openLightbox(i)}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 ease-out"
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

    
     {/* Lightbox Overlay */}
<AnimatePresence>
{lightboxIndex !== null && (
  <motion.div 
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* Close */}
    <motion.button
      onClick={closeLightbox}
      className="absolute top-4 right-4 text-white text-3xl p-2 hover:opacity-75"
      aria-label="Close"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaTimes />
    </motion.button>
    {/* Prev */}
    <motion.button
      onClick={prevImage}
      className="absolute left-4 text-white text-3xl p-2 hover:opacity-75"
      aria-label="Previous"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      whileHover={{ scale: 1.3, x: -10 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaChevronLeft />
    </motion.button>
    {/* Enlarged Image */}
    <motion.img
      key={lightboxIndex}
      src={galleryImages[lightboxIndex]}
      alt={`Lightbox ${lightboxIndex + 1}`}
      className="max-w-[95%] w-full max-h-[95%] object-contain rounded-xl shadow-lg"
      initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      exit={{ scale: 0.5, opacity: 0, rotateY: -90 }}
      transition={{ duration: 0.5 }}
    />
    {/* Next */}
    <motion.button
      onClick={nextImage}
      className="absolute right-4 text-white text-3xl p-2 hover:opacity-75"
      aria-label="Next"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      whileHover={{ scale: 1.3, x: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaChevronRight />
    </motion.button>
  </motion.div>
  
)}
</AnimatePresence>
</section>

    </>
  );
}

export default Gallery;
