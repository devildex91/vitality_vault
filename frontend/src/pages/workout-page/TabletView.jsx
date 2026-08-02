import React from "react";
import {NavLink, Outlet} from "react-router";
import CreatePlan from "./Create";
import EditPlan from "./Edit";
import TodaysPlan from "./Today";
import FullPlan from "./Full";
export default function tabletView(){

    return (
        <main className="grid grid-cols-2 gap-4">
        
        
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
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </main>
    )
} 