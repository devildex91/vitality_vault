
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
export default function HomePage(){
    return (
           <div className = "flex min-h-screen flex-col">
           <Navbar />
           <header>
             <h1>Homepage</h1>
           </header>
           <main className="grow"></main>
           <Footer />
           </div>
           
           
       
       )
}