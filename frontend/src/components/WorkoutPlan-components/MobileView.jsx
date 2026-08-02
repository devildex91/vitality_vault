import React from "react"
import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router";

export default function MobileView(){
const buttonActive = "tab-active text-primary --tab-bg:orange --tab-border-color:red"; 
    return (
        <>
        
                    <div role="tablist" className="tabs tabs-lift h-fit">
                        <NavLink to="current" role="tab" className={({ isActive }) => isActive ? buttonActive: 'tab' }>Current Plan</NavLink>
                        <NavLink to="create" role="tab" className={({ isActive }) => isActive ? buttonActive: 'tab' }>Create Plan</NavLink>
                        <NavLink to="edit" role="tab" className={({ isActive }) => isActive ? buttonActive: 'tab' }>Edit Plan</NavLink>
                    </div>
        
                    <Outlet />   
          
        </>

    )
} 