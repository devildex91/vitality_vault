import { Navigate, Outlet } from 'react-router';

import useAuthentication from '../Auth';

// Authenticated pages redirect to the login screen until the user has a valid token.
export default function ProtectedLayout() {
  const { isAuthorized, loading } = useAuthentication();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}