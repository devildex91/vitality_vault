import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
//  useContext created to wrap app in for inherited dark/light themes  
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    //targets data theme directly to change whole app every time switch is toggled
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);