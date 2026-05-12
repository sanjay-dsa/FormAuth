import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Download,
  Image as ImageIcon,
  Trash2,
} from "lucide-react";

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [blur, setBlur] = useState(0);
  const [rotate, setRotate] = useState(0);

  // Upload Image
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Reset Filters
  const resetFilters = () => {
    setBrightness(100);
    setContrast(100);
    setSaturate(100);
    setBlur(0);
    setRotate(0);
  };

  // Download Image
  const downloadImage = () => {
    const img = document.getElementById("edited-image");

    if (!img) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const imageObj = new Image();
    imageObj.crossOrigin = "anonymous";

    imageObj.src = image;

    imageObj.onload = () => {
      canvas.width = imageObj.width;
      canvas.height = imageObj.height;

      ctx.filter = `
        brightness(${brightness}%)
        contrast(${contrast}%)
        saturate(${saturate}%)
        blur(${blur}px)
      `;

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotate * Math.PI) / 180);

      ctx.drawImage(
        imageObj,
        -imageObj.width / 2,
        -imageObj.height / 2
      );

      const link = document.createElement("a");
      link.download = "edited-image.png";
      link.href = canvas.toDataURL();
      link.click();
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-5 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-5 md:p-8"
      >
        {/* Title */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-8"
        >
          Image Editor
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Upload */}
            <label className="w-full border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-white/10 transition">
              <Upload size={40} className="mx-auto mb-3" />

              <p className="text-lg font-semibold">
                Upload Your Image
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
            </label>

            {/* Image Preview */}
            <div className="mt-8 w-full flex justify-center">
              {image ? (
                <motion.img
                  id="edited-image"
                  src={image}
                  alt="preview"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl max-h-[450px] object-contain shadow-2xl"
                  style={{
                    filter: `
                      brightness(${brightness}%)
                      contrast(${contrast}%)
                      saturate(${saturate}%)
                      blur(${blur}px)
                    `,
                    transform: `rotate(${rotate}deg)`,
                  }}
                />
              ) : (
                <div className="h-[350px] w-full flex items-center justify-center border border-gray-600 rounded-3xl">
                  <div className="text-center">
                    <ImageIcon size={60} className="mx-auto mb-4" />
                    <p>No Image Selected</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Brightness */}
            <div>
              <label className="font-semibold">
                Brightness : {brightness}%
              </label>

              <input
                type="range"
                min="0"
                max="200"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
                className="w-full mt-2"
              />
            </div>

            {/* Contrast */}
            <div>
              <label className="font-semibold">
                Contrast : {contrast}%
              </label>

              <input
                type="range"
                min="0"
                max="200"
                value={contrast}
                onChange={(e) => setContrast(e.target.value)}
                className="w-full mt-2"
              />
            </div>

            {/* Saturation */}
            <div>
              <label className="font-semibold">
                Saturation : {saturate}%
              </label>

              <input
                type="range"
                min="0"
                max="200"
                value={saturate}
                onChange={(e) => setSaturate(e.target.value)}
                className="w-full mt-2"
              />
            </div>

            {/* Blur */}
            <div>
              <label className="font-semibold">
                Blur : {blur}px
              </label>

              <input
                type="range"
                min="0"
                max="10"
                value={blur}
                onChange={(e) => setBlur(e.target.value)}
                className="w-full mt-2"
              />
            </div>

            {/* Rotate */}
            <div>
              <label className="font-semibold">
                Rotate : {rotate}°
              </label>

              <input
                type="range"
                min="0"
                max="360"
                value={rotate}
                onChange={(e) => setRotate(e.target.value)}
                className="w-full mt-2"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={resetFilters}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-semibold"
              >
                <Trash2 size={20} />
                Reset
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={downloadImage}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-2xl font-semibold"
              >
                <Download size={20} />
                Download
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageEditor;
