import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import MobileView from "./MobileView.jsx";
import DesktopView from "./DesktopView.jsx";
import api from "../../api.js";
import { Link, Outlet } from "react-router";
import { useState, useEffect, createContext } from "react";

export const CurrentPlanContext = createContext(null);

export default function WorkoutPlan() {
  // Dynamically changes which component depending on screen size as too complicted to change in one component
  const MOBILE_QUERY = "(max-width: 640px)";
 

  /*all loading and errors as well as workout plans stored in top level of workout section and passed to relevent components  */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [workoutPlans, setWorkoutPlans] = useState([]);
  /*state to store workouts from api call*/
  const [exerciseData, setExerciseData] = useState([]);
  const [selectedWorkout, setSelectedWorkout]=useState(null) 

/*workout plan consolidated into one function for easier refreh of data  */
const fetchWorkoutPlans = async () => {
  try {
    setLoading(true);
    const accessToken = localStorage.getItem("access_token");

    const response = await api.get("/api/fetchuserworkout/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setWorkoutPlans(response.data);
    setError(null);
  } catch (err) {
    console.error("error fetching data:", err);
    setError("Failed to load data. Please try again.");
  } finally {
    setLoading(false);
  }
};
/*Update current workout */
const updateCurrentWorkout = async (workout) => {
  try {
    setLoading(true);

    await api.patch("api/profile/", {
      current_workout: workout.id,
    });
    setSelectedWorkout(workout)
    await fetchWorkoutPlans();

    setError(null);
  } catch (err) {
    console.error("Update Error:", err.response.data)
    setError("Failed to save changes");
  } finally {
    setLoading(false)
  }
  };

  const selectWorkoutById = (id) => {
  const workout = workoutPlans.find(w => w.id === id);
  setSelectedWorkout(workout || null);
};

/*Useeffect to fetch current default workout for current logged in user  */
useEffect(() => {
    const fetchcurrentPlan = async () => {
      try {
        setLoading(true);

        const response = await api.get("/api/profile/");
        const currentId = response.data.current_workout;
        selectWorkoutById(currentId || null);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load exercises Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchcurrentPlan();
  }, [workoutPlans]);
 
  const getActiveView = () => {
    if (typeof window === "undefined") return DesktopView;
    if (window.matchMedia(MOBILE_QUERY).matches) return MobileView;
    return DesktopView;
  };

  const [ViewType, setViewType] = useState(getActiveView);

  useEffect(() => {
    const mobileWatcher = window.matchMedia(MOBILE_QUERY);

    function updateWorkoutScreen(e) {
      setViewType(() => getActiveView());
    }
    mobileWatcher.addEventListener("change", updateWorkoutScreen);

    return function cleanup() {
      mobileWatcher.removeEventListener("change", updateWorkoutScreen);
    };
  }, []);

  /*useEffect to fetch EXERCISES from api  */
  useEffect(() => {
    const fetchexerciseData = async () => {
      try {
        setLoading(true);

        const response = await api.get("/api/exercises");
        setExerciseData(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load exercises Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchexerciseData();
  }, []);



/*Initial load for workout plans  */
  useEffect(() => {
   fetchWorkoutPlans();
  }, []);


  function findWorkout(targetTitle){
  const foundTitle = workoutPlans.find(workouts => workouts.title === targetTitle)
  if (foundTitle) {
     updateCurrentWorkout(foundTitle)
  };
};
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-100">
      <Navbar />
      <header className = "flex flex-col items-center bg-base-300 justify-center border-primary border-1 p-4 mt-5 rounded-xl">
        <h1 className = "text-primary font-bold mt-1 mb-3" >Workout Plan</h1>
        <h3 className = "text-primary font-bold"> Set/change your workout below</h3>
        <select
                  className="input input-primary bg-base-300 text-primary font-bold focus:border-3 mt-3"
                  value={selectedWorkout?.title|| ""}
                  onChange={(e) => {
                    findWorkout(e.target.value)
                  }}
                
                >

                  <option value="">Select your workout</option>
                  {workoutPlans?.map((workout) => {
                    return (
                      <option key={workout.id} value={workout.title}>
                        {workout.title}
                      </option>
                         );
                  })}
                </select>
      </header>
      <CurrentPlanContext.Provider
        value={{
          workoutPlans,
          fetchWorkoutPlans,
          loading,
          setLoading,
          error,
          setError,
          exerciseData,
          selectedWorkout,
          updateCurrentWorkout,
        }}
      >
        <ViewType />
      </CurrentPlanContext.Provider>
      <Footer />
    </div>
  );
}
