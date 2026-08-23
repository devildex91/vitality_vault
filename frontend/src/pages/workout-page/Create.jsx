import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import api from "../../api";
import { CurrentPlanContext } from "./WorkoutPlan";

export default function CreatePlan() {
  /*useContext imports  */
  const { exerciseData, loading, error } = useContext(CurrentPlanContext);

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
    console.log(weeksWorkout);
    try {
      setLoading(true);

      const response = await api.post("api/createworkout", payload);

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
      <div className="card lg:card-side bg-accent text-primary-content shadow-sm ">
        <div className="card-body">
          <h2 className="card-title">Create Plan</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Workout Title</label>
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
              className="input input-accent"
              required
            />
            {weeksWorkout.days.map((dayObj, dayIndex) => (
              <fieldset key={dayIndex} className="border p-4 my-2 rounded">
                <h3 className="capitalize font-bold">{dayObj.day}</h3>
                {/*Exercise Selection */}
                <select
                  className="select select-accent"
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
                  className="select select-accent text-neutral"
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
                  className="select select-accent text-neutral"
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
                  className="btn btn-soft text-accent bg-base-100 ml-2"
                  onClick={() => handleAddExercise(dayIndex, dayObj)}
                >
                  Add Exercise to Day {dayIndex + 1}
                </button>
                <div
                  id="display-box"
                  className="card-body items-center text-center bg-base-100"
                >
                  {dayObj.exercises.length === 0 ? (
                    <p>No exercises have been added yet.</p>
                  ) : (
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Exercise</th>
                          <th>Sets</th>
                          <th>Reps</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dayObj.exercises.map((exercise, exerciseIndex) => (
                          <tr key={exerciseIndex}>
                            <th></th>
                            <td>{exercise.name}</td>
                            <td>{exercise.sets}</td>
                            <td>{exercise.reps}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </fieldset>
            ))}

            <button
              type="submit"
              className="btn btn-soft text-accent bg-base-100 block"
            >
              Submit Plan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
