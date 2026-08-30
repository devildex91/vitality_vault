import React from "react";
import {NavLink, Outlet} from "react-router";
import CreatePlan from "./Create";
import EditPlan from "./Edit";
import TodaysPlan from "./Today";
import FullPlan from "./Full";
import ExerciseCarousel from "./ExerciseCarousel";
export default function tabletView(){

    return (
        <main className="grid grid-cols-2 gap-4 grow bg-base-300">
        
        
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Create" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><CreatePlan /></div>
    <input type="radio" name="my_tabs_2" className="tab" aria-label="Edit" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><EditPlan /></div>

 
</div>

{/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Todays " />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TodaysPlan /></div>

  <input type="radio" name="my_tabs_1" className="tab" aria-label="Full" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><FullPlan /></div>


</div>

<div className="carousel col-span-2">
 <ExerciseCarousel />
</div>
        </main>
    )
} 