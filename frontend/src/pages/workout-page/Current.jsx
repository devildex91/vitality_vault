import React from "react";
import { NavLink,Link, Outlet } from "react-router";
import TodaysPlan from "./Today.jsx";
import PreviousPlan from "./Previous.jsx";
import TomorrowsPlan from "./Tomorrow.jsx";
import FullPlan from "./Full.jsx";
export default function CurrentPlan(){


    return(
     <>
        
<div className="tabs tabs-lift bg-accent text-primary-content">
  <input type="radio" name="my_tabs_4" className="tab" aria-label="Todays " />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TodaysPlan /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Previous " defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><PreviousPlan /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Tomorrows" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TomorrowsPlan /></div>

  <input type="radio" name="my_tabs_4" className="tab" aria-label="Full plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><FullPlan /></div>
</div>
     </>
    )
}