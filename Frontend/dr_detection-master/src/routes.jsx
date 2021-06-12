import React,{useState,useEffect} from "react";
import Dashboard from "./views/Dashboard";
import Analysis from "./views/PatientAnalysis";
import Patient from "./views/Patient";
import Tagging from "./views/Tag";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardLayout from "./layouts/Layout";
import Error from "./views/Error";
import Login from "./pages/Login";
import Profile from "./views/Profile";
import { PatientContext } from "./PatientContext";

const Routes = () => {
    const [patientData, setPatientData] = useState([]);
    const [ID,setID] =useState(null) ;

    // const value= useMemo(()=>({patientData, setPatientData}),[patientData, setPatientData]);

    useEffect(() => {
      setID(sessionStorage.getItem("DoctorID"))
      console.log(sessionStorage.getItem("DoctorID"));
      fetch(`https://lit-falls-40108.herokuapp.com/patients`)
        .then((res) => res.json())
        .then((result) => {
          setPatientData(result.patient);
        })
        .catch((err) => {
          /* perform error handling if desired */
        });
    },[ID]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route
          render={(props) => (
            <DashboardLayout {...props}>
              <Switch>
                <PatientContext.Provider value={patientData.filter(p=>p.DoctorID===ID)}>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/patients" exact component={Patient} />
                  <Route path="/patient" component={Analysis} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/tag" component={Tagging} />
                </PatientContext.Provider>
                <Route component={Error} />
              </Switch>
            </DashboardLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
