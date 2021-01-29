import React, { useState } from "react";
import "../assets/css/cityInputStyle.css";

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
        <input
          placeholder="Enter your city here."
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CityInput;
