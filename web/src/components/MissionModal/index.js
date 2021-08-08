import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Confetti from "react-confetti";
import axios from "../../axios";

import {
  ModalContent,
  Background,
  ModalWrapper,
  CloseModalButton,
  CloseModalButtonContainer,
  MissionDescription,
  MissionTitle,
} from "./mission-modal-styling";

export const MissionModal = ({
  missionData,
  showModal,
  setShowModal,
  parentCallback,
}) => {
  const [taskIsCompleted, setTaskIsCompleted] = useState(false);

  // Modal's Animation  and intereaction
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  /**
   * calls API and then updates isCompleted to true
   */
  const completeTask = async () => {
    try {
      // set current mission as completed
      const res = await axios.post("/missions/updateMissionIsCompleted", {
        id: missionData.id,
        isCompleted: true,
      });
    } catch (err) {
      console.log("error when completing the misison!");
    }

    // Activate confetti
    parentCallback();
    setShowModal(false);
    // setTaskIsCompleted(true);
  };

  useEffect(() => {
    setTaskIsCompleted(false);

    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          {taskIsCompleted && showModal ? (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              gravity={1.5}
            />
          ) : null}

          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <CloseModalButtonContainer>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev) => !prev)}
                />
              </CloseModalButtonContainer>

              {missionData ? (
                <ModalContent>
                  <MissionTitle>{missionData.name}</MissionTitle>
                  <MissionDescription>
                    {missionData.description}
                  </MissionDescription>

                  {!taskIsCompleted ? (
                    <button onClick={completeTask}>Complete task!</button>
                  ) : (
                    <button disabled>Task completed!</button>
                  )}
                </ModalContent>
              ) : (
                <ModalContent>
                  <MissionTitle>
                    No more data available for this Subject
                  </MissionTitle>
                </ModalContent>
              )}
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
