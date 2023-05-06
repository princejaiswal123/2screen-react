import { useParams } from "react-router-dom";
import "./Summary.css";
import React, { useState } from "react";
import UserForm from "../userForm/UserForm";
const Summary = ({ data }) => {
  const param = useParams();
  const result = data.find((item) => item.score == param.summaryid);
  const [movie, setMovie] = useState(false);

  const btnHandler = (id) => {
    const ans = data.find((item) => item.show.id === id);
    console.log(data);
    console.log("btn");
    if (ans) {
      setMovie(true);
    }
  };
  const cancelHander = () => {
    setMovie(false);
  };
  return (
    <>
      {result ? (
        <div>
          <div className="summary-parent">
            <div className="sum-name">
              Summary of show :{" "}
              <span className="name">{result?.show?.name}</span>{" "}
            </div>
            <div className="summary">
              <div>{result?.show?.summary}</div>
              <button
                className="movie"
                onClick={() => btnHandler(result.show.id)}
              >
                Book movie ticket
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="sum-msg">
          Please click the view button on homepage to view the summary of a
          particular show .
        </div>
      )}
      {movie && (
        <UserForm movieName={result?.show?.name} cancel={cancelHander} />
      )}
    </>
  );
};

export default Summary;
