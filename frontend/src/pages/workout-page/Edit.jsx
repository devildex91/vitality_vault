import React from "react";
import { useState, useContext } from "react";
import { CurrentPlanContext } from "./WorkoutPlan";
import api from "../../api";

export default function EditPlan({}) {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [newExercise, setNewExercise] = useState(null);
  const { workoutPlans, 
          exerciseData,
           setLoading,
           setError, 
           fetchWorkoutPlans  } = useContext(CurrentPlanContext);
  

  /*Form submit to send patch to update form */
 async function saveWorkout(e) {
 e.preventDefault();
 
 if(!selectedWorkout){
  alert("You have selected no options at all. Please try again")
  return;
 };

 
  try{
    setLoading(true);
    const payload = { 
      id: selectedWorkout.id,
      title: selectedWorkout.title,
      days: selectedWorkout.days.map((dayObj) => ({
        id: dayObj.id,
        day: dayObj.day,
          exercises: dayObj.exercises.map((ex) => ({
            id: ex.id,
            exercise: ex.exercise,
            sets: Number(ex.sets || 0),
            reps: Number(ex.reps || 0),
        })),
      })),
    };

    await api.put("/api/updateworkout/", payload);
    await fetchWorkoutPlans();


    setError(null)
    alert("Workout plan updated succesfully!");
  } catch(err) {
    console.error("Update error:", err);
    setError("Failed to save changes");
  } finally {
    setLoading(false);
  }

}

/*function to  select workout  */
  function findWorkout(targetId) {
    const foundWorkout = workoutPlans.find(
      (workouts) => workouts.id === targetId,
    );

    if (foundWorkout) {
      setSelectedWorkout(foundWorkout);
       setSelectedDay(null);
       setSelectedExercise(null);
    }
  }
  
/* function to find day to update */
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
        /*updating existing*/
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
          /*Adding new exercise*/
          else {
            const brandNewExerciseItem = {
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

   setSelectedDay((prevDay) => {
    if (!prevDay) return prevDay;
    if (selectedExercise) {
      return {
        ...prevDay,
        exercises: prevDay.exercises.map((ex) =>
          ex.exercise === selectedExercise.exercise
            ? { ...ex, exercise: newExercise.exercise, sets: Number(newExercise.sets) || 0, reps: Number(newExercise.reps) || 0 }
            : ex
        ),
      };
    } else {
      return {
        ...prevDay,
        exercises: [...prevDay.exercises, { exercise: newExercise.exercise, sets: Number(newExercise.sets) || 0, reps: Number(newExercise.reps) || 0 }],
      };
    }
  });  
    setSelectedExercise(null);
    setNewExercise({ exercise: "", sets: "", reps: "" });
  }

function deleteExercise() {
  if(!selectedExercise){
    alert("Please select an exercise to continue");
  return;
}
  setSelectedWorkout((prevWorkout) => {
    return{
      ...prevWorkout,
      days: prevWorkout.days.map((day) => {
        if(day.day === selectedDay.day) {
          return {
            ...day,
            exercises: day.exercises.filter(
               (exercise) => exercise.id !== selectedExercise.id
              ),
            };
          }
          
          return day;
          }),
      }});
 
setSelectedDay((prevDay) => {
    if (!prevDay) return prevDay;
    return {
      ...prevDay,
      exercises: prevDay.exercises.filter((exercise) => exercise.id !== selectedExercise.id)
    };
  });

setSelectedExercise(null);
  setNewExercise({
    exercise: "",
    sets: "",
    reps: "",
  });
  }

     
function deleteDay(){
  if (!selectedDay){
    alert("You have not selected a day to delete. Please select a day and try again.")
   return; 
  } 

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
 });
  setSelectedDay((prevDay) => prevDay ? { ...prevDay, exercises: [] } : null);
 } 

