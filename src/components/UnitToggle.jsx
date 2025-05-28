import React from "react";
import { useWeather } from "../context/WeatherContext";

const UnitToggle = () => {
  const { unit, toggleUnit } = useWeather();

  return (
    <button
      onClick={toggleUnit}
      className="w-auto self-start bg-transparent border text-black px-4 py-2 rounded-lg 
      hover:cursor-pointer hover:text-white hover:white transition-colors duration-300"
    >
      °{unit === "metric" ? "C" : "F"}
    </button>
  );
};

export default UnitToggle;
