import React from "react";
import { useState, useEffect } from "react";

export default function TodaysPlan({workoutPlan}){
  const selectedWorkout = workoutPlan
  const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  const [weekDay, setWeekday]= useState(weekdays[new Date().getDay()])
/*Optional chaining added tyo make sure data is their to stop undefined error  */
  const todaysPlan = selectedWorkout?.days?.find(day => day?.day ===weekDay)
    
  
   
   console.log(todaysPlan)
    return(

    
     <div
                  id="display-box"
                  className="card-body items-center text-center bg-base-100"
                >
                  {todaysPlan?.exercises?.length === 0 ? (
                    <p>Nothing to do today take a break and relax</p>
                  ) : (
                    
  
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Todays Plan</th>
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