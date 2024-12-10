"use client";

import { useState, useEffect } from "react";
import { fetchIPAddress } from "./utilities/ip.js";
import { fetchWeatherByIP } from "./utilities/weather-stack-api.js";
import WeatherDisplay from "./components/weather-display.js";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const ip = await fetchIPAddress();
        const weatherData = await fetchWeatherByIP(ip);
        setWeather(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-700">Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <WeatherDisplay weather={weather} />
    </div>
  );
}
