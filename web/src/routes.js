import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />

        {/* <PrivateRoute path="/dashboard" exact component={Dasboard}></PrivateRoute> */}
        {/* 
          <Route exact path="/dashboard" component={Dashboard} />
        */}
      </Switch>
    </BrowserRouter>
  );
}
