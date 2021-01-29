import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
import WeatherDisplay from "./WeatherDisplay";
import CityInput from "./CityInput";

function CurrentTemperature() {
  const [weatherReport, setWeatherReport] = useState({});

  const handleSubmit = async (city) => {
    const response = await axios({
      method: "POST",
      url: "https://desafio-aevo-backend.herokuapp.com/current",
      data: { city },
    });
    const data = await response.data;
    setWeatherReport(data);
  };

  return (
    <>
      <CityInput handleSubmit={handleSubmit} />
      {_.isEmpty(weatherReport) ? null : <WeatherDisplay {...weatherReport} />}
    </>
  );
}

export default CurrentTemperature;
