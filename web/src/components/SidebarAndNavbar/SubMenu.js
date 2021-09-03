import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropDownLink } from "./submenu-styling";
import DynamicFaIcon from "../DynamicFaIcon";

const SubMenu = ({ parentCallback, courses, sidebarData }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  /**
   * when clicked, sends selected courseId to Sidebar,which in turn sends it to dashboard
   * @param {Integer} courseId
   */
  const sendCourseIdToParent = async function (id) {
    // send this id to  dashboard
    await parentCallback(id);
  };

  return (
    <div>
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
            <DropDownLink
              onClick={() => sendCourseIdToParent(course.id)}
              key={index}
            >
              <DynamicFaIcon name={course.icon} />
              <SidebarLabel>{course.name}</SidebarLabel>
            </DropDownLink>
          );
        })}
    </div>
  );
};

export default SubMenu;
