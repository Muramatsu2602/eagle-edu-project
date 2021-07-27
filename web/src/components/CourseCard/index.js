import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const CourseCard = () => {
  return (
    <>
      <CardWrapper>TESTE</CardWrapper>
    </>
  );
};

export default CourseCard;
