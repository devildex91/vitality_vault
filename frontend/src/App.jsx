import { useState, useContext } from 'react'
import './App.css'
import {  Routes, Route } from "react-router";
import SignIn from './pages/SignIn'
import HomePage from './/pages/HomePage'
import WorkoutPlan from './pages/WorkoutPlan'
import CalorieLog from './pages/CalorieLog'
import BodyTracker from './pages/BodyTracker'

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

