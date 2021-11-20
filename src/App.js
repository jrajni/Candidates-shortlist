import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Candidate from "./SingleCandidate";
import Status from "./Status";
import Navbar from "./Navbar";
function App() {
  const [navbar, setNav] = useState();
  const onSearchChange = (val) => {
    setNav(val);
  };
  return (
    <div className="App">
      <Router>
        <Navbar module="Home" navbar={navbar} onSearchChange={onSearchChange} />
        <Routes>
          <Route exact path="/" element={<Home navbar={navbar} />}></Route>

          <Route
            exact
            path="/candidate/:candidateId"
            element={<Candidate navbar={navbar} />}
          ></Route>
          <Route
            exact
            path="/:candidateStatus"
            element={<Status navbar={navbar} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
