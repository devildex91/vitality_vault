import { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
const ThemeContext = createContext();
//  useContext created to wrap app in for inherited dark/light themes  
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const preferredTheme  = async () => {
      try {
        setLoading(true);
        
        const response = await api.get("/api/profile/");
        setTheme(response.data.preferred_theme);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err.response.data);
        setError("Failed to load Profile Please try again");
      } finally {
        setLoading(false);
      }
    };
    preferredTheme();
  }, []);

  useEffect(() => {
    //targets data theme directly to change whole app every time switch is toggled
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const updateProfile = async () => {
    try{
      setLoading(true);
      await api.patch("/api/profile/", {
       "preferred_theme":  localStorage.getItem("theme"), 
     });
     setError(null)
    } catch (err) {
      console.error("Update Error:",err.response.data);
      setError("Failed to save changes")
    } finally {
      setLoading(false)
    }
    }
   updateProfile();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);