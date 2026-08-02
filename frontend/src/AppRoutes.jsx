import { useState, useContext } from 'react'
import {  createBrowserRouter } from "react-router";
/*pages imports*/
import SignIn from './pages/SignIn.jsx';
import HomePage from './pages/HomePage.jsx';
import WorkoutPlan from './pages/WorkoutPlan.jsx';
import CalorieLog from './pages/CalorieLog.jsx';
import BodyTracker from './pages/BodyTracker.jsx';
import Create from './components/WorkoutPlan-components/Create.jsx'
import Edit from './components/WorkoutPlan-components/Edit.jsx'
import Current from './components/WorkoutPlan-components/Current.jsx'
import Today from './components/WorkoutPlan-components/Today.jsx'
import Previous from './components/WorkoutPlan-components/Previous.jsx'
import Tomorrow from './components/WorkoutPlan-components/Tomorrow.jsx'
import Full from './components/WorkoutPlan-components/Full.jsx' 


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
 
 
 
  

