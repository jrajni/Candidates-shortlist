import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SingleCandidate = () => {
  let [candidateStatus, setCandidateStatus] = useState([]);
  let [candidate, setCandidate] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("candidateStatus");
    let one = JSON.parse(data).filter((item) => item.id === state.item.id);
    setCandidate(one[0]);
    setCandidateStatus(JSON.parse(data));
  }, []);

  return (
    <div>
      <div className="single-candidate">
        <div class="product-card">
          <img
            src={state && state.item && state.item.Image}
            alt="Avatar"
            className="single-can-img "
          />

          <p className="btns">
            {candidate && candidate.status === "all" ? (
              <>
                <button
                  style={{ marginRight: 5 }}
                  className="btn2"
                  onClick={() => {
                    candidateStatus.map((item) => {
                      if (item.id == state.item.id) {
                        item.status = "shortlisted";
                      }
                    });
                    setCandidateStatus(candidateStatus);
                    setCandidate(candidateStatus);
                    localStorage.setItem(
                      "candidateStatus",
                      JSON.stringify(candidateStatus)
                    );
                    navigate("../", { replace: true });
                  }}
                >
                  Shortlist
                </button>
                {""}
                <button
                  className="btn1"
                  onClick={() => {
                    candidateStatus.map((item) => {
                      if (item.id == state.item.id) {
                        item.status = "rejected";
                      }
                    });
                    setCandidateStatus(candidateStatus);
                    setCandidate(candidateStatus);
                    localStorage.setItem(
                      "candidateStatus",
                      JSON.stringify(candidateStatus)
                    );
                    navigate("../", { replace: true });
                  }}
                >
                  Reject
                </button>
              </>
            ) : (
              <button
                className={candidate.status == "shortlisted" ? "btn2" : "btn1"}
              >
                {candidate.status}
              </button>
            )}
          </p>
        </div>

        <div className="card-data" style={{ marginTop: 20 }}>
          <h1>
            <i>Details of Candidate</i>
          </h1>
          <h2>
            <strong>ID</strong> : {state && state.item && state.item.id}
          </h2>
          <h2>Name : {state && state.item && state.item.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCandidate;
