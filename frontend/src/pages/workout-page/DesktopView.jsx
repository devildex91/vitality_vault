import React from "react"
import { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import CreatePlan from "./Create";
import EditPlan from "./Edit";
import FullPlan from "./Full";
import TodaysPlan from "./Today";
import PreviousPlan from "./Previous.jsx";
import TomorrowsPlan from "./Tomorrow.jsx";
import ExerciseCarousel from "./ExerciseCarousel";
import { CurrentPlanContext } from "./WorkoutPlan.jsx";
export default function DesktopView(){

   const {selectedWorkout} = useContext(CurrentPlanContext)
  return(
 <main className=" grid grid-cols-4 grid-flow-rows gap-4 grow">
 
<div className="tabs tabs-box col-span-2 mt-2 bg-base-200 text-accent">
  <input type="radio" name="my_tabs_2" className="tab bg-base-300 text-primary  focus:bg-accent focus:text-primary" aria-label="Create" defaultChecked />
  <div className="tab-content self-start bg-base-300 border-base-300"><CreatePlan /></div>
    <input type="radio" name="my_tabs_2" className="tab bg-base-300 border-neutral text-primary  focus:bg-accent" aria-label="Edit" />
  <div className="tab-content bg-base-300 border-base-300 p-6"><EditPlan /></div>
</div>

<div className = "col-span-2 row-span-2 mb-2 flex rounded-xl">
  <div className="tabs tabs-box col-span-2 mt-2 bg-base-200 text-accent grow mb-2">
    <input type="radio" name="my_tabs_4" className="tab bg-base-300 text-primary  focus:bg-accent focus:text-primary" aria-label="Todays " />
    <div className="tab-content bg-base-300 border-base-300 p-6"><TodaysPlan /></div>
  
    <input type="radio" name="my_tabs_4" className="tab bg-base-300 text-primary  focus:bg-accent" aria-label="Full" defaultChecked />
    <div className="tab-content bg-base-300 border-base-300 p-6"><FullPlan /></div>

    <input type="radio" name="my_tabs_4" className="tab bg-base-300 text-primary  focus:bg-accent " aria-label="Previous " defaultChecked />
      <div className="tab-content bg-base-300 border-base-300 p-6"><PreviousPlan workoutPlan={selectedWorkout} /></div>
    
      <input type="radio" name="my_tabs_4" className="tab bg-base-300 text-primary  focus:bg-accent" aria-label="Tomorrows" />
      <div className="tab-content bg-base-300 border-base-300 p-6"><TomorrowsPlan workoutPlan={selectedWorkout} /></div>
  </div>
</div>
<div className="carousel col-span-2">
 <ExerciseCarousel />
</div>

 </main>
         
         
    )
} 