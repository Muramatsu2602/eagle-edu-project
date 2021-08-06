import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "../../components/SidebarAndNavbar/Sidebar";
import CourseCard from "../../components/CourseCard";
import { CourseCardData } from "../../components/CourseCard/CourseCardData";
import { Container, DashboardWrapper } from "./dashboard-styling";



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
