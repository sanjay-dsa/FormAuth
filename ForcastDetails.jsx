import React from "react";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { FaEye } from "react-icons/fa";

const ForecastDetails = ({ weather }) => {
  if (!weather) return null;

  const details = [
    {
      id: 1,
      icon: <WiHumidity size={40} />,
      title: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      id: 2,
      icon: <WiStrongWind size={40} />,
      title: "Wind",
      value: `${weather.wind.speed} km/h`,
    },
    {
      id: 3,
      icon: <WiBarometer size={40} />,
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
    },
    {
      id: 4,
      icon: <FaEye size={30} />,
      title: "Visibility",
      value: `${weather.visibility / 1000} km`,
    },
    {
      id: 5,
      icon: <WiSunrise size={40} />,
      title: "Sunrise",
      value: new Date(weather.sys.sunrise * 1000).toLocaleTimeString(),
    },
    {
      id: 6,
      icon: <WiSunset size={40} />,
      title: "Sunset",
      value: new Date(weather.sys.sunset * 1000).toLocaleTimeString(),
    },
  ];

  return (
    <div className="w-full mt-8 px-4">
      <h2 className="text-white text-2xl font-bold mb-5 text-center">
        Weather Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {details.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-white shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-cyan-300">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>

            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDetails;
