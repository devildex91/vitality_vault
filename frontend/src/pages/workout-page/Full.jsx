import React from "react";
import { useContext } from "react";
import { CurrentPlanContext } from "./WorkoutPlan";

export default function FullPlan() {

  const {selectedWorkout} = useContext(CurrentPlanContext);
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
  const sortedPlan = fullPlan?.sort((a, b) => {
    return week.indexOf(a.day) - week.indexOf(b.day);
  });

  return (
    <div className="flex flex-col items-center bg-base-300 justify-center border-primary text-primary border-2 p-4 my-2 flex-1 max-h-80vh overflow-y-auto overflow-x-auto rounded-xl">
      {sortedPlan?.map((plan, index) => {
        return (
          <table className="table-fixed w-full ">
            <thead>
              <tr>
                <th className="w-1/4 break-words">{plan.day}</th>
                <th className="w-1/4 break-words">Exercise</th>
                <th className="w-1/4 break-words">Sets</th>
                <th className="w-1/4 break-words">Reps</th>
              </tr>
            </thead>
            <tbody>
              {plan?.exercises?.map((exercise, exerciseIndex) => (
                <tr key={exerciseIndex}>
                  <th> </th>
                  <td className="break-words">{exercise.exercise.replace(/_/g, ' ')}</td>
                  <td className="break-words">{exercise.sets}</td>
                  <td className="break-words">{exercise.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
