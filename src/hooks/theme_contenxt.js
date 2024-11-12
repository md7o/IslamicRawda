import React, { createContext, useContext, useState, useEffect } from "react";

// Create ThemeContext
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  // Apply the theme to the body on initial load
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Save theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
