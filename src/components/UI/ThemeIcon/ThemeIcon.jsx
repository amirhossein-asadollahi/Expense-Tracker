import { FaRegMoon, FaRegSun } from "react-icons/fa";
import "./ThemeIcon.css";
import useTheme from "../../../hooks/useTheme";
import React from "react";

const ThemeIcon = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <div className="theme-icon" onClick={changeTheme}>
      {theme === "DARK" ? <FaRegSun /> : <FaRegMoon />}
    </div>
  );
};

export default ThemeIcon;
