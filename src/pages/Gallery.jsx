import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
        <img
          src="https://img.freepik.com/premium-photo/surprising-cooking-food-concept_779468-1466.jpg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        <div className="relative max-w-3xl mx-auto text-center top-1/2 transform -translate-y-1/2">
          <h2 className="text-5xl font-bold mb-6 text-white">Gallery</h2>
          <p className="mb-2 text-lg font-bold text-white">
            Fresheat is a premium restaurant offering a diverse range of meals...
          </p>
          <p className="text-lg font-bold text-white">
            Our chefs bring creativity and passion to every plate.
          </p>
        </div>
      </section>

      {/* Thumbnails */}
      <div className="px-4 py-12 max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded shadow-md group cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

    
     {/* Lightbox Overlay */}
{lightboxIndex !== null && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
    {/* Close */}
    <button
      onClick={closeLightbox}
      className="absolute top-4 right-4 text-white text-3xl p-2 hover:opacity-75"
      aria-label="Close"
    >
      <FaTimes />
    </button>
    {/* Prev */}
    <button
      onClick={prevImage}
      className="absolute left-4 text-white text-3xl p-2 hover:opacity-75"
      aria-label="Previous"
    >
      <FaChevronLeft />
    </button>
    {/* Enlarged Image */}
    <img
      src={galleryImages[lightboxIndex]}
      alt={`Lightbox ${lightboxIndex + 1}`}
      className="max-w-[95%] w-full max-h-[95%] object-contain rounded-xl shadow-lg"
    />
    {/* Next */}
    <button
      onClick={nextImage}
      className="absolute right-4 text-white text-3xl p-2 hover:opacity-75"
      aria-label="Next"
    >
      <FaChevronRight />
    </button>
  </div>
  
)}
</section>

    </>
  );
}

export default Gallery;
