import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default Dashboard;
