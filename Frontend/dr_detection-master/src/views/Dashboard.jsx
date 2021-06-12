import React, { useContext } from "react";
import Card from "../components/dashboard/PatientCard";
import List from "../components/dashboard/PatientList";
import { PatientContext } from "../PatientContext";

const Dashboard = () => {
  const data = useContext(PatientContext);
  // const filteredData=data.filter((patient)=>patient.Verified=="No")
  // console.log(data);
  return (
    <div>
      {data.length>0 ? (
        <div>
          <div className="ui three column grid">
            <Card title="Appointments" value={100} />
            <Card
              title="Completed"
              value={
                (data.filter((patient) => patient.Verified === "Yes").length /
                  data.length) *
                100
              }
            />
            <Card
              title="Pending"
              value={
                (data.filter((patient) => patient.Verified === "No").length /
                  data.length) *
                100
              }
            />
          </div>
          <List value={data} />
        </div>
      ) : (
        <div className="ui segment" style={{padding:50}}>
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
