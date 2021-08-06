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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.h1`
    color: var(--white);
    margin-bottom: 2rem;
`;

export const RedirectButton = styled.button`
  background: var(--eagle-purple);
  color: var(--white);
  cursor: pointer;
  border: none;
  text-decoration: none;

  border-radius: 3px;
  padding: 1rem 0.6rem 1rem 0.6rem;
  font-size: 15px;
  font-weight: 600;

  width: 50%;
`;
