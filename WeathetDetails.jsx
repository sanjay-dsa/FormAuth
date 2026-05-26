import React from "react";
import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

const WeatherDetails = ({ weather }) => {
  if (!weather) {
    return (
      <div className="text-center text-white mt-10">
        No Weather Data Found
      </div>
    );
  }

  const details = [
    {
      id: 1,
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      icon: <WiHumidity size={45} />,
    },
    {
      id: 2,
      title: "Wind Speed",
      value: `${weather.wind.speed} km/h`,
      icon: <WiStrongWind size={45} />,
    },
    {
      id: 3,
      title: "Feels Like",
      value: `${Math.floor(weather.main.feels_like)}°C`,
      icon: <WiThermometer size={45} />,
    },
    {
      id: 4,
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      icon: <WiBarometer size={45} />,
    },
    {
      id: 5,
      title: "Sunrise",
      value: new Date(weather.sys.sunrise * 1000).toLocaleTimeString(),
      icon: <WiSunrise size={45} />,
    },
    {
      id: 6,
      title: "Sunset",
      value: new Date(weather.sys.sunset * 1000).toLocaleTimeString(),
      icon: <WiSunset size={45} />,
    },
  ];

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {details.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-2xl font-bold mt-2">{item.value}</p>
              </div>

              <div className="text-cyan-300">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
