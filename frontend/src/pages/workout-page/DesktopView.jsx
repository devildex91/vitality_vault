import React from "react"
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import CreatePlan from "./Create";
import EditPlan from "./Edit";
import FullPlan from "./Full";
import ExerciseCarousel from "./ExerciseCarousel";

export default function DesktopView(){
  return(
 <main className=" grid grid-cols-4 gap-4 grow">
  <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 col-span-1" >
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="tabs tabs-box col-span-1">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Create" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><CreatePlan /></div>
    <input type="radio" name="my_tabs_2" className="tab" aria-label="Edit" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><EditPlan /></div>
</div>
<div className = "col-span-2 h-screen">
  <FullPlan />
</div>
<div className="carousel col-span-2">
 <ExerciseCarousel />
</div>

 </main>
         
         
    )
} 