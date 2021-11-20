import React from "react";
// import Candidates from "./Home";

const Navbar = (props) => {
  return (
    <nav>
      <div className="brand">
        <h3>Candidate</h3>
      </div>
      <div className="navigation">
        <div className="search">
          <div className="search-content">
            <button className="search-button">
              <i class="fa fa-search"></i>
            </button>
            <input
              onChange={(e) => {
                props.onSearchChange(e.target.value);
              }}
              value={props.navbar}
              type="text"
              className="search-input"
              placeholder="Search here..."
            />
          </div>
        </div>
        <ul className="menu" style={{ marginLeft: -30 }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shortlisted">Shortlist</a>
          </li>
          <li>
            <a href="/rejected">Rejected</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
