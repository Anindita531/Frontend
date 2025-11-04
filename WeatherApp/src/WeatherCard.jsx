function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div
      style={{
        margin: "30px auto",
        padding: "20px",
        borderRadius: "16px",
        width: "280px",
        boxShadow: "0 0 12px rgba(0,0,0,0.2)",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #a1c4fd, #c2e9fb)",
      }}
    >
      <h2>{name}</h2>
      <h3>{weather[0].main}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="icon"
      />
      <h1>{main.temp}°C</h1>
      <p>💨 Wind: {wind.speed} m/s</p>
      <p>🌡️ Humidity: {main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
