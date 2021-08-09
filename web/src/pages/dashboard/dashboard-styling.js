import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  margin-top: 110px;
  display: block;
  height: 200vh;
  width: 100vw;
`;

export const DashboardWrapper = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  min-height: 40vh;
  height: auto;
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h1`
  /* border-bottom: var(--gray) solid 1px; */
  color: var(--gray);
  align-self: center;
`;

export const CourseTitle = styled.h1`
  color: var(--white);
  margin-left: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
