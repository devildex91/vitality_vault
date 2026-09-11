import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import api from './api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './token';

// Central auth hook that checks whether a valid JWT exists and refreshes it if needed.
export default function useAuthentication() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (token) {
          const decoded = jwtDecode(token);
          const tokenExpiration = decoded.exp;
          const now = Date.now() / 1000;

          if (tokenExpiration < now) {
            await refreshToken();
          } else {
            setIsAuthorized(true);
          }
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    auth();
  }, []);

  const refreshToken = async () => {
    const storedRefreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      const res = await api.post('/api/token/refresh/', {
        refresh: storedRefreshToken,
      });

      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error('Error refreshing token', error);
      setIsAuthorized(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setIsAuthorized(false);
    window.location.reload();
  };

  return { isAuthorized, loading, logout };
}