import React, {  } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../../components/SidebarAndNavbar/Sidebar";
import CourseCard from "../../components/CourseCard";

import { CourseCardData } from "../../components/CourseCard/CourseCardData";

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
          {CourseCardData.map((course, index) => {
            return <CourseCard course={course} key={index} />;
          })}
        </DashboardWrapper>
      </Container>
    </Router>
  );
}

export default Dashboard;
