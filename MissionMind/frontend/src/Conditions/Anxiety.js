import React from "react";
import { Link } from "react-router-dom";

const Anxiety = () => {
  return (
    <>
      <div className="survey">
        <h1>Anxiety</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "50px",
            paddingLeft: "10px", // Add padding or adjust as needed
          }}
        >
          <img src={"/anxiety.jpeg"} alt={"Christ"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Adjust as needed
              marginRight: "100px", // Add margin or adjust as needed
            }}
          >
            <p>
              The mission field can be an enviorment of anxiety for many
              missionaries, both new and old. At times it seems like there are
              so many concerns that there is no way out. The gospel teaches us
              that this is not the case, and that through the gospel of Jesus
              Christ we can find peace.{" "}
              <a href="https://www.churchofjesuschrist.org/study/new-era/2017/04/facing-anxiety?lang=eng">
                If you are struggling with anxiety, please click this link for
                material on how to overcome these feelings.
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

export default Anxiety;
