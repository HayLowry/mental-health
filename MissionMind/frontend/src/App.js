import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Survey from "./Survey/Survey";
import Depression from "./Conditions/Depression";
import Anxiety from "./Conditions/Anxiety";
import Homesickness from "./Conditions/Homesickness";
import Stress from "./Conditions/Stress";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/depression" element={<Depression />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/homesickness" element={<Homesickness />} />
          <Route path="/stress" element={<Stress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
