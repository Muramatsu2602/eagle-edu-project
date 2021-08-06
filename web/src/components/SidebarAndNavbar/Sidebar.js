import React, { useState, useEffect } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as Ricons from "react-icons/ri";
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
  ProfileSectionLabel,
} from "./sidebar-and-navbar-styling";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  // insert courses into SidebarData
  const [sidebarData, setSidebarData] = useState([
    {
      name: "Courses",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <Ricons.RiArrowDownSFill />,
      iconOpened: <Ricons.RiArrowUpSFill />,
      subNav: [],
    },
    {
      name: "About",
      icon: <FaIcons.FaInfoCircle />,
    },
  ]); // All courses from DB

  /**
   * Loading all Courses as items in the submenu
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get("/getCourses");
        // fixed: this will always contain all users

        console.log("system data");

        setSidebarData((prevState) => ({
          ...prevState,
          subNav: res.data,
        }));
      } catch (err) {}
    };

    loadData();
  }, []);

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
          <ProfileSectionLabel>English</ProfileSectionLabel>
          <NavIcon to="#">
            <IoIcons.IoMdPerson onClick={showProfileOptions} />
          </NavIcon>
        </NavProfileSection>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <SidebarTitle>PAINEL DE CONTROLE</SidebarTitle>
          {sidebarData.map((course, index) => {
            return <SubMenu course={course} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
