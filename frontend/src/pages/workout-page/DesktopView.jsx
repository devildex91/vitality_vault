import React from "react"
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import CreatePlan from "./Create";
import EditPlan from "./Edit";
import FullPlan from "./Full";
import TodaysPlan from "./Today";
import ExerciseCarousel from "./ExerciseCarousel";

export default function DesktopView(){
  return(
 <main className=" grid grid-cols-4 grid-flow-rows gap-4 grow">
 
<div className="tabs tabs-box col-span-2 mt-2 bg-neutral text-accent">
  <input type="radio" name="my_tabs_2" className="tab bg-base-300 text-accent  focus:bg-accent focus:text-neutral" aria-label="Create" defaultChecked />
  <div className="tab-content self-start bg-base-200 border-base-300"><CreatePlan /></div>
    <input type="radio" name="my_tabs_2" className="tab bg-base-300 border-neutral text-accent  focus:bg-accent" aria-label="Edit" />
  <div className="tab-content bg-base-300 border-base-300 p-6"><EditPlan /></div>
</div>
<div className = "col-span-2 row-span-2 mb-2 rounded-xl">
  <div className="tabs tabs-box col-span-2 mt-2 bg-base-200 text-accent">
    <input type="radio" name="my_tabs_1" className="tab bg-base-300 text-neutral  focus:bg-accent focus:text-neutral" aria-label="Todays " />
    <div className="tab-content bg-base-300 border-base-300 p-6"><TodaysPlan /></div>
  
    <input type="radio" name="my_tabs_1" className="tab bg-base-300 text-neutral  focus:bg-accent" aria-label="Full" defaultChecked />
    <div className="tab-content bg-base-300 border-base-300 p-6"><FullPlan /></div>
  </div>
</div>
<div className="carousel col-span-2">
 <ExerciseCarousel />
</div>

 </main>
         
         
    )
} 