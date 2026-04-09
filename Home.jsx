import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">

        {/* Left Content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Shop the Latest Products 🛒
          </h1>

          <p className="text-gray-600 mb-6">
            Discover amazing deals and trending items at the best price.
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.img
          src="https://via.placeholder.com/400"
          alt="shopping"
          className="mt-8 md:mt-0 w-full max-w-md rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Product Section */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://via.placeholder.com/300"
                alt="product"
                className="rounded-lg mb-3"
              />

              <h3 className="font-semibold">Product {item}</h3>
              <p className="text-gray-500">$100</p>

              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Home;