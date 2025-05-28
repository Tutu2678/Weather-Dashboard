import React from "react";
import { useWeather } from "../context/WeatherContext";

const Forecast = () => {
  const { forecastData, unit, forecastLoading } = useWeather();

  if (forecastLoading) return <p>Loading forecast...</p>;
  if (!forecastData) return null;

  // Get one forecast per day (around 12:00 PM)
  const dailyForecasts = forecastData.list.filter((entry) =>
    entry.dt_txt.includes("12:00:00")
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6 ">
      {dailyForecasts.map((day) => (
        <div
          key={day.dt}
          className="  hover:bg-slate-600/80 transition-colors duration-300 p-4  text-center backdrop-blur-sm rounded-lg mb-4 
        border-gray-800 border shadow-[0_0_15px_rgba(167,139,250,0.2)] bg-transparent"
        >
          <p className="font-semibold">
            {new Date(day.dt_txt).toLocaleDateString()}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
            className="mx-auto"
          />
          <p>{day.weather[0].main}</p>
          <p>
            {day.main.temp}°{unit === "metric" ? "C" : "F"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
