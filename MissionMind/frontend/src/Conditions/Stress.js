import React from "react";
import { Link } from "react-router-dom";

const Stress = () => {
  return (
    <>
      <div className="survey">
        <h1>Stress</h1>
        <p>Description</p>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Stress;
