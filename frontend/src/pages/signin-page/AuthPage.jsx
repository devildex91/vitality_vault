import React from "react";
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import AuthForm from "./AuthForm.jsx";
import { useState, useEffect } from "react";



export default function AuthPage({initialMethod}){
    const [method, setMethod] = useState(initialMethod);

    useEffect(()=> {
        setMethod(initialMethod);
    },[initialMethod]);

    const route = method === 'login' ? '/api/token/' : '/api/user/register/';
    const title = method ==='login' ? "Please login below" : "Please Register below"
    return(
        <div className = "flex min-h-screen flex-col text-base-100">
            <Navbar />
            <header>
                <h1>{title}</h1>
            </header>
            <main className = "hero-content flex-col lg:flex-row-reverse grow">
            <AuthForm route = {route} method={method} />
            </main>
            <Footer />
        </div>
    )
}


