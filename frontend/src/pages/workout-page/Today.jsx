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

    
<div className="flex flex-col items-center bg-base-300 justify-center border-primary border-2 text-primary p-4 my-2 flex-1 max-h-80vh overflow-y-auto rounded-xl">
    {todaysPlan?.exercises?.length === 0 ? (
                    <p>Nothing to do today take a break and relax</p>
                  ) : (
                    
  
                    <table className="table-fixed w-full">
                      <thead>
                        <tr>
                          <th className="w-1/4 break-words">Todays Plan</th>
                          <th className="w-1/4 break-words">Exercise</th>
                          <th className="w-1/4 break-words">Sets</th>
                          <th className="w-1/4 break-words">Reps</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todaysPlan?.exercises?.map((exercise, exerciseIndex) => (
                                               <tr key={exerciseIndex}>
                            <th>  </th>
                            <td >{exercise.exercise.replace(/_/g, ' ')}</td>
                            <td >{exercise.sets}</td>
                            <td >{exercise.reps}</td>
                          </tr>
                          
                          
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
)
}