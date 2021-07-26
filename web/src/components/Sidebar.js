import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Nav = styled.div`
  background-color: var(--white);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Sidebar;
