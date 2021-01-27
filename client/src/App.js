import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weatherReport, setWeatherReport] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "https://desafio-aevo-backend.herokuapp.com/current",
      data: { city },
    });

    const data = await response.data;
    setWeatherReport(data);

    console.log(data);
  };
  // Evita que o react tente acessar .current.temperature de undefined no primeiro render.
  const temperature =
    weatherReport.current && weatherReport.current.temperature;
  return (
    <>
      <h1>Teste</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Choose your city</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <h1>Temperatura: {temperature || null}</h1>
    </>
  );
}

export default App;
