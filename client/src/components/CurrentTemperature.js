import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import CityInput from "./CityInput";
import CityChart from "./CityChart";

function CurrentTemperature() {
  const [weatherReport, setWeatherReport] = useState(false);

  const handleSubmit = async (city) => {
    const response = await axios({
      method: "POST",
      url: "/current",
      data: { city },
    });
    const data = await response.data;
    setWeatherReport(data);
  };

  return (
    <>
      <CityInput handleSubmit={handleSubmit} />
      {weatherReport ? <WeatherDisplay {...weatherReport} /> : null}
      <CityChart />
    </>
  );
}

export default CurrentTemperature;
