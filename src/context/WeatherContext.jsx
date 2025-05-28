import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather, fetchForecast } from "../api/weatherAPI";

// Create context
const WeatherContext = createContext();

// Custom hook to use context
export const useWeather = () => useContext(WeatherContext);

// Provider component
export const WeatherProvider = ({ children }) => {
  // Local state
  const [city, setCity] = useState(
    () => localStorage.getItem("lastCity") || "London"
  );
  const [unit, setUnit] = useState("metric");

  // Save city to localStorage whenever it changes
  useEffect(() => {
    if (city) {
      localStorage.setItem("lastCity", city);
    }
  }, [city]);

  // Unit toggle function
  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  // Fetch current weather
  const {
    data: weatherData,
    error: weatherError,
    isLoading: weatherLoading,
  } = useQuery({
    queryKey: ["weather", city, unit],
    queryFn: () => fetchWeather(city, unit),
    refetchInterval: 30000,
    enabled: !!city,
  });

  // Fetch forecast data
  const {
    data: forecastData,
    error: forecastError,
    isLoading: forecastLoading,
  } = useQuery({
    queryKey: ["forecast", city, unit],
    queryFn: () => fetchForecast(city, unit),
    refetchInterval: 30000,
    enabled: !!city,
  });

  const error = weatherError || forecastError;

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        unit,
        toggleUnit,
        weatherData,
        forecastData,
        weatherLoading,
        forecastLoading,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
