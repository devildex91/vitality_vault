import { useState, useContext } from 'react'
import './App.css'
import {  Routes, Route } from "react-router";
import SignIn from './pages/SignIn.jsx'
import HomePage from './/pages/HomePage.jsx'
import WorkoutPlan from './pages/WorkoutPlan.jsx'
import CalorieLog from './pages/CalorieLog.jsx'
import BodyTracker from './pages/BodyTracker.jsx'

export default function App() {
  return (
 
 
 <Routes>
  <Route path="/" element = {<SignIn />} />
  <Route path = "home" element = {<HomePage />} />
  <Route path = "workoutplan" element = {<WorkoutPlan />} />
  <Route path = "calorielog" element = {<CalorieLog />} />
  <Route path = "bodytracker" element = {<BodyTracker />} />
 </Routes>
 
 
 
  )
}

