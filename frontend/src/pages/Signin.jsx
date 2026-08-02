import React from "react";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components//Footer.jsx'

export default function SignIn(){

    return (
        <>
        <Navbar />
        <h1>Sign in page</h1>

        <button className="btn btn-accent">Login</button>
        <button className="btn btn-accent">Sign In </button>
        <Footer />
        </>
        
    
    )
}