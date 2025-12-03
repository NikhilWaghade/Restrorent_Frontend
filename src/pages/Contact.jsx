import { FiMapPin, FiMail, FiPhoneCall, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

   const ContactUs = () => {
       return (
        <>
    
     {/* Contact Us Background Section */}
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
            Contact
          </motion.h2>
          <motion.p 
            className="text-lg font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Got questions or want to share your feedback? We're here to help! Reach out to Swaad Nation anytime — whether you want to place an order, learn about our menu, or just say hello. Your satisfaction is our priority!
          </motion.p>
        </div>
      </section>
   
   {/* contact us  */}
   <div className="container mx-auto px-4 py-12 bg-gray-200">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <motion.div 
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover-lift"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3 mb-3 text-red-500 text-2xl">
            <FiMapPin />
            <h2 className="text-xl font-semibold text-gray-700">Our Address</h2>
          </div>
          <p className="text-gray-600 text-sm">Ward No. 12, Main Market Road, Balaghat, Madhya Pradesh 481001, India</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover-lift"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3 mb-3 text-red-500 text-2xl">
            <FiMail />
            <h2 className="text-xl font-semibold text-gray-700">Email</h2>
          </div>
          <p className="text-gray-600 text-sm">Email us anytime for any inquiry.</p>
          <p className="font-bold text-gray-700">info@example.com</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover-lift"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3 mb-3 text-red-500 text-2xl">
            <FiPhoneCall />
            <h2 className="text-xl font-semibold text-gray-700">Hotline</h2>
          </div>
          <p className="text-gray-600 text-sm">24/7 priority support available.</p>
          <p className="font-bold text-gray-700">+208-666-01112</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover-lift"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3 mb-3 text-red-500 text-2xl">
            <FiClock />
            <h2 className="text-xl font-semibold text-gray-700">Opening Hours</h2>
          </div>
          <p className="text-gray-600 text-sm">Sunday - Friday: 9 AM - 6 PM</p>
          <p className="text-gray-600 text-sm">Saturday: 9 AM - 4 PM</p>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://gramentheme.com/html/fresheat/assets/img/contact/contactThumb2_1.png"
            alt="Delicious Food"
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl font-semibold mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" required />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" required />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" required />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" required />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" required />
            </motion.div>
            <motion.div 
              className="flex items-start gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-gray-600">Collaboratively formulate principle capital. Progressively evolve user.</span>
            </motion.div>
            <motion.button 
              type="submit" 
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Now
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-4 text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Location
        </motion.h2>
        <motion.iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.0635656981904!2d80.18208747473578!3d21.816474760259364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a59631d11fcf7%3A0xf335aa2abbd7cf7c!2sKali%20Putli%20Chowk%2C%20Balaghat%2C%20Madhya%20Pradesh%20481001!5e0!3m2!1sen!2sin!4v1748184616255!5m2!1sen!2sin"
          className="w-full h-64 border-0 rounded-xl shadow"
          allowFullScreen=""
          loading="lazy"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        
      </motion.div>
    </div>
           </>
       );
   }

   export default ContactUs;
   