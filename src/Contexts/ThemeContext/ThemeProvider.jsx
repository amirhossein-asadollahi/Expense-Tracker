import React, { useCallback, useEffect, useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "LIGHT";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("class", theme);
  }, [theme]);
  const changeTheme = useCallback(() => {
    setTheme((prev) => (prev === "LIGHT" ? "DARK" : "LIGHT"));
  }, []);
  const value = useMemo(() => {
    return { theme, changeTheme };
  }, [theme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
