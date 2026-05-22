// Sidebar.jsx

import React, { useState } from "react";
import {
  Home,
  CloudSun,
  MapPinned,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      icon: <Home size={22} />,
    },
    {
      name: "Weather",
      icon: <CloudSun size={22} />,
    },
    {
      name: "Locations",
      icon: <MapPinned size={22} />,
    },
    {
      name: "Settings",
      icon: <Settings size={22} />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-lg p-2 rounded-full"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-[260px]
          bg-white/10 backdrop-blur-xl
          border-r border-white/20
          shadow-2xl
          p-5
          z-40
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="mb-10 mt-5">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Weather<span className="text-cyan-400">App</span>
          </h1>
          <p className="text-gray-300 text-sm mt-1">
            Live Weather Updates
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="
                flex items-center gap-4
                text-white
                hover:bg-white/20
                p-4 rounded-2xl
                transition-all duration-300
                hover:translate-x-2
                group
              "
            >
              <span className="group-hover:rotate-12 transition duration-300">
                {item.icon}
              </span>

              <span className="font-medium text-lg">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Card */}
        <div
          className="
            absolute bottom-6 left-4 right-4
            bg-gradient-to-r from-cyan-500 to-blue-500
            rounded-3xl
            p-5
            text-white
            shadow-xl
            animate-pulse
          "
        >
          <h2 className="font-bold text-lg">
            Weather Pro
          </h2>

          <p className="text-sm mt-2 text-white/90">
            Get premium weather forecasts and alerts.
          </p>

          <button
            className="
              mt-4 bg-white text-blue-600
              px-4 py-2 rounded-xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            Upgrade
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
