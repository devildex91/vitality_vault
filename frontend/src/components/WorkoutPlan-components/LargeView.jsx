import React from "react"
import { useState } from "react";
import { NavLink, Outlet } from "react-router";

export default function LargeView(){
const tabActive = ({ isActive }) =>
    isActive
      ? "tab tab-active text-primary --tab-bg:orange --tab-border-color:red"
      : "tab";
    return (
         <>
         {/* Create and edit navigation*/}
            <div className="card lg:card-side bg-accent text-primary-content shadow-sm">
         <div role="tablist" className="tabs tabs-lift mb-4">
              <NavLink to="create" role="tab" className={tabActive}>
                Create Plan
              </NavLink>
              <NavLink to="edit" role="tab" className={tabActive}>
                Edit Plan
              </NavLink>
            </div>               
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-accent text-primary-content shadow-sm">
           <div role="tablist" className="tabs tabs-lift mb-4">
              
              <NavLink to="current" role="tab" className={tabActive}>
                Open Tracker
              </NavLink>
            </div>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-accent text-primary-content shadow-sm sm:col-span-2 lg:row-span-2">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
         <div className="card lg:card-side bg-accent text-primary-content shadow-sm sm:col-span-2 invisible lg:visible">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
         
         </>
    )
} 