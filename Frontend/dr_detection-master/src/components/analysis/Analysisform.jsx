import React, { useState } from "react";
import Image from "./Imagecard";

const Form = (props) => {
  const [observation, setObservation] = useState("");
  const [success,setSuccess] = useState(null);
  const [prescription, setPrescription] = useState("");
  const ID = window.location.pathname.substring(9);

  const onObservationChange = (event) => {
    setObservation(event.target.value);
  };
  const onPrescriptionChange = (event) => {
    setPrescription(event.target.value);
  };
  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Observation: observation,
      Prescription: prescription,
      Verified: "Yes",
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://lit-falls-40108.herokuapp.com/patients/" +
        props.value.filter((patient) => patient.PatientID === ID)[0]._id,
      requestOptions
    ).then((result) =>setSuccess(true)).catch(()=>setSuccess(false));
  };

  return (
    <div>
      <div className="ui grid">
        <div className="row"></div>
        <h2 className="ui horizontal divider">Analysis Results</h2>
        <div className="row">
          <div className="six wide column">
            <div className="sub header">Name</div>
            <div className="ui segment">
              {
                props.value.filter((patient) => patient.PatientID === ID)[0]
                  .PatientName
              }
            </div>
          </div>
          <div className="six wide column">
            <div className="sub header">Patient ID</div>
            <div className="ui segment">{ID}</div>
          </div>
        </div>
        <div className="sub header">Images</div>
        <div className="row">
          <Image
            url={
              "https://lit-falls-40108.herokuapp.com/" +
              props.value.filter((patient) => patient.PatientID === ID)[0]
                .FundusImageURL
            }
          />
        </div>
        <div className="row">
          <div className="six wide column">
            <div className="sub header">Result</div>
            {props.value.filter((patient) => patient.PatientID === ID)[0]
              .Result === "No" ? (
              <div className="ui green inverted segment">Negative</div>
            ) : (
              <div className="ui red inverted segment">Positive</div>
            )}
          </div>
        </div>
      </div>
      <div className="ui form">
        <div className="row">
          <br></br>
          <div className="sub header">Observation</div>
          <br></br>
          <div className="ui form">
            <div className="field">
              <textarea onChange={onObservationChange} value={props.value.filter((patient) => patient.PatientID === ID)[0]
                  .Observation
                  ? props.value.filter((patient) => patient.PatientID === ID)[0]
                      .Observation
                  : null}>
              
              </textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <br></br>
          <div className="sub header">Prescription</div>
          <br></br>
          <div className="ui form">
            <div className="field">
              <textarea onChange={onPrescriptionChange} value={props.value.filter((patient) => patient.PatientID === ID)[0]
                  .Prescription
                  ? props.value.filter((patient) => patient.PatientID === ID)[0]
                      .Prescription
                  : null}>
              </textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <br></br>
          <div className="ui button" onClick={handleSubmit}>
            Submit
          </div>
          {success?<div className="ui positive message">
            <i className="close icon"></i>
            <div className="header">Details Updated</div>
          </div>:null}
          {success===false?<div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">Error occured</div>
          </div>:null}
          
        </div>
      </div>
    </div>
  );
};
export default Form;
