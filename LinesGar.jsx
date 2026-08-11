
import React from "react";
import { motion } from "framer-motion";

const Lines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "180px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />

      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "180px" }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-32 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
      />

    
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "250px" }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
      />

      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-24 left-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
      />

      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-16 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </div>
  );
};

export default Lines;
