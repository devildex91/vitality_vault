import React from "react"
import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router";
import CurrentPlan from "./Current";
import CreatePlan from "./Create";
import EditPlan from "./Edit";
export default function MobileView(){

    return (
            
<main className = "grow text-base-300 mb-5"> 
<div className="tabs tabs-box bg-base-100 text-accent">
  <input type="radio" name="my_tabs_6" className="tab bg-base-300 border-primary text-primary  focus:bg-accent focus:text-neutral" aria-label="Current Plan" />
  <div className="tab-content bg-base-200 border-primary p-6"><CurrentPlan /></div>

  <input type="radio" name="my_tabs_6" className="tab bg-base-300 border-primary text-primary focus:bg-accent focus:text-neutral" aria-label="Create Plan" defaultChecked />
  <div className="tab-content bg-base-200 border-primary p-6"><CreatePlan /></div>

  <input type="radio" name="my_tabs_6" className="tab bg-base-300 border-primary text-primary focus:bg-accent focus:text-neutral" aria-label="Edit Plan" />
  <div className="tab-content bg-base-200 border-primary border-2 p-6"><EditPlan/></div>
  
</div>
</main>



    )
} 