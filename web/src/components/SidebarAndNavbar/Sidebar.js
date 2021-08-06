import React, { useState, useEffect } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as Ricons from "react-icons/ri";
import SubMenu from "./SubMenu";

import { SidebarData } from "./SidebarData";

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
  const [courses, setCourses] = useState([]); // All courses from DB

  /**
   * Loading all Courses as items in the submenu
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        // const res = await axios.get("/getCourses");

        // setCourses(res.data);
        setCourses([
          {
            name: "Maths",
            icon: <IoIcons.IoMdNuclear />,
          },
          {
            name: "Chemistry",
            icon: <IoIcons.IoIosHappy />,
          },
          {
            name: "History",
            icon: <IoIcons.IoMdBook />,
          },
        ]);
      } catch (err) {
        console.log("error when listing courses!");
      }
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
          {SidebarData.map((sidebar, index) => {
            return (
              <SubMenu courses={courses} sidebarData={sidebar} key={index} />
            );
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
