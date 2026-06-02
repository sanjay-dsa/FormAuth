import React from "react";
import { motion } from "framer-motion";

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Poster */}
          <div>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {movie.Title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {movie.Year} • {movie.Runtime}
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  ⭐ {movie.imdbRating}
                </span>

                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                  {movie.Genre}
                </span>
              </div>

              <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                {movie.Plot}
              </p>

              <div className="mt-6 space-y-2">
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>

                <p>
                  <strong>Actors:</strong> {movie.Actors}
                </p>

                <p>
                  <strong>Language:</strong> {movie.Language}
                </p>

                <p>
                  <strong>Country:</strong> {movie.Country}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieDetails;
