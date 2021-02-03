import React, { useState } from "react";
import WeatherDisplay from "./cityTempComponents/WeatherDisplay";
import CityInput from "./cityTempComponents/CityInput";
import RequestWrapper from "../wrappers/RequestWrapper";
import CityChart from "./cityTempComponents/CityChart";

function CurrentTemperature() {
  const [weatherReport, setWeatherReport] = useState(false);
  const [shouldChartUpdate, setShouldChartUpdate] = useState(false);

  const handleSubmit = async (city) => {
    const data = await RequestWrapper.postRequest("/current", { city });
    setWeatherReport(data);
    setShouldChartUpdate(!shouldChartUpdate);
  };

  return (
    <>
      <CityInput handleSubmit={handleSubmit} />
      {weatherReport ? <WeatherDisplay {...weatherReport} /> : null}
      <CityChart shouldUpdate={shouldChartUpdate} />
    </>
  );
}

export default CurrentTemperature;
