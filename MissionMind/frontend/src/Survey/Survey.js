import React, { useState } from "react";
import styles from "./Survey.module.css";
import axios from "axios";
import { API_URL } from "../constants";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import {redirect} from 'react-router-dom';

class Survey extends React.Component {
  state = {
    pk: 0,
    name: "",
    date: new Date(),
    question1: 3,
    question2: 3,
    question3: 3,
    question4: 3,
    question5: 3
  };


  componentDidMount() {
    if (this.props.survey) {
      const { pk, name, question1, question2, question3, question4, question5 } = this.props.survey;
      this.setState({ pk, name, question1, question2, question3, question4, question5 });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newSubmission = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      redirect("/");
    });
  };

  editSubmission = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      // this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  resetState() {
    this.resetState();
  }

  render() {
    return (
      <div>
        <br /><br />
        <h1>Daily Survey</h1>
        <br /><br />
        
      
        <Form onSubmit={this.props.survey ? this.editSubmission : this.newSubmission}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <br />
            <Input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.name)}
              className={styles.text}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="hidden"
              name="date"
            />
          </FormGroup>
          <br />
          <h2>On a Scale of 1-5, Rate the following:</h2>
          <br />
          <FormGroup>
            <Label for="question1">Stress:</Label>
            <br />
            <p>{this.state.question1}</p>
            <Input
              type="range"
              name="question1"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.email)}
              className={styles.slider}
            />
            
          </FormGroup>
          <FormGroup>
            <Label for="question2">Anxiety:</Label>
            <br />
            <p>{this.state.question2}</p>
            <Input
              type="range"
              name="question2"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.email)}
              className={styles.slider}
            />
          </FormGroup>
          <FormGroup>
            <Label for="question3">Sleep:</Label>
            <br />
            <p>{this.state.question3}</p>
            <Input
              type="range"
              name="question3"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.email)}
              className={styles.slider}
            />
          </FormGroup>
          <FormGroup>
            <Label for="question4">Homesickness:</Label>
            <br />
            <p>{this.state.question4}</p>
            <Input
              type="range"
              name="question4"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.email)}
              className={styles.slider}
            />
          </FormGroup>
          <FormGroup>
            <Label for="question5">Satisfaction:</Label>
            <br />
            <p>{this.state.question5}</p>
            <Input
              type="range"
              name="question5"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.email)}
              className={styles.slider}
            />
          </FormGroup>
          <Button>Send</Button>
        </Form>
      </div>
    );
  }
}

export default Survey;

// function Survey() {
//   // State to store the answers for each question
//   const [answers, setAnswers] = useState({
//     question2: 3, // Default values
//     question3: 3,
//     question4: 3,
//     question5: 3,
//     question6: 3,
//   });

//   // Handle slider value change
//   const handleSliderChange = (question, value) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [question]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can do something with the answers, like sending them to a server
//     console.log("Survey Answers:", answers);
//   };

//   return (
//     <>
//       <div>
//         <h1>Survey</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//       <div>
//           <label htmlFor="question1">Name</label>
//           <br />
//           <input
//             type="text"
//             className={styles.slider}
//           />
//           <span>{answers.question1}</span>
//         </div>

//         <br />

//         <div>
//           <label htmlFor="question2">Question 2</label>
//           <br />
//           <input
//             type="range"
//             min="1"
//             max="5"
//             value={answers.question2}
//             onChange={(e) =>
//               handleSliderChange("question2", parseInt(e.target.value))
//             }
//             className={styles.slider}
//           />
//           <span>{answers.question2}</span>
//         </div>

//         <br />

//         <div>
//           <label htmlFor="question3">Question 3</label>
//           <br />
//           <input
//             type="range"
//             min="1"
//             max="5"
//             value={answers.question3}
//             onChange={(e) =>
//               handleSliderChange("question3", parseInt(e.target.value))
//             }
//             className={styles.slider}
//           />
//           <span>{answers.question3}</span>
//         </div>

//         <br />

//         <div>
//           <label htmlFor="question4">Question 4</label>
//           <br />
//           <input
//             type="range"
//             min="1"
//             max="5"
//             value={answers.question4}
//             onChange={(e) =>
//               handleSliderChange("question4", parseInt(e.target.value))
//             }
//             className={styles.slider}
//           />
//           <span>{answers.question4}</span>
//         </div>

//         <br />

//         <div>
//           <label htmlFor="question5">Question 5</label>
//           <br />
//           <input
//             type="range"
//             min="1"
//             max="5"
//             value={answers.question5}
//             onChange={(e) =>
//               handleSliderChange("question5", parseInt(e.target.value))
//             }
//             className={styles.slider}
//           />
//           <span>{answers.question5}</span>
//         </div>

//         <br />

//         <div>
//           <label htmlFor="question6">Question 6</label>
//           <br />
//           <input
//             type="range"
//             min="1"
//             max="5"
//             value={answers.question5}
//             onChange={(e) =>
//               handleSliderChange("question6", parseInt(e.target.value))
//             }
//             className={styles.slider}
//           />
//           <span>{answers.question6}</span>
//         </div>
//         {/* Repeat similar blocks for other questions... */}

//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <div>
//         <Link to="/">
//           <button>Home</button>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Survey;
