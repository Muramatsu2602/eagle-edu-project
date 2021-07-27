import React, { useState } from "react";

import { SidebarLink, SidebarLabel, DropDownLink } from "./submenu-styling";

const SubMenu = ({ course }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={course.path} onClick={course.subNav && showSubnav}>
        <div>
          {course.icon}
          <SidebarLabel>{course.title}</SidebarLabel>
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
            <DropDownLink to={course.path} key={index}>
              {course.icon}
              <SidebarLabel>{course.title}</SidebarLabel>
            </DropDownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
