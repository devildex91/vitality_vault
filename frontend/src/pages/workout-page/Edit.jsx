import React from "react";
import { useState, useContext } from "react";
import { CurrentPlanContext } from "./WorkoutPlan";

export default function EditPlan({}) {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [newExercise, setNewExercise] = useState(null);
  const { workoutPlans, exerciseData, loading, error } = useContext(CurrentPlanContext);
  const targetExercises = selectedDay?.exercises;
  const [editedExercises, setEditedExercises] = useState({});
  
 function updateExercise() {
  const updatedExercises = targetExercises.map((exercise, index) => {
    return {
      ...exercise,
      ...(editedExercises[index] || {}),
    };
  });

  setSelectedDay({
    ...selectedDay,
    exercises: updatedExercises,
  });
}
console.log(selectedDay?.exercises)

  function findWorkout(targetTitle) {
    const foundTitle = workoutPlans.find(
      (workouts) => workouts.title === targetTitle,
    );

    if (foundTitle) {
      setSelectedWorkout(foundTitle);
    }
  }

  function findDay(targetDay) {
    const foundDay = selectedWorkout.days?.find(
      (workout) => workout.day === targetDay,
    );

    if (foundDay) {
      setSelectedDay(foundDay);
    }
  }
  function findExercise(targetExercise) {
    const foundExercise = selectedDay.exercises?.find(
      (exercise) => exercise.exercise === targetExercise,
    );
    if(foundExercise) {
      setSelectedExercise(foundExercise);
    }
  }
 

  const todaysPlan = selectedWorkout?.days;

  const week = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const sortedPlan = todaysPlan
    ? [...todaysPlan].sort((a, b) => {
        return week.indexOf(a.day) - week.indexOf(b.day);
      })
    : [];

const seeWorkout = (e) => {
  e.preventDefault() 
  setSelectedWorkout((workout) => {

  })
}
console.log(selectedWorkout)
console.log(sortedPlan)
  return (
    <div className="card lg:card-side bg-accent text-secondary-content shadow-sm w-full overflow-x-auto">
     <form onSubmit ={seeWorkout}>
      {/*Workout Select */}
      <select
        className="select select-accent"
        value={selectedWorkout?.title || ""}
        onChange={(e) => {
          findWorkout(e.target.value);
        }}
      >
        <option value="">Select Workout to edit</option>
        {workoutPlans?.map((workout) => {
          return (
            <option key={workout.id} value={workout.title}>
              {workout.title}
            </option>
          );
        })}
      </select>
      {/*Day Select */}
      <select
        className="select select-accent"
        value={selectedDay?.day || ""}
        disabled={!selectedWorkout}
        onChange={(e) => {
          findDay(e.target.value);
        }}
      >
        <option value="">Select Workout Day to edit</option>
        {sortedPlan?.map((day) => {
          return (
            <option key={day?.id} value={day?.day}>
              {day?.day}
            </option>
          );
        })}
      </select>
      {/*Current exercise select  */}
      <select
       className = "select select-accent"
       value = {selectedExercise?.exercise}
       disabled = {!selectedDay}
       onChange={(e) => findExercise(e.target.value)}
      >
        <option value = "">--Select Exercise to change--</option>
        {selectedDay?.exercises?.map((exercise) => {
          return (
            <option key = {exercise?.id} value={exercise?.exercise}>{exercise?.exercise}</option>
          )
        })}

      </select>
      {/*New exercise select */}
      <select
      className = "select select-accent"
      value = {newExercise?.exercise}
      disabled = {!selectedExercise}
      onChange = {(e) => setNewExercise((exercise) =>({
        exercise: e.target.value,
        ...exercise,
      }) )}>
        <option value="">--Choose new exercise--</option>
        {exerciseData.map((exerciseObj) => {
                    return (
                      <option key={exerciseObj.id} value={exerciseObj.id}>
                        {exerciseObj.name}
                      </option>
                    );
                  })}
      </select>
      {/*sets select*/}
      <select
      className="select select-accent"
      value ={newExercise?.sets}
      disabled={!newExercise}
      onChange={(e) => setNewExercise((exercise)=> ({
        ...exercise,
        sets: e.target.value
}))}><option value="">--Select no of sets--</option>
     {new Array(8).fill(0).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
</select>
{/*reps select */}
<select
className = "select select-accent"
value={newExercise?.reps}
disabled={!newExercise}
onChange={(e) => setNewExercise((exercise) => ({
  ...exercise,
  reps: e.target.value,
  
}))}>
  <option value = "">--Select no of reps--</option>
  {new Array(20).fill(0).map((_, i) => (
    <option key={i+1} value = {i+1}>{i+1}</option>
  ))}

</select>
      
      <button type = "submit">See updated Workout</button>
         </form>
        <div id = "workoutDisplay"
          className = "card lg:card-side bg-accent text-secondary-content shadow-sm w-full overflow-x-auto">
            {selectedWorkout && (
              <>
             <h3>{selectedWorkout.title}</h3>
              <ol>
                {[...selectedWorkout?.days]
                .sort((a, b) => week.indexOf(a.day) - week.indexOf(b.day))
                .map((day) => (
                  <>
                  <li key ={day.id}>{day.day}</li>
                  <ol>
                    {[...day?.exercises].map((exercise) => (
                      <li key = {exercise.id}><span>{(exercise.exercise)} Sets:{exercise.sets} Reps:{exercise.reps}</span></li>
                      
                    ))}
                  </ol>
                  </>
                ))}
              </ol>
             
             </>
            )}
        </div> 
    </div>
  );
  
}
