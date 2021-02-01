import React from "react";
import CurrentTemperature from "./components/CurrentTemperature";
import CityChart from "./components/CityChart";
import "./assets/css/main.css";

function App() {
  return (
    <>
      <CurrentTemperature />
      <CityChart />
    </>
  );
}

export default App;
