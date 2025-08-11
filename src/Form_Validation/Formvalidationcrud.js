import react from "react";
import { useState } from "react";
import './form.css';

export default function FormValidationuser() {

    const [username, setUsername] = useState();
    const [usernameerror, setUsernameerror] = useState();
    const [password, setPassword] = useState();
    const [passworderror, setPassworderror] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username == "") {
        }setUsernameerror("Username isRequired")
        // } if (username === "contact.tamil2@gmail.com") {
        // } else {
        //     setUsernameerror("Username doesnot matched")
        // }
     
        if (password == "") {
        }setPassworderror("Password is Required")
        // } else if(password.length < 8) {
        //     setPassworderror("Please fill at least 8 character")
        //  }
        
        //}
    }


    const handleUsername = (e) => {
        setUsername(e.target.value)
        setUsernameerror("");
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPassworderror("");
    }

 return (
    <div className="main-form">
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
            <div className="usename">
                <label>UserName:</label>
                <input type="email" placeholder="Enterusername..." value={username}
                    onChange={handleUsername}></input>
                {usernameerror && <div className="usererror">{usernameerror}</div>}
            </div>

            <div className="password">
                <label>Password:</label>
                <input type="password" placeholder="Enterpassword..." value={password}
                    onChange={handlePassword}></input>
                {passworderror && <div className="passworderror">{passworderror}</div>}
            </div>
            <div className="btn">
                <button type="submit">Submit</button>
            </div>

        </form>

    </div>

)

}