import React from "react";
import CityTempApp from "./components/CityTempApp";

import "./assets/css/main.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <CityTempApp />
      </div>
    </>
  );
}

export default App;
