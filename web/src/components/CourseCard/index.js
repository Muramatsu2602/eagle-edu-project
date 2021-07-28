import React, { useState, useEffect } from "react";

import {
  CardWrapper,
  CardButton,
  CourseIconSection,
  Background,
  Progress,
  ProgressContainer,
} from "./course-card-styling";

const CourseCard = ({ course }) => {
  const showTaskDetails = () => alert("Opening Course Details");

  return (
    <>
      <CardWrapper>
        <CourseIconSection>{course.icon}</CourseIconSection>
        <CardButton onClick={showTaskDetails}>{course.title}</CardButton>
        <ProgressContainer>
          <Background />
          <Progress percent={course.progress} />
        </ProgressContainer>
      </CardWrapper>
    </>
  );
};

export default CourseCard;
