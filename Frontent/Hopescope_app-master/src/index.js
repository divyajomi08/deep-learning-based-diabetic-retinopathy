import React from "react";
import ReactDOM from "react-dom";
import { Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Login from "./Pages/Login";
import Mainpage from "./Pages/Mainpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header
        as="h1"
        color="blue"
        textAlign="center"
        content="Hopescope"
        style={{ padding: 8 }}
      />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Mainpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
