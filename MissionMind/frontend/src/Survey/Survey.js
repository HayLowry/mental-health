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

  // Handle button click
  const handleButtonClick = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const smileyFaces = ["😄", "😊", "😐", "😕", "😭"];

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
          <br />
          {smileyFaces.map((face, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleButtonClick("question1", index + 1)}
              className={styles.button} // Add your styling class
              style={{
                background:
                  answers.question1 === index + 1 ? "lightblue" : "white",
              }}
            >
              {face}
            </button>
          ))}
        </div>

        <br />

        <div>
          <label htmlFor="question2">Question 2</label>
          <br />
          {smileyFaces.map((face, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleButtonClick("question2", index + 1)}
              className={styles.button} // Add your styling class
              style={{
                background:
                  answers.question2 === index + 1 ? "lightblue" : "white",
              }}
            >
              {face}
            </button>
          ))}
        </div>

        <br />

        <div>
          <label htmlFor="question3">Question 3</label>
          <br />
          {smileyFaces.map((face, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleButtonClick("question3", index + 1)}
              className={styles.button} // Add your styling class
              style={{
                background:
                  answers.question3 === index + 1 ? "lightblue" : "white",
              }}
            >
              {face}
            </button>
          ))}
        </div>

        <br />

        <div>
          <label htmlFor="question4">Question 4</label>
          <br />
          {smileyFaces.map((face, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleButtonClick("question4", index + 1)}
              className={styles.button} // Add your styling class
              style={{
                background:
                  answers.question4 === index + 1 ? "lightblue" : "white",
              }}
            >
              {face}
            </button>
          ))}
        </div>

        <br />

        <div>
          <label htmlFor="question5">Question 5</label>
          <br />
          {smileyFaces.map((face, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleButtonClick("question5", index + 1)}
              className={styles.button} // Add your styling class
              style={{
                background:
                  answers.question5 === index + 1 ? "lightblue" : "white",
              }}
            >
              {face}
            </button>
          ))}
        </div>
        {/* Repeat similar blocks for other questions... */}
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
}

export default Survey;
