import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex items-center justify-center px-6">
      
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your <span className="text-blue-500">Modern Website</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            Create fast, responsive, and animated web apps using React,
            Tailwind CSS, and modern tools.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-300">
              Get Started
            </button>

            <button className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-xl transition duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://source.unsplash.com/500x400/?technology,website"
            alt="hero"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Home;



@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}