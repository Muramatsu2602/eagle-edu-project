import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

import {
  Nav,
  NavLogoSection,
  Logo,
  NavIcon,
  NavProfileSection,
  SidebarNav,
  SidebarWrap,
  SidebarTitle,
  ProfileSectionLabel
} from "./sidebar-and-navbar-styling";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const showProfileOptions = () =>
    alert("imagine being able to exit or even edit your profile!");

  return (
    <>
      <Nav>
        <NavLogoSection to="#">
          <Logo />
          <FaIcons.FaBars onClick={showSidebar} />
        </NavLogoSection>

        <NavProfileSection>
          <ProfileSectionLabel>
            English
          </ProfileSectionLabel>
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
