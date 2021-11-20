import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
let value = [];
const Candidates = (props) => {
  const navigate = useNavigate();
  let [candidates, setCandidates] = useState([]);
  let [filteredCandidates, setfilteredCandidates] = useState([]);
  const fetchData = async () => {
    let localStorageData = localStorage.getItem("candidateStatus");

    if (localStorageData && JSON.parse(localStorageData)) {
      let filtered = JSON.parse(localStorageData).filter(
        (item) => item.status == window.location.pathname.split("/")[1]
      );
      setCandidates(filtered);
    }
  };
  useEffect(() => {
    let filtered = candidates.filter((item) => {
      if (
        item.name &&
        props.navbar &&
        item.name.toLowerCase().includes(props.navbar.toLowerCase())
      )
        return item;
    });
    setfilteredCandidates(filtered);
    value =
      props.navbar && props.navbar.length ? filteredCandidates : candidates;
  }, [props.navbar]);
  useEffect(() => {
    fetchData();
  }, []);
  const showCandidate = (item) => {
    navigate(`/candidate/${item.id}`, { state: { item: item } });
  };
  value = props.navbar && props.navbar.length ? filteredCandidates : candidates;
  if (candidates == null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="candidates">
      <div className="grid-container">
        {value.map((item, index) => {
          return (
            <div className="grid-item" key={index}>
              <div className="card" onClick={() => showCandidate(item)}>
                <img
                  className="img"
                  src={item.Image}
                  alt="Avatar"
                  style={{ height: "30%", width: "40%", borderRadius: 10 }}
                />
                <div className="container">
                  <h4>
                    <b> {item.name}</b>
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Candidates;
