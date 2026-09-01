import React from "react";
import {useState, useEffect, useContext} from "react";
import { CurrentPlanContext } from "./WorkoutPlan.jsx";
import api from "../../api.js";


export default function ExerciseCarousel() {
const {selectedWorkout,setLoading, setError} = useContext(CurrentPlanContext);
 const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  const [weekDay, setWeekday]= useState(weekdays[new Date().getDay()])
  const [exerciseImages, setExerciseImages] = useState([])
/*Optional chaining added to make sure data is their to stop undefined error  */
  const todaysPlan = selectedWorkout?.days?.find(day => day?.day ===weekDay)
     console.log(todaysPlan)
     console.log(exerciseImages)
    useEffect(() => {
  const fetchExerciseImages = async () => {
    const exerciseIds = todaysPlan?.exercises
      ?.map((entry) => entry?.exercise)
      .filter(Boolean) ?? [];

    if (!exerciseIds.length) {
      setExerciseImages([]);
      return;
    }

    try {
      setLoading(true);

      const response = await api.get("/api/exerciseimages/", {
        params: {
          exercises: exerciseIds,
        },
        paramsSerializer: {
          indexes: null,
        },
      });

      setExerciseImages(response.data ?? []);
      setError(null);
    } catch (err) {
      console.error("Error fetching exercise images:", err);
      setError("Failed to load images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  fetchExerciseImages();
}, [todaysPlan]);


    return (
<>
{exerciseImages.map((exercise, index) => {

 const previous = index === 0
    ? exerciseImages.length
    : index;

  const next = index === exerciseImages.length - 1
    ? 1
    : index + 2;


  return (
 <div id={`slide${index + 1}`} className="carousel-item relative w-[95%] justify-center items-center  justify-self-center align-self-center bg-neutral p-4 mb-4 gap-4 overflow-y-hidden" key = {exercise.id}>
   <img
      className = "scale-75 border-8 border-accent rounded-lg"
      src={`https://res.cloudinary.com/dxhclnrp/image/upload/${exercise.public_id}`}
      alt = {exercise.exercise}
       />
    <div className="absolute left-10 right-10 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href={`#slide${previous}`} className="btn btn-circle bg-accent text-neutral">❮</a>
      <a href={`#slide${next}`} className="btn btn-circle bg-accent text-neutral">❯</a>

      
    </div>
    
 </div>)
  
})}
  </>
    )


    
}