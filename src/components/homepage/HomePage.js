import React, { useState, useEffect } from "react";
import "./HomePage.css";
import ShowName from "./ShowName";
const HomePage = ({ summaryData }) => {
  const [showList, setShowList] = useState([]);
  const getData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const jsonData = await response.json();
    setShowList(jsonData);
  };
  summaryData(showList);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ShowName showsList={showList} />
    </div>
  );
};

export default HomePage;
