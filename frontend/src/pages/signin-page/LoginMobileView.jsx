import React from "react";
import LoginForm from "./LoginForm";

export default function loginMobileView(){
    return (
 {/* name of each tab group should be unique */}
 <main>
<div className="tabs tabs-lift tabs-bottom">
  <input type="radio" name="my_tabs_5" className="tab" aria-label="Login" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><LoginForm /></div>

  <input type="radio" name="my_tabs_5" className="tab" aria-label="Sign Up" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><Signup</div>

  
</div>
</main>

    )
}