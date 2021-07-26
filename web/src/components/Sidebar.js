import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import dashboardIcon from "../assets/dashboard-icon.png";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background-color: var(--white);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogoSection = styled(Link)`
  color: var(--gray);
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavIcon = styled(Link)`
  color: var(--gray);
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  margin-right: 2rem;
  height: 70px;
`;

Logo.defaultProps = {
  src: dashboardIcon,
};

const NavProfileSection = styled.div`
  color: var(--gray);
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: var(--white);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;

  // shadow effect
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarTitle = styled.span`
  width: 100%;
  color: var(--gray);
  font-size: 16px;
  margin-left: 1rem;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const showProfileOptions = () =>
    alert("imagine being able to exit or even edit your profile!");

  return (
    <>
      <Nav>
        <NavLogoSection to="">
          <Logo />
          <FaIcons.FaBars onClick={showSidebar} />
        </NavLogoSection>

        <NavProfileSection>
          <NavIcon to="#">
            <IoIcons.IoMdPerson onClick={showProfileOptions} />
          </NavIcon>
        </NavProfileSection>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <SidebarTitle>PAINEL DE CONTROLE</SidebarTitle>
          {SidebarData.map((course, index) => {
            return <SubMenu course={course} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
