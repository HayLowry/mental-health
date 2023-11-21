import React from "react";
import { Link } from "react-router-dom";

const Depression = () => {
  return (
    <>
      <div className="survey">
        <h1>Depression</h1>
        <p>Description</p>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Depression;
