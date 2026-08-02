import React from "react";

export default function EditPlan(){
    return(
     <>
     <div className="card lg:card-side bg-accent text-primary-content shadow-sm ">
          
          <div className="card-body">
            <h2 className="card-title">Edit Plan</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
     </>
    )
}