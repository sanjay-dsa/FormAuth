import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl text-center w-80"
        
        // Initial state
        initial={{ opacity: 0, y: 100 }}
        
        // Animation when visible
        animate={{ opacity: 1, y: 0 }}
        
        // Transition settings
        transition={{ duration: 0.6, ease: "easeOut" }}

        // Hover animation
        whileHover={{ scale: 1.05 }}

        // Tap animation
        whileTap={{ scale: 0.95 }}
      >
        <h2 className="text-2xl font-bold mb-4">🔥 Animated Card</h2>
        <p className="text-gray-600">
          This is smooth animation using Framer Motion.
        </p>

        <motion.button
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Click Me
        </motion.button>
      </motion.div>

    </div>
  );
};

export default AnimatedCard;




import { motion } from "framer-motion";

const FadeSlide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-2xl text-center w-96"
        
        // start (hidden)
        initial={{ opacity: 0, y: 60 }}

        // end (visible)
        animate={{ opacity: 1, y: 0 }}

        // smooth transition
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <h1 className="text-3xl font-bold mb-4">✨ Smooth Animation</h1>
        <p className="text-gray-600">
          Fade-in + Slide-up effect (modern UI style)
        </p>
      </motion.div>

    </div>
  );
};

export default FadeSlide;