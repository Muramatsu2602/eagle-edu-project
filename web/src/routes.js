import React from "react";
import { Route, withRouter, BrowserRouter, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        {/* 
          <Route exact path="/dashboard" component={Dashboard} />
        */}
      </Switch>
    </BrowserRouter>
  );
}
