import React from "react";
import { useWeather } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import UnitToggle from "./components/UnitToggle";
import ErrorMessage from "./components/ErrorMessage";
import Auth from "./components/Auth";

const App = () => {
  const { weatherData, error } = useWeather();

  const getGradient = () => {
    if (!weatherData) return "from-blue-500 to-indigo-700";

    const condition = weatherData.weather[0].main.toLowerCase();

    if (condition.includes("cloud")) return "from-gray-400 to-gray-700";
    if (condition.includes("rain")) return "from-blue-800 to-gray-900";
    if (condition.includes("snow")) return "from-white to-blue-300 text-black";
    if (condition.includes("clear")) return "from-yellow-300 to-blue-500";
    return "from-gray-200 to-gray-500";
  };
  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getGradient()} p-4 transition-all duration-500`}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <h1 className="text-3xl font-bold">🌤 Weather Dashboard</h1>
        <SearchBar />
        <div className="self-start">
          <Auth />
        </div>
      </div>
      <div className="flex flex-col max-w-3xl mx-auto space-y-6">
        <UnitToggle />
        <ErrorMessage />
        <WeatherCard />
        <Forecast />
      </div>
    </div>
  );
};

export default App;
