import React from "react";
import { GrTransaction } from "react-icons/gr";
import { ImHome } from "react-icons/im";
import { MdInsertChartOutlined } from "react-icons/md";
import { PiTargetBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";

export const navItems = [
  { to: "/", end: true, title: "داشبورد", icon: <ImHome /> },
  {
    to: "/transaction",
    end: true,
    title: "تراکنش ها",
    icon: <GrTransaction />,
  },
  { to: "/category", end: true, title: "دسته بندی ها", icon: <TbCategory /> },
  {
    to: "/report",
    end: true,
    title: "گزارش ها",
    icon: <MdInsertChartOutlined />,
  },
  {
    to: "/financialgoal",
    end: true,
    title: "اهداف مالی",
    icon: <PiTargetBold />,
  },
];
