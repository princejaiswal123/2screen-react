import "./App.css";
import HomePage from "./components/homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./components/SummaryPage/Summary";
import React, { useState } from "react";
import Navbar from "./components/routing/Navbar";

function App() {
  const [showSummary, setShowSummary] = useState([]);
  const summaryData = (summData) => {
    setShowSummary(summData);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage summaryData={summaryData} />} />
        <Route
          path="/summary/:summaryid"
          element={<Summary data={showSummary} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
