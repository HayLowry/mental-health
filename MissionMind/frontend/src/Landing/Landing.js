import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-page">
        <h1>Missionary Mental Health Gym</h1>
        <p>Get in mental shape!</p>
        <p>Learn more about how to fortify your mental state</p>
        <Link to="/survey">
          <button>Take Survey</button>
        </Link>

        <div className="box-grid">
          <div className="box">
            <h2>Depression</h2>
            <p>Some description here</p>
            <Link to="/depression">
              <button>Learn More</button>
            </Link>
          </div>

          <div className="box">
            <h2>Anxiety</h2>
            <p>Some description here</p>
            <Link to="/anxiety">
              <button>Learn More</button>
            </Link>
          </div>

          <div className="box">
            <h2>Homesickness</h2>
            <p>Some description here</p>
            <Link to="/homesickness">
              <button>Learn More</button>
            </Link>
          </div>

          <div className="box">
            <h2>Stress</h2>
            <p>Some description here</p>
            <Link to="/stress">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
