import React, { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const SearchBar = () => {
  const { setCity } = useWeather();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        className="px-4 py-2 rounded-lg border outline-none"
        type="text"
        placeholder="Search city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg 
      hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
