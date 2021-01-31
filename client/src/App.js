import React from "react";
import CurrentTemperature from "./components/CurrentTemperature";
import "./assets/css/main.css";
import axios from "axios";

axios.defaults.baseURL = "https://desafio-aevo-backend.herokuapp.com/api";

function App() {
  return (
    <>
      <CurrentTemperature />
    </>
  );
}

export default App;
