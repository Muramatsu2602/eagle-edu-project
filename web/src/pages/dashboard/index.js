import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "../../components/SidebarAndNavbar/Sidebar";
import SubjectCard from "../../components/SubjectCard";
import { Container, DashboardWrapper, Title, CourseTitle } from "./dashboard-styling";
import axios from "../../axios";
import DynamicFaIcon from "../../components/DynamicFaIcon";

function Dashboard() {
  // insert subjects as cards into dashboard
  const [currentCourseId, setCurrentCourseId] = useState(1);
  const [currentCourse, setCurrentCourse] = useState({});
  const [subjects, setSubjects] = useState([]); // All courses from DB

  /**
   * receives courseId from subMenu
   * @param {integer} selectedCourse
   */
  const handleCallback = async (selectedCourse) => {
    setCurrentCourseId(selectedCourse);
  };

  /**
   * Loading all Subjects as SubjectCards in the dashboard
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.post("/subjects/getSubjectsByFk", {
          courseId: currentCourseId,
        });

        setSubjects([]);
        setSubjects(res.data);

        // set current selected course
        const res2 = await axios.post("/courses/getCourseById", {
          id: currentCourseId,
        });

        setCurrentCourse({});
        setCurrentCourse(res2.data);

        // console.log(subjects);
      } catch (err) {
        console.log("error when listing subjects!");
      }
    };

    loadData();
  }, [currentCourseId]);

  return (
    <Router>
      <Container>
        <Sidebar parentCallback={handleCallback} />
        <CourseTitle>
          <DynamicFaIcon name={currentCourse.icon}  /><div>&nbsp;</div>
          {currentCourse.name}
          </CourseTitle>
        <DashboardWrapper>
          {subjects.map((subject, index) => {
            return <SubjectCard subject={subject} key={index} />;
          })}

          {subjects.length <= 0 ? (
            <Title>No subjects available for this Course</Title>
          ) : null}
        </DashboardWrapper>
      </Container>
    </Router>
  );
}

export default Dashboard;
