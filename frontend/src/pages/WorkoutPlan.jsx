import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import MobileView from '../components/WorkoutPlan-components/MobileView.jsx';
import LargeView from '../components/WorkoutPlan-components/LargeView.jsx'
import {Link, Outlet} from "react-router";
import { useState, useEffect } from 'react';

export default function WorkoutPlan(){
// Dynamically changes which component depending on screen size as too complicted to change in one component
 const [workoutScreen, setWorkoutScreen]= useState(false);
useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 640px)")
    setWorkoutScreen(mediaWatcher.matches);
    
    function updateWorkoutScreen(e) {
      setWorkoutScreen(e.matches);
    }
     mediaWatcher.addEventListener('change', updateWorkoutScreen)
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateWorkoutScreen)
    }})
const screenView =  workoutScreen  ? <MobileView /> : <LargeView />;
    return (
          <>
           <Navbar />
           <header>
            <h1>Workout plan</h1>
           </header>
           <main className="sm:grid h-dvh mx-4  sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 gap-4 ">
           {screenView}
           </main>
           <Footer />
           </>
           
       
       )
}