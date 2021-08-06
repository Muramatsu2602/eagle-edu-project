import React from "react";
import * as FaIcons from "react-icons/fa";
import * as Ricons from "react-icons/ri";

export const SidebarData = [
  {
    name: "Courses",
    path: "/courses",
    icon: <FaIcons.FaBook />,
    iconClosed: <Ricons.RiArrowDownSFill />,
    iconOpened: <Ricons.RiArrowUpSFill />,
    subNav: [],
  },
  // {
  //   name: "About",
  //   path: "/products",
  //   icon: <FaIcons.FaInfoCircle />,
  // },
];
