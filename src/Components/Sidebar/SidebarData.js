import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/messages",
    icon: <FiIcons.FiUsers />,
    cName: "nav-text",
  },
  {
    title: "Classes",
    path: "/support",
    icon: <AiIcons.AiOutlineLaptop />,
    cName: "nav-text",
  },
];
