import React, { useState, useEffect } from "react";
import DynamicFaIcon from "../DynamicFaIcon";

import { MissionModalData } from "../MissionModal/MissionModalData";

import {
  CardWrapper,
  CardButton,
  SubjectIconSection,
  Background,
  Progress,
  ProgressContainer,
  ClickableArea,
} from "./subject-card-styling";

import { MissionModal } from "../MissionModal";

const SubjectCard = ({ subject }) => {
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
          <SubjectIconSection>
            <DynamicFaIcon name={subject.icon} iconSize={80} />
          </SubjectIconSection>
          <CardButton>{subject.title}</CardButton>
        </ClickableArea>

        <ProgressContainer>
          <Background />
          <Progress percent={subject.progress} />
        </ProgressContainer>
      </CardWrapper>
    </>
  );
};

export default SubjectCard;
