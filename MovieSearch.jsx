import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const API_KEY = "YOUR_OMDB_API_KEY"; // Replace with your API key

export default function MoviesSearch() {
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎬 Movie Search App
      </motion.h1>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 rounded-lg text-black w-full md:w-1/2"
        />
        <button
          onClick={fetchMovies}
          className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
              alt={movie.Title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.Title}</h2>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
