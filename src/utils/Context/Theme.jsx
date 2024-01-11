import { useState, createContext, useMemo } from "react";

import { colors_dark, colors_light } from "../style/colors";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const colors = useMemo(
    () => (theme === "light" ? colors_light : colors_dark),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
