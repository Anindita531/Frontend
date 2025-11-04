import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  const [city, setCity] = useState("Kolkata");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "12734f0c64593610c4125800e23efbfb";

  async function fetchWeather(cityName) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError(null);
      }
    } catch (err) {
      setError("Network Error");
      setWeather(null);
    }
  }

  useEffect(() => {
    fetchWeather(city);
  }, []); // load once

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🌤️ React Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
