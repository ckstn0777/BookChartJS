// import { useCallback, useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="App">
      <PieChart />
      <BarChart />
    </div>
  );
}

export default App;
