import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "../../components/SidebarAndNavbar/Sidebar";
import CourseCard from "../../components/SubjectCard";
import { SubjectCardData } from "../../components/SubjectCard/SubjectCardData";
import { Container, DashboardWrapper } from "./dashboard-styling";
import axios from "../../axios";

function Dashboard() {
  // insert subjects as cards into dashboard
  const [currentCourseId, setCurrentCourseId] = useState(1);
  const [subjects, setSubjects] = useState([]); // All courses from DB

  /**
   * receives courseId from subMenu
   * @param {integer} selectedCourse
   */
  const handleCallback = async (selectedCourse) => {
    await setCurrentCourseId(selectedCourse);

    alert("SELECTED ON DASHBOARD: " + selectedCourse);
  };

  /**
   * Loading all Subjects as SubjectCards in the dashboard
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        // const res = await axios.get("/subjects/getSubjectsByFk", {
        //   courseId: currentCourseId,
        // });

        // setSubjects(res.data);

        console.log(subjects);
      } catch (err) {
        console.log("error when listing subjects!");
      }
    };

    loadData();
  }, []);

  return (
    <Router>
      <Container>
        <Sidebar parentCallback={handleCallback} />
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
