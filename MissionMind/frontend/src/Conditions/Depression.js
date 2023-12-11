import React from "react";
import { Link } from "react-router-dom";

const Depression = () => {
  return (
    <>
      <div className="survey">
        <h1>Depression</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "50px",
            paddingLeft: "10px", // Add padding or adjust as needed
          }}
        >
          <img src={"/depression.png"} alt={"Christ"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Adjust as needed
              marginRight: "100px", // Add margin or adjust as needed
            }}
          >
            <p>
              Being in an unknown enviorment such as the mission field can be a
              challenging thing. Missionaries get the experience great joy by
              inviting others to come unto Christ, but at the same time, there
              are days that can be challenging. Missionary work can be
              difficult, and there are people who will not want to hear the
              message you bring. While this can be discouraging, Jesus Christ
              provides the hope and joy that can overpower these feelings of
              despair.{" "}
              <a href="https://www.churchofjesuschrist.org/study/ensign/2016/02/depression?lang=eng">
                To learn how to fight these feelings of doubt using the
                Atonement, please click this link.
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

export default Depression;
