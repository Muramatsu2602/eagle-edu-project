import React, { useState, useEffect } from "react";
import DynamicFaIcon from "../DynamicFaIcon";
import axios from "../../axios";

// import { MissionModalData } from "../MissionModal/MissionModalData";

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
  const [currentMission, setCurrentMission] = useState();
  const [completionRate, setCompletionRate] = useState(0.0);

  const [showSubject, setShowSubject] = useState(subject);

  const openMissionModal = () => {
    setShowModal((prev) => !prev);
  };

  const loadData = async () => {
    try {
      const res = await axios.post("/missions/getFirstAvailableMission", {
        subjectId: subject.id,
      });

      setCurrentMission(res.data);
      setCompletionRate(
        (subject.completedMissions / subject.allMissions) * 100.0
      );
    } catch (err) {
      console.log("error when loading current Mission!");
    }
  };

  /**
   * Loading next available mission of this Subject
   */
  useEffect(() => {
    loadData();
  }, []);

  /**
   * load Subject Card data once one mission is completed
   */
  const handleCallback = async () => {
    loadData();

    try {
      const res2 = await axios.post("/subjects/getSubjectById", {
        id: subject.id,
      });

      setShowSubject(res2.data);
      setCompletionRate(
        (showSubject.completedMissions / showSubject.allMissions) * 100.0
      );

      console.log(res2.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MissionModal
        missionData={currentMission}
        showModal={showModal}
        setShowModal={setShowModal}
        parentCallback={handleCallback}
      />

      <CardWrapper>
        <ClickableArea onClick={openMissionModal}>
          <SubjectIconSection>
            <DynamicFaIcon name={showSubject.icon} iconSize={80} />
          </SubjectIconSection>
          <CardButton>{showSubject.name}</CardButton>
        </ClickableArea>

        <ProgressContainer>
          <Background />
          <Progress percent={completionRate} />
        </ProgressContainer>
      </CardWrapper>
    </>
  );
};

export default SubjectCard;
