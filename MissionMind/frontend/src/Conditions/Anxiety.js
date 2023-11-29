import React from "react";
import { Link } from "react-router-dom";

const Anxiety = () => {
  return (
    <>
      <div className="survey">
        <h1>Anxiety</h1>
        <p>Description</p>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Anxiety;
