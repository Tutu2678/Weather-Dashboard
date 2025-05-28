import React from "react";
import { useWeather } from "../context/WeatherContext";

const ErrorMessage = () => {
  const { error } = useWeather();

  return (
    error && (
      <div className="bg-red-200 text-red-800 p-2 mt-4 rounded">
        {error.message || "Something went wrong"}
      </div>
    )
  );
};

export default ErrorMessage;
