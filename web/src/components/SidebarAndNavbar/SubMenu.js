import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropDownLink } from "./submenu-styling";
import DynamicFaIcon from "../DynamicFaIcon";

const SubMenu = ({ courses, sidebarData }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const showSubjects = function (name) {
    alert("this will trigger the creation of course cards for: " + name);
  };

  return (
    <>
      <SidebarLink onClick={sidebarData.subNav && showSubnav}>
        <div>
          {sidebarData.icon}
          <SidebarLabel>{sidebarData.name}</SidebarLabel>
        </div>

        <div>
          {sidebarData.subNav && subnav
            ? subnav.iconOpened
            : sidebarData.subNav
            ? sidebarData.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        courses.map((course, index) => {
          return (
            <DropDownLink onClick={() => showSubjects(course.name)} key={index}>
              <DynamicFaIcon name={course.icon} />
              <SidebarLabel>{course.name}</SidebarLabel>
            </DropDownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
