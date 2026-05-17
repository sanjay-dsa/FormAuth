import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY";

  // Current Weather
  const fetchWeather = async (city) => {
    try {
      setLoading(true);

      // Current weather API
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const weatherData = await weatherResponse.json();

      // Forecast API
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastData = await forecastResponse.json();

      setWeather(weatherData);

      // Filter one forecast per day
      const dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyForecast);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="app">

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="app-content">

        <h1 className="main-title">
          Weather Forecast App 🌦️
        </h1>

        <SearchBox onSearch={fetchWeather} />

        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
            <p>Loading Weather...</p>
          </div>
        ) : (
          <>
            <WeatherCard weather={weather} />
            <Forecast forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
