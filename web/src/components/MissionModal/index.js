import React from "react";

import {
  ModalContent,
  Background,
  ModalWrapper,
  CloseModalButton,
} from "./mission-modal-styling";

export const MissionModal = ({ showModal, setShowModal }) => {
  const completeTask = () => {
    alert("task completed successfully!");
  };

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1>Current Mission</h1>
              <p>Press the button to complete the mission</p>
              <button onClick={completeTask}>Click me!</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
