import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

const CardWrapper = styled.div`
  width: 45%;
  background-color: var(--white);

  border: 0.2rem solid var(--gray-dark);
  padding: 1rem;
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
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CourseCard = (course) => {
  return (
    <>
      <CardWrapper>
        <CourseIconSection>{course.icon}</CourseIconSection>
        <CourseInfoSection>
          <h2>{course.title} </h2>
          <h3>{course.progress} </h3>
        </CourseInfoSection>
      </CardWrapper>
    </>
  );
};

export default CourseCard;
