import React from "react";
import { CloudRain, Sun, Cloud, Wind } from "lucide-react";

const forecastData = [
  {
    time: "Now",
    temp: "29°",
    icon: <Sun size={28} />,
    color: "from-yellow-400 to-orange-400",
  },
  {
    time: "1 PM",
    temp: "30°",
    icon: <Cloud size={28} />,
    color: "from-sky-400 to-blue-500",
  },
  {
    time: "2 PM",
    temp: "28°",
    icon: <CloudRain size={28} />,
    color: "from-cyan-400 to-blue-600",
  },
  {
    time: "3 PM",
    temp: "27°",
    icon: <Wind size={28} />,
    color: "from-gray-400 to-slate-500",
  },
  {
    time: "4 PM",
    temp: "26°",
    icon: <CloudRain size={28} />,
    color: "from-indigo-400 to-blue-700",
  },
];

const HourlyForecast = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Hourly Forecast
          </h2>

          <button className="bg-white/20 hover:bg-white/30 transition-all duration-300 px-4 py-2 rounded-xl text-white text-sm backdrop-blur-md">
            Today
          </button>
        </div>

        {/* Forecast Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {forecastData.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} p-5 rounded-3xl shadow-xl backdrop-blur-lg border border-white/20 transform hover:scale-105 transition-all duration-500 animate-pulse`}
            >
              <div className="flex flex-col items-center text-center text-white">
                <p className="text-sm opacity-90">{item.time}</p>

                <div className="my-4 animate-bounce">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {item.temp}
                </h3>

                <p className="text-xs mt-2 opacity-80">
                  Weather Update
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HourlyForecast;
