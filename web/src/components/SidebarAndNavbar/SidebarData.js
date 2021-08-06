import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Ricons from "react-icons/ri";

export const SidebarData = [
  {
    name: "Courses",
    path: "/courses",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <Ricons.RiArrowDownSFill />,
    iconOpened: <Ricons.RiArrowUpSFill />,
    subNav: [],
  },
  {
    name: "About",
    path: "/products",
    icon: <FaIcons.FaInfoCircle />,
  },
];
