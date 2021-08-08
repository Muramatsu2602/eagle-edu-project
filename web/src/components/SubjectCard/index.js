import React, { useState, useEffect } from "react";
import DynamicFaIcon from "../DynamicFaIcon";
import axios from "../../axios";

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

  const [currentMission, setCurrentMission] = useState();

  /**
   * Loading next available mission of this Subject
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        // const res = await axios.get("/missions/getFirstAvailableMission");

        // setCurrentMission(res.data);
        setCurrentMission(MissionModalData[1]);

        /* 
          TODO: if completionRate is 100%
            - disable button to access mission
        */

        console.log(currentMission);
      } catch (err) {
        console.log("error when loading current Mission!");
      }
    };

    loadData();
  }, []);

  return (
    <>
      <MissionModal
        missionData={currentMission}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <CardWrapper>
        <ClickableArea onClick={openMissionModal}>
          <SubjectIconSection>
            <DynamicFaIcon name={subject.icon} iconSize={80} />
          </SubjectIconSection>
          <CardButton>{subject.name}</CardButton>
        </ClickableArea>

        <ProgressContainer>
          <Background />
          <Progress percent={subject.completionRate} />
        </ProgressContainer>
      </CardWrapper>
    </>
  );
};

export default SubjectCard;
