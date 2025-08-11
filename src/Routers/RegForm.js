import react from"react";
import"./Form.css";
import{Link} from "react-router-dom";
import{useState} from"react";


export default function Regform(){
    const[user,setUser]=useState("")
    const[usererror,setUsererror]=useState("")
    const[password,setPassword]=useState("")
    const[passworderror,setPassworderror]=useState("")


    const handleSubmit=(event)=>{
        event.preventDefault();
         
        if(user==""){
            if(user=="example.com"){
              
            }else{
                setUsererror("plase fill name")
            }
        }else{
            setUsererror("user doesnot matched")
        }
        



         if(password.length<8){
            setPassworderror("plase fill atleast 8character")
         }     
        


        
        
    }

    const handleChangeName=(e)=>{
           setUsererror("")
           setUser(e.target.value)
    }
    const handleChangePassword=(e)=>{
        setPassworderror("")
        setPassword(e.target.value)
 }
    return(
        <div className="form">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
            <div className="UserName">
                <label>UserName:</label>
                <input type="text" placeholder="EnterregName" onChange={handleChangeName}></input>
                {usererror&&<div className="Error">{usererror}</div>}
            </div>
            <div className="Password">
                <label>Password:</label>
                <input type="password" placeholder="EnterregPassword"onChange={handleChangePassword}></input>
                {passworderror&&<div className="Error">{passworderror}</div>}
            </div>
            <button type="submit">Register</button>

            <nav>
                <Link to ="/Logform">LogNow</Link>
                
            </nav>
            </form>
            
         
        </div>
    )
}