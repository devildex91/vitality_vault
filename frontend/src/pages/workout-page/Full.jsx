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
    <div className="flex flex-col items-center bg-neutral justify-center border-accent border-2 p-4 my-2 flex-1 max-h-80vh overflow-y-auto rounded-xl">
      {sortedPlan?.map((plan, index) => {
        return (
          <table className="table w-full">
            <thead>
              <tr>
                <th>{plan.day}</th>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {plan?.exercises?.map((exercise, exerciseIndex) => (
                <tr key={exerciseIndex}>
                  <th>{exerciseIndex + 1}st </th>
                  <td>{exercise.exercise}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
