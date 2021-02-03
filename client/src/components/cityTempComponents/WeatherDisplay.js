import React from "react";
import "../../assets/css/weatherDisplayStyle.css";

function WeatherDisplay(props) {
  if (props.success === false) {
    return (
      <>
        <div className="weather-container">
          <h2>Error, invalid input.</h2>
        </div>
      </>
    );
  }

  const { location, current } = props;

  return (
    <div className="weather-container">
      <h2>
        {location.name}, State of {location.region}, {location.country}
      </h2>
      <div className="info-container">
        <h4>
          {new Date(location.localtime).toLocaleTimeString("en-us", {
            weekday: "long",
          })}
        </h4>
        <h4>{current.weather_descriptions[0]}</h4>
      </div>
      <div className="temperature-container">
        <h1>
          {current.temperature}
          <sup>°C</sup>
        </h1>
        <img src={current.weather_icons[0]} alt="temperature icon" />
      </div>
    </div>
  );
}

export default WeatherDisplay;
