import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarLink = styled(Link)`
  display: flex;
  color: var(--gray);
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 60px;
  font-size: 18px;

  &:hover {
    transition: 200ms;
    color: var(--white);
    background: var(--eagle-purple);
    border-left: 4px solid var(-eagle-purple);
    cursor: pointer;
  }

  p {
    color: var(--gray);
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropDownLink = styled(Link)`
  /* background: ; */
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  font-size: 18px;

  &:hover {
    cursor: pointer;
    transition: 200ms;
    background: var(--light);
    /* font-weight: 600; */
  }

  /* &:active{
    color: var(--eagle-purple);;
  } */
`;
