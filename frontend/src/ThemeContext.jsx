import { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
import { ACCESS_TOKEN } from './token';
const ThemeContext = createContext();
//  useContext created to wrap app in for inherited dark/light themes  
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [profileLoaded, setProfileLoaded] = useState(false);
  
  useEffect(() => {
const accesstoken = localStorage.getItem("ACCESS_TOKEN");

if(!accesstoken) {
  setProfileLoaded(true);
  return;
}


    const getProfile  = async () => {
    
    try {
        setLoading(true);
        
        const response = await api.get("/api/profile/");
        const preferredTheme = response.data.preferred_theme;
        if(preferredTheme) {
          setTheme(preferredTheme);
        }
        
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err.response.data);
        setError("Failed to load Profile Please try again");
      } finally {
        setLoading(false);
        setProfileLoaded(true)
      }
    };
    getProfile();
  }, []);

  useEffect(() => {
    //targets data theme directly to change whole app every time switch is toggled
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
    
  useEffect(() => {
    const accesstoken = localStorage.getItem(ACCESS_TOKEN);
    if(!accesstoken || !profileLoaded) {
      return;
    } 
    const updateProfile = async () => {
    try{
      setLoading(true);
      await api.patch("/api/profile/", {
       "preferred_theme": theme  
     });
     setError(null)
    } catch (err) {
      console.error("Update Error:",err.response.data || err);
      setError("Failed to save changes")
    } finally {
      setLoading(false)
    }
    }
   updateProfile();
  }, [theme, profileLoaded]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, loading, error, }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);