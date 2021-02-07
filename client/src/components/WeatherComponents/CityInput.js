import React, { useState } from "react";
import "../../assets/css/WeatherApp/cityInputStyle.css";

function CityInput({ handleSubmit }) {
  const [city, setCity] = useState("");

  return (
    <div className="city-input-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (city !== "") {
            handleSubmit(city);
            setCity("");
          }
        }}
      >
        <div className="city-label">
          <label htmlFor="city">Browse For Your Weather</label>
        </div>
        <input
          placeholder="Enter your city here."
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CityInput;
