import React, { useState } from "react";
import "./SearchBox.css";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "") return;

    onSearch(city);
    setCity("");
  };

  return (
    <motion.form
      className="search-box"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        type="text"
        placeholder="Search city weather..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        <FiSearch />
      </button>
    </motion.form>
  );
};

export default SearchBox;
