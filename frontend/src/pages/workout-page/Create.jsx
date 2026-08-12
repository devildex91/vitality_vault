import React from "react";
import {useState, useEffect} from "react"
import axios from "axios"
import api from "../../api";


export default function CreatePlan(){
  
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState()

  /*state to store ingredients from api call*/
  const [workoutData, setWorkoutData] = useState([])
  
  /*state to store selected days from form */
  const [days, setDays] = useState(0);
  
  /* state to store selected exercise to be pushed into array */ 
  const [selectedExercises, setSelectedExercises]=useState({})
  
  /*state to store the selected workout before being pushed to database */
  const [weekWorkout, setWeekWorkout] = useState([])
const apiUrl = api
 

useEffect(()=> {
  const fetchexerciseData = async() => {
    try {
      setLoading(true);

      const response = await api.get("/api/exercises");
      setWorkoutData(response.data)
      setError(null);
       } catch(err) {
        console.error("Error fetching data:" ,err);
        setError("Failed to load exercises Please try again");
       } finally {
        setLoading(false)
  }}
  fetchexerciseData();
},[])

 useEffect(() => {
  /*(_,i)-ignores content and just used index  useEffect waits for days to cahnge and then dynamically updates the weekworkout array to suit*/ 
  const createdWorkout = Array.from({length: days},(_,i) => ({
    id: i + 1,
    day:`Day:${i+1}`,
    exercises: [],
  }));
  setWeekWorkout(createdWorkout);
  setSelectedExercises({})
 },[days]) 

 const handleAddExercise = (dayIndex) => {
    const chosenExercise = selectedExercises[dayIndex];
    if (!chosenExercise) return;
 
setWeekWorkout((prevWeek) =>
      prevWeek.map((dayObj, index) => {
        if (index === dayIndex) {
          return {
            ...dayObj,
            exercises: [...dayObj.exercises, chosenExercise],
          };
        }
        return dayObj;
      })
    );}
const handleSubmit = (e) => {
  e.preventDefault();
}



const workoutRender = weekWorkout.map((dayObj,dayIndex)=>{
  const currentSelection = selectedExercises[dayIndex] || "";
  return(
  <div key={dayObj.id} className = "card-body items-center text-center">
    <h3>{dayObj.day}</h3>
    
       <select
       className="select select-accent"
       value={currentSelection}
       onChange={(e)=> {
        setSelectedExercises((prev) =>({
          ...prev,
          [dayIndex]: e.target.value,
        }));

       }}
       >
       <option value = "">--Select an exercise--</option>
       {workoutData.map((workoutObj) => {
        return (
        <option key={workoutObj.id} value={workoutObj.name}>
          {workoutObj.name}
          </option>)
       })}
       </select>
<button  type = "button" className = "btn btn-soft text-accent bg-base-100" onClick={()=> handleAddExercise(dayIndex)}>Add Exercise to Day {dayIndex + 1}</button>
<div id="display-box"className="card-body items-center text-center bg-base-100">
{dayObj.exercises.length === 0 ?( 
<p>No exercises have been added yet.</p>):(
  <ul>
{dayObj.exercises.map((exercise, exerciseIndex) => (
<li key = {exerciseIndex}>{exercise}</li>

))}
</ul>
)}
</div>
  </div>
  );
});
    return(
     <>
     <div className="card lg:card-side bg-accent text-primary-content shadow-sm ">
         
          <div className="card-body">
            <h2 className="card-title">Create Plan</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Workout Title</label>
              <input type="text" 
                    id="workout_title" 
                    placeholder="Workout Title" 
                    className="input input-accent" 
                    required/>
              <label htmlFor="workout_length">Workout Length(days)</label>
               <select defaultValue="No of days" onChange={(event) => setDays(event.target.value)} 
                       name = "numDays" 
                       id="workout_length" 
                       className="select select-accent" 
                       required>

  <option value = "">Workout length(days)</option>
  <option value = "1">1</option>
  <option value = "2">2</option>
  <option value ="3">3</option>
  <option value ="4">4</option>
  <option value ="5">5</option>
  <option value ="6">6</option>
  <option value ="7">7</option>
</select> 

{workoutRender}
<button type="submit">Submit Plan</button>
            </form>
          </div>
        </div>
        
     </>
    )
}