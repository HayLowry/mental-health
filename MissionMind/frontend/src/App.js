import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Survey from "./Survey/Survey";
import Depression from "./Conditions/Depression";
import Anxiety from "./Conditions/Anxiety";
import Homesickness from "./Conditions/Homesickness";
import Stress from "./Conditions/Stress";
import Analytics from "./Analytics/Analytics";
import Nav from "./Nav/Nav";
import { Component } from "react";


class App extends Component {
  render () {
    return(
    <div className="App">
      <Router>
        <header>{<Nav />}</header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/survey" element={<Survey create={true} />} />
            <Route path="/depression" element={<Depression />} />
            <Route path="/anxiety" element={<Anxiety />} />
            <Route path="/homesickness" element={<Homesickness />} />
            <Route path="/stress" element={<Stress />} />
            <Route path="/analytics" element={<Analytics create={false}/>} />
          </Routes>
        </div>
        <footer />
      </Router>
    </div>
    );
  }
}

export default App;
