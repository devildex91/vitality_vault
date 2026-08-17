import React from "react";
import {useState, useEffect} from "react"
import axios from "axios"
import api from "../../api";


export default function CreatePlan(){
  
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState()

  /*state to store workouts from api call*/
  const [workoutData, setWorkoutData] = useState([])
  
  /* state to store selected exercise/sets/reps to be pushed into array */ 
  const [selectedExercises, setSelectedExercises]=useState([])
  const [selectedSets, setSelectedSets]=useState([])
  const [selectedReps, setSelectedReps]=useState([])

  /*state to store the selected workout before being pushed to database */
  const [weeksWorkout, setWeeksWorkout] = useState({
    title: "",
    day: [
    {day:"Monday", exercises:[]},
    {day:"Tuesday", exercises:[]},
    {day:"Wednesday", exercises:[]},
    {day:"Thursday", exercises:[]},
    {day:"Friday", exercises:[]},
    {day:"Saturday", exercises:[]},
    {day:"Sunday", exercises:[]},
  ]
  })
/* State to control toggles true/false individually to control rest day*/
  const [restDay, setRestDay] = useState([
    {day:"Monday",
      isRestDay: false,
    },
     {day:"Tuesday",
      isRestDay: false,
    },
     {day:"Wednesday",
      isRestDay: false,
    },
     {day:"Thursday",
      isRestDay: false,
    },
     {day:"Friday",
      isRestDay: false,
    },
     {day:"Saturday",
      isRestDay: false,
    },
     {day:"Sunday",
      isRestDay: false,
    },

  ])

  /*URL to fetch api  */
const apiUrl = api

/*useEffect to fetch data from api  */
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


 const handleAddExercise = (dayIndex, dayObj) => {
    const chosenExerciseId = selectedExercises[dayIndex];
    if (!chosenExerciseId) return;

    const exerciseDetails = workoutData.find((exercise) => 
    String(exercise.id) === String(chosenExerciseId));
    if(!exerciseDetails) return;


    /*Checks for duplicates and prevents */
    if (dayObj.exercises.some((exercise) => exercise.id === exerciseDetails.id)) {
    alert(`${exerciseDetails.name} has already been added to ${dayObj.day}`);
    return; 
  }
setWeeksWorkout((prevWeek) =>({
  ...prevWeek,
   day:
   prevWeek.day.map((dayObj,index)=> 
  {if(index === dayIndex){
    return {
      ...dayObj,
      exercises: [
        ...dayObj.exercises,
        {
          id: exerciseDetails.id,
          name: exerciseDetails.name,
          sets: Number(selectedSets[dayIndex] || 0),
          reps: Number(selectedReps[dayIndex] || 0),
        }
      ]
    }
  } return dayObj})
})
    );}
/*Handles checkbox to add rest day  */
const handleChange = (dayIndex) => 
           {
            const isNowRestDay = !restDay[dayIndex].isRestDay;

            setRestDay((prev) => 
            prev.map((day, index) =>
              index === dayIndex ? 
            {...day, isRestDay: isNowRestDay}
            : day
));      
 setSelectedExercises((prev) => ({
    ...prev,
    [dayIndex]: isNowRestDay ? "Rest day" : ""
  }));
{
          setWeeksWorkout((prevWeek) =>({
  ...prevWeek,
   day:
   prevWeek.day.map((dayObj,index)=> 
  {if(index === dayIndex){
    return {
      ...dayObj,
      exercises: isNowRestDay ? ["Rest Day"] : [],
    }
  } return dayObj})
})
    );
    }
  
  }
  
    
const handleSubmit = async (e) => {
  e.preventDefault();
   
   console.log(weeksWorkout)
  try{
    setLoading(true);

    const response = await api.post("api/createworkout" , weeksWorkout)
    


    setError(null);
  } catch(error) {
    console.error("Create error:", error);
    setError("failed to send data");
  } finally {
    setLoading(false);
  }
   
}
    return(
     <>
     <div className="card lg:card-side bg-accent text-primary-content shadow-sm ">
         
          <div className="card-body">
            <h2 className="card-title">Create Plan</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Workout Title</label>
              <input type="text" 
                    id="workout_title" 
                    name="title"
                    value={weeksWorkout.title}
                    onChange={(e) => 
                      setWeeksWorkout((prev)=>({
                        ...prev, title: e.target.value,
                      }))
                    }
                    placeholder="Workout Title" 
                    className="input input-accent" 
                    required/>
            { weeksWorkout.day.map((dayObj,dayIndex) => (
              <fieldset key={dayIndex}>
              <h3>{dayObj.day}</h3><span><input type="checkbox" onChange={() => handleChange(dayIndex)} name="restDay" className="checkbox checkbox-accent" /><label htmlFor="restDay">Select for rest day</label></span>
              <select
       className="select select-accent"
       value={selectedExercises[dayIndex] || ""}
       disabled = {restDay[dayIndex].isRestDay}
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
       } )}
       </select>
       <select
       className="select select-accent"
       disabled = {restDay[dayIndex].isRestDay}
       value = {selectedSets[dayIndex]}
       onChange={(e) =>{
        setSelectedSets((prev) => ({
          ...prev, 
          [dayIndex]: e.target.value
        }));
       }} 
       >
<option value = "">How many sets?</option>
{new Array(8).fill(0).map((_, i) => <option key ={i+1} value = {i+1}>{i+1}</option>)}
       </select>
        <select
       className="select select-accent"
       disabled = {restDay[dayIndex].isRestDay}
       value = {selectedReps[dayIndex]}
       onChange={(e) =>{
        setSelectedReps((prev) => ({
          ...prev, 
          [dayIndex]: e.target.value
        }));
       }} 
       >
<option value = "">How many Reps?</option>
{new Array(20).fill(0).map((_, i) => <option key ={i+1} value = {i+1}>{i+1}</option>)}
       </select>
        <button  type = "button" className = "btn btn-soft text-accent bg-base-100" disabled = {restDay[dayIndex].isRestDay} onClick={()=> handleAddExercise(dayIndex, dayObj)}>Add Exercise to Day {dayIndex + 1}</button>
       <div id="display-box"className="card-body items-center text-center bg-base-100">
{dayObj.exercises.length === 0 ?( 
<p>No exercises have been added yet.</p>):(
  restDay[dayIndex].isRestDay ? (<p>Rest Day</p>):(
  
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
      <tr key = {exerciseIndex}>
        <th></th>
        <td>{exercise.name}</td>
        <td>{exercise.sets}</td>
        <td>{exercise.reps}</td>
      </tr>
      ))}
    </tbody>
  </table>)
)}
</div>
              </fieldset>
            ))} 
              
<button type="submit" className="btn btn-soft text-accent bg-base-100">Submit Plan</button>
            </form>
          </div>
        </div>
        
     </>
    )
}