import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';

const Login = () => {
  const [clinic, setClinic] = useState([]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onUserChange = (event) => {
    setUser(event.target.value);
  };
  const onPassChange = (event) => {
    setPass(event.target.value);
  };

  useEffect(() => {
    fetch(`https://lit-falls-40108.herokuapp.com/clinics`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.clinic);
        setClinic(result.clinic);
      })
      .catch((err) => {
        /* perform error handling if desired */
      });
  }, []);
  return (
    <div className="ui middle aligned center aligned grid" style={{ height: '100vh', backgroundColor: '#DADADA',overflow:'hidden',padding : 5 }}>
      <div className="column" style={{ maxWidth: 450 }}>
        <h2 className="ui teal image header">
          <div className="content">
            Log-in to your account
        </div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" onChange={onUserChange} placeholder="User Name" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" onChange={onPassChange} name="password" placeholder="Password" />
              </div>
            </div>
            {clinic.filter((c) => c.ClinicID === user).length > 0 ? (
              user === clinic.filter((c) => c.ClinicID === user)[0].ClinicID ? (
                pass ===
                clinic.filter((c) => c.ClinicID === user)[0].ClinicPassword ? (
                    <div className="ui fluid large teal submit button" onClick={event =>  window.location.href='/home'}>
                      {sessionStorage.setItem("ClinicID", user)}
                      Login
                    </div>
                ) : (
                  <div className="ui red message">
                    Enter Correct Username and Password
                  </div>
                )
              ) : (
                <div className="ui red message">
                  Enter Correct Username and Password
                </div>
              )
            ) : (
              <div className="ui red message">
                Enter Correct Username and Password
              </div>
            )}
          </div>


        </form>
      </div>
    </div>
  );
};

export default Login;