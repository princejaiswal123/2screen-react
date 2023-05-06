import React from "react";
import "./ShowName.css";
import { Link } from "react-router-dom";
const ShowName = ({ showsList }) => {
  return (
    <div className="parent ">
      <div className="heading flex">
        <h3 className="flex-item">Sr.no.</h3>
        <h3 className="flex-item">Show Name</h3>
        <h3 className="flex-item">Language</h3>
        <h3 className="flex-item">Summary</h3>
      </div>
      {showsList.map((item, index) => {
        return (
          <div key={index} className="flex item">
            <div className="flex-child">{index + 1} .</div>
            <div className="flex-child">{item.show.name}</div>
            <div className="flex-child">{item.show.language}</div>
            <Link to={`/summary/${item.score}`} className="flex-child">
              <button className="btn">view</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShowName;
