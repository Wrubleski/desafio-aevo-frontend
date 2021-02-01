import React from "react";
import CurrentTemperature from "./components/CurrentTemperature";
import CityChart from "./components/CityChart";
import "./assets/css/main.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <CurrentTemperature />
        <CityChart />
      </div>
    </>
  );
}

export default App;
