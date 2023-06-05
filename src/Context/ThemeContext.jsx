import { useState, createContext, useContext } from "react";

/**
 * Context object for managing the theme.
 */
const ThemeContext = createContext();

/**
 * Component that provides the theme context to its child components.
 */

export const ThemeContextProvider = ({ children }) => {
  const [contextTheme, setContextTheme] = useState("Light");
  const value = { contextTheme, setContextTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
