import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10" id="contact">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-3">
          Feel free to reach out anytime
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <p className="text-gray-700">youremail@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-green-500 text-xl" />
            <p className="text-gray-700">+91 9876543210</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <p className="text-gray-700">Chennai, India</p>
          </div>

          <p className="text-gray-500 mt-6">
            We are always open to discuss your project and improve your online presence.
          </p>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow-lg space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;