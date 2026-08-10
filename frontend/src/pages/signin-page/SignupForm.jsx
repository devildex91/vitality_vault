import React from "react";

export default function SignUpForm(){
const handleRegister = () => {

}

    return (
        <div className="card">
        <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleRegister}>
              <legend className="fieldset-legend">Sign up form </legend>
                <label className="label" htmlFor="username">Username</label>
  <input type="text" id="username" className="input" placeholder="Username" required />

   <label className="label" htmlFor="firstname">First name</label>
  <input type="text" id="firstname" className="input" placeholder="First name" required />

   <label className="label" htmlFor="lastname">Last name</label>
  <input type="text" id="lastname" className="input" placeholder="Last Name" required />

   <label className="label" htmlFor="email">Email</label>
  <input type="email" id="name" className="input" placeholder="Email" required />

   <label className="label" htmlFor="password">Password</label>
  <input type="password" id="name" className="input" placeholder="Password" required />
   <button type ="submit">Sign up now</button>
        </form>
        </div>
    )
}