import { useState, useContext } from 'react'
import {  createBrowserRouter } from "react-router";
/*pages imports*/
/*Sign in components */
import SignIn from './pages/signin-page/SignIn.jsx';
import HomePage from './pages/HomePage.jsx';
/* Workout plan components*/
import WorkoutPlan from './pages//workout-page/WorkoutPlan.jsx';
import Create from './pages/Workout-page/Create.jsx'
import Edit from './pages/Workout-page/Edit.jsx'
import Current from './pages/Workout-page/Current.jsx'
import Today from './pages/Workout-page/Today.jsx'
import Previous from './pages/Workout-page/Previous.jsx'
import Tomorrow from './pages/Workout-page/Tomorrow.jsx'
import Full from './pages/Workout-page/Full.jsx' 
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
    children: [
      {
        path:"create",
        Component: Create,
      },{
        path:"edit",
        Component:Edit,
      },
      {
        path:"current",
        Component:Current,
        children: [
          {
            path:"today",
            Component: Today,
          },
          {
            path:"previous",
            Component: Previous,
          },
          {
            path:"tomorrow",
            Component: Tomorrow
          },
          {
            path:"full",
            Component: Full,
          }
        ]
      },
    ]
  },
  {
    path:"/calorielog",
    Component:CalorieLog,
  },
  {
    path:"/bodytracker",
    COmponent:BodyTracker,
  },

]);    
 
export default AppRoutes;
 
 
 
  

