import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 40;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  z-index: 30;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: var(--eagle-purple);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
  }

  button:disabled {
    padding: 10px 24px;
    background: var(--gray);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: not-allowed;
    font-weight: 600;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;

  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 30;
`;

export const CloseModalButtonContainer = styled.div`
  width: 100%;
`;

export const MissionTitle = styled.h1`
  /* border-bottom: var(--gray) solid 1px; */
`;

export const MissionDescription = styled.span`
  font-size: 22px;
  margin: 2rem;
  text-align: justify;
`;
