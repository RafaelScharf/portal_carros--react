import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/pages/home/Home";
import UserRegister from "./components/pages/user/UserRegister";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/register/">
          <UserRegister />
        </Route>
      </Switch>
    </Router>
  );
}
