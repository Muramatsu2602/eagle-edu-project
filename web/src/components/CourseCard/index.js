import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  CardWrapper,
  CardButton,
  CourseIconSection,
  Background,
  Progress,
  ProgressContainer,
  ClickableArea
} from "./course-card-styling";


const CourseCard = ({ course }) => {
  const showTaskDetails = () => alert("Opening Course Details");

  return (
    <>
      <CardWrapper>
        <ClickableArea onClick={showTaskDetails}>
          <CourseIconSection>{course.icon}</CourseIconSection>
          <CardButton>{course.title}</CardButton>
        </ClickableArea>

        <ProgressContainer>
          <Background />
          <Progress percent={course.progress} />
        </ProgressContainer>
      </CardWrapper>
    </>
  );
};

export default CourseCard;
