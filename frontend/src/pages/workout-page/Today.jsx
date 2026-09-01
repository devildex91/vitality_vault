import React from "react";
import { useState, useContext } from "react";
import { CurrentPlanContext } from "./WorkoutPlan.jsx";
export default function TodaysPlan(){
  const {selectedWorkout} = useContext(CurrentPlanContext); 
  const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  const [weekDay, setWeekday]= useState(weekdays[new Date().getDay()])
/*Optional chaining added tyo make sure data is their to stop undefined error  */
  const todaysPlan = selectedWorkout?.days?.find(day => day?.day ===weekDay)
    
  
    return(

    
<div className="flex flex-col items-center bg-neutral justify-center border-accent border-2 p-4 my-2 flex-1 max-h-80vh overflow-y-auto rounded-xl">
  {todaysPlan?.exercises?.length === 0 ? (
    <p>Nothing to do today, take a break and relax</p>
  ) : (
    todaysPlan?.exercises?.map((exercise, exerciseIndex) => (
      <ul key={exerciseIndex} className="mb-4">
        <li>
          <span>Exercise <hr /> {exercise.exercise}</span>
        </li>
        <li>
          <span>Sets: {exercise.sets}</span>
        </li>
        <li>
          <span>Reps: {exercise.reps}</span>
        </li>
      </ul>
    ))
  )}
</div>
)
}