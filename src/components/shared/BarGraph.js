// src/MyChart.js
import React from "react";
import ReactECharts from "echarts-for-react";

const BarGraph = () => {
  const option = {
    title: {
      text: "Data Graph",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default BarGraph;
