import React from "react";
import Weather from "./components/WeatherComponents/WeatherMain";

import "./assets/css/main.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <Weather />
      </div>
    </>
  );
}

export default App;
