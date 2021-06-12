import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";

const PrescriptionList = (props) => {
  const [search,setSearch] = useState(null);
  const handleSearch = (event)=>{
    JSON.parse(event.target.value)?setSearch(JSON.parse(event.target.value)):setSearch(null);
  };
  return (
    <div className="ui segment">
       <Input fluid icon='search' onChange={handleSearch} placeholder='{"Verified" : "Yes"}' />
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {search?props.value.filter((p)=>p[Object.keys(search)[0]]===search[Object.keys(search)[0]]).map((patient, i) => {
            return (
              <tr key={i}>
                <td>{patient.PatientID}</td>
                <td>
                  <Link to={"/patient/" + patient.PatientID}>
                    {patient.PatientName}
                  </Link>
                </td>
                <td>
                  {patient.Gender === "M" ? (
                    <i className="male icon"></i>
                  ) : (
                    <i className="female icon"></i>
                  )}
                </td>
                <td
                  className={
                    patient.Verified === "Yes" ? "positive" : "negative"
                  }
                >
                  {patient.Verified === "Yes" ? "Verified" : "Not Verified"}
                </td>
              </tr>
            );
          }):props.value.map((patient, i) => {
            return (
              <tr key={i}>
                <td>{patient.PatientID}</td>
                <td>
                  <Link to={"/patient/" + patient.PatientID}>
                    {patient.PatientName}
                  </Link>
                </td>
                <td>
                  {patient.Gender === "M" ? (
                    <i className="male icon"></i>
                  ) : (
                    <i className="female icon"></i>
                  )}
                </td>
                <td
                  className={
                    patient.Verified === "Yes" ? "positive" : "negative"
                  }
                >
                  {patient.Verified === "Yes" ? "Verified" : "Not Verified"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PrescriptionList;
