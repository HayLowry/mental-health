import React from "react";
import { Link } from "react-router-dom";

const Survey = () => {
  return (
    <>
      <div className="survey">
        <h1>Survey</h1>
        <p>survey stuff</p>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Survey;
