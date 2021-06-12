import React, { useState } from "react";
import Imagecard from "./Image";

const Tag = (props) => {
  const [pID, setPatient] = useState("");
  const [result, setResult] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      PatientID: pID,
      DoctorID: props.value.filter((patient) => patient.PatientID === pID)[0]
        .DoctorID,
      Result: result,
      FundusImageURL: props.value.filter(
        (patient) => patient.PatientID === pID
      )[0].FundusImageURL,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://lit-falls-40108.herokuapp.com/tags", requestOptions)
      .then((result) => setSuccess(true))
      .catch(() => setSuccess(false));
  };

  return (
    <div className="ui form">
      <div className="field">
        <div className="ui left icon input">
          <input
            type="text"
            onChange={(event) => setPatient(event.target.value)}
            placeholder="Search Patient..."
          ></input>
          <i className="users icon"></i>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="field">
        {props.value.filter((patient) => patient.PatientID === pID).length >
        0 ? (
          <Imagecard
            url={
              "https://lit-falls-40108.herokuapp.com/" +
              props.value.filter((patient) => patient.PatientID === pID)[0]
                .FundusImageURL
            }
          />
        ) : (
          <div className="ui violet message">No patients with that ID</div>
        )}
      </div>
      <br></br>
      <br></br>
      <div className="field">
        <div className="ui large buttons">
          <button className="ui negative button" onClick={()=>setResult(1)}>Positive</button>
          <div className="or"></div>
          <button className="ui positive button " onClick={()=>setResult(0)}>Negative</button>
        </div>
      </div>
      <br></br>
      <div className="field">
        <div className="ui button" onClick={handleSubmit}>
          Submit
        </div>
      </div>
      {success ? (
        <div className="ui positive message">
          <i className="close icon"></i>
          <div className="header">Details Updated</div>
        </div>
      ) : null}
      {success === false ? (
        <div className="ui negative message">
          <i className="close icon"></i>
          <div className="header">Error occured</div>
        </div>
      ) : null}
    </div>
  );
};
export default Tag;
