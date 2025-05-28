import React from "react";
import { useWeather } from "../context/WeatherContext";

const WeatherCard = () => {
  const { weatherData, unit, weatherLoading } = useWeather();

  if (weatherLoading) return <p>Loading current weather...</p>;
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;

  return (
    <div
      className="p-6 text-center space-y-2  backdrop-blur-sm rounded-lg mb-4 
        border-gray-800 border shadow-[0_0_15px_rgba(167,139,250,0.2)] bg-transparent hover:bg-slate-600/80 transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg">{weather[0].description}</p>
      <p>
        Temp: {main.temp}°{unit === "metric" ? "C" : "F"}
      </p>
      <p>Humidity: {main.humidity}%</p>
      <p>
        Wind: {wind.speed} {unit === "metric" ? "m/s" : "mph"}
      </p>
    </div>
  );
};

export default WeatherCard;
