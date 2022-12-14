import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Admins",
    path: "/Users",
    icon: <FaIcons.FaUserPlus />,
    cName: "nav-text",
  },
  {
    title: "Instructors",
    path: "/Teachers",
    icon: <GiIcons.GiTeacher />,
    cName: "nav-text",
  },
  {
    title: "KX Students",
    path: "/KXStudents",
    icon: <FaIcons.FaUserGraduate />,
    cName: "nav-text",
  },
  {
    title: "AN Students",
    path: "/ANStudents",
    icon: <FaIcons.FaUserGraduate />,
    cName: "nav-text",
  },
  {
    title: "Classes",
    path: "/Classes",
    icon: <AiIcons.AiOutlineLaptop />,
    cName: "nav-text",
  },
];
