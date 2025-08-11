import react from"react";
import"./Form.css";
import{Link} from "react-router-dom";
import{useState} from"react";

export default function Loginform(){
    const[user,setUser]=useState("")
    const[usererror,setUsererror]=useState("")
    const[password,setPassword]=useState("")
    const[passworderror,setPassworderror]=useState("")

    return(
        <div className="form">
            <h1>Login Form</h1>
            <form >
            <div className="UserName">
                <label>UserName:</label>
                <input type="text" placeholder="EnterlogName"></input>
            </div>
            <div className="Password">
                <label>Password:</label>
                <input type="password" placeholder="EnterlogPassword"></input>
            </div>
            <button type="submit">Login</button>

            <nav>
                <Link to ="/RegForm">RegNow</Link> 
            </nav>
            </form>
           

        </div>
    )
}
