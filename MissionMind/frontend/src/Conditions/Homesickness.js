import React from "react";
import { Link } from "react-router-dom";

const Homesickness = () => {
  return (
    <>
      <div className="survey">
        <h1>Homesickness</h1>
        <p>Description</p>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Homesickness;
