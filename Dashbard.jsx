import React from "react";
import {
  Users,
  ShoppingBag,
  DollarSign,
  Activity,
} from "lucide-react";

const Dashboard = () => {
  const cards = [
    {
      title: "Users",
      value: "12,500",
      icon: <Users size={35} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Orders",
      value: "1,240",
      icon: <ShoppingBag size={35} />,
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Revenue",
      value: "$25,000",
      icon: <DollarSign size={35} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Activity",
      value: "98%",
      icon: <Activity size={35} />,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Welcome back 👋
          </p>
        </div>

        <button className="mt-5 md:mt-0 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300">
          Download Report
        </button>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.color} text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">
                  {card.title}
                </h2>

                <h1 className="text-3xl font-bold mt-3">
                  {card.value}
                </h1>
              </div>

              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-lg">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {/* Left */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Analytics
          </h2>

          <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-2xl text-gray-400">
            Chart Area
          </div>
        </div>

        {/* Right */}
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              User registered
            </div>

            <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              New order received
            </div>

            <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              Revenue updated
            </div>

            <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
              Server activity increased
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
