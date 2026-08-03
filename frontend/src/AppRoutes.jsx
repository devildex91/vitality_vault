import { useState, useContext } from 'react'
import {  createBrowserRouter } from "react-router";
/*pages imports*/
/*Sign in components */
import SignIn from './pages/signin-page/SignIn.jsx';
import HomePage from './pages/HomePage.jsx';
/* Workout plan components*/
import WorkoutPlan from './pages//workout-page/WorkoutPlan.jsx';
/*Calorie log components */
import CalorieLog from './pages/calorie-page/CalorieLog.jsx';
/*Body tracker components */
import BodyTracker from './pages/progress-page/BodyTracker.jsx';


const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: SignIn,
  },
  {
    path:"/home",
    Component: HomePage,
  },
  {
    path:"/workoutplan",
    Component: WorkoutPlan,
  },
  {
    path:"/calorielog",
    Component: CalorieLog,
  },
  {
    path:"/bodytracker",
    Component: BodyTracker,
  },

]);    
 
export default AppRoutes;
 
 
 
  

