import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Ricons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Courses",
    path: "/courses",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <Ricons.RiArrowDownSFill />,
    iconOpened: <Ricons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Maths",
        path: "/courses/maths",
        icon: <IoIcons.IoMdNuclear />,
      },
      {
        title: "Chemistry",
        path: "/courses/chemistry",
        icon: <IoIcons.IoIosHappy />,
      },
      {
        title: "History",
        path: "/courses/history",
        icon: <IoIcons.IoMdBook />,
      },
    ],
  },
  {
    title: "About",
    path: "/products",
    icon: <FaIcons.FaInfoCircle />,
  },
];
