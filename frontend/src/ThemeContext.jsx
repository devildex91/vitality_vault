import { createContext, useContext, useEffect, useState } from 'react';

import api from './api';
import { ACCESS_TOKEN } from './token';

const ThemeContext = createContext();

// Provides the app-wide theme state and syncs it to the backend profile.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) {
      setProfileLoaded(true);
      return;
    }

    const getProfile = async () => {
      try {
        setLoading(true);

        const response = await api.get('/api/profile/');
        const preferredTheme = response.data.preferred_theme;

        if (preferredTheme) {
          setTheme(preferredTheme);
        }

        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err.response?.data || err);
        setError('Failed to load profile. Please try again.');
      } finally {
        setLoading(false);
        setProfileLoaded(true);
      }
    };

    getProfile();
  }, []);

  useEffect(() => {
    // Apply the selected theme across the whole app by updating the document attribute.
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken || !profileLoaded) {
      return;
    }

    const updateProfile = async () => {
      try {
        setLoading(true);
        await api.patch('/api/profile/', {
          preferred_theme: theme,
        });
        setError(null);
      } catch (err) {
        console.error('Update Error:', err.response?.data || err);
        setError('Failed to save changes');
      } finally {
        setLoading(false);
      }
    };

    updateProfile();
  }, [theme, profileLoaded]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, loading, error }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Convenience hook for accessing the app theme state anywhere in the UI.
export const useTheme = () => useContext(ThemeContext);