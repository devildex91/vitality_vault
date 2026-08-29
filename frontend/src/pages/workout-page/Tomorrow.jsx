import React from "react";
   import { useState, useContext } from "react";
   import { CurrentPlanContext } from "./WorkoutPlan.jsx";
   export default function TomorrowsPlan(){
    const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    const tomorrow = (new Date().getDay() + 1) % 7
    const [weekDay, setWeekday]= useState(weekdays[tomorrow])
      const {selectedWorkout} = useContext(CurrentPlanContext);
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