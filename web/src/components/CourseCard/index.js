import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  CardWrapper,
  CardButton,
  CourseIconSection,
  Background,
  Progress,
  ProgressContainer,
  ClickableArea,
} from "./course-card-styling";

import { MissionModal } from "../MissionModal";

const CourseCard = ({ course }) => {
  const [showModal, setShowModal] = useState(false);

  const openMissionModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <CardWrapper>
        <MissionModal showModal={showModal} setShowModal={setShowModal} />

        <ClickableArea onClick={openMissionModal}>
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
