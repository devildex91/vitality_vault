import api from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../token";

export default function AuthForm({route, method}){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]= useState(false);
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try{
      const res = await api.post(route, {username, password});

      if(method ==='login'){
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
        navigate("/");
        window.location.reload();
      } else {
        setSuccess("Registration successful. Please login.");
        setTimeout(() => {
          navigate("/login");
        }, 2000)

      }
    } catch(error){
      console.error(error);
      if (error.response) {
        console.log( "VALIDATION ERROR:", error.response.data);
        if(error.response.status === 401){
          setError("Invalid credentials");
        } else if (error.response.status === 400) {
          setError("Username already exists");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else if (error.request) {
        setError("Network error. Please check your internet connection and try again.")
      } else {
        setError("Something went wrong. Please try again");
      }
    } finally {
      setLoading(false);
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/accounts/google/login";
  };


    return (
        <div>
        
            {loading && (
              <div className="hero bg-base-200 flex flex-col">{error ? <span>{error}</span>: <div>spinner</div>} </div>
            )}
            {!loading && (
              <form onSubmit = {handleSubmit} className = "hero-content flex-col lg:flex-row-reverse bg-accent text-base-100 rounded-lg">
               <h2>{method === 'register' ? "Register" : "Login"}</h2>
               {error && <div>{error}</div>}
               {success && <div>{success}</div>}
               <div className = "fieldset">
                <label htmlFor="username" className="label">Username:</label>
                <input 
                className = "input text-accent"
                type = "text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />

                 <label htmlFor="password" className = "label">Password:</label>
                <input 
                className="input text-accent"
                type = "password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              
               </div>
               <button type = "submit" className = "btn btn-soft text-accent">
                {method === 'register'? 'Register' : 'Login'}
               </button>
               <button type ="button" onClick={handleGoogleLogin}>{method === 'register'? 'Register with Google': 'Login with Google'}</button>
               {method === 'login' && (
                <>
                <p>Dont have an account?</p>
                <button onClick={()=> navigate("/register")} className = "btn btn-soft text-accent">Register</button>
                </>
               )}
               {method === 'register' && (
                <>
                <p>Already have an account ?</p> <button onClick={()=> navigate("/login")} className = "btn btn-soft">Login</button>
                </>
               )}
              </form>
            )}
        
        </div> 
    )
}