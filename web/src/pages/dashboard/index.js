import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "../../components/SidebarAndNavbar/Sidebar";
import SubjectCard from "../../components/SubjectCard";
import { Container, DashboardWrapper, Title, CourseTitle } from "./dashboard-styling";
import axios from "../../axios";
import DynamicFaIcon from "../../components/DynamicFaIcon";

function Dashboard() {

  //#Será que não seria melhor usar um contexto para armazenar o curso e as subjects?

  // insert subjects as cards into dashboard
  const [currentCourseId, setCurrentCourseId] = useState(1);
  const [currentCourse, setCurrentCourse] = useState({});
  const [subjects, setSubjects] = useState([]); // All courses from DB

  /**
   * receives courseId from subMenu
   * @param {integer} selectedCourse
   */

  //#Acho o nome handleCallback muito genérico, não mostra o que a função realmente faz.

  const handleCallback = async (selectedCourse) => {
    setCurrentCourseId(selectedCourse);
  };

  /**
   * Loading all Subjects as SubjectCards in the dashboard
   */
  useEffect(() => {
    //#Nome res e res2 acredito que não seja muito bom.
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
    <Router>{/*//#O que esse router faz aqui?*/}
      <Container>
        <Sidebar parentCallback={handleCallback} />
        <CourseTitle>
          <DynamicFaIcon name={currentCourse.icon}  />
          <div>&nbsp;</div> {/*//#precisa dessa div?*/}
          {currentCourse.name}
        </CourseTitle>
        <DashboardWrapper>
          {/*//#Será que não seria melhor fazer o map fora para deixar o render mais limpo?*/}
          {subjects.map((subject, index) => {
            return <SubjectCard subject={subject} key={index} />;
          })}

          {subjects.length <= 0 ? (
            <Title>No subjects available for the '{currentCourse.name}' course</Title>
          ) : null}
        </DashboardWrapper>
      </Container>
    </Router>
  );
}

export default Dashboard;
