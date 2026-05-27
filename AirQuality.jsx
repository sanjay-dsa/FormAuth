import React from "react";
import { motion } from "framer-motion";
import {
  Wind,
  AlertTriangle,
  Activity,
  CloudFog,
} from "lucide-react";

const AirQuality = () => {
  const airData = {
    aqi: 78,
    status: "Moderate",
    pm25: 32,
    pm10: 54,
    humidity: 68,
    wind: 12,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto mt-6"
    >
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-6 text-white">
        
        {/* Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Air Quality</h2>

          <div className="bg-white/20 p-3 rounded-full">
            <Activity size={28} />
          </div>
        </div>

        {/* AQI */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-bold">
            {airData.aqi}
          </h1>

          <p className="text-lg mt-2 text-gray-200">
            {airData.status}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <CloudFog size={20} />
              <p className="text-sm">PM2.5</p>
            </div>

            <h3 className="text-2xl font-bold">
              {airData.pm25}
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={20} />
              <p className="text-sm">PM10</p>
            </div>

            <h3 className="text-2xl font-bold">
              {airData.pm10}
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Wind size={20} />
              <p className="text-sm">Wind</p>
            </div>

            <h3 className="text-2xl font-bold">
              {airData.wind} km/h
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              💧
              <p className="text-sm">Humidity</p>
            </div>

            <h3 className="text-2xl font-bold">
              {airData.humidity}%
            </h3>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default AirQuality;
