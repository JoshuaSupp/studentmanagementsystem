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
    title: "Users",
    path: "/Users",
    icon: <FiIcons.FiUsers />,
    cName: "nav-text",
  },
  {
    title: "Teachers",
    path: "/Teachers",
    icon: <GiIcons.GiTeacher />,
    cName: "nav-text",
  },
  {
    title: "Students",
    path: "/Students",
    icon: <AiIcons.AiOutlineLaptop />,
    cName: "nav-text",
    subNav: {
      title: 'KXE10 Students',
      path: '/Students/kxe'
      
      
    }
  },
  {
    title: "Classes",
    path: "/Classes",
    icon: <AiIcons.AiOutlineLaptop />,
    cName: "nav-text",
  },
];
