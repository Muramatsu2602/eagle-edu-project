import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 1rem;

  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.h1`
    color: var(--white);
    margin-bottom: 2rem;
`;
