import React, { useState } from "react";
import styles from "./Survey.module.css";
import { Link } from "react-router-dom";

function Survey() {
  // State to store the answers for each question
  const [answers, setAnswers] = useState({
    question1: 3, // Default value
    question2: 3,
    question3: 3,
    question4: 3,
    question5: 3,
  });

  // Handle slider value change
  const handleSliderChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the answers, like sending them to a server
    console.log("Survey Answers:", answers);
  };

  return (
    <>
      <div>
        <h1>Survey</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question1">Question 1</label>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.question1}
            onChange={(e) =>
              handleSliderChange("question1", parseInt(e.target.value))
            }
            className={styles.slider}
          />
          <span>{answers.question1}</span>
        </div>

        <br />

        <div>
          <label htmlFor="question2">Question 2</label>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.question2}
            onChange={(e) =>
              handleSliderChange("question2", parseInt(e.target.value))
            }
            className={styles.slider}
          />
          <span>{answers.question2}</span>
        </div>

        <br />

        <div>
          <label htmlFor="question3">Question 3</label>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.question3}
            onChange={(e) =>
              handleSliderChange("question3", parseInt(e.target.value))
            }
            className={styles.slider}
          />
          <span>{answers.question3}</span>
        </div>

        <br />

        <div>
          <label htmlFor="question4">Question 4</label>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.question4}
            onChange={(e) =>
              handleSliderChange("question4", parseInt(e.target.value))
            }
            className={styles.slider}
          />
          <span>{answers.question4}</span>
        </div>

        <br />

        <div>
          <label htmlFor="question5">Question 5</label>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.question5}
            onChange={(e) =>
              handleSliderChange("question5", parseInt(e.target.value))
            }
            className={styles.slider}
          />
          <span>{answers.question5}</span>
        </div>
        {/* Repeat similar blocks for other questions... */}

        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
}

export default Survey;
