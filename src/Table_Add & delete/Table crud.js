import React from 'react';
// import './Table.css';
import { useState } from "react";
// import Data from './mock.json';

export default function Tableuser(){

    const[users,setUsers]=useState([ {
        "id": 1,
        "name":"Ervin Howell",
        "empId": 1234,
        "email": "Sincere@april.biz"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "empId": 1234,
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "empId": 1234,
        "email": "Nathan@yesenia.net"
    },])
     
    const AddingRow=(AddUsers)=>{
        setUsers([...users,AddUsers])
    }

    function handleDelete(){
        setUsers(users.slice(0,-1));
    }
        return(
        <div className="table">
            <Addmember AddingRow={AddingRow}/>
            <h1>Checking table</h1>
            <table>
                <tr>
                    <thead>
                        <th>Name</th>
                        <th>Empid</th>
                        <th>Email</th>
                    </thead>
                </tr>
                <tbody>
                    <tr>
                        {users.map((row,index)=>(
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.empId}</td>
                                <td>{row.email}</td>
                                <button onClick={handleDelete}>delete</button>
                            </tr>

                        ))}
                    </tr>
                </tbody>
            </table>
           
        </div>
    )
}

 function Addmember({AddingRow}){
    const [name,setName]=useState("")
    const [empid,setEmpId]=useState("")
    const [email,setEmail]=useState("")

    const handleSubmit=(event)=>{
        event.preventDefault();

        const NewAddRow={name:name,empId:empid,email:email}
        AddingRow(NewAddRow)
       setName("")
       setEmpId("")
       setEmail("")
       
    }
  
    return(
        <div>
            <h1>Adding Users</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" value={empid} onChange={(e)=>setEmpId(e.target.value)}></input>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <button type="submit">Add</button>
            </form>
       
        </div>
        
    )
 }




































