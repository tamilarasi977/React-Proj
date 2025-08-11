import react from "react";
import './form.css';
import{useState}from"react";

export default function FormAlertValidationuser() {

  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");


  const handleSubmit=(event)=>{
    event.preventDefault();
    
   if(username==0){
    alert("Enteryourusername")
    
   }
   if(email==0){
    alert("Enteryouremail")
    
   }
   if(password==0){
    alert("Enteryourpass")
    
   }
    

  }

  return (
    <div className="main-form">
      <h1>Form Alert Validation</h1>
      <form onSubmit={handleSubmit}>
        <div className="usename">
          <label>UserName:</label>
          <input type="text" placeholder="Enterusername..." value={username} 
          onChange={(e)=>setUsername(e.target.value)}></input>
        </div>
        <div className="Email">
          <label>Email:</label>
          <input type="email" placeholder="EnterEmail..."value={email} 
          onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div className="password">
          <label>Password:</label>
          <input type="password" placeholder="Enterpassword..."value={password} 
          onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>

      </form>

    </div>

  )
}