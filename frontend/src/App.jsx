import React from "react";
import {  createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import router from './AppRoutes.jsx'
 
export default function App(){


    
    return (
    <RouterProvider router={router} />
    )
}