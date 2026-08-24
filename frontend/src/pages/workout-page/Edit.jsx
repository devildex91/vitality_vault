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
  
 function saveWorkout(e) {
 e.preventDefault()
 if(!selectedWorkout){
  alert("You have selected no options at all. Please try again")
 }
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
    const foundDay = selectedWorkout?.days?.find(
      (workout) => workout.day === targetDay,
    );

    if (foundDay) {
      setSelectedDay(foundDay);
    }
  }
  function findExercise(targetExercise) {
    if(targetExercise === "Add Exercise" || targetExercise === ""){
      setSelectedExercise(null)
      setNewExercise({exercise:"", sets:"", reps:""});
      return;
    }

    const foundExercise = selectedDay.exercises?.find(
      (exercise) => exercise.exercise === targetExercise,
    );
    if(foundExercise) {
      setSelectedExercise(foundExercise);
       setNewExercise({
        exercise: foundExercise.exercise,
        sets: foundExercise.sets,
        reps: foundExercise.reps,
         });
    } else setSelectedExercise(null)
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

function updateWorkout() { 
 if (!selectedWorkout || !selectedDay){
  alert("You have made no selections please fill out the options below to continue")
  return
 }

 setSelectedWorkout((prevWorkout) => {
  if (!prevWorkout) return prevWorkout;

  return{
    ...prevWorkout,
    days: prevWorkout.days.map((dayObj) => {
      if (dayObj?.day === selectedDay?.day){
        //updating existing 
        if(selectedExercise) {return {
           ...dayObj,
           exercises: dayObj.exercises.map((ex) => {
            if (ex.exercise === selectedExercise.exercise) {
              return{
                ...ex,
                exercise:newExercise?.exercise,
                sets:Number(newExercise?.sets) || 0,
                reps:Number(newExercise?.reps) || 0,
              };
            } 
            return ex;
            }), 
           };
          }
          //Adding new exercise
          else {
            const brandNewExerciseItem = {
              id: Date.now().toString(),
              exercise:newExercise.exercise,
              sets:Number(newExercise?.sets) || 0,
                reps:Number(newExercise?.reps) || 0,
            };
            return {
              ...dayObj,
              exercises: [...dayObj.exercises, brandNewExerciseItem],
            };
          }
        }
        return dayObj;
             }),
      };
    });
    //resets fields after submitting
    setSelectedExercise(null);
    setNewExercise({ exercise: "", sets: "", reps: "" });
  }

function deleteExercise() {
  if(!selectedExercise){
    alert("Please select an exercise to continue")
  } else {
  setSelectedWorkout((prevWorkout) => {
    return{
      ...prevWorkout,
      days: prevWorkout.days.map((days) => {
        if(days.day === selectedDay.day) {
          return {
            ...days,
            exercises: days.exercises.filter(
               (exercise) => exercise.exercise !== selectedExercise.exercise)
            };
          }
          return days;
          })
      };
    });
  }}

     
function deleteDay(){
  if (!selectedDay){
    alert("You have not selected a day to delete. Please select a day and try again.")
  } else {
 setSelectedWorkout((prevWorkout) => {
  return {
    ...prevWorkout, 
    days: prevWorkout.days.map((days) => {
      if(days.day === selectedDay.day) {
        return {
          ...days,
          exercises: []
        };
      }
      return days;
    })
  }
 })
  }
 } 

function deleteWorkout(){
  if (!selectedWorkout){
    alert("Please Select a Workout to continue")
  } else {
setSelectedWorkout(null)
}}

console.log(selectedDay)
console.log(sortedPlan)
  return (
    <div className="card lg:card-side bg-accent text-secondary-content shadow-sm w-full overflow-x-auto">
     <form onSubmit ={saveWorkout}>
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
       value = {selectedExercise?.exercise || ""}
       disabled = {!selectedDay}
       onChange={(e) => findExercise(e.target.value)}
      >
        <option value = "">--Select Exercise / Add new--</option>
        <option value = "Add Exercise">Add New</option>
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
      disabled = {!selectedDay}
      onChange = {(e) => setNewExercise((exercise) =>({
        ...exercise,
        exercise: e.target.value,
      }) )}>
        <option value="">--Choose new exercise--</option>
        {exerciseData.map((exerciseObj) => {
                    return (
                      <option key={exerciseObj.id} value={exerciseObj.exercise}>
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
      <button className="btn btn-soft text-accent bg-base-100 block" type = "button" onClick = {updateWorkout}>Update Workout</button>
      <button className="btn btn-soft text-accent bg-base-100 block" type = "button" onClick = {deleteExercise}>Delete Exercise</button>
      <button className="btn btn-soft text-accent bg-base-100 block" type = "button" onClick = {deleteDay}>Delete day</button>
      <button className="btn btn-soft text-accent bg-base-100 block" type = "button" onClick = {deleteWorkout}>Delete Workout</button>
      <button  className="btn btn-soft text-accent bg-base-100 block" type = "submit">Save Workout</button>
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
