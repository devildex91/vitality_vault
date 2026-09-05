import React from "react";
import { useContext,} from "react";
import { CurrentPlanContext } from "./WorkoutPlan";

export default function FullPlan() {
  const { selectedWorkout } = useContext(CurrentPlanContext);
  const fullPlan = selectedWorkout?.days;

  const week = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
 // changed from original to fix error of mutating state by creating a copy of the array to sort through
  const sortedPlan = fullPlan? [...fullPlan].sort((a, b) =>  week.indexOf(a.day) - week.indexOf(b.day)): [];

  return (
    <div className="flex flex-col items-center bg-base-300 justify-center border-primary text-primary border-3 p-4 my-2 flex-1 max-h-80vh overflow-y-auto overflow-x-auto rounded-xl">
      {sortedPlan?.map((plan, index) => {
        const isRestDay = !plan.exercises || plan.exercises.length === 0;
        return (
          <table key = {sortedPlan.title || index} className="table-fixed w-full ">
            <thead>
              <tr>
                <th className="w-1/4 break-words capitalize">{plan.day}</th>
                <th className="w-1/4 break-words">Exercise</th>
                <th className="w-1/4 break-words">Sets</th>
                <th className="w-1/4 break-words">Reps</th>
              </tr>
            </thead>
            <tbody>
              {isRestDay ? (
                <tr>
                  <th />
                  <td className="border-2 border-primary break-words">Rest Day</td>
                   <td className="border-2 border-accent break-words">
                      0
                    </td>
                    <td className="border-2 border-primary break-words">
                      0
                    </td>
                </tr>
              ) : (
                plan.exercises.map((exercise, exerciseIndex) => (
                  <tr key={exerciseIndex}>
                  <th key={exerciseIndex}></th><td className="border-2 border-primary break-words">
                      {exercise.exercise.replace(/_/g, " ")}
                    </td>
                    <td className="border-2 border-accent break-words">
                      {exercise.sets}
                    </td>
                    <td className="border-2 border-primary break-words">
                      {exercise.reps}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
