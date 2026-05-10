import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  CheckCircle,
} from "lucide-react";

const PasswordAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setMessage(
        "Password must contain 8 characters, uppercase, lowercase & number."
      );
      return;
    }

    setMessage(
      isLogin
        ? "Login Successful ✅"
        : "Account Created Successfully 🎉"
    );

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Top Section */}
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg animate-bounce">
            <Lock size={35} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mt-5">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-gray-300 mt-2">
            Secure Authentication System
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="px-8 pb-8 space-y-5"
        >
          {!isLogin && (
            <div className="relative">
              <User
                className="absolute left-3 top-3.5 text-gray-400"
                size={20}
              />

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 text-white border border-gray-600 outline-none focus:border-cyan-400 transition"
              />
            </div>
          )}

          <div className="relative">
            <Mail
              className="absolute left-3 top-3.5 text-gray-400"
              size={20}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 text-white border border-gray-600 outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-3 top-3.5 text-gray-400"
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-12 py-3 rounded-xl bg-white/10 text-white border border-gray-600 outline-none focus:border-cyan-400 transition"
            />

            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Password Rules */}
          <div className="bg-white/5 border border-gray-700 rounded-xl p-4 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <CheckCircle size={16} />
              8+ Characters
            </p>

            <p className="flex items-center gap-2 mt-1">
              <CheckCircle size={16} />
              Uppercase & Lowercase
            </p>

            <p className="flex items-center gap-2 mt-1">
              <CheckCircle size={16} />
              Include a Number
            </p>
          </div>

          {/* Message */}
          {message && (
            <div className="text-center text-sm text-cyan-300 font-medium">
              {message}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {/* Toggle */}
          <div className="text-center text-gray-300 text-sm">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
              }}
              className="ml-2 text-cyan-400 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
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

export default PasswordAuth;
