import React from "react";
import {  useState, useContext } from "react";
import { NavLink,Link, Outlet } from "react-router";
import TodaysPlan from "./Today.jsx";
import PreviousPlan from "./Previous.jsx";
import TomorrowsPlan from "./Tomorrow.jsx";
import FullPlan from "./Full.jsx";
import { CurrentPlanContext } from "./WorkoutPlan.jsx";


export default function CurrentPlan(){
   
   const {workoutPlans, selectedWorkout, updateCurrentWorkout } = useContext(CurrentPlanContext)

function findWorkout(targetTitle){
  const foundTitle = workoutPlans.find(workouts => workouts.title === targetTitle)
  if (foundTitle) {
     updateCurrentWorkout(foundTitle)
  };
};

    return(
     <>
       <select
                  className="select select-accent"
                  value={selectedWorkout?.title|| ""}
                  onChange={(e) => {
                    findWorkout(e.target.value)
                  }}
                
                >

                  <option value="">Select your workout</option>
                  {workoutPlans?.map((workout) => {
                    return (
                      <option key={workout.id} value={workout.title}>
                        {workout.title}
                      </option>
                         );
                  })}
                </select>
<div className="tabs tabs-lift bg-accent text-primary-content">
  <input type="radio" name="my_tabs_4" className="tab" aria-label="Todays " />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TodaysPlan workoutPlan={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Previous " defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><PreviousPlan workoutPlan={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Tomorrows" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TomorrowsPlan workoutPlan={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Full plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><FullPlan workoutPlan={selectedWorkout} /></div>
</div>
     </>
    )
}