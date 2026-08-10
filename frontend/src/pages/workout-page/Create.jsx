import React from "react";
import {useState, useEffect} from "react"

export default function CreatePlan(){

  const [days, setDays] = useState(0);
  const [weekWorkout, setWeekWorkout] = useState([])

 useEffect(() => {
  /*(_,i)-ignores content and just used index  useEffect waits for days to cahnge and then dynamically updates the weekworkout array to suit*/ 
  const createdWorkout = Array.from({length: days},(_,i) => ({
    id: i + 1,
    day:`Day:${i+1}`,
    exercises: [],
  })
  )
  setWeekWorkout(createdWorkout)
 },[days]) 


const createWorkout = (e) => {
  e.preventDefault();
}

const workoutRender = weekWorkout.map((dayObj,dayIndex)=>{
  return(
  <fieldset key={dayObj.id} className = "card-body items-center text-center">
    <h3>{dayObj.day}</h3>
    <select defaultValue="Color scheme" className="select select-accent">
  <option disabled={true}>Add Exercise</option>
  <option>Light mode</option>
  <option>Dark mode</option>
  <option>System</option>
</select>
<button className = "btn btn-soft text-accent bg-base-100">Add Exercise to Day {dayIndex + 1}</button>
<div id="display-box"className="card-body items-center text-center bg-base-100">
{dayObj.exercises.length === 0 ? 
<p>No exercises have been added yet.</p>:
dayObj.exercises.map((exercise, exerciseIndex)=>(

<ul>
  <li key = {exerciseIndex}>{exercise}</li>
</ul>


))
  
}
</div>
  </fieldset>)
} )


    return(
     <>
     <div className="card lg:card-side bg-accent text-primary-content shadow-sm ">
         
          <div className="card-body">
            <h2 className="card-title">Create Plan</h2>
            <form onClick={createWorkout}>
              <label htmlFor="title">Workout Title</label>
              <input type="text" id="workout_title" placeholder="Workout Title" className="input input-accent" required/>
              <label htmlFor="workout_length">Workout Length(days)</label>
               <select defaultValue="No of days" onChange={(event) => setDays(event.target.value)} name = "numDays" id="workout_length" className="select select-accent" required>
  <option disabled={true}>Color scheme</option>
  <option value = "1">1</option>
  <option value = "2">2</option>
  <option value ="3">3</option>
  <option value ="4">4</option>
  <option value ="5">5</option>
  <option value ="6">6</option>
  <option value ="7">7</option>
</select> 
{workoutRender}
<button type="submit">Submit</button>
            </form>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        
     </>
    )
}