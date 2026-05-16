import React from "react";
import "./Forecast.css";
import { motion } from "framer-motion";

const Forecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">5-Day Forecast 🌤️</h2>

      <div className="forecast-grid">
        {forecast.map((item, index) => {
          const date = new Date(item.dt_txt);
          const day = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <motion.div
              className="forecast-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{day}</h3>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="weather-icon"
              />

              <h1>{Math.round(item.main.temp)}°C</h1>

              <p>{item.weather[0].description}</p>

              <div className="forecast-extra">
                <span>💧 {item.main.humidity}%</span>
                <span>💨 {item.wind.speed} km/h</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
