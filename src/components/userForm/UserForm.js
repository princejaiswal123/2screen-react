import React from "react";
import "./UserForm.css";

const UserForm = ({ movieName, cancel }) => {
  const btnHandler = () => {
    cancel();
  };
  return (
    <div className="form">
      <div className="container">
        <h2> Movie name : {movieName}</h2>
        <button onClick={btnHandler} className="cancel-btn">
          X
        </button>
      </div>
      <div className="form-cont">
        <div className="form-sub-cont">
          <div className="label">User name</div>
          <input type="text" />
        </div>
        <div className="form-sub-cont">
          <div className="label"> Select your gender:</div>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Male</label>
          <input type="radio" id="age2" name="age" value="60" />
          <label for="age2">Female</label>
        </div>
        <div className="form-sub-cont">
          <div className="label">Age</div>
          <input type="number" />
        </div>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};

export default UserForm;
