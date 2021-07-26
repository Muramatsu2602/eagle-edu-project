import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: var(--gray);
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  font-size: 18px;

  &:hover {
    transition: 200ms;
    color: var(--white);
    background: var(--eagle-purple);
    border-left: 4px solid var(-eagle-purple);
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropDownLink = styled(Link)`
  /* background: ; */
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  font-size: 18px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

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
