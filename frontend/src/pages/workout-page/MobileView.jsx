import React from "react"
import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router";
import CurrentPlan from "./Current";
import CreatePlan from "./Create";
import EditPlan from "./Edit";
export default function MobileView(){

    return (
        
        <main>

        
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Current Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><CurrentPlan /></div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Create Plan" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><CreatePlan /></div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Edit Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><EditPlan/></div>
  
</div>
</main> 


    )
} 