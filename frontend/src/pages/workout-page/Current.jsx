import React from "react";
import { useEffect, useState, props } from "react";
import { NavLink,Link, Outlet } from "react-router";
import api from "../../api";
import axios from "axios";
import TodaysPlan from "./Today.jsx";
import PreviousPlan from "./Previous.jsx";
import TomorrowsPlan from "./Tomorrow.jsx";
import FullPlan from "./Full.jsx";

export default function CurrentPlan(){
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [workoutPlans, setWorkoutPlans] = useState([])
    const [selectedWorkout, setSelectedWorkout]=useState([]) 
 


useEffect(()=>{
const fetchworkoutData = async()=> {
  try{
      setLoading(true);
      const accessToken = localStorage.getItem('access_token');

      const response = await api.get("api/fetchuserworkout/", {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      setWorkoutPlans(response.data);
      setError(null);
  } catch(err){
    console.error("error fetching data:", err)
    setError("Failed to load data. Please try again.");
  } finally{
    setLoading(false);
  }
} 
fetchworkoutData();
},[api])


function findWorkout(targetTitle){
  const foundTitle = workoutPlans.find(workouts => workouts.title === targetTitle)
  if (foundTitle) {
    setSelectedWorkout(foundTitle);
  };
};
    return(
     <>
       <select
                  className="select select-accent"
                  value={selectedWorkout.title|| ""}
                  onChange={(e) => {
                    findWorkout(e.target.value)
                  }}
                >
                  <option value="">Select your workout</option>
                  {workoutPlans.map((workout) => {
                    return (
                      <option key={workout.id} value={workout.title}>
                        {workout.title}
                      </option>
                         );
                  })}
                </select>
<div className="tabs tabs-lift bg-accent text-primary-content">
  <input type="radio" name="my_tabs_4" className="tab" aria-label="Todays " />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TodaysPlan workoutPlan={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Previous " defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><PreviousPlan workoutPlans={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Tomorrows" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TomorrowsPlan workoutPlans={selectedWorkout} /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Full plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><FullPlan workoutPlans={selectedWorkout} /></div>
</div>
     </>
    )
}