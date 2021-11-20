import React, { useEffect, useState } from "react";
import { fetchCandidates } from "./Service";
import { useNavigate } from "react-router-dom";
let value = [];
const Candidates = (props) => {
  const navigate = useNavigate();
  let [candidates, setCandidates] = useState([]);
  let [filteredCandidates, setfilteredCandidates] = useState([]);

  const fetchData = async () => {
    let ans = await fetchCandidates();
    let localStorageData = localStorage.getItem("candidateStatus");
    ans.map((item) => (item.status = "all"));
    setCandidates(ans);
    if (!localStorageData) {
      localStorage.setItem("candidateStatus", JSON.stringify(ans));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(":status", props);
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
  const showCandidate = (item) => {
    navigate(`/candidate/${item.id}`, { state: { item: item } });
  };
  if (candidates == null) {
    return <div>Loading...</div>;
  }
  value = props.navbar && props.navbar.length ? filteredCandidates : candidates;
  return (
    <div className="candidates">
      <div className="grid-container">
        {value.map((item, index) => {
          return (
            <div className="grid-item" key={item.id}>
              <div className="card" onClick={() => showCandidate(item)}>
                <img
                  className="img"
                  style={{ height: "30%", width: "40%", borderRadius: 10 }}
                  src={item.Image}
                  alt="candidate"
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
