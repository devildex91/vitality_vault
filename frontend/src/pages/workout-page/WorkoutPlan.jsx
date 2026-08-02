import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import MobileView from './MobileView.jsx';
import DesktopView from './DesktopView.jsx'
import TabletView from './TabletView.jsx'
import {Link, Outlet} from "react-router";
import { useState, useEffect } from 'react';

export default function WorkoutPlan(){
// Dynamically changes which component depending on screen size as too complicted to change in one component
 const MOBILE_QUERY= "(max-width: 640px)";
 const TABLET_QUERY="(min-width: 641px) and (max-width: 1023px)";

 const getActiveView = () => {
    if (window.matchMedia(MOBILE_QUERY).matches) return <MobileView />;
    if (window.matchMedia(TABLET_QUERY).matches) return <TabletView />;
    return <DesktopView />;
  };

const [viewType, setViewType] = useState(getActiveView)

useEffect(() => {
    const mobileWatcher = window.matchMedia(MOBILE_QUERY);
    const tabletWatcher = window.matchMedia(TABLET_QUERY);
    
    
    function updateWorkoutScreen(e) {
      setViewType(getActiveView)
    }

    mobileWatcher.addEventListener('change', updateWorkoutScreen);
    tabletWatcher.addEventListener('change', updateWorkoutScreen);
   
   return function cleanup() {
      mobileWatcher.removeEventListener('change', updateWorkoutScreen);
      tabletWatcher.removeEventListener('change', updateWorkoutScreen);
    };
  },[]);

    return (
          <>
           <Navbar />
           <header>
            <h1>Workout plan</h1>
           </header>
           {viewType}
           <Footer />
           </>
           
       
       )
}