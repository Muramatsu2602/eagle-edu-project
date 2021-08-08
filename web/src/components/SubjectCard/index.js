import React, { useState, useEffect } from "react";
import DynamicFaIcon from "../DynamicFaIcon";

import { MissionModalData } from "../MissionModal/MissionModalData";

import {
  CardWrapper,
  CardButton,
  CourseIconSection,
  Background,
  Progress,
  ProgressContainer,
  ClickableArea,
} from "./subject-card-styling";

import { MissionModal } from "../MissionModal";

const SubjectCard = ({ course }) => {
  const [showModal, setShowModal] = useState(false);

  const openMissionModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <MissionModal
        missionData={MissionModalData[0]}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <CardWrapper>

        <ClickableArea onClick={openMissionModal}>
          <CourseIconSection>
            <DynamicFaIcon name={course.icon} iconSize={80} />
          </CourseIconSection>
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

export default SubjectCard;
