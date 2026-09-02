import { Navigate, Outlet } from "react-router";
import useAuthentication from "../Auth";

export default function PublicLayout() {
  const { isAuthorized, loading } = useAuthentication();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthorized) {
    return <Navigate to="/workoutPlan" replace />;
  }

  return <Outlet />;
}