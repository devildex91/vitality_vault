import React from "react";
import { NavLink,Link, Outlet } from "react-router";

export default function CurrentPlan(){


    return(
     <>
     <div className="card lg:card-side bg-accent text-primary-content shadow-sm ">
      <div role="tablist" className="tabs tabs-lift">
      <Link to="." role="tab" className='tab' end>Todays</Link>
      <NavLink to="previous" role="tab" className='tab'>Previous</NavLink>
      <NavLink to="tomorrow" role="tab" className='tab'>Tomorrows</NavLink>
      <NavLink to="full" role="tab" className='tab'>Full Plan</NavLink>

      </div>
      
      
          <div className="card-body">
            <h2 className="card-title">Current Plan</h2>
            <Outlet />
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
     </>
    )
}