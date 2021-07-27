import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

import ProgressBar from "../ProgressBar";

const CardWrapper = styled.div`
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

const CourseIconSection = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CourseInfoSection = styled.div`
  width: 100%;
  background-color: red;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CardButton = styled.button`
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

const MyProgressBar = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  color: var(--green);

  width: 98%;
  height: 20px;
  border-radius: 5px;
  margin-top: 0.2rem;
`;

const CourseCard = ({ course }) => {
  return (
    <>
      <CardWrapper>
        <CourseIconSection>{course.icon}</CourseIconSection>
        <CardButton>{course.title}</CardButton>
        <MyProgressBar value={course.progress} max={100} />
      </CardWrapper>
    </>
  );
};

export default CourseCard;
