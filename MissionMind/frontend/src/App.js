import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Survey from "./Survey/Survey";
import Depression from "./Conditions/Depression";
import Anxiety from "./Conditions/Anxiety";
import Homesickness from "./Conditions/Homesickness";
import Stress from "./Conditions/Stress";
import SubmissionList from "./Analytics/Analytics";
import Nav from "./Nav/Nav";
import { Component } from "react";
import axios from "axios";
import { API_URL } from "./constants";

class App extends Component {
  state = {
    submissions: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URL).then(res => this.setState({ submissions: res.data }));
  };

  resetState = () => {
    this.getStudents();
  };

  render () {
    return(
    <div className="App">
      <Router>
        <header>{<Nav />}</header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/survey" element={<Survey create={true}  />} />
            <Route path="/depression" element={<Depression />} />
            <Route path="/anxiety" element={<Anxiety />} />
            <Route path="/homesickness" element={<Homesickness />} />
            <Route path="/stress" element={<Stress />} />
            <Route path="/analytics" element={<SubmissionList submissions={this.state.submissions} resetState={this.resetState} />} />
          </Routes>
        </div>
        <footer />
      </Router>
    </div>
    );
  }
}

export default App;
