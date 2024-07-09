import React from "react";
import DataCounts from "../components/DataCounts";
import Graphs from "../components/Graphs";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <DataCounts />
      <Graphs />
    </div>
  );
};

export default Dashboard;