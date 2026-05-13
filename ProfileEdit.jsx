// PictureEditor.jsx
import React, { useState, useRef } from "react";
import {
  Upload,
  Download,
  RotateCw,
  Sun,
  Contrast,
  Droplets,
  FlipHorizontal,
} from "lucide-react";

const PictureEditor = () => {
  const [image, setImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [flip, setFlip] = useState(1);

  const imageRef = useRef();

  // Upload Image
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Download Edited Image
  const downloadImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = imageRef.current;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.filter = `
      brightness(${brightness}%)
      contrast(${contrast}%)
      saturate(${saturate}%)
    `;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.scale(flip, 1);

    ctx.drawImage(
      img,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );

    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-5">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 animate-pulse">
        Picture Editing Tool
      </h1>

      {/* Upload Box */}
      <label className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-2xl cursor-pointer flex items-center gap-2 shadow-lg">
        <Upload size={22} />
        Upload Image
        <input type="file" hidden accept="image/*" onChange={handleImage} />
      </label>

      {/* Main Section */}
      <div className="w-full max-w-6xl mt-8 grid lg:grid-cols-2 gap-8">
        {/* Image Preview */}
        <div className="bg-zinc-900 rounded-3xl p-5 shadow-2xl flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              ref={imageRef}
              src={image}
              alt="Preview"
              className="max-h-[500px] rounded-2xl transition-all duration-500 hover:scale-105"
              style={{
                filter: `
                  brightness(${brightness}%)
                  contrast(${contrast}%)
                  saturate(${saturate}%)
                `,
                transform: `
                  rotate(${rotate}deg)
                  scaleX(${flip})
                `,
              }}
            />
          ) : (
            <p className="text-gray-400 text-lg">
              Upload an image to edit
            </p>
          )}
        </div>

        {/* Controls */}
        <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6">
            Editing Controls
          </h2>

          {/* Brightness */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sun />
              <span>Brightness</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Contrast */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Contrast />
              <span>Contrast</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Saturation */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Droplets />
              <span>Saturation</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={saturate}
              onChange={(e) => setSaturate(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button
              onClick={() => setRotate(rotate + 90)}
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 py-3 rounded-2xl flex items-center justify-center gap-2"
            >
              <RotateCw size={20} />
              Rotate
            </button>

            <button
              onClick={() => setFlip(flip * -1)}
              className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 py-3 rounded-2xl flex items-center justify-center gap-2"
            >
              <FlipHorizontal size={20} />
              Flip
            </button>
          </div>

          {/* Download */}
          <button
            onClick={downloadImage}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 transition-all duration-300 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
          >
            <Download size={22} />
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default PictureEditor;
