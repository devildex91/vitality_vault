import React from "react";
   import { useState, useEffect } from "react";
   
   export default function PreviousPlan({workoutPlan}){
    const yesterday = (new Date().getDay() - 1 + 7) % 7;
     const selectedWorkout = workoutPlan
     const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
     const [weekDay, setWeekday]= useState(weekdays[yesterday])
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
                             <th>Yesterdays Plan</th>
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