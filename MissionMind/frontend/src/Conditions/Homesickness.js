import React from "react";
import { Link } from "react-router-dom";

const Homesickness = () => {
  return (
    <>
      <div className="survey">
        <h1>Homesickness</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "50px",
            paddingLeft: "10px", // Add padding or adjust as needed
          }}
        >
          <img src={"/homesick.jpeg"} alt={"Christ"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Adjust as needed
              marginRight: "100px", // Add margin or adjust as needed
            }}
          >
            <p>
              For many missionaries, this is their first time away from home.
              Away from loved ones in an unfamilar face, homesickess is a common
              condition. Especially around holidays or birthdays, it is common
              for missionaries to miss home. While these feelings are normal and
              even healthy to an extent, too much can be damaging to one's
              mental wellbeing.{" "}
              <a href="https://www.churchofjesuschrist.org/study/ya-weekly/2021/04/dealing-with-homesickness-on-my-mission?lang=eng">
                If you are feeling these pains of homesickness, please click
                this link.
              </a>
            </p>
          </div>
        </div>
        <div style={{ marginTop: "70px" }}>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homesickness;
