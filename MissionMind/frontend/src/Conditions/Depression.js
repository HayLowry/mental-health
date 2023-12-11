import React from "react";
import { Link } from "react-router-dom";

const Depression = () => {
  return (
    <>
      <div className="survey">
        <h1>Depression</h1>
        <p>Description</p>
        <a href="https://www.churchofjesuschrist.org/study/ensign/2016/02/depression?lang=eng#p14">
          Link to help with depression
        </a>{" "}
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Depression;
