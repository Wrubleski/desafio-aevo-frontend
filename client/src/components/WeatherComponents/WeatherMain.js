import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import CityInput from "./CityInput";
import RequestWrapper from "../../wrappers/RequestWrapper";
import CityChart from "./CityChart";

function Weather() {
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

export default Weather;
