import React from "react";
import "./CurrentLocationWeather.css";
import { motion } from "framer-motion";
import { MdMyLocation } from "react-icons/md";

const CurrentLocationWeather = ({ onLocationWeather }) => {

  const handleLocation = () => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        async (position) => {

          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          onLocationWeather(lat, lon);
        },

        (error) => {
          alert("Location access denied ❌");
          console.log(error);
        }
      );

    } else {
      alert("Geolocation not supported");
    }
  };

  return (
    <motion.div
      className="location-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="location-btn"
        onClick={handleLocation}
      >
        <MdMyLocation className="location-icon" />
        Current Location Weather
      </button>
    </motion.div>
  );
};

export default CurrentLocationWeather;
