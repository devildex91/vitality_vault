import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import api from "../../api";
import { CurrentPlanContext } from "./WorkoutPlan";

export default function CreatePlan() {
  /*useContext imports  */
  const {
    exerciseData,
    loading,
    setLoading,
    error,
    setError,
    fetchWorkoutPlans,
  } = useContext(CurrentPlanContext);

  /* state to store selected exercise/sets/reps to be pushed into array */
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedSets, setSelectedSets] = useState([]);
  const [selectedReps, setSelectedReps] = useState([]);

  /*state to store the selected workout before being pushed to database */
  const [weeksWorkout, setWeeksWorkout] = useState({
    title: "",
    days: [
      { day: "monday", exercises: [] },
      { day: "tuesday", exercises: [] },
      { day: "wednesday", exercises: [] },
      { day: "thursday", exercises: [] },
      { day: "friday", exercises: [] },
      { day: "saturday", exercises: [] },
      { day: "sunday", exercises: [] },
    ],
  });

  const handleAddExercise = (dayIndex, dayObj) => {
    const chosenExerciseId = selectedExercises[dayIndex];
    if (!chosenExerciseId) return;

    const exerciseDetails = exerciseData.find(
      (exercise) => String(exercise.id) === String(chosenExerciseId),
    );
    if (!exerciseDetails) return;

    /*Checks for duplicates and prevents */
    if (
      dayObj.exercises.some((exercise) => exercise.id === exerciseDetails.id)
    ) {
      alert(`${exerciseDetails.name} has already been added to ${dayObj.day}`);
      return;
    }
    setWeeksWorkout((prevWeek) => ({
      ...prevWeek,
      days: prevWeek.days.map((dayObj, index) => {
        if (index === dayIndex) {
          return {
            ...dayObj,
            exercises: [
              ...dayObj.exercises,
              {
                id: exerciseDetails.id,
                name: exerciseDetails.name,
                sets: Number(selectedSets[dayIndex] || 0),
                reps: Number(selectedReps[dayIndex] || 0),
              },
            ],
          };
        }
        return dayObj;
      }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: weeksWorkout.title,
      days: weeksWorkout.days.map((dayObj) => ({
        day: dayObj.day,
        exercises: dayObj.exercises.map((ex) => ({
          exercise: ex.id,
          sets: Number(ex.sets || 0),
          reps: Number(ex.reps || 0),
        })),
      })),
    };

    try {
      setLoading(true);

      await api.post("api/createworkout/", payload);
      await fetchWorkoutPlans();
      alert("Successfully created workout ");
      setWeeksWorkout({
        title: "",
        days: weeksWorkout.days.map((d) => ({ ...d, exercises: [] })),
      });

      setError(null);
    } catch (error) {
      console.error("Create error:", error);
      setError("failed to send data");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="card lg:card-side bg-base-300 text-primary  shadow-sm  flex-1 max-h-[78vh] overflow-y-auto ml-3 mr-3 mt-3">
        <div className="card-body  rounded-xl text-align-center border-3 border-primary">
          <h2 className="card-title text-primary">Create Plan</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="workout_title"
              name="title"
              value={weeksWorkout.title}
              onChange={(e) =>
                setWeeksWorkout((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              placeholder="Workout Title"
              className="input input-primary bg-base-300  font-bold  focus:border-3 focus:border-base-300 "
              required
            />
            {weeksWorkout.days.map((dayObj, dayIndex) => (
              <fieldset
                key={dayIndex}
                className="flex flex-col items-center justify-center border-primary border-3 p-4 my-2 rounded"
              >
                <h3 className="capitalize font-bold text-primary">
                  {dayObj.day}
                </h3>
                {/*Exercise Selection */}
                <select
                  className="input input-primary bg-base-300  font-bold  focus:border-3 focus:border-base-300  mt-3"
                  value={selectedExercises[dayIndex] || ""}
                  onChange={(e) => {
                    setSelectedExercises((prev) => ({
                      ...prev,
                      [dayIndex]: e.target.value,
                    }));
                  }}
                >
                  <option value="">--Select an exercise--</option>
                  {exerciseData.map((exerciseObj) => {
                    return (
                      <option key={exerciseObj.id} value={exerciseObj.id}>
                        {exerciseObj.name}
                      </option>
                    );
                  })}
                </select>
                {/*Sets Selection */}
                <select
                  className="input input-primary bg-base-300  font-bold  focus:border-3 focus:border-base-300  mt-3"
                  value={selectedSets[dayIndex] || ""}
                  onChange={(e) => {
                    setSelectedSets((prev) => ({
                      ...prev,
                      [dayIndex]: e.target.value,
                    }));
                  }}
                >
                  <option value="">How many sets?</option>
                  {new Array(8).fill(0).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {/*Reps Selection */}
                <select
                  className="input input-primary bg-base-300 font-bold  focus:border-3 focus:border-base-300 mt-3"
                  value={selectedReps[dayIndex]}
                  onChange={(e) => {
                    setSelectedReps((prev) => ({
                      ...prev,
                      [dayIndex]: e.target.value,
                    }));
                  }}
                >
                  <option value="">How many Reps?</option>
                  {new Array(20).fill(0).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn btn-soft border-primary text-base-300 bg-primary focus:bg-neutral active:border-3 active:border-base-300 my-3 "
                  onClick={() => handleAddExercise(dayIndex, dayObj)}
                >
                  Add Exercise to Day {dayIndex + 1}
                </button>
                <div
                  id="display-box"
                  className="card-body items-center bg-base-300 text-bold-primary focus:bg-neutral focus:border-3 focus:border-base-300 focus:text-base-300 mt-3"
                >
                  {dayObj.exercises.length === 0 ? (
                    <p>No exercises have been added yet.</p>
                  ) : (
                    dayObj.exercises.map((exercise, exerciseIndex) => (
                      <ul key={exerciseIndex}>
                          <li>Exercise<hr/>{exercise.name}</li>
                          <li>Sets:  {exercise.sets}</li>
                          <li>Reps:  {exercise.reps}</li>
                        <hr />
                      </ul>
                    ))
                  )}
                </div>
              </fieldset>
            ))}

            <button
              type="submit"
               className="btn btn-primary text-base-300 bg-primary focus:bg-neutral active:border-3 active:border-base-300 my-3 "
            >
              Submit Plan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
