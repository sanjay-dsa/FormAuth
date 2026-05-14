import React from "react";
import "./WeatherCard.css";
import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return (
      <div className="weather-loading">
        <h2>Search a city to view weather 🌦️</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* City Name */}
      <div className="weather-top">
        <h1>{weather.name}</h1>
        <p>{weather.sys.country}</p>
      </div>

      {/* Weather Icon */}
      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt="weather-icon"
        />
      </div>

      {/* Temperature */}
      <div className="temperature-section">
        <h2>{Math.round(weather.main.temp)}°C</h2>
        <p>{weather.weather[0].description}</p>
      </div>

      {/* Weather Details */}
      <div className="weather-details">
        <div className="detail-box">
          <WiHumidity className="weather-icons" />
          <div>
            <h4>Humidity</h4>
            <p>{weather.main.humidity}%</p>
          </div>
        </div>

        <div className="detail-box">
          <WiStrongWind className="weather-icons" />
          <div>
            <h4>Wind</h4>
            <p>{weather.wind.speed} km/h</p>
          </div>
        </div>

        <div className="detail-box">
          <WiThermometer className="weather-icons" />
          <div>
            <h4>Feels Like</h4>
            <p>{Math.round(weather.main.feels_like)}°C</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
