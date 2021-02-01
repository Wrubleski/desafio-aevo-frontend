import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import CityInput from "./CityInput";
import RequestWrapper from "../wrappers/RequestWrapper";

function CurrentTemperature() {
  const [weatherReport, setWeatherReport] = useState(false);

  const handleSubmit = async (city) => {
    const data = await RequestWrapper.postRequest("/current", { city });
    setWeatherReport(data);
  };

  return (
    <>
      <CityInput handleSubmit={handleSubmit} />
      {weatherReport ? <WeatherDisplay {...weatherReport} /> : null}
    </>
  );
}

export default CurrentTemperature;
