import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "../../components/SidebarAndNavbar/Sidebar";
import CourseCard from "../../components/SubjectCard";
import { SubjectCardData } from "../../components/SubjectCard/SubjectCardData";
import { Container, DashboardWrapper } from "./dashboard-styling";



function Dashboard() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <DashboardWrapper>
          {SubjectCardData.map((course, index) => {
            return <CourseCard course={course} key={index} />;
          })}
        </DashboardWrapper>
      </Container>
    </Router>
  );
}

export default Dashboard;
