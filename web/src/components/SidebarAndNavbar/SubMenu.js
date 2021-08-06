import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropDownLink } from "./submenu-styling";

const SubMenu = ({ course }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  
  const showSubjects = function (name) {
    alert("this will trigger the creation of course cards for: " + name);
  };

  return (
    <>
      <SidebarLink onClick={course.subNav && showSubnav}>
        <div>
          {course.icon}
          <SidebarLabel>{course.name}</SidebarLabel>
        </div>

        <div>
          {course.subNav && subnav
            ? subnav.iconOpened
            : course.subNav
            ? course.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        course.subNav.map((course, index) => {
          return (
            <DropDownLink onClick={() => showSubjects(course.name)} key={index}>
              {course.icon}
              <SidebarLabel>{course.name}</SidebarLabel>
            </DropDownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
