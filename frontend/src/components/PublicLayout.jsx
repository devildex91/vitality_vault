import { Navigate, Outlet } from 'react-router';

import useAuthentication from '../Auth';

// Public pages should redirect to the workout area for logged-in users.
export default function PublicLayout() {
  const { isAuthorized, loading } = useAuthentication();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthorized) {
    return <Navigate to="/workoutplan" replace />;
  }

  return <Outlet />;
}