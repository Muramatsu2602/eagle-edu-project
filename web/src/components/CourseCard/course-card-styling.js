import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";


export const  CardWrapper = styled.div`
  width: 45%;

  /* border: 0.2rem solid var(--gray-dark); */
  /* padding: 1rem; */
  margin: 1rem;

  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray);
`;

export const CourseIconSection = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CourseInfoSection = styled.div`
  width: 100%;
  background-color: red;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardButton = styled.button`
  background: var(--gray);
  color: var(--white);
  cursor: pointer;
  border: none;

  border-radius: 5px;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  font-size: 15px;

  width: 97%;
  display: block;
`;

export const ProgressContainer = styled.div`
  margin-top: 0.5rem;
  height: 15px;
  width: 98.4%;
  position: relative;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: var(--light);
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  width: ${({ percent }) => percent}%;

  background-image: -webkit-linear-gradient(
      45deg,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -webkit-linear-gradient(left, #61d879,#7ade8c);

  border-radius: 3px;
  background-size: 25px 15px, 100% 100%, 100% 100%;
`;