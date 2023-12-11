import React from "react";
import { Link } from "react-router-dom";

const Stress = () => {
  return (
    <>
      <div className="survey">
        <h1>Stress</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "50px",
            paddingLeft: "10px", // Add padding or adjust as needed
          }}
        >
          <img src={"/stress.jpeg"} alt={"Christ"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Adjust as needed
              marginRight: "100px", // Add margin or adjust as needed
            }}
          >
            <p>
              With many responsibilities, it is commonplace for missionaries to
              feel like are drowning in the day to day activites. This can lead
              to stress that feels impossible to escape. The Atonement of Jesus
              Christ teaches us though that these stresses can be midigated
              through faith and hope.{" "}
              <a href="https://www.churchofjesuschrist.org/study/manual/a-missionarys-mtc-experience-english-2015/other/stress-management?lang=eng">
                To learn more about how to overcome stress, please click this
                link.
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

export default Stress;
