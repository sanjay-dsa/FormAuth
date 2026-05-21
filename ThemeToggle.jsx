import React from "react";
import "./ThemeToggle.css";

import { motion } from "framer-motion";

import {
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

const ThemeToggle = ({ darkMode, setDarkMode }) => {

  return (
    <motion.div
      className="theme-toggle-container"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="theme-toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <>
            <MdLightMode className="theme-icon" />
            Light Mode
          </>
        ) : (
          <>
            <MdDarkMode className="theme-icon" />
            Dark Mode
          </>
        )}
      </button>
    </motion.div>
  );
};

export default ThemeToggle;