const deleteWorkout = async() => {
   if (!selectedWorkout){
    alert("Please Select a Workout to continue")
    return;
  }  
try {
  setLoading(true);
  await api.delete(`/api/deleteworkout/${Number(selectedWorkout.id)}`);
  await fetchWorkoutPlans();
setSelectedWorkout(null);
setSelectedExercise(null);
setSelectedDay(null);
setError(null);
} catch(err) {
  console.error("Delete Error:", err);
  setError("Could not delete Workout.");
} finally {
  setLoading(false);
}
};

 
  return (
    <div className=" flex flex-col h-full items-center bg-base-300 justify-start content-center justify-items-center align border-primary border-2 p-4 my-2 rounded-xl">
    <h2 className="card-title text-accent">Edit Plan</h2>
     <form onSubmit ={saveWorkout} className = "flex flex-col items-center ">
      {/*Workout Select */}
      <select
        className=" flex flex-col items-center input input-accent bg-base-300 text-primary font-bold focus:bg-neutral focus:border-3 focus:border-base-300 focus:text-base-300 mt-3"
        value={selectedWorkout?.id || ""}
        onChange={(e) => {
          findWorkout(Number(e.target.value));
        }}
      >
        <option value="">Select Workout to edit</option>
        {workoutPlans?.map((workout) => {
          return (
            <option key={workout.id} value={workout.id}>
              {workout.title}
            </option>
          );
        })}
      </select>
      {/*Day Select */}
      <select
        className="input input-accent bg-base-300 text-primary font-bold focus:bg-neutral focus:border-3 focus:border-base-300 focus:text-base-300 mt-3"
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
       className="input input-accent bg-base-300 text-primary font-bold focus:bg-neutral focus:border-3 focus:border-base-300 focus:text-base-300 mt-3"
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
      className="input input-accent bg-base-300 text-primary font-bold focus:bg-neutral focus:border-3 focus:border-base-300 focus:text-base-300 mt-3"
      value = {newExercise?.exercise}
      disabled = {!selectedDay}
      onChange = {(e) => setNewExercise((exercise) =>({
        ...exercise,
        exercise: e.target.value,
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
      className="input input-accent bg-base-300 text-primary font-bold focus:bg-primary focus:border-3 focus:border-base-300 focus:text-base-300 mt-3"
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
className="input input-accent bg-base-300 text-primary font-bold focus:bg-neutral focus:border-3 focus:border-base-300 focus:text-base-300 mt-3"
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
<div id="buttonDiv" className = "flex flex-wrap justify-evenly">
      <button className="btn btn-soft bg-primary text-base-300  focus:bg-neutral active:border-3 active:border-base-300  w-1/2 mt-3" type = "button" onClick = {updateWorkout}>Update Workout</button>
      <button className="btn btn-soft bg-primary text-base-300  focus:bg-neutral active:border-3 active:border-base-300  w-1/2 mt-3" type = "button" onClick = {deleteExercise}>Delete Exercise</button>
      <button className="btn btn-soft bg-primary text-base-300  focus:bg-neutral active:border-3 active:border-base-300  w-1/2 mt-3" type = "button" onClick = {deleteDay}>Delete day</button>
      <button className="btn btn-soft bg-primary text-base-300  focus:bg-neutral active:border-3 active:border-base-300  w-1/2 mt-3" type = "button" onClick = {deleteWorkout}>Delete Workout</button>
      <button  className="btn btn-soft bg-primary text-base-300  focus:bg-neutral active:border-3 active:border-base-300  w-1/2 mt-3" type = "submit">Save Workout</button>
      </div>
         </form>
        <div id = "workoutDisplay"
           className="card lg:card-side bg-base-300 text-primary rounded-xl shadow-sm  flex-1 max-h-[78vh] overflow-y-auto ml-3 mr-3 mt-3">
            {selectedWorkout && (
  <div className="flex flex-col items-stretch bg-base-300 justify-start border-primary text-primary border-2 p-4 my-2 flex-1 max-h-[80vh] overflow-y-auto overflow-x-auto rounded-xl">
    <h3 className="text-xl font-bold mb-4">{selectedWorkout.title}</h3>
    {selectedWorkout?.days.map((days) => {return(
     <table className="table-fixed w-full">
       <thead>
              <tr>
                <th className = "w-1/4 break-words">{days.day}</th>
                <th className = "w-1/4 break-words">Exercise</th>
                <th className = "w-1/4 break-words">Sets</th>
                <th className = "w-1/4 break-words">Reps</th>
              </tr>
            </thead>
            <tbody>
              {days?.exercises?.map((exercise, exerciseIndex) => (
                <tr key={exerciseIndex}>
                  <th> </th>
                  <td>{exercise.exercise.replace(/_/g, ' ')}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                </tr>
              ))}
            </tbody>
     </table>
    )})}
    
  </div>
)}

        </div> 
    </div>
  );
  
}
