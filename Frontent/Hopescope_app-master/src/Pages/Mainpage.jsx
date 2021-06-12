import axios from "axios";
import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Tab } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import { Card, Message, Icon } from "semantic-ui-react";

let MRD = Math.floor(100000000 + Math.random() * 900000000);

function Mainpage() {
  const [patient, setPatient] = useState([]);
  const [success, setSuccess] = useState(false);
  const [adsuccess, setadSuccess] = useState(null);

  const [clinicID, setClinicID] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [gender, setGender] = useState("");
  const [patientID, setPatientID] = useState("");
  const [age, setAge] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [name, setName] = useState("");

  const [adDoctorID, setAdDoctorID] = useState("");
  const [adName, setAdName] = useState("");
  const [adEmail, setAdEmail] = useState("");
  const [adPassword, setAdPassword] = useState("");

  const [selectedFile, setFile] = useState(null);

  useEffect(async () => {
    setClinicID(sessionStorage.getItem("ClinicID"));
    const patientResult = await axios.get(
      "https://lit-falls-40108.herokuapp.com/patients"
    );
    while (patientResult.data.patient.filter((p) => p.MRD === MRD).length > 0) {
      MRD = Math.floor(100000000 + Math.random() * 900000000);
    }
    setPatient(patientResult.data.patient);
    const doctorResult = await axios.get(
      "https://lit-falls-40108.herokuapp.com/doctors"
    );
    setDoctor(doctorResult.data.doctor);
  }, [clinicID]);
  const onAgeChange = (event) => {
    setAge(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPatientChange = (event) => {
    setPatientID(event.target.value);
  };

  const addDoctor = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      DoctorID: adDoctorID,
      ClinicID: clinicID,
      Email: adEmail,
      Password: adPassword,
      Name: adName,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://lit-falls-40108.herokuapp.com/doctors", requestOptions)
      .then((response) => response.text())
      .then((result) => setadSuccess(true))
      .catch((error) => setadSuccess(false));
  };
  const onFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("data", selectedFile);
    formData.append("DoctorID", doctorID);
    formData.append("PatientID", patient ? "P_00" + (patient.length + 1) : "");
    formData.append("ClinicID", clinicID);
    formData.append("Age", age);
    formData.append("MRD", MRD);
    formData.append("PatientName", name);
    formData.append("Gender", gender);

    axios
      .post("https://lit-falls-40108.herokuapp.com/patients", formData, {
        headers: {
          "Content-Type": "multipart/formdata",
        },
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err.response);
      });
  };
  const options = [
    { key: "m", text: "Male", value: "M" },
    { key: "f", text: "Female", value: "F" },
    { key: "o", text: "Other", value: "other" },
  ];
  const doctoroptions = doctor.map((d, i) => {
    return { key: i, text: d.DoctorID, value: d.DoctorID };
  });
  const onFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    // setUpload(null);
  };

  const panes = [
    {
      menuItem: "Home",
      render: () => (
        <Tab.Pane>
          <div>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Name"
                  onChange={onNameChange}
                  placeholder="Name"
                />
                <Form.Input
                  fluid
                  label="Patient ID"
                  onChange={onPatientChange}
                  value={patient ? "P_00" + (patient.length + 1) : ""}
                  placeholder="Patient ID"
                />
                <Form.Input
                  fluid
                  label="MRD Number"
                  value={MRD}
                  placeholder="MRD Number"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Select
                  fluid
                  label="Gender"
                  onChange={(e, { value }) => setGender(value.toString())}
                  options={options}
                  placeholder="Gender"
                />
                <Form.Input
                  fluid
                  label="Age"
                  onChange={onAgeChange}
                  placeholder="Age"
                />
                <Form.Select
                  fluid
                  label="Doctor"
                  onChange={(e, { value }) => setDoctorID(value.toString())}
                  options={doctoroptions}
                  placeholder="doctor"
                  width={4}
                />
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Input
                  onChange={onFileChange}
                  defaultValue=""
                  placeholder="Image"
                  width={6}
                  type="file"
                />
              </Form.Group>
              <br></br>
              <Form.Button color="teal" onClick={onFileUpload}>
                Submit
              </Form.Button>
            </Form>
            {success ? (
              <Message attached="bottom" success style={{ marginTop: 5 }}>
                <Icon name="check circle outline" />
                Successfully uploaded.
              </Message>
            ) : null}
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Result",
      render: () => (
        <Tab.Pane>
          <div>
            <div>
              <Input fluid icon="search" placeholder="Search..." />
            </div>
            {patient.map((p) => {
              return (
                <div className="ui fluid card">
                  <div className="content">
                    <img
                      className="right floated mini ui image"
                      src={"https://lit-falls-40108.herokuapp.com/"+p.FundusImageURL}
                    />
                    <div className="header">{p.PatientName}</div>
                    <div className="meta">{p.PatientID}</div>
                    {p.Verified === "No" ? null : (
                      <div>
                        {p.Observation === "" ? null : (
                          <div>
                            <div class="ui segment">
                              <a class="ui teal left ribbon label">
                                Observation
                              </a>
                              <div className="meta">{p.Observation}</div>
                              <a class="ui teal right ribbon label">
                                Prescription
                              </a>
                              <div
                                className="meta"
                                style={{ textAlign: "right" }}
                              >
                                {p.Prescription}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {p.Result == 0 ? (
                      <div class="ui green message">Negative</div>
                    ) : (
                      <div class="ui red message">Positive</div>
                    )}
                  </div>
                  <div class="extra content">
                    <div class="center aligned author">
                      {p.Verified === "No" ? "Not Verified" : "Verified"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Administration",
      render: () => (
        <Tab.Pane>
          <div>
            <Segment.Group raised>
              <Form style={{ padding: 10 }}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Name"
                    onChange={(e) => setAdName(e.target.value)}
                    placeholder="Name"
                  />
                  <Form.Input
                    fluid
                    label="Doctor ID"
                    onChange={(e) => setAdDoctorID(e.target.value)}
                    placeholder="Doctor ID"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Email"
                    onChange={(e) => setAdEmail(e.target.value)}
                    placeholder="Age"
                  />
                  <Form.Input
                    fluid
                    label="Password"
                    onChange={(e) => setAdPassword(e.target.value)}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Button color="teal" onClick={addDoctor}>
                  Add
                </Form.Button>
                {adsuccess ? (
                  <div className="ui green message">Success</div>
                ) : null}
                {adsuccess == false ? (
                  <div className="ui red message">Faliure</div>
                ) : null}
              </Form>
            </Segment.Group>
            <Segment.Group raised>
              <Form style={{ padding: 10 }}>
                <Form.Group widths="equal">
                  <Form.Input fluid label="Name" placeholder="Name" />
                  <Form.Input
                    fluid
                    label="Doctor ID"
                    placeholder="Doctor ID"
                    width={6}
                  />
                </Form.Group>
                <Form.Button color="teal">Remove</Form.Button>
              </Form>
            </Segment.Group>
          </div>
        </Tab.Pane>
      ),
    },
  ];
  return <Tab panes={panes} />;
}

export default Mainpage;
