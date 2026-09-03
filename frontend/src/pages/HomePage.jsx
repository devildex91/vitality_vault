
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Logo from "../assets/images/VV-logo-large.png"
import { useTheme } from "../ThemeContext";
import { Link} from "react-router";
import Logoblue from "../assets/images/VV-logo-blue-large.png"
export default function HomePage(){
  const { theme, setTheme } = useTheme();
  console.log(theme)

    return (
           <div className = "flex min-h-screen flex-col">
           <Navbar />
           <header>
             <h1 className = " justify-self-center animate-fade-in [animation-delay:6s] [animation-duration:3s] [animation-iteration:1]"><img className="w-50 mt-5" src= {theme==="halloween"?Logo:Logoblue} alt = "company logo"/></h1>
           </header>
           <main className="grow grid grid-cols-1 grid-rows-1  ">
            <div className = "  col-start-1 row-start-1 flex justify-center items-start animate-contract-vertically [animation-delay:3s] [animation-duration:3s] [animation-fill-mode:both] [animation-iteration-count:1]">
              <img className = " w-150 " src ={theme==="halloween"?Logo:Logoblue} alt = "Vitality vault logo"/>
            </div>
            <div className="col-start-1 row-start-1 flex flex-col items-center gap-6 items animate-expand-horizontally [animation-delay:6s] [animation-duration:6s] [animation-iteration:1][animation-fill-mode:both] ">
               <p className = "text-center text-primary border-2 border-primary rounded-xl text-xl m-5">Welcome to Vitality Vault. Our aim is to provide you with the tools nescesary to create your perfect workout. So if that sound like something you want then Sign up or sign in by clicking below and lets get started.  </p>
               <button className="btn btn-primary text-base-300 bg-primary focus:bg-neutral active:border-3 active:border-base-300 my-3 "> <Link to="/login">Login</Link></button>
            </div>
           </main>
           <Footer />
           </div>
           
           
       
       )
}