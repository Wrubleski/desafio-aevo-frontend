import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "../assets/css/cityChartStyle.css";

function CityChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        method: "GET",
        url: "/current",
      });

      const data = await response.data;
      setChartData({
        labels: data.map((element) => element.city + " - " + element.country),
        datasets: [
          {
            label: "# of searches",
            data: data.map((element) => element.count),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    }

    fetchData();
  }, [chartData]);

  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{ scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }}
      />
    </div>
  );
}

export default CityChart;
