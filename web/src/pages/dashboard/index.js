import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../../components/SidebarAndNavbar/Sidebar";
import CourseCard from "../../components/CourseCard";

const Container = styled.div`
  /* background-color: red; */
  margin-top: 110px;
  display: block;
  height: 200vh;
  width: 100vw;
`;

const DashboardWrapper = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  min-height: 40vh;
  height: auto;
  margin: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Dashboard() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <DashboardWrapper>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </DashboardWrapper>
      </Container>
    </Router>
  );
}

export default Dashboard;
