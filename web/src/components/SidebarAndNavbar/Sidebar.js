import React, { useState, useEffect } from "react";
import axios from "../../axios";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as Ricons from "react-icons/ri";
import { useHistory } from "react-router-dom";
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
  Select,
} from "./sidebar-and-navbar-styling";

const Sidebar = () => {
  const history = useHistory(); // router
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
        const res = await axios.get("/courses/getCourses");
        
        setCourses(res.data);
      } catch (err) {
        console.log("error when listing courses!");
      }
    };

    loadData();
  }, []);

  return (
    <>
      <Nav>
        <NavLogoSection to="#">
          <Logo />
          <FaIcons.FaBars onClick={showSidebar} />
        </NavLogoSection>

        <NavProfileSection>
          <Select>
            <option value="" hidden>
              Language
            </option>

            <option value="1">English 🇺🇸 </option>
            <option value="2">Português 🇧🇷</option>
            <option value="3">日本語 🇯🇵</option>
          </Select>
          <NavIcon onClick={() => history.push("/login")}>
            <IoIcons.IoMdPerson />
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
