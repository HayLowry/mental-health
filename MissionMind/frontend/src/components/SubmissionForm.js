import React from "react";
import styles from "../Survey/Survey.module.css";
import axios from "axios";
import { API_URL } from "../constants";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


class SubmissionForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    stress: 3,
    anxiety: 3,
    sleep: 3,
    homesickness: 3,
    satisfaction: 3,
    spirit: 3
  };

  componentDidMount() {
    if (this.props.submission) {
      const { pk, name, date, stress, anxiety, sleep, homesickness, satisfaction, spirit } = this.props.submission;
      this.setState({ pk, name, date, stress, anxiety, sleep, homesickness, satisfaction, spirit });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newSubmission = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.setState({ 
        pk: 0,
        name: "",
        stress: 3,
        anxiety: 3,
        sleep: 3,
        homesickness: 3,
        satisfaction: 3,
        spirit: 3 
      });
    });
  };

  editSubmission = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.props.submission ? this.editSubmission : this.newSubmission}>
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
          <br />
          <h2>On a Scale of 1-5, Rate the following:</h2>
          <br />
          <FormGroup>
            <Label for="stress">Stress:</Label>
            <br />
            <p>{this.state.stress}</p>
            <Input
              type="range"
              name="stress"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.stress)}
              className={styles.slider}
            />
            
          </FormGroup>
          <FormGroup>
            <Label for="anxiety">Anxiety:</Label>
            <br />
            <p>{this.state.anxiety}</p>
            <Input
              type="range"
              name="anxiety"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.anxiety)}
              className={styles.slider}
            />
          </FormGroup>
          <FormGroup>
            <Label for="sleep">Sleep:</Label>
            <br />
            <p>{this.state.sleep}</p>
            <Input
              type="range"
              name="sleep"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.sleep)}
              className={styles.slider}
            />
          </FormGroup>
          <FormGroup>
            <Label for="homesickness">Homesickness:</Label>
            <br />
            <p>{this.state.homesickness}</p>
            <Input
              type="range"
              name="homesickness"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.homesickness)}
              className={styles.slider}
            />
          </FormGroup>
          <FormGroup>
            <Label for="satisfaction">Satisfaction:</Label>
            <br />
            <p>{this.state.satisfaction}</p>
            <Input
              type="range"
              name="satisfaction"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.satisfaction)}
              className={styles.slider}
            />
          </FormGroup>
          <FormGroup>
            <Label for="spirit">Spirit:</Label>
            <br />
            <p>{this.state.spirit}</p>
            <Input
              type="range"
              name="spirit"
              min="1"
              max="5"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.spirit)}
              className={styles.slider}
            />
          </FormGroup>
          <br />
          <Button>Send</Button>
        </Form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default SubmissionForm;
