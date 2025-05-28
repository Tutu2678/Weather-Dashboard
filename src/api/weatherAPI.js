const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (city, unit) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  if (!res.ok) throw new Error("City not found or API error");
  return res.json();
};

export const fetchForecast = async (city, unit) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  if (!res.ok) throw new Error("Forecast not available");
  return res.json();
};
