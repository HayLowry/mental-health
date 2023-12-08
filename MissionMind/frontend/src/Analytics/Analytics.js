import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SubmissionList from "../components/SubmissionList";
import axios from "axios";
import { API_URL } from "../constants";

class Analytics extends Component {
  state = {
    submissions: []
  };

  componentDidMount() {
    this.resetState();
  }

  getSubmissions = () => {
    axios.get(API_URL).then(res => this.setState({ submissions: res.data }));
  };

  resetState = () => {
    this.getSubmissions();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <SubmissionList
              submissions={this.state.submissions}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Analytics;