import React from "react";
import { useContext } from "react";
import { CurrentPlanContext } from "./WorkoutPlan";

export default function FullPlan({ workoutPlan }) {
  const fullPlan = workoutPlan?.days;

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
    <div className="card lg:card-side bg-accent text-secondary-content shadow-sm w-full overflow-x-auto">
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
