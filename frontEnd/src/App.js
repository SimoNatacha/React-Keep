import React from "react";
import {  Route, Redirect, Switch } from "react-router-dom";

import "./styles/App.scss";
import LoginContainer from "./containers/Login";
import SignupContainer from "./containers/Signup";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route    path="/dashboard" component={Dashboard} />

      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
