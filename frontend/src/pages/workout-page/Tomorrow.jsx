import React from "react";
   import { useState, useEffect } from "react";
   import { CurrentPlanContext } from "./WorkoutPlan.jsx";
   export default function TomorrowsPlan({workoutPlan}){
    
    const tomorrow = new Date().getDay() + 1
     const selectedWorkout = workoutPlan
     const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
     const [weekDay, setWeekday]= useState(weekdays[tomorrow])
   /*Optional chaining added tyo make sure data is their to stop undefined error  */
     const todaysPlan = selectedWorkout?.days?.find(day => day?.day ===weekDay)
       
     
      
      
       return(
   
       
        <div className="card lg:card-side bg-accent text-secondary-content shadow-sm w-full overflow-x-auto">
                     {todaysPlan?.exercises?.length === 0 ? (
                       <p>Nothing to do today take a break and relax</p>
                     ) : (
                       
     
                       <table className="table w-full">
                         <thead>
                           <tr>
                             <th>Tomorrows Plan</th>
                             <th>Exercise</th>
                             <th>Sets</th>
                             <th>Reps</th>
                           </tr>
                         </thead>
                         <tbody>
                           {todaysPlan?.exercises?.map((exercise, exerciseIndex) => (
                             <tr key={exerciseIndex}>
                               <th>{exerciseIndex + 1}st </th>
                               <td>{exercise.exercise}</td>
                               <td>{exercise.sets}</td>
                               <td>{exercise.reps}</td>
                             </tr>
                           ))}
                         </tbody>
                         
                       </table>
                     )}
                   </div>
   )
   }