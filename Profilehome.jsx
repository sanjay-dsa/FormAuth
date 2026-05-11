import React, { useState } from "react";
import { Camera, Edit3, Check } from "lucide-react";

const ProfilePic = () => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
  );

  const [name, setName] = useState("Sanjay Kumar");
  const [edit, setEdit] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4 py-10 overflow-hidden">
      
      {/* Main Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 relative animate-fadeIn">
        
        {/* Animated Glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Profile Image */}
        <div className="relative flex justify-center">
          <div className="relative group">
            <img
              src={image}
              alt="profile"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white shadow-xl transition duration-500 group-hover:scale-105"
            />

            {/* Upload Button */}
            <label className="absolute bottom-2 right-2 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition duration-300 hover:scale-110">
              <Camera size={20} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-8 text-center">
          {edit ? (
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 rounded-xl bg-white/20 text-white outline-none border border-white/20 w-[200px]"
              />

              <button
                onClick={() => setEdit(false)}
                className="bg-green-500 hover:bg-green-600 p-2 rounded-xl text-white transition duration-300"
              >
                <Check size={20} />
              </button>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold text-white tracking-wide">
                {name}
              </h1>

              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                Frontend Developer • React Designer
              </p>

              <button
                onClick={() => setEdit(true)}
                className="mt-4 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-xl transition duration-300 hover:scale-105"
              >
                <Edit3 size={18} />
                Edit Profile
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white/10 rounded-2xl p-4 text-center hover:scale-105 transition duration-300">
            <h2 className="text-white text-2xl font-bold">120</h2>
            <p className="text-gray-300 text-sm">Posts</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 text-center hover:scale-105 transition duration-300">
            <h2 className="text-white text-2xl font-bold">5.2K</h2>
            <p className="text-gray-300 text-sm">Followers</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 text-center hover:scale-105 transition duration-300">
            <h2 className="text-white text-2xl font-bold">350</h2>
            <p className="text-gray-300 text-sm">Following</p>
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProfilePic;
