import React from "react";
import {  useState, useContext } from "react";
import { NavLink,Link, Outlet } from "react-router";
import TodaysPlan from "./Today.jsx";
import PreviousPlan from "./Previous.jsx";
import TomorrowsPlan from "./Tomorrow.jsx";
import FullPlan from "./Full.jsx";
import { CurrentPlanContext } from "./WorkoutPlan.jsx";


export default function CurrentPlan(){
   
   const {selectedWorkout} = useContext(CurrentPlanContext)

    return(
     <>
<div className="tabs tabs-box col-span-2 mt-2 bg-base-100 text-primary">
  <input type="radio" name="my_tabs_4" className="tab bg-base-200 text-primary  focus:bg-accent focus:text-neutral" aria-label="Todays " />
  <div className="tab-content bg-base-300 border-base-300 p-6"><TodaysPlan workoutPlan={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab bg-base-200 text-primary  focus:bg-accent focus:text-neutral" aria-label="Previous " defaultChecked />
  <div className="tab-content bg-base-300 border-base-300 p-6"><PreviousPlan workoutPlan={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab bg-base-200 text-primary  focus:bg-accent focus:text-neutral" aria-label="Tomorrows" />
  <div className="tab-content bg-base-300 border-base-300 p-6"><TomorrowsPlan workoutPlan={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab bg-base-200 text-primary  focus:bg-accent focus:text-neutral" aria-label="Full plan" />
  <div className="tab-content bg-base-300 border-base-300 p-6"><FullPlan workoutPlan={selectedWorkout} /></div>
</div>
     </>
    )
}