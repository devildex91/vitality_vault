import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link} from "react-router";
export default function NotFound() {
    
    return (
        <div className = "flex min-h-screen flex-col">
        <Navbar />
        <header className = "flex place-content-center">
        <h1 className="card-title text-primary mt-10">404: Page Not Found</h1>
        </header>
        <main className = " flex flex-col ">
            <div className="card-body flex justify items-center rounded-xl text-align-center  border-3 border-primary mt-40 ml-5 mr-5">
         <p>Sorry, the page youve been looking for does not exist.</p>
         <button className="btn btn-primary text-base-300 bg-primary focus:bg-neutral active:border-3 active:border-base-300 my-3"> <Link to="/">Return to Home</Link></button>
         </div>
         
         </main>
        <Footer />
        </div>
    )
}