import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function NotFound() {
    
    return (
        <div className = "flex min-h-screen flex-col">
        <Navbar />
        <header>
        <h1>404: Page Not Found</h1>
        </header>
        <main className = "grow">
         <p>Sorry, the page youve been looking for does not exist.</p>
         </main>
        <Footer />
        </div>
    )
}