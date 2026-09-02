import React from "react";
import {  createBrowserRouter } from "react-router";
/*pages imports*/
/*Sign in components */
import ProtectedLayout from './components/ProtectedLayout.jsx';
import PublicLayout from './components/PublicLayout.jsx';
import AuthPage from './pages/signin-page/AuthPage.jsx';
import HomePage from './pages/HomePage.jsx';
/* Workout plan components*/
import WorkoutPlan from './pages//workout-page/WorkoutPlan.jsx';
import NotFound from './pages/NotFound.jsx'

 
const AppRoutes = createBrowserRouter([
  {element: <PublicLayout />,
    children: [
       {
    path: "/",
    Component: HomePage,
  },
  {
    path:"/login",
    element: <AuthPage initialMethod="login" />,
  },
  {
   path:"/register",
   element:<AuthPage initialMethod="register" />, 
  },],},
  {
   element:<ProtectedLayout />,
   children: [
  

  {
    path:"/workoutplan",
    Component: WorkoutPlan,
  },

],},
  {
    path:"*",
    Component: NotFound,

  }

]);    
 
export default AppRoutes;
 
 
 
  

